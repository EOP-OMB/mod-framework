import * as i0 from '@angular/core';
import { InjectionToken, Injectable, Inject, EventEmitter, Component, ViewChild, Input, Output, Renderer2, APP_INITIALIZER, NgModule, Optional, SkipSelf } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import * as i1 from '@angular/common/http';
import { HttpResponse, HttpClient, HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import * as parseUri from 'parse-uri';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { filter, tap } from 'rxjs/operators';

const ModConfig = new InjectionToken('modConfig');

class ModFrameworkConfig {
    constructor() {
        this.showHelp = false;
        this.helpOptions = [];
        this.showSearch = false;
        this.userOptions = [];
        this.profileUrl = 'https://portfolio.staging.omb.gov/portfolio';
    }
}

//loading.service.ts
class LoadingService {
    constructor(config) {
        this.isLoading = new BehaviorSubject(false);
        this.loadingDelay = 500;
        this.loadingDelay = config ? config.loadingDelay : 500;
    }
}
LoadingService.ɵprov = i0.ɵɵdefineInjectable({ factory: function LoadingService_Factory() { return new LoadingService(i0.ɵɵinject(ModConfig)); }, token: LoadingService, providedIn: "root" });
LoadingService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
LoadingService.ctorParameters = () => [
    { type: ModFrameworkConfig, decorators: [{ type: Inject, args: [ModConfig,] }] }
];

// loader.interceptors.ts
class LoadingIntercepter {
    constructor(loadingService, config) {
        this.loadingService = loadingService;
        this.requests = [];
        this.urlsToSkip = ['frameworkapi/maxpicker/search'];
        for (let x of config.urlsToSkip)
            this.urlsToSkip.push(x);
    }
    removeRequest(req) {
        const i = this.requests.indexOf(req);
        if (i >= 0) {
            this.requests.splice(i, 1);
        }
        this.loadingService.isLoading.next(this.requests.length > 0);
    }
    intercept(req, next) {
        if (this.skipThisRequest(req)) {
            return next.handle(req);
        }
        else {
            this.requests.push(req);
            setTimeout(() => {
                if (this.requests.length > 0)
                    this.loadingService.isLoading.next(true);
            }, this.loadingService.loadingDelay);
            return Observable.create(observer => {
                const subscription = next.handle(req)
                    .subscribe(event => {
                    if (event instanceof HttpResponse) {
                        this.removeRequest(req);
                        observer.next(event);
                    }
                }, err => {
                    this.removeRequest(req);
                    observer.error(err);
                }, () => {
                    this.removeRequest(req);
                    observer.complete();
                });
                // remove request from queue when cancelled
                return () => {
                    this.removeRequest(req);
                    subscription.unsubscribe();
                };
            });
        }
    }
    skipThisRequest(req) {
        var matched = false;
        for (let url of this.urlsToSkip) {
            matched = req.url.match(url) != null;
            if (matched)
                break;
        }
        return matched;
    }
}
LoadingIntercepter.ɵprov = i0.ɵɵdefineInjectable({ factory: function LoadingIntercepter_Factory() { return new LoadingIntercepter(i0.ɵɵinject(LoadingService), i0.ɵɵinject(ModConfig)); }, token: LoadingIntercepter, providedIn: "root" });
LoadingIntercepter.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
LoadingIntercepter.ctorParameters = () => [
    { type: LoadingService },
    { type: ModFrameworkConfig, decorators: [{ type: Inject, args: [ModConfig,] }] }
];

class CurrentUser {
}

class CurrentUserService {
    constructor(http, config) {
        this.http = http;
        this.serviceUrl = '';
        this.setCookieUrl = '';
        this.checkCookieUrl = '';
        this.noOpUrl = '';
        this.cookieName = 'CookieSettingsCheck';
        this._browserOk = false;
        this.loginSiteUrl = "https://localhost:44374";
        this.loginSiteUrl = config ? config.loginSiteUrl : 'https://localhost:44374';
        this.serviceUrl = this.siteUrl + "api/claims/user";
        this.setCookieUrl = this.siteUrl + "api/health/setcookie";
        this.checkCookieUrl = this.siteUrl + "api/health/checkcookie";
        this.noOpUrl = this.siteUrl + "api/health/noop";
    }
    getDomain(url) {
        var u = parseUri(url);
        return u.host;
    }
    get user() {
        return this._user;
    }
    get browserOk() {
        return this._browserOk;
    }
    get domain() {
        return this.getDomain(this.loginSiteUrl);
    }
    get siteUrl() {
        return this.loginSiteUrl + (this.loginSiteUrl.endsWith("/") ? "" : "/");
    }
    browserCheck() {
        return this.http.get(this.noOpUrl, { withCredentials: false })
            .toPromise()
            .then(() => {
            return this.http.get(this.setCookieUrl)
                .toPromise()
                .then(response => {
                return this.http.get(this.checkCookieUrl)
                    .toPromise().then(response => {
                    this._browserOk = true;
                    return true;
                });
            })
                .catch((error) => {
                this._browserOk = false;
                this._user = null;
                return Promise.reject("Domain " + this.getDomain(this.setCookieUrl) + " probably doesn't allow CORS from domain " + this.domain);
            });
        })
            .catch(error => {
            this._browserOk = false;
            this._user = null;
            return Promise.reject("Can't reach site " + this.loginSiteUrl);
        });
    }
    preFlight() {
        return this.http.options(this.serviceUrl)
            .toPromise()
            .then(response => { return response; })
            .catch(this.handleError);
    }
    redirectLogin() {
        var returnUrl = window.location.href;
        sessionStorage.setItem('authenticating', 'authenticating');
        var url = this.siteUrl + 'api/login' + "?ReturnUrl=" + returnUrl;
        window.open(url, '_self');
    }
    login() {
        this.loginPromise = this.http.get(this.serviceUrl)
            .toPromise()
            .then((response) => {
            var user;
            user = Object.assign(new CurrentUser(), response);
            this._user = user;
            return user;
        })
            .catch(error => {
            return this.handleError(error);
        });
        return this.loginPromise;
    }
    logout() {
        this._user = null;
    }
    handleError(error) {
        return Promise.reject(error.message || error);
    }
    isInRole(role) {
        return this.user.roles.find(x => x == role) !== undefined;
    }
    isInRoles(roles) {
        var returnValue = false;
        roles.forEach(x => {
            returnValue = returnValue || this.isInRole(x);
        });
        return returnValue;
    }
}
CurrentUserService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CurrentUserService_Factory() { return new CurrentUserService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(ModConfig)); }, token: CurrentUserService, providedIn: "root" });
CurrentUserService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
CurrentUserService.ctorParameters = () => [
    { type: HttpClient },
    { type: ModFrameworkConfig, decorators: [{ type: Inject, args: [ModConfig,] }] }
];

