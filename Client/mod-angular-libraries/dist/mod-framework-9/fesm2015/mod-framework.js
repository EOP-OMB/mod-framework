import { InjectionToken, ɵɵinject, ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, Inject, ɵɵelementContainerStart, ɵɵelementStart, ɵɵtemplate, ɵɵelementEnd, ɵɵelementContainerEnd, ɵɵnextContext, ɵɵreference, ɵɵadvance, ɵɵproperty, ɵɵelement, ɵɵdefineComponent, ɵɵtemplateRefExtractor, Component, Input, ɵɵdirectiveInject, ɵɵtext, ɵɵgetCurrentView, ɵɵlistener, ɵɵrestoreView, ɵɵtextInterpolate, EventEmitter, Output, ɵɵprojectionDef, ɵɵprojection, ɵɵpureFunction0, ɵɵtextInterpolate1, Renderer2, ɵɵstaticViewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵNgOnChangesFeature, ɵɵpureFunction1, ViewChild, ɵɵtextInterpolate2, APP_INITIALIZER, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule, Optional, SkipSelf } from '@angular/core';
import { RouterLinkWithHref, Router, ActivatedRoute, RouterLinkActive, RouterLink, RouterModule } from '@angular/router';
import { HttpResponse, HttpClient, HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import * as parseUri from 'parse-uri';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListSubheaderCssMatStyler, MatNavList, MatListItem, MatListIconCssMatStyler, MatListModule } from '@angular/material/list';
import { MatSidenavContainer, MatSidenav, MatSidenavContent, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { _MatMenu, MatMenuTrigger, MatMenuItem, MatMenuModule } from '@angular/material/menu';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatProgressSpinner, MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTooltip, MatTooltipModule } from '@angular/material/tooltip';
import { DefaultValueAccessor, NgControlStatus, NgModel, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NgIf, NgTemplateOutlet, NgForOf, NgClass, CommonModule } from '@angular/common';
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
LoadingService.ɵfac = function LoadingService_Factory(t) { return new (t || LoadingService)(ɵɵinject(ModConfig)); };
LoadingService.ɵprov = ɵɵdefineInjectable({ token: LoadingService, factory: LoadingService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(LoadingService, [{
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
LoadingIntercepter.ɵfac = function LoadingIntercepter_Factory(t) { return new (t || LoadingIntercepter)(ɵɵinject(LoadingService), ɵɵinject(ModConfig)); };
LoadingIntercepter.ɵprov = ɵɵdefineInjectable({ token: LoadingIntercepter, factory: LoadingIntercepter.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(LoadingIntercepter, [{
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
CurrentUserService.ɵfac = function CurrentUserService_Factory(t) { return new (t || CurrentUserService)(ɵɵinject(HttpClient), ɵɵinject(ModConfig)); };
CurrentUserService.ɵprov = ɵɵdefineInjectable({ token: CurrentUserService, factory: CurrentUserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(CurrentUserService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: HttpClient }, { type: ModFrameworkConfig, decorators: [{
                type: Inject,
                args: [ModConfig]
            }] }]; }, null); })();

function ModProgressSpinnerComponent_ng_container_0_ng_template_3_Template(rf, ctx) { }
function ModProgressSpinnerComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 2);
    ɵɵelementStart(2, "div", 3);
    ɵɵtemplate(3, ModProgressSpinnerComponent_ng_container_0_ng_template_3_Template, 0, 0, "ng-template", 4);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    ɵɵnextContext();
    const _r1 = ɵɵreference(2);
    ɵɵadvance(3);
    ɵɵproperty("ngTemplateOutlet", _r1);
} }
function ModProgressSpinnerComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "mat-progress-spinner", 5);
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("diameter", ctx_r2.diameter)("mode", ctx_r2.mode)("color", ctx_r2.color)("strokeWidth", ctx_r2.strokeWidth)("value", ctx_r2.value);
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
ModProgressSpinnerComponent.ɵfac = function ModProgressSpinnerComponent_Factory(t) { return new (t || ModProgressSpinnerComponent)(); };
ModProgressSpinnerComponent.ɵcmp = ɵɵdefineComponent({ type: ModProgressSpinnerComponent, selectors: [["mod-progress-spinner"]], inputs: { value: "value", diameter: "diameter", mode: "mode", strokeWidth: "strokeWidth", overlay: "overlay", color: "color" }, decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["progressSpinner", ""], [1, "overlay"], [1, "center"], [3, "ngTemplateOutlet"], [3, "diameter", "mode", "color", "strokeWidth", "value"]], template: function ModProgressSpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, ModProgressSpinnerComponent_ng_container_0_Template, 4, 1, "ng-container", 0);
        ɵɵtemplate(1, ModProgressSpinnerComponent_ng_template_1_Template, 1, 5, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = ɵɵreference(2);
        ɵɵproperty("ngIf", ctx.overlay)("ngIfElse", _r1);
    } }, directives: [NgIf, NgTemplateOutlet, MatProgressSpinner], styles: [".center[_ngcontent-%COMP%]{left:50%;position:absolute;top:50%;transform:translateX(-50%) translateY(-50%)}.overlay[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.286);height:100vh;left:0;position:fixed;top:0;width:100%;z-index:10}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ModProgressSpinnerComponent, [{
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
    ɵɵelement(0, "mod-progress-spinner", 1);
} if (rf & 2) {
    ɵɵproperty("overlay", true);
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
ModLoadingOverlayComponent.ɵfac = function ModLoadingOverlayComponent_Factory(t) { return new (t || ModLoadingOverlayComponent)(ɵɵdirectiveInject(LoadingService)); };
ModLoadingOverlayComponent.ɵcmp = ɵɵdefineComponent({ type: ModLoadingOverlayComponent, selectors: [["mod-loading-overlay"]], decls: 1, vars: 1, consts: [[3, "overlay", 4, "ngIf"], [3, "overlay"]], template: function ModLoadingOverlayComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, ModLoadingOverlayComponent_mod_progress_spinner_0_Template, 1, 1, "mod-progress-spinner", 0);
    } if (rf & 2) {
        ɵɵproperty("ngIf", ctx.showProgressSpinner);
    } }, directives: [NgIf, ModProgressSpinnerComponent], styles: [""] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ModLoadingOverlayComponent, [{
        type: Component,
        args: [{
                selector: 'mod-loading-overlay',
                templateUrl: './mod-loading-overlay.component.html',
                styleUrls: ['./mod-loading-overlay.component.scss']
            }]
    }], function () { return [{ type: LoadingService }]; }, null); })();

