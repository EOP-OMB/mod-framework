import * as i0 from '@angular/core';
import { InjectionToken, Injectable, Inject, Component, Input, EventEmitter, Output, ViewChild, APP_INITIALIZER, NgModule, Optional, SkipSelf } from '@angular/core';
import * as i1$2 from '@angular/router';
import { RouterModule } from '@angular/router';
import * as i1 from '@angular/common/http';
import { HttpResponse, HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import * as i1$1 from '@angular/material/toolbar';
import { MatToolbarModule } from '@angular/material/toolbar';
import * as parseUri from 'parse-uri';
import * as i4 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i3 from '@angular/material/menu';
import { MatMenuModule } from '@angular/material/menu';
import * as i4$1 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import * as i5 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import * as i2 from '@angular/material/progress-spinner';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import * as i3$1 from '@angular/material/sidenav';
import { MatSidenavModule } from '@angular/material/sidenav';
import * as i5$1 from '@angular/material/list';
import { MatListModule } from '@angular/material/list';
import * as i7 from '@angular/material/tooltip';
import { MatTooltipModule } from '@angular/material/tooltip';
import * as i5$2 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import * as i6 from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
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
LoadingService.??fac = function LoadingService_Factory(t) { return new (t || LoadingService)(i0.????inject(ModConfig)); };
LoadingService.??prov = /*@__PURE__*/ i0.????defineInjectable({ token: LoadingService, factory: LoadingService.??fac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.??setClassMetadata(LoadingService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ModFrameworkConfig, decorators: [{
                type: Inject,
                args: [ModConfig]
            }] }]; }, null); })();

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
LoadingIntercepter.??fac = function LoadingIntercepter_Factory(t) { return new (t || LoadingIntercepter)(i0.????inject(LoadingService), i0.????inject(ModConfig)); };
LoadingIntercepter.??prov = /*@__PURE__*/ i0.????defineInjectable({ token: LoadingIntercepter, factory: LoadingIntercepter.??fac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.??setClassMetadata(LoadingIntercepter, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: LoadingService }, { type: ModFrameworkConfig, decorators: [{
                type: Inject,
                args: [ModConfig]
            }] }]; }, null); })();

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
CurrentUserService.??fac = function CurrentUserService_Factory(t) { return new (t || CurrentUserService)(i0.????inject(i1.HttpClient), i0.????inject(ModConfig)); };
CurrentUserService.??prov = /*@__PURE__*/ i0.????defineInjectable({ token: CurrentUserService, factory: CurrentUserService.??fac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.??setClassMetadata(CurrentUserService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.HttpClient }, { type: ModFrameworkConfig, decorators: [{
                type: Inject,
                args: [ModConfig]
            }] }]; }, null); })();

function ModProgressSpinnerComponent_ng_container_0_ng_template_3_Template(rf, ctx) { }
function ModProgressSpinnerComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.????elementContainerStart(0);
    i0.????elementStart(1, "div", 2);
    i0.????elementStart(2, "div", 3);
    i0.????template(3, ModProgressSpinnerComponent_ng_container_0_ng_template_3_Template, 0, 0, "ng-template", 4);
    i0.????elementEnd();
    i0.????elementEnd();
    i0.????elementContainerEnd();
} if (rf & 2) {
    i0.????nextContext();
    const _r1 = i0.????reference(2);
    i0.????advance(3);
    i0.????property("ngTemplateOutlet", _r1);
} }
function ModProgressSpinnerComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.????element(0, "mat-progress-spinner", 5);
} if (rf & 2) {
    const ctx_r2 = i0.????nextContext();
    i0.????property("diameter", ctx_r2.diameter)("mode", ctx_r2.mode)("color", ctx_r2.color)("strokeWidth", ctx_r2.strokeWidth)("value", ctx_r2.value);
} }
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
ModProgressSpinnerComponent.??fac = function ModProgressSpinnerComponent_Factory(t) { return new (t || ModProgressSpinnerComponent)(); };
ModProgressSpinnerComponent.??cmp = /*@__PURE__*/ i0.????defineComponent({ type: ModProgressSpinnerComponent, selectors: [["mod-progress-spinner"]], inputs: { value: "value", diameter: "diameter", mode: "mode", strokeWidth: "strokeWidth", overlay: "overlay", color: "color" }, decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["progressSpinner", ""], [1, "overlay"], [1, "center"], [3, "ngTemplateOutlet"], [3, "diameter", "mode", "color", "strokeWidth", "value"]], template: function ModProgressSpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.????template(0, ModProgressSpinnerComponent_ng_container_0_Template, 4, 1, "ng-container", 0);
        i0.????template(1, ModProgressSpinnerComponent_ng_template_1_Template, 1, 5, "ng-template", null, 1, i0.????templateRefExtractor);
    } if (rf & 2) {
        const _r1 = i0.????reference(2);
        i0.????property("ngIf", ctx.overlay)("ngIfElse", _r1);
    } }, directives: [i4.NgIf, i4.NgTemplateOutlet, i2.MatProgressSpinner], styles: [".center[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translateX(-50%) translateY(-50%)}.overlay[_ngcontent-%COMP%]{height:100vh;width:100%;background-color:rgba(0,0,0,.286);z-index:10;top:0;left:0;position:fixed}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.??setClassMetadata(ModProgressSpinnerComponent, [{
        type: Component,
        args: [{
                selector: 'mod-progress-spinner',
                templateUrl: './mod-progress-spinner.component.html',
                styleUrls: ['./mod-progress-spinner.component.scss']
            }]
    }], function () { return []; }, { value: [{
            type: Input
        }], diameter: [{
            type: Input
        }], mode: [{
            type: Input
        }], strokeWidth: [{
            type: Input
        }], overlay: [{
            type: Input
        }], color: [{
            type: Input
        }] }); })();