class ModLayoutComponent {
    constructor(config) {
        this.userOptionSelect = new EventEmitter();
        this.helpOptionSelect = new EventEmitter();
        this.search = new EventEmitter();
        this.config = config;
    }
    ngOnInit() {
    }
    onMenuClicked() {
        this.sideMenu.toggleSideNav();
    }
    onUserOptionSelect(option) {
        this.userOptionSelect.emit(option);
    }
    onHelpOptionSelect(option) {
        this.helpOptionSelect.emit(option);
    }
    onSearch() {
        this.search.emit(this.searchText);
        this.searchText = '';
    }
}
ModLayoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'mod-layout',
                template: "<mod-loading-overlay></mod-loading-overlay>\r\n<div class=\"mod-layout-container\">\r\n    <div class=\"layout-header\">\r\n        <!--<mod-welcome-banner>\r\n        </mod-welcome-banner>-->\r\n        <mod-header [appName]=\"appName\" (menuClick)=\"onMenuClicked()\" (userOptionSelect)=\"onUserOptionSelect($event)\" (helpOptionSelect)=\"onHelpOptionSelect($event)\">\r\n            <div *ngIf=\"config.showSearch\" style=\"display: flex; justify-content: center;\">\r\n                <input [(ngModel)]=\"searchText\" matInput placeholder=\"Search\" class=\"search-box\" (keyup.enter)=\"onSearch()\">\r\n            </div>\r\n        </mod-header>\r\n    </div>\r\n    <div class=\"layout-content\">\r\n        <mod-side-menu [config]=\"menuConfig\" #sidemenu>\r\n            <ng-content></ng-content>\r\n        </mod-side-menu>\r\n    </div>\r\n</div>\r\n",
                styles: [".mod-layout-container{display:flex;flex-flow:column;height:100%}.layout-header{flex:0}.layout-content{flex:1;overflow:auto}.search-box{background-color:#fff;box-shadow:none;border:none;min-height:32px;width:50%;color:#000;font-size:14px;padding-top:0;padding-right:15px;border-radius:16px;padding-left:15px;margin-left:15px;margin-right:15px}.search-box:focus{outline:none}"]
            },] }
];
ModLayoutComponent.ctorParameters = () => [
    { type: ModFrameworkConfig, decorators: [{ type: Inject, args: [ModConfig,] }] }
];
ModLayoutComponent.propDecorators = {
    sideMenu: [{ type: ViewChild, args: ['sidemenu', { static: true },] }],
    appName: [{ type: Input }],
    menuConfig: [{ type: Input }],
    userOptionSelect: [{ type: Output }],
    helpOptionSelect: [{ type: Output }],
    search: [{ type: Output }]
};