function ModUserDisplayComponent_div_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "button", 6);
    ɵɵelementStart(2, "mat-icon");
    ɵɵtext(3, "account_circle");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    ɵɵnextContext();
    const _r4 = ɵɵreference(8);
    ɵɵadvance(1);
    ɵɵproperty("matMenuTriggerFor", _r4);
} }
function ModUserDisplayComponent_div_0_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "button", 7);
    ɵɵelementStart(1, "mat-icon");
    ɵɵtext(2, "keyboard_arrow_down");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵnextContext();
    const _r4 = ɵɵreference(8);
    ɵɵproperty("matMenuTriggerFor", _r4);
} }
function ModUserDisplayComponent_div_0_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 8);
    ɵɵlistener("click", function ModUserDisplayComponent_div_0_button_9_Template_button_click_0_listener() { ɵɵrestoreView(_r8); const option_r6 = ctx.$implicit; const ctx_r7 = ɵɵnextContext(2); return ctx_r7.optionSelected(option_r6); });
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const option_r6 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(option_r6);
} }
function ModUserDisplayComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1, " Welcome ");
    ɵɵelementStart(2, "span", 1);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵtemplate(4, ModUserDisplayComponent_div_0_ng_container_4_Template, 4, 1, "ng-container", 2);
    ɵɵtemplate(5, ModUserDisplayComponent_div_0_ng_template_5_Template, 3, 1, "ng-template", null, 3, ɵɵtemplateRefExtractor);
    ɵɵelementStart(7, "mat-menu", null, 4);
    ɵɵtemplate(9, ModUserDisplayComponent_div_0_button_9_Template, 2, 1, "button", 5);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const _r2 = ɵɵreference(6);
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵtextInterpolate(ctx_r0.user.displayName);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.showUser)("ngIfElse", _r2);
    ɵɵadvance(5);
    ɵɵproperty("ngForOf", ctx_r0.config.userOptions);
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
ModUserDisplayComponent.ɵfac = function ModUserDisplayComponent_Factory(t) { return new (t || ModUserDisplayComponent)(ɵɵdirectiveInject(CurrentUserService), ɵɵdirectiveInject(ModConfig)); };
ModUserDisplayComponent.ɵcmp = ɵɵdefineComponent({ type: ModUserDisplayComponent, selectors: [["mod-user-display"]], inputs: { showUser: "showUser" }, outputs: { selectOption: "selectOption" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [2, "padding-right", "5px"], [4, "ngIf", "ngIfElse"], ["showMenu", ""], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["mat-icon-button", "", "aria-label", "User Menu", 1, "mod-user-icon", 3, "matMenuTriggerFor"], ["mat-icon-button", "", "aria-label", "User Menu", 1, "mat-icon-button", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"]], template: function ModUserDisplayComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, ModUserDisplayComponent_div_0_Template, 10, 4, "div", 0);
    } if (rf & 2) {
        ɵɵproperty("ngIf", ctx.user);
    } }, directives: [NgIf, _MatMenu, NgForOf, MatButton, MatMenuTrigger, MatIcon, MatMenuItem], styles: [".delete-potentially-circle-user-icon[_ngcontent-%COMP%]{border:2px solid inherit!important;border-radius:50%!important;margin-left:15px!important;padding:5px!important}.mat-button-base[_ngcontent-%COMP%]{height:auto;line-height:inherit}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ModUserDisplayComponent, [{
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

function ModHeaderComponent_div_12_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 12);
    ɵɵlistener("click", function ModHeaderComponent_div_12_button_6_Template_button_click_0_listener() { ɵɵrestoreView(_r5); const option_r3 = ctx.$implicit; const ctx_r4 = ɵɵnextContext(2); return ctx_r4.optionSelected(option_r3); });
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const option_r3 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(option_r3);
} }
function ModHeaderComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵelementStart(1, "button", 9);
    ɵɵelementStart(2, "mat-icon");
    ɵɵtext(3, "help");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(4, "mat-menu", null, 10);
    ɵɵtemplate(6, ModHeaderComponent_div_12_button_6_Template, 2, 1, "button", 11);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const _r1 = ɵɵreference(5);
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("matMenuTriggerFor", _r1);
    ɵɵadvance(5);
    ɵɵproperty("ngForOf", ctx_r0.config.helpOptions);
} }
const _c0 = function () { return ["/"]; };
const _c1 = ["*"];
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
ModHeaderComponent.ɵfac = function ModHeaderComponent_Factory(t) { return new (t || ModHeaderComponent)(ɵɵdirectiveInject(ModConfig)); };
ModHeaderComponent.ɵcmp = ɵɵdefineComponent({ type: ModHeaderComponent, selectors: [["mod-header"]], inputs: { appName: "appName" }, outputs: { menuClick: "menuClick", userOptionSelect: "userOptionSelect", helpOptionSelect: "helpOptionSelect" }, ngContentSelectors: _c1, decls: 13, vars: 5, consts: [[1, "mod-header"], ["mat-icon-button", "", 3, "click"], [1, "logo-text-mark", 3, "routerLink"], ["src", "/assets/US-OfficeOfManagementAndBudget-Seal.png", "tabindex", "-1", 1, "mod-logo"], ["tabindex", "-1", "alt", "Textmark", 1, "text-mark"], [1, "fill-remaining-space"], [1, "welcome-user"], [3, "showUser", "selectOption"], [4, "ngIf"], ["mat-icon-button", "", "aria-label", "Help Menu", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["mat-menu-item", "", 3, "click"]], template: function ModHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementStart(0, "mat-toolbar", 0);
        ɵɵelementStart(1, "button", 1);
        ɵɵlistener("click", function ModHeaderComponent_Template_button_click_1_listener() { return ctx.onMenuClick(); });
        ɵɵelementStart(2, "mat-icon");
        ɵɵtext(3, " menu ");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(4, "a", 2);
        ɵɵelement(5, "img", 3);
        ɵɵelementStart(6, "div", 4);
        ɵɵtext(7);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(8, "span", 5);
        ɵɵprojection(9);
        ɵɵelementEnd();
        ɵɵelementStart(10, "div", 6);
        ɵɵelementStart(11, "mod-user-display", 7);
        ɵɵlistener("selectOption", function ModHeaderComponent_Template_mod_user_display_selectOption_11_listener($event) { return ctx.onUserOptionSelect($event); });
        ɵɵelementEnd();
        ɵɵtemplate(12, ModHeaderComponent_div_12_Template, 7, 2, "div", 8);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(4);
        ɵɵproperty("routerLink", ɵɵpureFunction0(4, _c0));
        ɵɵadvance(3);
        ɵɵtextInterpolate(ctx.appName);
        ɵɵadvance(4);
        ɵɵproperty("showUser", true);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.config.showHelp);
    } }, directives: [MatToolbar, MatButton, MatIcon, RouterLinkWithHref, ModUserDisplayComponent, NgIf, MatMenuTrigger, _MatMenu, NgForOf, MatMenuItem], styles: [".mod-header[_ngcontent-%COMP%]{background-color:#112e51;color:#fff;display:flex;justify-content:center}a[_ngcontent-%COMP%]{text-decoration:none}.logo-text-mark[_ngcontent-%COMP%]{align-items:center;cursor:pointer;display:flex}.text-mark[_ngcontent-%COMP%]{color:#d8b304;cursor:pointer;display:inline-block;font-size:1.4em;margin-left:12px;vertical-align:middle}.mod-logo[_ngcontent-%COMP%]{height:50px;margin-left:4px}.fill-remaining-space[_ngcontent-%COMP%]{align-items:center;flex:1 1 auto;margin-left:15px}.welcome-user[_ngcontent-%COMP%]{display:flex;flex:1;font-size:.85em;justify-content:flex-end;padding-right:5px;padding-top:2px}.mat-button-base[_ngcontent-%COMP%]{height:auto;line-height:inherit}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ModHeaderComponent, [{
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
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-icon", 9);
    ɵɵlistener("click", function ModSideMenuComponent_mat_icon_5_Template_mat_icon_click_0_listener() { ɵɵrestoreView(_r6); const ctx_r5 = ɵɵnextContext(); return ctx_r5.expandMenu(!ctx_r5.expanded); });
    ɵɵtext(1, " keyboard_arrow_left ");
    ɵɵelementEnd();
} }
function ModSideMenuComponent_mat_icon_6_Template(rf, ctx) { if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-icon", 10);
    ɵɵlistener("click", function ModSideMenuComponent_mat_icon_6_Template_mat_icon_click_0_listener() { ɵɵrestoreView(_r8); const ctx_r7 = ɵɵnextContext(); return ctx_r7.expandMenu(!ctx_r7.expanded); });
    ɵɵtext(1, " keyboard_arrow_right ");
    ɵɵelementEnd();
} }
const _c2 = function () { return { exact: true }; };
function ModSideMenuComponent_div_7_mat_list_item_4_Template(rf, ctx) { if (rf & 1) {
    const _r13 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-list-item", 12);
    ɵɵlistener("keyup.enter", function ModSideMenuComponent_div_7_mat_list_item_4_Template_mat_list_item_keyup_enter_0_listener() { ɵɵrestoreView(_r13); const item_r11 = ctx.$implicit; const ctx_r12 = ɵɵnextContext(2); return ctx_r12.navigateTo(item_r11.route); });
    ɵɵelementStart(1, "mat-icon", 13);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵtext(3);
    ɵɵelementEnd();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const ctx_r10 = ɵɵnextContext(2);
    ɵɵproperty("routerLink", item_r11.route)("routerLinkActiveOptions", ɵɵpureFunction0(5, _c2));
    ɵɵadvance(1);
    ɵɵproperty("matTooltip", item_r11.text);
    ɵɵadvance(1);
    ɵɵtextInterpolate(item_r11.icon);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r10.expanded ? item_r11.text : "", " ");
} }
function ModSideMenuComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵelementStart(1, "h1", 3);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "mat-nav-list");
    ɵɵtemplate(4, ModSideMenuComponent_div_7_mat_list_item_4_Template, 4, 6, "mat-list-item", 11);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const section_r9 = ctx.$implicit;
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r3.expanded ? section_r9.name : "", " ");
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r3.getViewableMenuItems(section_r9));
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
ModSideMenuComponent.ɵfac = function ModSideMenuComponent_Factory(t) { return new (t || ModSideMenuComponent)(ɵɵdirectiveInject(Router), ɵɵdirectiveInject(ActivatedRoute), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(CurrentUserService)); };
ModSideMenuComponent.ɵcmp = ɵɵdefineComponent({ type: ModSideMenuComponent, selectors: [["mod-side-menu"]], viewQuery: function ModSideMenuComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵstaticViewQuery(_c0$1, true);
        ɵɵstaticViewQuery(_c1$1, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.mainContentElement = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.sidenav = _t.first);
    } }, inputs: { config: "config" }, features: [ɵɵNgOnChangesFeature], ngContentSelectors: _c5, decls: 11, vars: 10, consts: [[1, "mod-side-menu-container"], ["mode", "side", "opened", "", "role", "navigation", "id", "navigation-menu", 3, "ngClass"], ["sidenav", ""], ["mat-subheader", ""], ["class", "menu-close", 3, "click", 4, "ngIf"], ["class", "menu-open", 3, "click", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["role", "main", "tabindex", "0", 3, "ngClass"], ["mainContent", ""], [1, "menu-close", 3, "click"], [1, "menu-open", 3, "click"], ["routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions", "keyup.enter", 4, "ngFor", "ngForOf"], ["routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions", "keyup.enter"], ["mat-list-icon", "", 3, "matTooltip"]], template: function ModSideMenuComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementStart(0, "mat-sidenav-container", 0);
        ɵɵelementStart(1, "mat-sidenav", 1, 2);
        ɵɵelementStart(3, "h1", 3);
        ɵɵtext(4);
        ɵɵtemplate(5, ModSideMenuComponent_mat_icon_5_Template, 2, 0, "mat-icon", 4);
        ɵɵtemplate(6, ModSideMenuComponent_mat_icon_6_Template, 2, 0, "mat-icon", 5);
        ɵɵelementEnd();
        ɵɵtemplate(7, ModSideMenuComponent_div_7_Template, 5, 2, "div", 6);
        ɵɵelementEnd();
        ɵɵelementStart(8, "mat-sidenav-content", 7, 8);
        ɵɵprojection(10);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵproperty("ngClass", ɵɵpureFunction1(6, _c3, !ctx.expanded && ctx.opened));
        ɵɵadvance(3);
        ɵɵtextInterpolate1(" ", ctx.expanded ? ctx.config.title : "", " ");
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.expanded);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", !ctx.expanded);
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.viewableSections);
        ɵɵadvance(1);
        ɵɵproperty("ngClass", ɵɵpureFunction1(8, _c4, !ctx.expanded && ctx.opened));
    } }, directives: [MatSidenavContainer, MatSidenav, NgClass, MatListSubheaderCssMatStyler, NgIf, NgForOf, MatSidenavContent, MatIcon, MatNavList, MatListItem, RouterLinkActive, RouterLink, MatListIconCssMatStyler, MatTooltip], styles: ["#main-content[_ngcontent-%COMP%]:focus{border:1px solid #5b9acf}.menu-close[_ngcontent-%COMP%]{cursor:pointer;position:absolute;right:0}.menu-open[_ngcontent-%COMP%]{cursor:pointer;text-align:center;width:100%}.mod-side-menu[_ngcontent-%COMP%]{align-items:flex-start;display:flex;justify-content:left;transition:width .25s;width:250px}.mod-side-menu.collapsed[_ngcontent-%COMP%]{transition:width .25s;width:76px!important}.mod-side-menu-container[_ngcontent-%COMP%]{display:flex;height:100%}.mod-side-menu-content[_ngcontent-%COMP%]{align-items:stretch;display:flex;outline:none!important;overflow:auto;transition:margin-left .25s;width:100%}.mod-side-menu-content.collapsed[_ngcontent-%COMP%]{margin-left:76px!important;transition:margin-left .25s}h2[_ngcontent-%COMP%]{overflow:hidden;text-overflow:clip;white-space:nowrap}.mat-subheader[_ngcontent-%COMP%]{border-left:5px solid #bbb;color:#888;font-size:14px;line-height:20px;margin-bottom:0!important;margin-left:-5px;margin-top:0!important;max-height:56px;padding:12px 12px 12px 20px!important}.mat-subheader[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{margin-right:16px;padding-left:4px}.mat-expansion-panel[_ngcontent-%COMP%]{box-shadow:none;margin:0}.mat-expansion-indicator[_ngcontent-%COMP%]{line-height:0!important}mat-expansion-panel-header[aria-disabled=true][_ngcontent-%COMP%]{color:initial}.mat-expansion-panel-header[_ngcontent-%COMP%]{border-left:5px solid #bbb;height:56px!important;max-height:56px!important}.mat-expansion-panel-header-title[_ngcontent-%COMP%]{max-height:24px}.mat-expansion-panel.active[_ngcontent-%COMP%] > .mat-expansion-panel-header[_ngcontent-%COMP%]{border-color:#5b9acf}.mat-expansion-panel-header-title[_ngcontent-%COMP%] > .mat-icon[_ngcontent-%COMP%]{margin-right:16px}.mat-expansion-panel.mat-expanded[_ngcontent-%COMP%]{background-color:#eee}  .mat-expansion-panel-body{padding:0!important}  .mat-drawer-container{align-items:stretch;display:flex}.mat-list-icon[_ngcontent-%COMP%]{font-size:22px!important;padding-right:16px!important}.mat-list-item[_ngcontent-%COMP%]{border-left:5px solid #bbb;font-size:15px!important;height:56px!important;line-height:22.5px!important;margin-left:-5px;max-height:56px!important;width:auto!important}.mat-list-item[_ngcontent-%COMP%]:focus{border:1px solid #5b9acf}.mat-list-item-content[_ngcontent-%COMP%]{padding:0 24px!important}.mat-list-item.active[_ngcontent-%COMP%]{background-color:#d1d1d1;border-color:#5b9acf}.mat-list-base[_ngcontent-%COMP%]{padding-top:0}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ModSideMenuComponent, [{
        type: Component,
        args: [{
                selector: 'mod-side-menu',
                templateUrl: './mod-side-menu.component.html',
                styleUrls: ['./mod-side-menu.component.scss']
            }]
    }], function () { return [{ type: Router }, { type: ActivatedRoute }, { type: Renderer2 }, { type: CurrentUserService }]; }, { config: [{
            type: Input
        }], mainContentElement: [{
            type: ViewChild,
            args: ['mainContent', { static: true }]
        }], sidenav: [{
            type: ViewChild,
            args: ['sidenav', { static: true }]
        }] }); })();