function ModLoadingOverlayComponent_mod_progress_spinner_0_Template(rf, ctx) { if (rf & 1) {
    i0.????element(0, "mod-progress-spinner", 1);
} if (rf & 2) {
    i0.????property("overlay", true);
} }
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
ModLoadingOverlayComponent.??fac = function ModLoadingOverlayComponent_Factory(t) { return new (t || ModLoadingOverlayComponent)(i0.????directiveInject(LoadingService)); };
ModLoadingOverlayComponent.??cmp = /*@__PURE__*/ i0.????defineComponent({ type: ModLoadingOverlayComponent, selectors: [["mod-loading-overlay"]], decls: 1, vars: 1, consts: [[3, "overlay", 4, "ngIf"], [3, "overlay"]], template: function ModLoadingOverlayComponent_Template(rf, ctx) { if (rf & 1) {
        i0.????template(0, ModLoadingOverlayComponent_mod_progress_spinner_0_Template, 1, 1, "mod-progress-spinner", 0);
    } if (rf & 2) {
        i0.????property("ngIf", ctx.showProgressSpinner);
    } }, directives: [i4.NgIf, ModProgressSpinnerComponent], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.??setClassMetadata(ModLoadingOverlayComponent, [{
        type: Component,
        args: [{
                selector: 'mod-loading-overlay',
                templateUrl: './mod-loading-overlay.component.html',
                styleUrls: ['./mod-loading-overlay.component.scss']
            }]
    }], function () { return [{ type: LoadingService }]; }, null); })();

function ModUserDisplayComponent_div_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.????elementContainerStart(0);
    i0.????elementStart(1, "button", 6);
    i0.????elementStart(2, "mat-icon");
    i0.????text(3, "account_circle");
    i0.????elementEnd();
    i0.????elementEnd();
    i0.????elementContainerEnd();
} if (rf & 2) {
    i0.????nextContext();
    const _r4 = i0.????reference(7);
    i0.????advance(1);
    i0.????property("matMenuTriggerFor", _r4);
} }
function ModUserDisplayComponent_div_0_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.????elementStart(0, "button", 7);
    i0.????elementStart(1, "mat-icon");
    i0.????text(2, "keyboard_arrow_down");
    i0.????elementEnd();
    i0.????elementEnd();
} if (rf & 2) {
    i0.????nextContext();
    const _r4 = i0.????reference(7);
    i0.????property("matMenuTriggerFor", _r4);
} }
function ModUserDisplayComponent_div_0_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.????getCurrentView();
    i0.????elementStart(0, "button", 8);
    i0.????listener("click", function ModUserDisplayComponent_div_0_button_8_Template_button_click_0_listener() { const restoredCtx = i0.????restoreView(_r8); const option_r6 = restoredCtx.$implicit; const ctx_r7 = i0.????nextContext(2); return ctx_r7.optionSelected(option_r6); });
    i0.????text(1);
    i0.????elementEnd();
} if (rf & 2) {
    const option_r6 = ctx.$implicit;
    i0.????advance(1);
    i0.????textInterpolate(option_r6);
} }
function ModUserDisplayComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.????elementStart(0, "div");
    i0.????elementStart(1, "span", 1);
    i0.????text(2);
    i0.????elementEnd();
    i0.????template(3, ModUserDisplayComponent_div_0_ng_container_3_Template, 4, 1, "ng-container", 2);
    i0.????template(4, ModUserDisplayComponent_div_0_ng_template_4_Template, 3, 1, "ng-template", null, 3, i0.????templateRefExtractor);
    i0.????elementStart(6, "mat-menu", null, 4);
    i0.????template(8, ModUserDisplayComponent_div_0_button_8_Template, 2, 1, "button", 5);
    i0.????elementEnd();
    i0.????elementEnd();
} if (rf & 2) {
    const _r2 = i0.????reference(5);
    const ctx_r0 = i0.????nextContext();
    i0.????advance(2);
    i0.????textInterpolate(ctx_r0.user.displayName);
    i0.????advance(1);
    i0.????property("ngIf", ctx_r0.showUser)("ngIfElse", _r2);
    i0.????advance(5);
    i0.????property("ngForOf", ctx_r0.config.userOptions);
} }
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
ModUserDisplayComponent.??fac = function ModUserDisplayComponent_Factory(t) { return new (t || ModUserDisplayComponent)(i0.????directiveInject(CurrentUserService), i0.????directiveInject(ModConfig)); };
ModUserDisplayComponent.??cmp = /*@__PURE__*/ i0.????defineComponent({ type: ModUserDisplayComponent, selectors: [["mod-user-display"]], inputs: { showUser: "showUser" }, outputs: { selectOption: "selectOption" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [2, "padding-right", "5px"], [4, "ngIf", "ngIfElse"], ["showMenu", ""], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["mat-icon-button", "", "aria-label", "User Menu", 1, "mod-user-icon", 3, "matMenuTriggerFor"], ["mat-icon-button", "", "aria-label", "User Menu", 1, "mat-icon-button", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"]], template: function ModUserDisplayComponent_Template(rf, ctx) { if (rf & 1) {
        i0.????template(0, ModUserDisplayComponent_div_0_Template, 9, 4, "div", 0);
    } if (rf & 2) {
        i0.????property("ngIf", ctx.user);
    } }, directives: [i4.NgIf, i3.MatMenu, i4.NgForOf, i4$1.MatButton, i3.MatMenuTrigger, i5.MatIcon, i3.MatMenuItem], styles: [".delete-potentially-circle-user-icon[_ngcontent-%COMP%]{border:2px solid!important;border-color:inherit!important;border-radius:50%!important;padding:5px!important;margin-left:15px!important}.mat-button-base[_ngcontent-%COMP%]{height:auto;line-height:inherit}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.??setClassMetadata(ModUserDisplayComponent, [{
        type: Component,
        args: [{
                selector: 'mod-user-display',
                templateUrl: './mod-user-display.component.html',
                styleUrls: ['./mod-user-display.component.scss']
            }]
    }], function () { return [{ type: CurrentUserService }, { type: ModFrameworkConfig, decorators: [{
                type: Inject,
                args: [ModConfig]
            }] }]; }, { showUser: [{
            type: Input
        }], selectOption: [{
            type: Output
        }] }); })();