class ModHeaderComponent {
    constructor(config) {
        this.menuClick = new EventEmitter();
        this.userOptionSelect = new EventEmitter();
        this.helpOptionSelect = new EventEmitter();
        this.config = config;
    }
    ngOnInit() {
    }
    onMenuClick() {
        this.menuClick.emit();
    }
    onUserOptionSelect(option) {
        this.userOptionSelect.emit(option);
    }
    optionSelected(option) {
        this.helpOptionSelect.emit(option);
    }
}
ModHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'mod-header',
                template: "<mat-toolbar class=\"mod-header\">\r\n    <button mat-icon-button (click)=\"onMenuClick()\">\r\n        <mat-icon>\r\n            menu\r\n        </mat-icon>\r\n    </button>\r\n\r\n    <a class=\"logo-text-mark\" [routerLink]=\"['/']\">\r\n        <img class=\"mod-logo\" src=\"/assets/US-OfficeOfManagementAndBudget-Seal.png\" tabindex=\"-1\" />\r\n        <div tabindex=\"-1\" alt=\"Textmark\" class=\"text-mark\">{{ appName }}</div>\r\n    </a>\r\n\r\n    <span class=\"fill-remaining-space\">\r\n        <ng-content></ng-content>\r\n    </span>\r\n\r\n    <div class=\"welcome-user\">\r\n        <mod-user-display [showUser]=\"true\" (selectOption)=\"onUserOptionSelect($event)\"></mod-user-display>\r\n        <div *ngIf=\"config.showHelp\">\r\n            <button mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"Help Menu\">\r\n                <mat-icon>help</mat-icon>\r\n            </button>\r\n            <mat-menu #menu=\"matMenu\">\r\n                <button mat-menu-item *ngFor=\"let option of config.helpOptions\" (click)=\"optionSelected(option)\">{{ option }}</button>\r\n            </mat-menu>\r\n        </div>\r\n    </div>\r\n</mat-toolbar>\r\n",
                styles: [".mod-header{justify-content:center;background-color:#112e51;display:flex;color:#fff}a{text-decoration:none}.logo-text-mark{cursor:pointer;display:flex;align-items:center}.text-mark{cursor:pointer;margin-left:12px;font-size:1.4em;display:inline-block;vertical-align:middle;color:#d8b304}.mod-logo{margin-left:4px;height:50px}.fill-remaining-space{flex:1 1 auto;align-items:center;margin-left:15px}.welcome-user{font-size:.85em;padding-top:2px;padding-right:5px;flex:1;display:flex;justify-content:flex-end}.mat-button-base{height:auto;line-height:inherit}"]
            },] }
];
ModHeaderComponent.ctorParameters = () => [
    { type: ModFrameworkConfig, decorators: [{ type: Inject, args: [ModConfig,] }] }
];
ModHeaderComponent.propDecorators = {
    appName: [{ type: Input }],
    menuClick: [{ type: Output }],
    userOptionSelect: [{ type: Output }],
    helpOptionSelect: [{ type: Output }]
};

class ModWelcomeBanner {
    constructor() {
        this.onLogin = new EventEmitter();
        this.onLogout = new EventEmitter();
    }
    ngOnInit() {
    }
}
ModWelcomeBanner.decorators = [
    { type: Component, args: [{
                selector: 'mod-welcome-banner',
                template: "<header class=\"mod-header\" role=\"banner\">\r\n    <div class=\"mod-welcome-banner\">\r\n        <div class=\"welcome-user\">\r\n            <mod-user-display></mod-user-display>\r\n        </div>\r\n    </div>\r\n</header>\r\n",
                styles: [".mod-header{display:flex;flex-direction:column}.mod-welcome-banner{padding-left:10px;padding-right:10px;background-color:#f0f0f0;padding-bottom:0;display:flex;font-family:Source Sans Pro Web,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif}.welcome-user{font-weight:700;font-size:.85em;padding-top:2px;padding-right:5px;flex:1;display:flex;justify-content:flex-end}.loginout-button{vertical-align:middle;width:auto!important;display:inline!important}.loginout-text{align-items:center}"]
            },] }
];
ModWelcomeBanner.ctorParameters = () => [];
ModWelcomeBanner.propDecorators = {
    onLogin: [{ type: Output }],
    onLogout: [{ type: Output }]
};