const _c0$2 = ["sidemenu"];
function ModLayoutComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 7);
    ɵɵelementStart(1, "input", 8);
    ɵɵlistener("ngModelChange", function ModLayoutComponent_div_4_Template_input_ngModelChange_1_listener($event) { ɵɵrestoreView(_r3); const ctx_r2 = ɵɵnextContext(); return ctx_r2.searchText = $event; })("keyup.enter", function ModLayoutComponent_div_4_Template_input_keyup_enter_1_listener() { ɵɵrestoreView(_r3); const ctx_r4 = ɵɵnextContext(); return ctx_r4.onSearch(); });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngModel", ctx_r0.searchText);
} }
const _c1$2 = ["*"];
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
ModLayoutComponent.ɵfac = function ModLayoutComponent_Factory(t) { return new (t || ModLayoutComponent)(ɵɵdirectiveInject(ModConfig)); };
ModLayoutComponent.ɵcmp = ɵɵdefineComponent({ type: ModLayoutComponent, selectors: [["mod-layout"]], viewQuery: function ModLayoutComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵstaticViewQuery(_c0$2, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.sideMenu = _t.first);
    } }, inputs: { appName: "appName", menuConfig: "menuConfig" }, outputs: { userOptionSelect: "userOptionSelect", helpOptionSelect: "helpOptionSelect", search: "search" }, ngContentSelectors: _c1$2, decls: 9, vars: 3, consts: [[1, "mod-layout-container"], [1, "layout-header"], [3, "appName", "menuClick", "userOptionSelect", "helpOptionSelect"], ["style", "display: flex; justify-content: center;", 4, "ngIf"], [1, "layout-content"], [3, "config"], ["sidemenu", ""], [2, "display", "flex", "justify-content", "center"], ["matInput", "", "placeholder", "Search", 1, "search-box", 3, "ngModel", "ngModelChange", "keyup.enter"]], template: function ModLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelement(0, "mod-loading-overlay");
        ɵɵelementStart(1, "div", 0);
        ɵɵelementStart(2, "div", 1);
        ɵɵelementStart(3, "mod-header", 2);
        ɵɵlistener("menuClick", function ModLayoutComponent_Template_mod_header_menuClick_3_listener() { return ctx.onMenuClicked(); })("userOptionSelect", function ModLayoutComponent_Template_mod_header_userOptionSelect_3_listener($event) { return ctx.onUserOptionSelect($event); })("helpOptionSelect", function ModLayoutComponent_Template_mod_header_helpOptionSelect_3_listener($event) { return ctx.onHelpOptionSelect($event); });
        ɵɵtemplate(4, ModLayoutComponent_div_4_Template, 2, 1, "div", 3);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(5, "div", 4);
        ɵɵelementStart(6, "mod-side-menu", 5, 6);
        ɵɵprojection(8);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(3);
        ɵɵproperty("appName", ctx.appName);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.config.showSearch);
        ɵɵadvance(2);
        ɵɵproperty("config", ctx.menuConfig);
    } }, directives: [ModLoadingOverlayComponent, ModHeaderComponent, NgIf, ModSideMenuComponent, MatInput, DefaultValueAccessor, NgControlStatus, NgModel], styles: [".mod-layout-container[_ngcontent-%COMP%]{display:flex;flex-flow:column;height:100%}.layout-header[_ngcontent-%COMP%]{flex:0}.layout-content[_ngcontent-%COMP%]{flex:1;overflow:auto}.search-box[_ngcontent-%COMP%]{background-color:#fff;border:none;border-radius:16px;box-shadow:none;color:#000;font-size:14px;margin-left:15px;margin-right:15px;min-height:32px;padding-left:15px;padding-right:15px;padding-top:0;width:50%}.search-box[_ngcontent-%COMP%]:focus{outline:none}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ModLayoutComponent, [{
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
ModWelcomeBanner.ɵfac = function ModWelcomeBanner_Factory(t) { return new (t || ModWelcomeBanner)(); };
ModWelcomeBanner.ɵcmp = ɵɵdefineComponent({ type: ModWelcomeBanner, selectors: [["mod-welcome-banner"]], outputs: { onLogin: "onLogin", onLogout: "onLogout" }, decls: 4, vars: 0, consts: [["role", "banner", 1, "mod-header"], [1, "mod-welcome-banner"], [1, "welcome-user"]], template: function ModWelcomeBanner_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "header", 0);
        ɵɵelementStart(1, "div", 1);
        ɵɵelementStart(2, "div", 2);
        ɵɵelement(3, "mod-user-display");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } }, directives: [ModUserDisplayComponent], styles: [".mod-header[_ngcontent-%COMP%]{display:flex;flex-direction:column}.mod-welcome-banner[_ngcontent-%COMP%]{background-color:#f0f0f0;display:flex;font-family:Source Sans Pro Web,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif;padding-bottom:0;padding-left:10px;padding-right:10px}.welcome-user[_ngcontent-%COMP%]{display:flex;flex:1;font-size:.85em;font-weight:700;justify-content:flex-end;padding-right:5px;padding-top:2px}.loginout-button[_ngcontent-%COMP%]{display:inline!important;vertical-align:middle;width:auto!important}.loginout-text[_ngcontent-%COMP%]{align-items:center}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ModWelcomeBanner, [{
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
    ɵɵelementStart(0, "div", 1);
    ɵɵelement(1, "span", 2);
    ɵɵelementStart(2, "span", 3);
    ɵɵtext(3, "\u00A0\u00A0You can't log in to this site.");
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 4);
    ɵɵtext(5, " Possible reasons for this include: ");
    ɵɵelementStart(6, "ul");
    ɵɵelementStart(7, "li");
    ɵɵtext(8);
    ɵɵelementStart(9, "ul");
    ɵɵelementStart(10, "li");
    ɵɵtext(11, "Please check your network connection.");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(12, "li");
    ɵɵtext(13);
    ɵɵelementStart(14, "ul");
    ɵɵelementStart(15, "li");
    ɵɵtext(16);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(17, "li");
    ɵɵtext(18);
    ɵɵelementStart(19, "ul");
    ɵɵelementStart(20, "li");
    ɵɵtext(21, "In your browser settings, either allow all third-party cookies, or ");
    ɵɵelementEnd();
    ɵɵelementStart(22, "li");
    ɵɵtext(23);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(24, "i");
    ɵɵtext(25);
    ɵɵelement(26, "br");
    ɵɵelementEnd();
    ɵɵtext(27, " Please correct these problems and try again. ");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(8);
    ɵɵtextInterpolate1(" You can't reach the site ", ctx_r0.loginSite, ". ");
    ɵɵadvance(5);
    ɵɵtextInterpolate2(" Site ", ctx_r0.loginSite, " does not allow cross-origin scripting (CORS) from your domain ", ctx_r0.myDomain, ". ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1("Please contact the administrator of ", ctx_r0.loginSite, " and request access for your site.");
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" Your browser doesn't accept third-party cookies from domain ", ctx_r0.loginDomain, ". ");
    ɵɵadvance(5);
    ɵɵtextInterpolate1("Disallow third-party cookies, but add ", ctx_r0.loginDomain, " as an exception.");
    ɵɵadvance(2);
    ɵɵtextInterpolate1("The actual error returned is \"", ctx_r0.browserFail, "\".");
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
BrowserCheckComponent.ɵfac = function BrowserCheckComponent_Factory(t) { return new (t || BrowserCheckComponent)(ɵɵdirectiveInject(CurrentUserService)); };
BrowserCheckComponent.ɵcmp = ɵɵdefineComponent({ type: BrowserCheckComponent, selectors: [["mod-browser-check"]], decls: 1, vars: 1, consts: [["class", "container-fluid browser-check-container", 4, "ngIf"], [1, "container-fluid", "browser-check-container"], [1, "fa", "fa-warning", "browser-check-icon"], [1, "browser-check-header-text"], [1, "browser-check-text"]], template: function BrowserCheckComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, BrowserCheckComponent_div_0_Template, 28, 7, "div", 0);
    } if (rf & 2) {
        ɵɵproperty("ngIf", ctx.browserFail);
    } }, directives: [NgIf], styles: [".browser-check-container[_ngcontent-%COMP%]{border:4px solid red;padding-bottom:5px;padding-left:10px;padding-top:5px}.browser-check-icon[_ngcontent-%COMP%]{color:red;font-size:36px;vertical-align:middle}.browser-check-text[_ngcontent-%COMP%]{font-size:16px;padding-left:30px;padding-top:10px;vertical-align:middle}.browser-check-header-text[_ngcontent-%COMP%]{font-size:24px;font-weight:700;vertical-align:middle}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(BrowserCheckComponent, [{
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
HttpRequestInterceptor.ɵfac = function HttpRequestInterceptor_Factory(t) { return new (t || HttpRequestInterceptor)(ɵɵinject(CurrentUserService)); };
HttpRequestInterceptor.ɵprov = ɵɵdefineInjectable({ token: HttpRequestInterceptor, factory: HttpRequestInterceptor.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(HttpRequestInterceptor, [{
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
RoleGuardService.ɵfac = function RoleGuardService_Factory(t) { return new (t || RoleGuardService)(ɵɵinject(CurrentUserService), ɵɵinject(Router)); };
RoleGuardService.ɵprov = ɵɵdefineInjectable({ token: RoleGuardService, factory: RoleGuardService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(RoleGuardService, [{
        type: Injectable
    }], function () { return [{ type: CurrentUserService }, { type: Router }]; }, null); })();

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
ModFrameworkModule.ɵmod = ɵɵdefineNgModule({ type: ModFrameworkModule });
ModFrameworkModule.ɵinj = ɵɵdefineInjector({ factory: function ModFrameworkModule_Factory(t) { return new (t || ModFrameworkModule)(ɵɵinject(ModFrameworkModule, 12)); }, providers: [], imports: [[
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            HttpClientModule,
            RouterModule,
            MatIconModule, MatDividerModule, MatListModule, MatSidenavModule, MatToolbarModule, MatMenuModule, MatButtonModule, MatProgressSpinnerModule, MatAutocompleteModule, MatTooltipModule, MatFormFieldModule, MatInputModule, MatSelectModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(ModFrameworkModule, { declarations: [ModWelcomeBanner,
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
/*@__PURE__*/ (function () { ɵsetClassMetadata(ModFrameworkModule, [{
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