function ModHeaderComponent_div_9_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.????getCurrentView();
    i0.????elementStart(0, "button", 11);
    i0.????listener("click", function ModHeaderComponent_div_9_button_6_Template_button_click_0_listener() { const restoredCtx = i0.????restoreView(_r5); const option_r3 = restoredCtx.$implicit; const ctx_r4 = i0.????nextContext(2); return ctx_r4.optionSelected(option_r3); });
    i0.????text(1);
    i0.????elementEnd();
} if (rf & 2) {
    const option_r3 = ctx.$implicit;
    i0.????advance(1);
    i0.????textInterpolate(option_r3);
} }
function ModHeaderComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.????elementStart(0, "div");
    i0.????elementStart(1, "button", 8);
    i0.????elementStart(2, "mat-icon");
    i0.????text(3, "help");
    i0.????elementEnd();
    i0.????elementEnd();
    i0.????elementStart(4, "mat-menu", null, 9);
    i0.????template(6, ModHeaderComponent_div_9_button_6_Template, 2, 1, "button", 10);
    i0.????elementEnd();
    i0.????elementEnd();
} if (rf & 2) {
    const _r1 = i0.????reference(5);
    const ctx_r0 = i0.????nextContext();
    i0.????advance(1);
    i0.????property("matMenuTriggerFor", _r1);
    i0.????advance(5);
    i0.????property("ngForOf", ctx_r0.config.helpOptions);
} }
const _c0$2 = function () { return ["/"]; };
const _c1$2 = ["*"];
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
ModHeaderComponent.??fac = function ModHeaderComponent_Factory(t) { return new (t || ModHeaderComponent)(i0.????directiveInject(ModConfig)); };
ModHeaderComponent.??cmp = /*@__PURE__*/ i0.????defineComponent({ type: ModHeaderComponent, selectors: [["mod-header"]], inputs: { appName: "appName" }, outputs: { menuClick: "menuClick", userOptionSelect: "userOptionSelect", helpOptionSelect: "helpOptionSelect" }, ngContentSelectors: _c1$2, decls: 10, vars: 5, consts: [[1, "mod-header"], [1, "logo-text-mark", 3, "routerLink"], ["src", "/assets/US-OfficeOfManagementAndBudget-Seal.png", "tabindex", "-1", 1, "mod-logo"], ["tabindex", "-1", "alt", "Textmark", 1, "text-mark"], [1, "fill-remaining-space"], [1, "welcome-user"], [3, "showUser", "selectOption"], [4, "ngIf"], ["mat-icon-button", "", "aria-label", "Help Menu", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["mat-menu-item", "", 3, "click"]], template: function ModHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        i0.????projectionDef();
        i0.????elementStart(0, "mat-toolbar", 0);
        i0.????elementStart(1, "a", 1);
        i0.????element(2, "img", 2);
        i0.????elementStart(3, "div", 3);
        i0.????text(4);
        i0.????elementEnd();
        i0.????elementEnd();
        i0.????elementStart(5, "span", 4);
        i0.????projection(6);
        i0.????elementEnd();
        i0.????elementStart(7, "div", 5);
        i0.????elementStart(8, "mod-user-display", 6);
        i0.????listener("selectOption", function ModHeaderComponent_Template_mod_user_display_selectOption_8_listener($event) { return ctx.onUserOptionSelect($event); });
        i0.????elementEnd();
        i0.????template(9, ModHeaderComponent_div_9_Template, 7, 2, "div", 7);
        i0.????elementEnd();
        i0.????elementEnd();
    } if (rf & 2) {
        i0.????advance(1);
        i0.????property("routerLink", i0.????pureFunction0(4, _c0$2));
        i0.????advance(3);
        i0.????textInterpolate(ctx.appName);
        i0.????advance(4);
        i0.????property("showUser", true);
        i0.????advance(1);
        i0.????property("ngIf", ctx.config.showHelp);
    } }, directives: [i1$1.MatToolbar, i1$2.RouterLinkWithHref, ModUserDisplayComponent, i4.NgIf, i4$1.MatButton, i3.MatMenuTrigger, i5.MatIcon, i3.MatMenu, i4.NgForOf, i3.MatMenuItem], styles: [".mod-header[_ngcontent-%COMP%]{justify-content:center;background-color:#112e51;display:flex;color:#fff}a[_ngcontent-%COMP%]{text-decoration:none}.logo-text-mark[_ngcontent-%COMP%]{cursor:pointer;display:flex;align-items:center}.text-mark[_ngcontent-%COMP%]{cursor:pointer;margin-left:12px;font-size:1.4em;display:inline-block;vertical-align:middle;color:#d8b304}.mod-logo[_ngcontent-%COMP%]{margin-left:4px;height:50px}.fill-remaining-space[_ngcontent-%COMP%]{flex:1 1 auto;align-items:center;margin-left:15px}.welcome-user[_ngcontent-%COMP%]{font-size:.85em;padding-top:2px;padding-right:5px;flex:1;display:flex;justify-content:flex-end}.mat-button-base[_ngcontent-%COMP%]{height:auto;line-height:inherit}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.??setClassMetadata(ModHeaderComponent, [{
        type: Component,
        args: [{
                selector: 'mod-header',
                templateUrl: './mod-header.component.html',
                styleUrls: ['./mod-header.component.scss']
            }]
    }], function () { return [{ type: ModFrameworkConfig, decorators: [{
                type: Inject,
                args: [ModConfig]
            }] }]; }, { appName: [{
            type: Input
        }], menuClick: [{
            type: Output
        }], userOptionSelect: [{
            type: Output
        }], helpOptionSelect: [{
            type: Output
        }] }); })();