class ModSideMenuComponent {
    constructor(router, activatedRoute, renderer, userService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.renderer = renderer;
        this.userService = userService;
        this.expanded = true;
        this.opened = true;
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        if (changes['config'] && changes['config'].previousValue != changes['config'].currentValue) {
            this.selectCurrentRoute();
        }
    }
    selectCurrentRoute() {
        var urls = this.router.url.split('/');
        for (let section of this.config.sections) {
            for (let item of section.menuItems) {
                if (urls[urls.length - 1].toString() == item.route) {
                    this.menuOption = item.text;
                    break;
                }
            }
        }
    }
    // Used by menu item keyup.enter handler to provide keyboard navigation
    navigateTo(urlSegment) {
        urlSegment = urlSegment.split('#')[0];
        var url = "";
        if (urlSegment.startsWith('/')) {
            url = urlSegment;
        }
        else {
            url = this.activatedRoute.snapshot.url.join('/') + '/' + urlSegment;
        }
        // nav to the route, and then set focus on the main content div rather than keep focus
        // on the nav menu itself (users will need to Shift+Tab their way back to nav menu)
        this.router.navigateByUrl(url).then(x => {
            if (this.mainContentElement)
                this.mainContentElement.nativeElement.focus();
        });
    }
    expandMenu(expanded = true) {
        this.expanded = expanded;
    }
    toggleSideNav() {
        //this.sidenav.toggle();
        var opening = !this.opened;
        if (opening) {
            this.opened = !this.opened;
            this.sidenav.toggle();
        }
        else {
            this.sidenav.toggle().then(() => {
                this.opened = !this.opened;
            });
        }
    }
    get viewableSections() {
        let sections = [];
        this.config.sections.forEach(section => {
            if (!section.allowedRoles || this.userService.isInRoles(section.allowedRoles))
                sections.push(section);
        });
        return sections;
    }
    getViewableMenuItems(section) {
        let items = [];
        section.menuItems.forEach(item => {
            if (!item.allowedRoles || this.userService.isInRoles(item.allowedRoles))
                items.push(item);
        });
        return items;
    }
}
ModSideMenuComponent.decorators = [
    { type: Component, args: [{
                selector: 'mod-side-menu',
                template: "<mat-sidenav-container class=\"mod-side-menu-container\">\r\n    <mat-sidenav #sidenav mode=\"side\" opened role=\"navigation\" id=\"navigation-menu\" [ngClass]=\"{'mod-side-menu' : true, 'collapsed' : (!expanded && opened)}\">\r\n        <h1 mat-subheader>\r\n            {{ expanded ? config.title : \"\" }}\r\n            <mat-icon *ngIf=\"expanded\" class=\"menu-close\" (click)=\"expandMenu(!this.expanded)\">\r\n                keyboard_arrow_left\r\n            </mat-icon>\r\n            <mat-icon *ngIf=\"!expanded\" class=\"menu-open\" (click)=\"expandMenu(!this.expanded)\">\r\n                keyboard_arrow_right\r\n            </mat-icon>\r\n        </h1>\r\n\r\n        <div *ngFor=\"let section of viewableSections\">\r\n            <h1 mat-subheader>\r\n                {{ expanded ? section.name : \"\" }}\r\n            </h1>\r\n            <mat-nav-list>\r\n                <mat-list-item *ngFor=\"let item of getViewableMenuItems(section)\"\r\n                               [routerLink]=\"item.route\"\r\n                               routerLinkActive=\"active\"\r\n                               [routerLinkActiveOptions]=\"{exact: true}\"\r\n                               (keyup.enter)=\"navigateTo(item.route)\">\r\n                    <mat-icon mat-list-icon [matTooltip]=\"item.text\">{{item.icon}}</mat-icon>\r\n                    {{ expanded ? item.text : \"\"}}\r\n                </mat-list-item>\r\n            </mat-nav-list>\r\n        </div>\r\n    </mat-sidenav>\r\n    <mat-sidenav-content [ngClass]=\"{'mod-side-menu-content' : true, 'collapsed' : (!expanded && opened)}\" role=\"main\" #mainContent tabindex=\"0\">\r\n        <ng-content></ng-content>\r\n    </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n",
                styles: ["#main-content:focus{border:1px solid #5b9acf}.menu-close{position:absolute;right:0;cursor:pointer}.menu-open{text-align:center;width:100%;cursor:pointer}.mod-side-menu{display:flex;align-items:flex-start;justify-content:left;width:250px;transition:width .25s}.mod-side-menu.collapsed{width:76px!important;transition:width .25s}.mod-side-menu-container{display:flex;height:100%}.mod-side-menu-content{transition:margin-left .25s;width:100%;overflow:auto;display:flex;align-items:stretch;outline:none!important}.mod-side-menu-content.collapsed{margin-left:76px!important;transition:margin-left .25s}h2{overflow:hidden;white-space:nowrap;text-overflow:clip}.mat-subheader{font-size:14px;line-height:20px;max-height:56px;color:#888;padding:12px 12px 12px 20px!important;margin-bottom:0!important;margin-top:0!important;border-left:5px solid #bbb;margin-left:-5px}.mat-subheader .mat-icon{padding-left:4px;margin-right:16px}.mat-expansion-panel{box-shadow:none;margin:0}.mat-expansion-indicator{line-height:0!important}mat-expansion-panel-header[aria-disabled=true]{color:#000;color:initial}.mat-expansion-panel-header{height:56px!important;max-height:56px!important;border-left:5px solid #bbb}.mat-expansion-panel-header-title{max-height:24px}.mat-expansion-panel.active>.mat-expansion-panel-header{border-color:#5b9acf}.mat-expansion-panel-header-title>.mat-icon{margin-right:16px}.mat-expansion-panel.mat-expanded{background-color:#eee}::ng-deep .mat-expansion-panel-body{padding:0!important}::ng-deep .mat-drawer-container{display:flex;align-items:stretch}.mat-list-icon{padding-right:16px!important;font-size:22px!important}.mat-list-item{font-size:15px!important;border-left:5px solid #bbb;margin-left:-5px;height:56px!important;max-height:56px!important;line-height:22.5px!important;width:auto!important}.mat-list-item:focus{border:1px solid #5b9acf}.mat-list-item-content{padding:0 24px!important}.mat-list-item.active{border-color:#5b9acf;background-color:#d1d1d1}.mat-list-base{padding-top:0}"]
            },] }
];
ModSideMenuComponent.ctorParameters = () => [
    { type: Router },
    { type: ActivatedRoute },
    { type: Renderer2 },
    { type: CurrentUserService }
];
ModSideMenuComponent.propDecorators = {
    config: [{ type: Input }],
    mainContentElement: [{ type: ViewChild, args: ['mainContent', { static: true },] }],
    sidenav: [{ type: ViewChild, args: ['sidenav', { static: true },] }]
};