const _c0$1 = ["mainContent"];
const _c1$1 = ["sidenav"];
function ModSideMenuComponent_mat_icon_5_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.????getCurrentView();
    i0.????elementStart(0, "mat-icon", 9);
    i0.????listener("click", function ModSideMenuComponent_mat_icon_5_Template_mat_icon_click_0_listener() { i0.????restoreView(_r6); const ctx_r5 = i0.????nextContext(); return ctx_r5.expandMenu(!ctx_r5.expanded); });
    i0.????text(1, " keyboard_arrow_left ");
    i0.????elementEnd();
} }
function ModSideMenuComponent_mat_icon_6_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.????getCurrentView();
    i0.????elementStart(0, "mat-icon", 10);
    i0.????listener("click", function ModSideMenuComponent_mat_icon_6_Template_mat_icon_click_0_listener() { i0.????restoreView(_r8); const ctx_r7 = i0.????nextContext(); return ctx_r7.expandMenu(!ctx_r7.expanded); });
    i0.????text(1, " keyboard_arrow_right ");
    i0.????elementEnd();
} }
const _c2 = function () { return { exact: true }; };
function ModSideMenuComponent_div_7_mat_list_item_4_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.????getCurrentView();
    i0.????elementStart(0, "mat-list-item", 12);
    i0.????listener("keyup.enter", function ModSideMenuComponent_div_7_mat_list_item_4_Template_mat_list_item_keyup_enter_0_listener() { const restoredCtx = i0.????restoreView(_r13); const item_r11 = restoredCtx.$implicit; const ctx_r12 = i0.????nextContext(2); return ctx_r12.navigateTo(item_r11.route); });
    i0.????elementStart(1, "mat-icon", 13);
    i0.????text(2);
    i0.????elementEnd();
    i0.????text(3);
    i0.????elementEnd();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const ctx_r10 = i0.????nextContext(2);
    i0.????property("routerLink", item_r11.route)("routerLinkActiveOptions", i0.????pureFunction0(5, _c2));
    i0.????advance(1);
    i0.????property("matTooltip", item_r11.text);
    i0.????advance(1);
    i0.????textInterpolate(item_r11.icon);
    i0.????advance(1);
    i0.????textInterpolate1(" ", ctx_r10.expanded ? item_r11.text : "", " ");
} }
function ModSideMenuComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.????elementStart(0, "div");
    i0.????elementStart(1, "h1", 3);
    i0.????text(2);
    i0.????elementEnd();
    i0.????elementStart(3, "mat-nav-list");
    i0.????template(4, ModSideMenuComponent_div_7_mat_list_item_4_Template, 4, 6, "mat-list-item", 11);
    i0.????elementEnd();
    i0.????elementEnd();
} if (rf & 2) {
    const section_r9 = ctx.$implicit;
    const ctx_r3 = i0.????nextContext();
    i0.????advance(2);
    i0.????textInterpolate1(" ", ctx_r3.expanded ? section_r9.name : "", " ");
    i0.????advance(2);
    i0.????property("ngForOf", ctx_r3.getViewableMenuItems(section_r9));
} }
const _c3 = function (a1) { return { "mod-side-menu": true, "collapsed": a1 }; };
const _c4 = function (a1) { return { "mod-side-menu-content": true, "collapsed": a1 }; };
const _c5 = ["*"];
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
ModSideMenuComponent.??fac = function ModSideMenuComponent_Factory(t) { return new (t || ModSideMenuComponent)(i0.????directiveInject(i1$2.Router), i0.????directiveInject(i1$2.ActivatedRoute), i0.????directiveInject(i0.Renderer2), i0.????directiveInject(CurrentUserService)); };
ModSideMenuComponent.??cmp = /*@__PURE__*/ i0.????defineComponent({ type: ModSideMenuComponent, selectors: [["mod-side-menu"]], viewQuery: function ModSideMenuComponent_Query(rf, ctx) { if (rf & 1) {
        i0.????viewQuery(_c0$1, 7);
        i0.????viewQuery(_c1$1, 7);
    } if (rf & 2) {
        let _t;
        i0.????queryRefresh(_t = i0.????loadQuery()) && (ctx.mainContentElement = _t.first);
        i0.????queryRefresh(_t = i0.????loadQuery()) && (ctx.sidenav = _t.first);
    } }, inputs: { config: "config" }, features: [i0.????NgOnChangesFeature], ngContentSelectors: _c5, decls: 11, vars: 10, consts: [[1, "mod-side-menu-container"], ["mode", "side", "opened", "", "role", "navigation", "id", "navigation-menu", 3, "ngClass"], ["sidenav", ""], ["mat-subheader", ""], ["class", "menu-close", 3, "click", 4, "ngIf"], ["class", "menu-open", 3, "click", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["role", "main", "tabindex", "0", 3, "ngClass"], ["mainContent", ""], [1, "menu-close", 3, "click"], [1, "menu-open", 3, "click"], ["routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions", "keyup.enter", 4, "ngFor", "ngForOf"], ["routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions", "keyup.enter"], ["mat-list-icon", "", 3, "matTooltip"]], template: function ModSideMenuComponent_Template(rf, ctx) { if (rf & 1) {
        i0.????projectionDef();
        i0.????elementStart(0, "mat-sidenav-container", 0);
        i0.????elementStart(1, "mat-sidenav", 1, 2);
        i0.????elementStart(3, "h1", 3);
        i0.????text(4);
        i0.????template(5, ModSideMenuComponent_mat_icon_5_Template, 2, 0, "mat-icon", 4);
        i0.????template(6, ModSideMenuComponent_mat_icon_6_Template, 2, 0, "mat-icon", 5);
        i0.????elementEnd();
        i0.????template(7, ModSideMenuComponent_div_7_Template, 5, 2, "div", 6);
        i0.????elementEnd();
        i0.????elementStart(8, "mat-sidenav-content", 7, 8);
        i0.????projection(10);
        i0.????elementEnd();
        i0.????elementEnd();
    } if (rf & 2) {
        i0.????advance(1);
        i0.????property("ngClass", i0.????pureFunction1(6, _c3, !ctx.expanded && ctx.opened));
        i0.????advance(3);
        i0.????textInterpolate1(" ", ctx.expanded ? ctx.config.title : "", " ");
        i0.????advance(1);
        i0.????property("ngIf", ctx.expanded);
        i0.????advance(1);
        i0.????property("ngIf", !ctx.expanded);
        i0.????advance(1);
        i0.????property("ngForOf", ctx.viewableSections);
        i0.????advance(1);
        i0.????property("ngClass", i0.????pureFunction1(8, _c4, !ctx.expanded && ctx.opened));
    } }, directives: [i3$1.MatSidenavContainer, i3$1.MatSidenav, i4.NgClass, i5$1.MatListSubheaderCssMatStyler, i4.NgIf, i4.NgForOf, i3$1.MatSidenavContent, i5.MatIcon, i5$1.MatNavList, i5$1.MatListItem, i1$2.RouterLinkActive, i1$2.RouterLink, i5$1.MatListIconCssMatStyler, i7.MatTooltip], styles: ["#main-content[_ngcontent-%COMP%]:focus{border:1px solid #5b9acf}.menu-close[_ngcontent-%COMP%]{position:absolute;right:0;cursor:pointer}.menu-open[_ngcontent-%COMP%]{text-align:center;width:100%;cursor:pointer}.mod-side-menu[_ngcontent-%COMP%]{display:flex;align-items:flex-start;justify-content:left;width:250px;transition:width .25s}.mod-side-menu.collapsed[_ngcontent-%COMP%]{width:76px!important;transition:width .25s}.mod-side-menu-container[_ngcontent-%COMP%]{display:flex;height:100%}.mod-side-menu-content[_ngcontent-%COMP%]{transition:margin-left .25s;width:100%;overflow:auto;display:flex;align-items:stretch;outline:none!important}.mod-side-menu-content.collapsed[_ngcontent-%COMP%]{margin-left:76px!important;transition:margin-left .25s}h2[_ngcontent-%COMP%]{overflow:hidden;white-space:nowrap;text-overflow:clip}.mat-subheader[_ngcontent-%COMP%]{font-size:14px;line-height:20px;max-height:56px;color:#888;padding:12px 12px 12px 20px!important;margin-bottom:0!important;margin-top:0!important;border-left:5px solid #bbb;margin-left:-5px}.mat-subheader[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{padding-left:4px;margin-right:16px}.mat-expansion-panel[_ngcontent-%COMP%]{box-shadow:none;margin:0}.mat-expansion-indicator[_ngcontent-%COMP%]{line-height:0!important}mat-expansion-panel-header[aria-disabled=true][_ngcontent-%COMP%]{color:#000;color:initial}.mat-expansion-panel-header[_ngcontent-%COMP%]{height:56px!important;max-height:56px!important;border-left:5px solid #bbb}.mat-expansion-panel-header-title[_ngcontent-%COMP%]{max-height:24px}.mat-expansion-panel.active[_ngcontent-%COMP%] > .mat-expansion-panel-header[_ngcontent-%COMP%]{border-color:#5b9acf}.mat-expansion-panel-header-title[_ngcontent-%COMP%] > .mat-icon[_ngcontent-%COMP%]{margin-right:16px}.mat-expansion-panel.mat-expanded[_ngcontent-%COMP%]{background-color:#eee}  .mat-expansion-panel-body{padding:0!important}  .mat-drawer-container{display:flex;align-items:stretch}.mat-list-icon[_ngcontent-%COMP%]{padding-right:16px!important;font-size:22px!important}.mat-list-item[_ngcontent-%COMP%]{font-size:15px!important;border-left:5px solid #bbb;margin-left:-5px;height:56px!important;max-height:56px!important;line-height:22.5px!important;width:auto!important}.mat-list-item[_ngcontent-%COMP%]:focus{border:1px solid #5b9acf}.mat-list-item-content[_ngcontent-%COMP%]{padding:0 24px!important}.mat-list-item.active[_ngcontent-%COMP%]{border-color:#5b9acf;background-color:#d1d1d1}.mat-list-base[_ngcontent-%COMP%]{padding-top:0}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.??setClassMetadata(ModSideMenuComponent, [{
        type: Component,
        args: [{
                selector: 'mod-side-menu',
                templateUrl: './mod-side-menu.component.html',
                styleUrls: ['./mod-side-menu.component.scss']
            }]
    }], function () { return [{ type: i1$2.Router }, { type: i1$2.ActivatedRoute }, { type: i0.Renderer2 }, { type: CurrentUserService }]; }, { config: [{
            type: Input
        }], mainContentElement: [{
            type: ViewChild,
            args: ['mainContent', { static: true }]
        }], sidenav: [{
            type: ViewChild,
            args: ['sidenav', { static: true }]
        }] }); })();