class ModProgressSpinnerComponent {
    constructor() {
        this.value = 100;
        this.diameter = 100;
        this.mode = "indeterminate";
        this.strokeWidth = 10;
        this.overlay = false;
        this.color = "primary";
    }
    ngOnInit() {
    }
}
ModProgressSpinnerComponent.decorators = [
    { type: Component, args: [{
                selector: 'mod-progress-spinner',
                template: "<ng-container *ngIf=\"overlay;else progressSpinner\">\r\n    <div class=\"overlay\">\r\n        <div class=\"center\">\r\n            <ng-template [ngTemplateOutlet]=\"progressSpinner\"></ng-template>\r\n        </div>\r\n    </div>\r\n</ng-container>\r\n<ng-template #progressSpinner>\r\n    <mat-progress-spinner [diameter]=\"diameter\"\r\n                          [mode]=\"mode\"\r\n                          [color]=\"color\"\r\n                          [strokeWidth]=\"strokeWidth\"\r\n                          [value]=\"value\">\r\n    </mat-progress-spinner>\r\n</ng-template>\r\n",
                styles: [".center{position:absolute;top:50%;left:50%;transform:translateX(-50%) translateY(-50%)}.overlay{height:100vh;width:100%;background-color:rgba(0,0,0,.286);z-index:10;top:0;left:0;position:fixed}"]
            },] }
];
ModProgressSpinnerComponent.ctorParameters = () => [];
ModProgressSpinnerComponent.propDecorators = {
    value: [{ type: Input }],
    diameter: [{ type: Input }],
    mode: [{ type: Input }],
    strokeWidth: [{ type: Input }],
    overlay: [{ type: Input }],
    color: [{ type: Input }]
};