const _c0 = ["sidemenu"];
function ModLayoutComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.????getCurrentView();
    i0.????elementStart(0, "div", 7);
    i0.????elementStart(1, "input", 8);
    i0.????listener("ngModelChange", function ModLayoutComponent_div_4_Template_input_ngModelChange_1_listener($event) { i0.????restoreView(_r3); const ctx_r2 = i0.????nextContext(); return ctx_r2.searchText = $event; })("keyup.enter", function ModLayoutComponent_div_4_Template_input_keyup_enter_1_listener() { i0.????restoreView(_r3); const ctx_r4 = i0.????nextContext(); return ctx_r4.onSearch(); });
    i0.????elementEnd();
    i0.????elementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.????nextContext();
    i0.????advance(1);
    i0.????property("ngModel", ctx_r0.searchText);
} }
const _c1 = ["*"];
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
ModLayoutComponent.??fac = function ModLayoutComponent_Factory(t) { return new (t || ModLayoutComponent)(i0.????directiveInject(ModConfig)); };
ModLayoutComponent.??cmp = /*@__PURE__*/ i0.????defineComponent({ type: ModLayoutComponent, selectors: [["mod-layout"]], viewQuery: function ModLayoutComponent_Query(rf, ctx) { if (rf & 1) {
        i0.????viewQuery(_c0, 7);
    } if (rf & 2) {
        let _t;
        i0.????queryRefresh(_t = i0.????loadQuery()) && (ctx.sideMenu = _t.first);
    } }, inputs: { appName: "appName", menuConfig: "menuConfig" }, outputs: { userOptionSelect: "userOptionSelect", helpOptionSelect: "helpOptionSelect", search: "search" }, ngContentSelectors: _c1, decls: 9, vars: 3, consts: [[1, "mod-layout-container"], [1, "layout-header"], [3, "appName", "menuClick", "userOptionSelect", "helpOptionSelect"], ["style", "display: flex; justify-content: center;", 4, "ngIf"], [1, "layout-content"], [3, "config"], ["sidemenu", ""], [2, "display", "flex", "justify-content", "center"], ["matInput", "", "placeholder", "Search", 1, "search-box", 3, "ngModel", "ngModelChange", "keyup.enter"]], template: function ModLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        i0.????projectionDef();
        i0.????element(0, "mod-loading-overlay");
        i0.????elementStart(1, "div", 0);
        i0.????elementStart(2, "div", 1);
        i0.????elementStart(3, "mod-header", 2);
        i0.????listener("menuClick", function ModLayoutComponent_Template_mod_header_menuClick_3_listener() { return ctx.onMenuClicked(); })("userOptionSelect", function ModLayoutComponent_Template_mod_header_userOptionSelect_3_listener($event) { return ctx.onUserOptionSelect($event); })("helpOptionSelect", function ModLayoutComponent_Template_mod_header_helpOptionSelect_3_listener($event) { return ctx.onHelpOptionSelect($event); });
        i0.????template(4, ModLayoutComponent_div_4_Template, 2, 1, "div", 3);
        i0.????elementEnd();
        i0.????elementEnd();
        i0.????elementStart(5, "div", 4);
        i0.????elementStart(6, "mod-side-menu", 5, 6);
        i0.????projection(8);
        i0.????elementEnd();
        i0.????elementEnd();
        i0.????elementEnd();
    } if (rf & 2) {
        i0.????advance(3);
        i0.????property("appName", ctx.appName);
        i0.????advance(1);
        i0.????property("ngIf", ctx.config.showSearch);
        i0.????advance(2);
        i0.????property("config", ctx.menuConfig);
    } }, directives: [ModLoadingOverlayComponent, ModHeaderComponent, i4.NgIf, ModSideMenuComponent, i5$2.MatInput, i6.DefaultValueAccessor, i6.NgControlStatus, i6.NgModel], styles: [".mod-layout-container[_ngcontent-%COMP%]{display:flex;flex-flow:column;height:100%}.layout-header[_ngcontent-%COMP%]{flex:0}.layout-content[_ngcontent-%COMP%]{flex:1;overflow:auto}.search-box[_ngcontent-%COMP%]{background-color:#fff;box-shadow:none;border:none;min-height:32px;width:50%;color:#000;font-size:14px;padding-top:0;padding-right:15px;border-radius:16px;padding-left:15px;margin-left:15px;margin-right:15px}.search-box[_ngcontent-%COMP%]:focus{outline:none}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.??setClassMetadata(ModLayoutComponent, [{
        type: Component,
        args: [{
                selector: 'mod-layout',
                templateUrl: './mod-layout.component.html',
                styleUrls: ['./mod-layout.component.scss']
            }]
    }], function () { return [{ type: ModFrameworkConfig, decorators: [{
                type: Inject,
                args: [ModConfig]
            }] }]; }, { sideMenu: [{
            type: ViewChild,
            args: ['sidemenu', { static: true }]
        }], appName: [{
            type: Input
        }], menuConfig: [{
            type: Input
        }], userOptionSelect: [{
            type: Output
        }], helpOptionSelect: [{
            type: Output
        }], search: [{
            type: Output
        }] }); })();