class ModLoadingOverlayComponent {
    constructor(loadingService) {
        this.loadingService = loadingService;
        this.showProgressSpinner = false;
        this.loadingService.isLoading.subscribe((isLoading) => {
            if (isLoading) {
                this.showProgressSpinner = true;
            }
            else {
                this.showProgressSpinner = false;
            }
        });
    }
    ngOnInit() {
    }
}
ModLoadingOverlayComponent.decorators = [
    { type: Component, args: [{
                selector: 'mod-loading-overlay',
                template: "<mod-progress-spinner *ngIf=\"showProgressSpinner\" [overlay]=\"true\"></mod-progress-spinner>\r\n",
                styles: [""]
            },] }
];
ModLoadingOverlayComponent.ctorParameters = () => [
    { type: LoadingService }
];

class ModUserDisplayComponent {
    constructor(userService, config) {
        this.userService = userService;
        this.showUser = false;
        this.selectOption = new EventEmitter();
        this.config = config;
        this.config.userOptions.push('User Profile');
    }
    ngOnInit() {
    }
    get user() {
        return this.userService.user;
    }
    optionSelected(option) {
        if (option == "User Profile") {
            window.open(this.config.profileUrl, '_blank');
        }
        else {
            this.selectOption.emit(option);
        }
    }
}
ModUserDisplayComponent.decorators = [
    { type: Component, args: [{
                selector: 'mod-user-display',
                template: "<div *ngIf=\"user\">\r\n    Welcome \r\n    <span style=\"padding-right: 5px;\">{{ user.displayName }}</span>\r\n    <ng-container *ngIf=\"showUser;else showMenu\">\r\n        <button mat-icon-button [matMenuTriggerFor]=\"menu\" class=\"mod-user-icon\" aria-label=\"User Menu\">\r\n            <mat-icon>account_circle</mat-icon>\r\n        </button>\r\n    </ng-container>\r\n    <ng-template #showMenu>\r\n        <button mat-icon-button [matMenuTriggerFor]=\"menu\" class=\"mat-icon-button\" aria-label=\"User Menu\">\r\n            <mat-icon>keyboard_arrow_down</mat-icon>\r\n        </button>\r\n    </ng-template>\r\n    <mat-menu #menu=\"matMenu\">\r\n        <button mat-menu-item *ngFor=\"let option of config.userOptions\" (click)=\"optionSelected(option)\">{{ option }}</button>\r\n    </mat-menu>\r\n</div>\r\n",
                styles: [".delete-potentially-circle-user-icon{border:2px solid!important;border-color:inherit!important;border-radius:50%!important;padding:5px!important;margin-left:15px!important}.mat-button-base{height:auto;line-height:inherit}"]
            },] }
];
ModUserDisplayComponent.ctorParameters = () => [
    { type: CurrentUserService },
    { type: ModFrameworkConfig, decorators: [{ type: Inject, args: [ModConfig,] }] }
];
ModUserDisplayComponent.propDecorators = {
    showUser: [{ type: Input }],
    selectOption: [{ type: Output }]
};