class ModWelcomeBanner {
    constructor() {
        this.onLogin = new EventEmitter();
        this.onLogout = new EventEmitter();
    }
    ngOnInit() {
    }
}
ModWelcomeBanner.??fac = function ModWelcomeBanner_Factory(t) { return new (t || ModWelcomeBanner)(); };
ModWelcomeBanner.??cmp = /*@__PURE__*/ i0.????defineComponent({ type: ModWelcomeBanner, selectors: [["mod-welcome-banner"]], outputs: { onLogin: "onLogin", onLogout: "onLogout" }, decls: 4, vars: 0, consts: [["role", "banner", 1, "mod-header"], [1, "mod-welcome-banner"], [1, "welcome-user"]], template: function ModWelcomeBanner_Template(rf, ctx) { if (rf & 1) {
        i0.????elementStart(0, "header", 0);
        i0.????elementStart(1, "div", 1);
        i0.????elementStart(2, "div", 2);
        i0.????element(3, "mod-user-display");
        i0.????elementEnd();
        i0.????elementEnd();
        i0.????elementEnd();
    } }, directives: [ModUserDisplayComponent], styles: [".mod-header[_ngcontent-%COMP%]{display:flex;flex-direction:column}.mod-welcome-banner[_ngcontent-%COMP%]{padding-left:10px;padding-right:10px;background-color:#f0f0f0;padding-bottom:0;display:flex;font-family:Source Sans Pro Web,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif}.welcome-user[_ngcontent-%COMP%]{font-weight:700;font-size:.85em;padding-top:2px;padding-right:5px;flex:1;display:flex;justify-content:flex-end}.loginout-button[_ngcontent-%COMP%]{vertical-align:middle;width:auto!important;display:inline!important}.loginout-text[_ngcontent-%COMP%]{align-items:center}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.??setClassMetadata(ModWelcomeBanner, [{
        type: Component,
        args: [{
                selector: 'mod-welcome-banner',
                templateUrl: './mod-welcome-banner.component.html',
                styleUrls: ['./mod-welcome-banner.component.scss']
            }]
    }], function () { return []; }, { onLogin: [{
            type: Output
        }], onLogout: [{
            type: Output
        }] }); })();

function BrowserCheckComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.????elementStart(0, "div", 1);
    i0.????element(1, "span", 2);
    i0.????elementStart(2, "span", 3);
    i0.????text(3, "\u00A0\u00A0You can't log in to this site.");
    i0.????elementEnd();
    i0.????elementStart(4, "div", 4);
    i0.????text(5, " Possible reasons for this include: ");
    i0.????elementStart(6, "ul");
    i0.????elementStart(7, "li");
    i0.????text(8);
    i0.????elementStart(9, "ul");
    i0.????elementStart(10, "li");
    i0.????text(11, "Please check your network connection.");
    i0.????elementEnd();
    i0.????elementEnd();
    i0.????elementEnd();
    i0.????elementStart(12, "li");
    i0.????text(13);
    i0.????elementStart(14, "ul");
    i0.????elementStart(15, "li");
    i0.????text(16);
    i0.????elementEnd();
    i0.????elementEnd();
    i0.????elementEnd();
    i0.????elementStart(17, "li");
    i0.????text(18);
    i0.????elementStart(19, "ul");
    i0.????elementStart(20, "li");
    i0.????text(21, "In your browser settings, either allow all third-party cookies, or ");
    i0.????elementEnd();
    i0.????elementStart(22, "li");
    i0.????text(23);
    i0.????elementEnd();
    i0.????elementEnd();
    i0.????elementEnd();
    i0.????elementEnd();
    i0.????elementStart(24, "i");
    i0.????text(25);
    i0.????element(26, "br");
    i0.????elementEnd();
    i0.????text(27, " Please correct these problems and try again. ");
    i0.????elementEnd();
    i0.????elementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.????nextContext();
    i0.????advance(8);
    i0.????textInterpolate1(" You can't reach the site ", ctx_r0.loginSite, ". ");
    i0.????advance(5);
    i0.????textInterpolate2(" Site ", ctx_r0.loginSite, " does not allow cross-origin scripting (CORS) from your domain ", ctx_r0.myDomain, ". ");
    i0.????advance(3);
    i0.????textInterpolate1("Please contact the administrator of ", ctx_r0.loginSite, " and request access for your site.");
    i0.????advance(2);
    i0.????textInterpolate1(" Your browser doesn't accept third-party cookies from domain ", ctx_r0.loginDomain, ". ");
    i0.????advance(5);
    i0.????textInterpolate1("Disallow third-party cookies, but add ", ctx_r0.loginDomain, " as an exception.");
    i0.????advance(2);
    i0.????textInterpolate1("The actual error returned is \"", ctx_r0.browserFail, "\".");
} }
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
BrowserCheckComponent.??fac = function BrowserCheckComponent_Factory(t) { return new (t || BrowserCheckComponent)(i0.????directiveInject(CurrentUserService)); };
BrowserCheckComponent.??cmp = /*@__PURE__*/ i0.????defineComponent({ type: BrowserCheckComponent, selectors: [["mod-browser-check"]], decls: 1, vars: 1, consts: [["class", "container-fluid browser-check-container", 4, "ngIf"], [1, "container-fluid", "browser-check-container"], [1, "fa", "fa-warning", "browser-check-icon"], [1, "browser-check-header-text"], [1, "browser-check-text"]], template: function BrowserCheckComponent_Template(rf, ctx) { if (rf & 1) {
        i0.????template(0, BrowserCheckComponent_div_0_Template, 28, 7, "div", 0);
    } if (rf & 2) {
        i0.????property("ngIf", ctx.browserFail);
    } }, directives: [i4.NgIf], styles: [".browser-check-container[_ngcontent-%COMP%]{border:4px solid red;padding-top:5px;padding-bottom:5px;padding-left:10px}.browser-check-icon[_ngcontent-%COMP%]{font-size:36px;color:red;vertical-align:middle}.browser-check-text[_ngcontent-%COMP%]{font-size:16px;vertical-align:middle;padding-left:30px;padding-top:10px}.browser-check-header-text[_ngcontent-%COMP%]{font-size:24px;font-weight:700;vertical-align:middle}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.??setClassMetadata(BrowserCheckComponent, [{
        type: Component,
        args: [{
                selector: 'mod-browser-check',
                templateUrl: './browser-check.component.html',
                styleUrls: ['./browser-check.component.scss']
            }]
    }], function () { return [{ type: CurrentUserService }]; }, null); })();

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
HttpRequestInterceptor.??fac = function HttpRequestInterceptor_Factory(t) { return new (t || HttpRequestInterceptor)(i0.????inject(CurrentUserService)); };
HttpRequestInterceptor.??prov = /*@__PURE__*/ i0.????defineInjectable({ token: HttpRequestInterceptor, factory: HttpRequestInterceptor.??fac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.??setClassMetadata(HttpRequestInterceptor, [{
        type: Injectable
    }], function () { return [{ type: CurrentUserService }]; }, null); })();

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
RoleGuardService.??fac = function RoleGuardService_Factory(t) { return new (t || RoleGuardService)(i0.????inject(CurrentUserService), i0.????inject(i1$2.Router)); };
RoleGuardService.??prov = /*@__PURE__*/ i0.????defineInjectable({ token: RoleGuardService, factory: RoleGuardService.??fac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.??setClassMetadata(RoleGuardService, [{
        type: Injectable
    }], function () { return [{ type: CurrentUserService }, { type: i1$2.Router }]; }, null); })();

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
ModFrameworkModule.??fac = function ModFrameworkModule_Factory(t) { return new (t || ModFrameworkModule)(i0.????inject(ModFrameworkModule, 12)); };
ModFrameworkModule.??mod = /*@__PURE__*/ i0.????defineNgModule({ type: ModFrameworkModule });
ModFrameworkModule.??inj = /*@__PURE__*/ i0.????defineInjector({ providers: [], imports: [[
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            HttpClientModule,
            RouterModule,
            MatIconModule, MatDividerModule, MatListModule, MatSidenavModule, MatToolbarModule, MatMenuModule, MatButtonModule, MatProgressSpinnerModule, MatAutocompleteModule, MatTooltipModule, MatFormFieldModule, MatInputModule, MatSelectModule,
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.??setClassMetadata(ModFrameworkModule, [{
        type: NgModule,
        args: [{
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
            }]
    }], function () { return [{ type: ModFrameworkModule, decorators: [{
                type: Optional
            }, {
                type: SkipSelf
            }] }]; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.????setNgModuleScope(ModFrameworkModule, { declarations: [ModWelcomeBanner,
        ModSideMenuComponent,
        ModLayoutComponent,
        ModHeaderComponent,
        ModProgressSpinnerComponent,
        ModLoadingOverlayComponent,
        ModUserDisplayComponent,
        BrowserCheckComponent], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule,
        MatIconModule, MatDividerModule, MatListModule, MatSidenavModule, MatToolbarModule, MatMenuModule, MatButtonModule, MatProgressSpinnerModule, MatAutocompleteModule, MatTooltipModule, MatFormFieldModule, MatInputModule, MatSelectModule], exports: [ModHeaderComponent,
        ModLayoutComponent,
        ModLoadingOverlayComponent,
        ModProgressSpinnerComponent,
        ModSideMenuComponent,
        ModUserDisplayComponent,
        ModWelcomeBanner,
        BrowserCheckComponent] }); })();

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

export { BrowserCheckComponent, CurrentUserService, DtoBase, LoadingIntercepter, LoadingService, ModFrameworkConfig, ModFrameworkModule, ModHeaderComponent, ModLayoutComponent, ModLoadingOverlayComponent, ModMenuItem, ModMenuSection, ModProgressSpinnerComponent, ModPromiseServiceBase, ModSideMenuComponent, ModSideMenuConfig, ModUserDisplayComponent, ModWelcomeBanner, RoleGuardService, UserInfo, initiateSingleSignOn };
//# sourceMappingURL=mod-framework.js.map