class BrowserCheckComponent {
    constructor(currentUserService) {
        this.currentUserService = currentUserService;
    }
    ngOnInit() {
        this.currentUserService.browserCheck().then(response => {
            this.browserFail = '';
            return;
        }).catch(error => {
            $("#loginout").css("display", "none");
            this.browserFail = error;
            this.loginSite = this.currentUserService.siteUrl;
            this.loginDomain = this.currentUserService.domain;
            this.myDomain = this.currentUserService.getDomain(window.location.href);
        });
    }
}
BrowserCheckComponent.decorators = [
    { type: Component, args: [{
                selector: 'mod-browser-check',
                template: "<div *ngIf=\"browserFail\" class=\"container-fluid browser-check-container\">\r\n    <span class=\"fa fa-warning browser-check-icon\"></span><span class=\"browser-check-header-text\">&nbsp;&nbsp;You can't log in to this site.</span>\r\n    <div class=\"browser-check-text\">\r\n        Possible reasons for this include:\r\n        <ul>\r\n            <li>\r\n                You can't reach the site {{loginSite}}.\r\n                <ul>\r\n                    <li>Please check your network connection.</li>\r\n                </ul>\r\n            </li>\r\n            <li>\r\n                Site {{loginSite}} does not allow cross-origin scripting (CORS) from your domain {{myDomain}}.\r\n                <ul>\r\n                    <li>Please contact the administrator of {{loginSite}} and request access for your site.</li>\r\n                </ul>\r\n            </li>\r\n            <li>\r\n                Your browser doesn't accept third-party cookies from domain {{loginDomain}}.\r\n                <ul>\r\n                    <li>In your browser settings, either allow all third-party cookies, or </li>\r\n                    <li>Disallow third-party cookies, but add {{loginDomain}} as an exception.</li>\r\n                </ul>\r\n            </li>\r\n        </ul>\r\n        <i>The actual error returned is \"{{browserFail}}\".<br /></i>\r\n        Please correct these problems and try again.\r\n    </div>\r\n</div>\r\n",
                styles: [".browser-check-container{border:4px solid red;padding-top:5px;padding-bottom:5px;padding-left:10px}.browser-check-icon{font-size:36px;color:red;vertical-align:middle}.browser-check-text{font-size:16px;vertical-align:middle;padding-left:30px;padding-top:10px}.browser-check-header-text{font-size:24px;font-weight:700;vertical-align:middle}"]
            },] }
];
BrowserCheckComponent.ctorParameters = () => [
    { type: CurrentUserService }
];

// Add credentials to every request.
// Credit to https://weblog.west-wind.com/posts/2019/Apr/07/Creating-a-custom-HttpInterceptor-to-handle-withCredentials
class HttpRequestInterceptor {
    constructor(userService) {
        this.userService = userService;
    }
    intercept(req, next) {
        req = req.clone({
            withCredentials: true
        });
        return next.handle(req).pipe(filter(event => event instanceof HttpResponse), tap((event) => {
            // Don't force login when making a call to claims/user
            if (!this.userService.user && !event.url.endsWith("claims/user"))
                this.userService.login();
        }, (err) => {
            if (err.status == 0)
                this.userService.redirectLogin();
        }));
    }
}
HttpRequestInterceptor.decorators = [
    { type: Injectable }
];
HttpRequestInterceptor.ctorParameters = () => [
    { type: CurrentUserService }
];

class RoleGuardService {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    canActivate(route) {
        // this will be passed from the route config
        // on the data property
        const expectedRoles = route.data.expectedRoles;
        if (!this.userService.user || !this.userService.isInRoles(expectedRoles)) {
            this.router.navigate(['/']);
            return false;
        }
        return true;
    }
}
RoleGuardService.decorators = [
    { type: Injectable }
];
RoleGuardService.ctorParameters = () => [
    { type: CurrentUserService },
    { type: Router }
];

function initiateSingleSignOn(userService) {
    return () => {
        var _a;
        var auth = (_a = sessionStorage.getItem("authenticating")) === null || _a === void 0 ? void 0 : _a.toString();
        if (auth) {
            return userService.login().then(response => {
                sessionStorage.removeItem("authenticating");
            });
        }
        else {
            userService.redirectLogin();
            let promise = new Promise((resolve, reject) => {
                reject("Authenticating");
            });
            return promise;
        }
    };
}
class ModFrameworkModule {
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('ModFrameworkModule is already loaded. Import it in the AppModule only');
        }
    }
    static forRoot(config = null) {
        return {
            ngModule: ModFrameworkModule,
            providers: [
                {
                    provide: ModConfig,
                    useValue: config
                },
                CurrentUserService,
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: LoadingIntercepter,
                    multi: true
                },
                LoadingService,
                // see https://weblog.west-wind.com/posts/2019/Apr/07/Creating-a-custom-HttpInterceptor-to-handle-withCredentials
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: HttpRequestInterceptor,
                    multi: true
                },
                {
                    provide: APP_INITIALIZER,
                    useFactory: initiateSingleSignOn,
                    multi: true,
                    deps: [CurrentUserService]
                },
                RoleGuardService,
            ]
        };
    }
}
ModFrameworkModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    ModWelcomeBanner,
                    ModSideMenuComponent,
                    ModLayoutComponent,
                    ModHeaderComponent,
                    ModProgressSpinnerComponent,
                    ModLoadingOverlayComponent,
                    ModUserDisplayComponent,
                    BrowserCheckComponent,
                ],
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    HttpClientModule,
                    RouterModule,
                    MatIconModule, MatDividerModule, MatListModule, MatSidenavModule, MatToolbarModule, MatMenuModule, MatButtonModule, MatProgressSpinnerModule, MatAutocompleteModule, MatTooltipModule, MatFormFieldModule, MatInputModule, MatSelectModule,
                ],
                providers: [],
                exports: [
                    ModHeaderComponent,
                    ModLayoutComponent,
                    ModLoadingOverlayComponent,
                    ModProgressSpinnerComponent,
                    ModSideMenuComponent,
                    ModUserDisplayComponent,
                    ModWelcomeBanner,
                    BrowserCheckComponent,
                ]
            },] }
];
ModFrameworkModule.ctorParameters = () => [
    { type: ModFrameworkModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
];

class DtoBase {
    constructor() {
        this.id = 0;
    }
}

class ModSideMenuConfig {
    constructor() {
        this.sections = [];
    }
}
class ModMenuSection {
    constructor() {
        this.name = "";
        this.shortName = "";
        this.visible = true;
        this.allowedRoles = [];
        this.menuItems = [];
    }
}
class ModMenuItem {
    constructor() {
        this.allowedRoles = [];
    }
}

class UserInfo {
    constructor(uniqueName, upn) {
        this.uniqueName = uniqueName;
        this.upn = upn;
        console.log(uniqueName + '[]asdf');
        console.log(uniqueName == 'LOGIN\\kuennen_s');
        this.displayName = (uniqueName == "LOGIN\\kuennen_s") ? "Kuennen, Steve (Contractor)" : uniqueName;
        this.userProfileUrl = "";
    }
}

class Logging {
    static log(val) {
        if (this.logToConsole)
            console.log(val);
    }
}
Logging.logToConsole = true;

class ModPromiseServiceBase {
    constructor(http, url, endpoint, TCreator) {
        this.http = http;
        this.url = url;
        this.endpoint = endpoint;
        this.TCreator = TCreator;
        this.url = (url.endsWith('/') ? url.slice(0, -1) : url) + '/api';
    }
    save(item) {
        if (item.id <= 0)
            return this.create(item);
        else
            return this.update(item);
    }
    getAll(params) {
        var url = `${this.url}/${this.endpoint}`;
        return this.http
            .get(url, { params })
            .toPromise()
            .then(response => {
            var data = [];
            response.forEach(x => {
                var obj = this.formatResponse(x);
                data.push(obj);
            });
            return data;
        })
            .catch(this.handleError);
    }
    create(item) {
        var url = `${this.url}/${this.endpoint}`;
        return this.http.post(url, item)
            .toPromise()
            .then(response => {
            var obj = this.formatResponse(response);
            return obj;
        })
            .catch(this.handleError);
    }
    get(id) {
        var url = `${this.url}/${this.endpoint}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => {
            var obj = this.formatResponse(response);
            return obj;
        })
            .catch(this.handleError);
    }
    update(item) {
        var url = `${this.url}/${this.endpoint}/${item.id}`;
        return this.http.put(url, item)
            .toPromise()
            .then(response => {
            var obj = this.formatResponse(response);
            return obj;
        })
            .catch(this.handleError);
    }
    delete(id) {
        return this.http.delete(`${this.url}/${this.endpoint}/${id}`).toPromise();
    }
    // Override to fully instantiate child objects.  Be sure to call super.formatResponse first to instantiate the parent object.
    formatResponse(data) {
        return Object.assign(new this.TCreator(), data);
    }
    handleError(error) {
        Logging.log(error);
        return Promise.reject(error.message || error);
    }
}

/*
 * Public API Surface of mod-framework
 */

/**
 * Generated bundle index. Do not edit.
 */

export { BrowserCheckComponent, CurrentUserService, DtoBase, LoadingIntercepter, LoadingService, ModFrameworkConfig, ModFrameworkModule, ModHeaderComponent, ModLayoutComponent, ModLoadingOverlayComponent, ModMenuItem, ModMenuSection, ModProgressSpinnerComponent, ModPromiseServiceBase, ModSideMenuComponent, ModSideMenuConfig, ModUserDisplayComponent, ModWelcomeBanner, RoleGuardService, UserInfo, initiateSingleSignOn, ModConfig as ɵa, HttpRequestInterceptor as ɵb };
//# sourceMappingURL=mod-framework.js.map
