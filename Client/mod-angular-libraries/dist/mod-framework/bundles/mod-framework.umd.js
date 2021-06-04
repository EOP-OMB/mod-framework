(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router'), require('@angular/common/http'), require('rxjs'), require('parse-uri'), require('@angular/material/icon'), require('@angular/material/divider'), require('@angular/material/list'), require('@angular/material/sidenav'), require('@angular/material/toolbar'), require('@angular/material/menu'), require('@angular/material/button'), require('@angular/material/progress-spinner'), require('@angular/material/autocomplete'), require('@angular/material/tooltip'), require('@angular/forms'), require('@angular/material/form-field'), require('@angular/material/input'), require('@angular/material/select'), require('@angular/common'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('mod-framework', ['exports', '@angular/core', '@angular/router', '@angular/common/http', 'rxjs', 'parse-uri', '@angular/material/icon', '@angular/material/divider', '@angular/material/list', '@angular/material/sidenav', '@angular/material/toolbar', '@angular/material/menu', '@angular/material/button', '@angular/material/progress-spinner', '@angular/material/autocomplete', '@angular/material/tooltip', '@angular/forms', '@angular/material/form-field', '@angular/material/input', '@angular/material/select', '@angular/common', 'rxjs/operators'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['mod-framework'] = {}, global.ng.core, global.ng.router, global.ng.common.http, global.rxjs, global.parseUri, global.ng.material.icon, global.ng.material.divider, global.ng.material.list, global.ng.material.sidenav, global.ng.material.toolbar, global.ng.material.menu, global.ng.material.button, global.ng.material.progressSpinner, global.ng.material.autocomplete, global.ng.material.tooltip, global.ng.forms, global.ng.material.formField, global.ng.material.input, global.ng.material.select, global.ng.common, global.rxjs.operators));
}(this, (function (exports, i0, router, i1, rxjs, parseUri, icon, divider, list, sidenav, toolbar, menu, button, progressSpinner, autocomplete, tooltip, forms, formField, input, select, common, operators) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var parseUri__namespace = /*#__PURE__*/_interopNamespace(parseUri);

    var ModConfig = new i0.InjectionToken('modConfig');

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
            to[j] = from[i];
        return to;
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var ModFrameworkConfig = /** @class */ (function () {
        function ModFrameworkConfig() {
            this.showHelp = false;
            this.helpOptions = [];
            this.showSearch = false;
            this.userOptions = [];
            this.profileUrl = 'https://portfolio.staging.omb.gov/portfolio';
        }
        return ModFrameworkConfig;
    }());

    //loading.service.ts
    var LoadingService = /** @class */ (function () {
        function LoadingService(config) {
            this.isLoading = new rxjs.BehaviorSubject(false);
            this.loadingDelay = 500;
            this.loadingDelay = config ? config.loadingDelay : 500;
        }
        return LoadingService;
    }());
    LoadingService.ɵprov = i0__namespace.ɵɵdefineInjectable({ factory: function LoadingService_Factory() { return new LoadingService(i0__namespace.ɵɵinject(ModConfig)); }, token: LoadingService, providedIn: "root" });
    LoadingService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    LoadingService.ctorParameters = function () { return [
        { type: ModFrameworkConfig, decorators: [{ type: i0.Inject, args: [ModConfig,] }] }
    ]; };

    var LoadingIntercepter = /** @class */ (function () {
        function LoadingIntercepter(loadingService, config) {
            var e_1, _a;
            this.loadingService = loadingService;
            this.requests = [];
            this.urlsToSkip = ['frameworkapi/maxpicker/search'];
            try {
                for (var _b = __values(config.urlsToSkip), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var x = _c.value;
                    this.urlsToSkip.push(x);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        LoadingIntercepter.prototype.removeRequest = function (req) {
            var i = this.requests.indexOf(req);
            if (i >= 0) {
                this.requests.splice(i, 1);
            }
            this.loadingService.isLoading.next(this.requests.length > 0);
        };
        LoadingIntercepter.prototype.intercept = function (req, next) {
            var _this = this;
            if (this.skipThisRequest(req)) {
                return next.handle(req);
            }
            else {
                this.requests.push(req);
                setTimeout(function () {
                    if (_this.requests.length > 0)
                        _this.loadingService.isLoading.next(true);
                }, this.loadingService.loadingDelay);
                return rxjs.Observable.create(function (observer) {
                    var subscription = next.handle(req)
                        .subscribe(function (event) {
                        if (event instanceof i1.HttpResponse) {
                            _this.removeRequest(req);
                            observer.next(event);
                        }
                    }, function (err) {
                        _this.removeRequest(req);
                        observer.error(err);
                    }, function () {
                        _this.removeRequest(req);
                        observer.complete();
                    });
                    // remove request from queue when cancelled
                    return function () {
                        _this.removeRequest(req);
                        subscription.unsubscribe();
                    };
                });
            }
        };
        LoadingIntercepter.prototype.skipThisRequest = function (req) {
            var e_2, _a;
            var matched = false;
            try {
                for (var _b = __values(this.urlsToSkip), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var url = _c.value;
                    matched = req.url.match(url) != null;
                    if (matched)
                        break;
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
            return matched;
        };
        return LoadingIntercepter;
    }());
    LoadingIntercepter.ɵprov = i0__namespace.ɵɵdefineInjectable({ factory: function LoadingIntercepter_Factory() { return new LoadingIntercepter(i0__namespace.ɵɵinject(LoadingService), i0__namespace.ɵɵinject(ModConfig)); }, token: LoadingIntercepter, providedIn: "root" });
    LoadingIntercepter.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    LoadingIntercepter.ctorParameters = function () { return [
        { type: LoadingService },
        { type: ModFrameworkConfig, decorators: [{ type: i0.Inject, args: [ModConfig,] }] }
    ]; };

    var CurrentUser = /** @class */ (function () {
        function CurrentUser() {
        }
        return CurrentUser;
    }());

    var CurrentUserService = /** @class */ (function () {
        function CurrentUserService(http, config) {
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
        CurrentUserService.prototype.getDomain = function (url) {
            var u = parseUri__namespace(url);
            return u.host;
        };
        Object.defineProperty(CurrentUserService.prototype, "user", {
            get: function () {
                return this._user;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CurrentUserService.prototype, "browserOk", {
            get: function () {
                return this._browserOk;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CurrentUserService.prototype, "domain", {
            get: function () {
                return this.getDomain(this.loginSiteUrl);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CurrentUserService.prototype, "siteUrl", {
            get: function () {
                return this.loginSiteUrl + (this.loginSiteUrl.endsWith("/") ? "" : "/");
            },
            enumerable: false,
            configurable: true
        });
        CurrentUserService.prototype.browserCheck = function () {
            var _this = this;
            return this.http.get(this.noOpUrl, { withCredentials: false })
                .toPromise()
                .then(function () {
                return _this.http.get(_this.setCookieUrl)
                    .toPromise()
                    .then(function (response) {
                    return _this.http.get(_this.checkCookieUrl)
                        .toPromise().then(function (response) {
                        _this._browserOk = true;
                        return true;
                    });
                })
                    .catch(function (error) {
                    _this._browserOk = false;
                    _this._user = null;
                    return Promise.reject("Domain " + _this.getDomain(_this.setCookieUrl) + " probably doesn't allow CORS from domain " + _this.domain);
                });
            })
                .catch(function (error) {
                _this._browserOk = false;
                _this._user = null;
                return Promise.reject("Can't reach site " + _this.loginSiteUrl);
            });
        };
        CurrentUserService.prototype.preFlight = function () {
            return this.http.options(this.serviceUrl)
                .toPromise()
                .then(function (response) { return response; })
                .catch(this.handleError);
        };
        CurrentUserService.prototype.redirectLogin = function () {
            var returnUrl = window.location.href;
            sessionStorage.setItem('authenticating', 'authenticating');
            var url = this.siteUrl + 'api/login' + "?ReturnUrl=" + returnUrl;
            window.open(url, '_self');
        };
        CurrentUserService.prototype.login = function () {
            var _this = this;
            this.loginPromise = this.http.get(this.serviceUrl)
                .toPromise()
                .then(function (response) {
                var user;
                user = Object.assign(new CurrentUser(), response);
                _this._user = user;
                return user;
            })
                .catch(function (error) {
                return _this.handleError(error);
            });
            return this.loginPromise;
        };
        CurrentUserService.prototype.logout = function () {
            this._user = null;
        };
        CurrentUserService.prototype.handleError = function (error) {
            return Promise.reject(error.message || error);
        };
        CurrentUserService.prototype.isInRole = function (role) {
            return this.user.roles.find(function (x) { return x == role; }) !== undefined;
        };
        CurrentUserService.prototype.isInRoles = function (roles) {
            var _this = this;
            var returnValue = false;
            roles.forEach(function (x) {
                returnValue = returnValue || _this.isInRole(x);
            });
            return returnValue;
        };
        return CurrentUserService;
    }());
    CurrentUserService.ɵprov = i0__namespace.ɵɵdefineInjectable({ factory: function CurrentUserService_Factory() { return new CurrentUserService(i0__namespace.ɵɵinject(i1__namespace.HttpClient), i0__namespace.ɵɵinject(ModConfig)); }, token: CurrentUserService, providedIn: "root" });
    CurrentUserService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    CurrentUserService.ctorParameters = function () { return [
        { type: i1.HttpClient },
        { type: ModFrameworkConfig, decorators: [{ type: i0.Inject, args: [ModConfig,] }] }
    ]; };

    var ModLayoutComponent = /** @class */ (function () {
        function ModLayoutComponent(config) {
            this.userOptionSelect = new i0.EventEmitter();
            this.helpOptionSelect = new i0.EventEmitter();
            this.search = new i0.EventEmitter();
            this.config = config;
        }
        ModLayoutComponent.prototype.ngOnInit = function () {
        };
        ModLayoutComponent.prototype.onMenuClicked = function () {
            this.sideMenu.toggleSideNav();
        };
        ModLayoutComponent.prototype.onUserOptionSelect = function (option) {
            this.userOptionSelect.emit(option);
        };
        ModLayoutComponent.prototype.onHelpOptionSelect = function (option) {
            this.helpOptionSelect.emit(option);
        };
        ModLayoutComponent.prototype.onSearch = function () {
            this.search.emit(this.searchText);
            this.searchText = '';
        };
        return ModLayoutComponent;
    }());
    ModLayoutComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'mod-layout',
                    template: "<mod-loading-overlay></mod-loading-overlay>\r\n<div class=\"mod-layout-container\">\r\n    <div class=\"layout-header\">\r\n        <!--<mod-welcome-banner>\r\n        </mod-welcome-banner>-->\r\n        <mod-header [appName]=\"appName\" (menuClick)=\"onMenuClicked()\" (userOptionSelect)=\"onUserOptionSelect($event)\" (helpOptionSelect)=\"onHelpOptionSelect($event)\">\r\n            <div *ngIf=\"config.showSearch\" style=\"display: flex; justify-content: center;\">\r\n                <input [(ngModel)]=\"searchText\" matInput placeholder=\"Search\" class=\"search-box\" (keyup.enter)=\"onSearch()\">\r\n            </div>\r\n        </mod-header>\r\n    </div>\r\n    <div class=\"layout-content\">\r\n        <mod-side-menu [config]=\"menuConfig\" #sidemenu>\r\n            <ng-content></ng-content>\r\n        </mod-side-menu>\r\n    </div>\r\n</div>\r\n",
                    styles: [".mod-layout-container{display:flex;flex-flow:column;height:100%}.layout-header{flex:0}.layout-content{flex:1;overflow:auto}.search-box{background-color:#fff;box-shadow:none;border:none;min-height:32px;width:50%;color:#000;font-size:14px;padding-top:0;padding-right:15px;border-radius:16px;padding-left:15px;margin-left:15px;margin-right:15px}.search-box:focus{outline:none}"]
                },] }
    ];
    ModLayoutComponent.ctorParameters = function () { return [
        { type: ModFrameworkConfig, decorators: [{ type: i0.Inject, args: [ModConfig,] }] }
    ]; };
    ModLayoutComponent.propDecorators = {
        sideMenu: [{ type: i0.ViewChild, args: ['sidemenu', { static: true },] }],
        appName: [{ type: i0.Input }],
        menuConfig: [{ type: i0.Input }],
        userOptionSelect: [{ type: i0.Output }],
        helpOptionSelect: [{ type: i0.Output }],
        search: [{ type: i0.Output }]
    };

    var ModHeaderComponent = /** @class */ (function () {
        function ModHeaderComponent(config) {
            this.menuClick = new i0.EventEmitter();
            this.userOptionSelect = new i0.EventEmitter();
            this.helpOptionSelect = new i0.EventEmitter();
            this.config = config;
        }
        ModHeaderComponent.prototype.ngOnInit = function () {
        };
        ModHeaderComponent.prototype.onMenuClick = function () {
            this.menuClick.emit();
        };
        ModHeaderComponent.prototype.onUserOptionSelect = function (option) {
            this.userOptionSelect.emit(option);
        };
        ModHeaderComponent.prototype.optionSelected = function (option) {
            this.helpOptionSelect.emit(option);
        };
        return ModHeaderComponent;
    }());
    ModHeaderComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'mod-header',
                    template: "<mat-toolbar class=\"mod-header\">\r\n    <button mat-icon-button (click)=\"onMenuClick()\">\r\n        <mat-icon>\r\n            menu\r\n        </mat-icon>\r\n    </button>\r\n\r\n    <a class=\"logo-text-mark\" [routerLink]=\"['/']\">\r\n        <img class=\"mod-logo\" src=\"/assets/US-OfficeOfManagementAndBudget-Seal.png\" tabindex=\"-1\" />\r\n        <div tabindex=\"-1\" alt=\"Textmark\" class=\"text-mark\">{{ appName }}</div>\r\n    </a>\r\n\r\n    <span class=\"fill-remaining-space\">\r\n        <ng-content></ng-content>\r\n    </span>\r\n\r\n    <div class=\"welcome-user\">\r\n        <mod-user-display [showUser]=\"true\" (selectOption)=\"onUserOptionSelect($event)\"></mod-user-display>\r\n        <div *ngIf=\"config.showHelp\">\r\n            <button mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"Help Menu\">\r\n                <mat-icon>help</mat-icon>\r\n            </button>\r\n            <mat-menu #menu=\"matMenu\">\r\n                <button mat-menu-item *ngFor=\"let option of config.helpOptions\" (click)=\"optionSelected(option)\">{{ option }}</button>\r\n            </mat-menu>\r\n        </div>\r\n    </div>\r\n</mat-toolbar>\r\n",
                    styles: [".mod-header{justify-content:center;background-color:#112e51;display:flex;color:#fff}a{text-decoration:none}.logo-text-mark{cursor:pointer;display:flex;align-items:center}.text-mark{cursor:pointer;margin-left:12px;font-size:1.4em;display:inline-block;vertical-align:middle;color:#d8b304}.mod-logo{margin-left:4px;height:50px}.fill-remaining-space{flex:1 1 auto;align-items:center;margin-left:15px}.welcome-user{font-size:.85em;padding-top:2px;padding-right:5px;flex:1;display:flex;justify-content:flex-end}.mat-button-base{height:auto;line-height:inherit}"]
                },] }
    ];
    ModHeaderComponent.ctorParameters = function () { return [
        { type: ModFrameworkConfig, decorators: [{ type: i0.Inject, args: [ModConfig,] }] }
    ]; };
    ModHeaderComponent.propDecorators = {
        appName: [{ type: i0.Input }],
        menuClick: [{ type: i0.Output }],
        userOptionSelect: [{ type: i0.Output }],
        helpOptionSelect: [{ type: i0.Output }]
    };

    var ModWelcomeBanner = /** @class */ (function () {
        function ModWelcomeBanner() {
            this.onLogin = new i0.EventEmitter();
            this.onLogout = new i0.EventEmitter();
        }
        ModWelcomeBanner.prototype.ngOnInit = function () {
        };
        return ModWelcomeBanner;
    }());
    ModWelcomeBanner.decorators = [
        { type: i0.Component, args: [{
                    selector: 'mod-welcome-banner',
                    template: "<header class=\"mod-header\" role=\"banner\">\r\n    <div class=\"mod-welcome-banner\">\r\n        <div class=\"welcome-user\">\r\n            <mod-user-display></mod-user-display>\r\n        </div>\r\n    </div>\r\n</header>\r\n",
                    styles: [".mod-header{display:flex;flex-direction:column}.mod-welcome-banner{padding-left:10px;padding-right:10px;background-color:#f0f0f0;padding-bottom:0;display:flex;font-family:Source Sans Pro Web,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif}.welcome-user{font-weight:700;font-size:.85em;padding-top:2px;padding-right:5px;flex:1;display:flex;justify-content:flex-end}.loginout-button{vertical-align:middle;width:auto!important;display:inline!important}.loginout-text{align-items:center}"]
                },] }
    ];
    ModWelcomeBanner.ctorParameters = function () { return []; };
    ModWelcomeBanner.propDecorators = {
        onLogin: [{ type: i0.Output }],
        onLogout: [{ type: i0.Output }]
    };

    var ModSideMenuComponent = /** @class */ (function () {
        function ModSideMenuComponent(router, activatedRoute, renderer, userService) {
            this.router = router;
            this.activatedRoute = activatedRoute;
            this.renderer = renderer;
            this.userService = userService;
            this.expanded = true;
            this.opened = true;
        }
        ModSideMenuComponent.prototype.ngOnInit = function () {
        };
        ModSideMenuComponent.prototype.ngOnChanges = function (changes) {
            if (changes['config'] && changes['config'].previousValue != changes['config'].currentValue) {
                this.selectCurrentRoute();
            }
        };
        ModSideMenuComponent.prototype.selectCurrentRoute = function () {
            var e_1, _a, e_2, _b;
            var urls = this.router.url.split('/');
            try {
                for (var _c = __values(this.config.sections), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var section = _d.value;
                    try {
                        for (var _e = (e_2 = void 0, __values(section.menuItems)), _f = _e.next(); !_f.done; _f = _e.next()) {
                            var item = _f.value;
                            if (urls[urls.length - 1].toString() == item.route) {
                                this.menuOption = item.text;
                                break;
                            }
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_1) throw e_1.error; }
            }
        };
        // Used by menu item keyup.enter handler to provide keyboard navigation
        ModSideMenuComponent.prototype.navigateTo = function (urlSegment) {
            var _this = this;
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
            this.router.navigateByUrl(url).then(function (x) {
                if (_this.mainContentElement)
                    _this.mainContentElement.nativeElement.focus();
            });
        };
        ModSideMenuComponent.prototype.expandMenu = function (expanded) {
            if (expanded === void 0) { expanded = true; }
            this.expanded = expanded;
        };
        ModSideMenuComponent.prototype.toggleSideNav = function () {
            var _this = this;
            //this.sidenav.toggle();
            var opening = !this.opened;
            if (opening) {
                this.opened = !this.opened;
                this.sidenav.toggle();
            }
            else {
                this.sidenav.toggle().then(function () {
                    _this.opened = !_this.opened;
                });
            }
        };
        Object.defineProperty(ModSideMenuComponent.prototype, "viewableSections", {
            get: function () {
                var _this = this;
                var sections = [];
                this.config.sections.forEach(function (section) {
                    if (!section.allowedRoles || _this.userService.isInRoles(section.allowedRoles))
                        sections.push(section);
                });
                return sections;
            },
            enumerable: false,
            configurable: true
        });
        ModSideMenuComponent.prototype.getViewableMenuItems = function (section) {
            var _this = this;
            var items = [];
            section.menuItems.forEach(function (item) {
                if (!item.allowedRoles || _this.userService.isInRoles(item.allowedRoles))
                    items.push(item);
            });
            return items;
        };
        return ModSideMenuComponent;
    }());
    ModSideMenuComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'mod-side-menu',
                    template: "<mat-sidenav-container class=\"mod-side-menu-container\">\r\n    <mat-sidenav #sidenav mode=\"side\" opened role=\"navigation\" id=\"navigation-menu\" [ngClass]=\"{'mod-side-menu' : true, 'collapsed' : (!expanded && opened)}\">\r\n        <h1 mat-subheader>\r\n            {{ expanded ? config.title : \"\" }}\r\n            <mat-icon *ngIf=\"expanded\" class=\"menu-close\" (click)=\"expandMenu(!this.expanded)\">\r\n                keyboard_arrow_left\r\n            </mat-icon>\r\n            <mat-icon *ngIf=\"!expanded\" class=\"menu-open\" (click)=\"expandMenu(!this.expanded)\">\r\n                keyboard_arrow_right\r\n            </mat-icon>\r\n        </h1>\r\n\r\n        <div *ngFor=\"let section of viewableSections\">\r\n            <h1 mat-subheader>\r\n                {{ expanded ? section.name : \"\" }}\r\n            </h1>\r\n            <mat-nav-list>\r\n                <mat-list-item *ngFor=\"let item of getViewableMenuItems(section)\"\r\n                               [routerLink]=\"item.route\"\r\n                               routerLinkActive=\"active\"\r\n                               [routerLinkActiveOptions]=\"{exact: true}\"\r\n                               (keyup.enter)=\"navigateTo(item.route)\">\r\n                    <mat-icon mat-list-icon [matTooltip]=\"item.text\">{{item.icon}}</mat-icon>\r\n                    {{ expanded ? item.text : \"\"}}\r\n                </mat-list-item>\r\n            </mat-nav-list>\r\n        </div>\r\n    </mat-sidenav>\r\n    <mat-sidenav-content [ngClass]=\"{'mod-side-menu-content' : true, 'collapsed' : (!expanded && opened)}\" role=\"main\" #mainContent tabindex=\"0\">\r\n        <ng-content></ng-content>\r\n    </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n",
                    styles: ["#main-content:focus{border:1px solid #5b9acf}.menu-close{position:absolute;right:0;cursor:pointer}.menu-open{text-align:center;width:100%;cursor:pointer}.mod-side-menu{display:flex;align-items:flex-start;justify-content:left;width:250px;transition:width .25s}.mod-side-menu.collapsed{width:76px!important;transition:width .25s}.mod-side-menu-container{display:flex;height:100%}.mod-side-menu-content{transition:margin-left .25s;width:100%;overflow:auto;display:flex;align-items:stretch;outline:none!important}.mod-side-menu-content.collapsed{margin-left:76px!important;transition:margin-left .25s}h2{overflow:hidden;white-space:nowrap;text-overflow:clip}.mat-subheader{font-size:14px;line-height:20px;max-height:56px;color:#888;padding:12px 12px 12px 20px!important;margin-bottom:0!important;margin-top:0!important;border-left:5px solid #bbb;margin-left:-5px}.mat-subheader .mat-icon{padding-left:4px;margin-right:16px}.mat-expansion-panel{box-shadow:none;margin:0}.mat-expansion-indicator{line-height:0!important}mat-expansion-panel-header[aria-disabled=true]{color:#000;color:initial}.mat-expansion-panel-header{height:56px!important;max-height:56px!important;border-left:5px solid #bbb}.mat-expansion-panel-header-title{max-height:24px}.mat-expansion-panel.active>.mat-expansion-panel-header{border-color:#5b9acf}.mat-expansion-panel-header-title>.mat-icon{margin-right:16px}.mat-expansion-panel.mat-expanded{background-color:#eee}::ng-deep .mat-expansion-panel-body{padding:0!important}::ng-deep .mat-drawer-container{display:flex;align-items:stretch}.mat-list-icon{padding-right:16px!important;font-size:22px!important}.mat-list-item{font-size:15px!important;border-left:5px solid #bbb;margin-left:-5px;height:56px!important;max-height:56px!important;line-height:22.5px!important;width:auto!important}.mat-list-item:focus{border:1px solid #5b9acf}.mat-list-item-content{padding:0 24px!important}.mat-list-item.active{border-color:#5b9acf;background-color:#d1d1d1}.mat-list-base{padding-top:0}"]
                },] }
    ];
    ModSideMenuComponent.ctorParameters = function () { return [
        { type: router.Router },
        { type: router.ActivatedRoute },
        { type: i0.Renderer2 },
        { type: CurrentUserService }
    ]; };
    ModSideMenuComponent.propDecorators = {
        config: [{ type: i0.Input }],
        mainContentElement: [{ type: i0.ViewChild, args: ['mainContent', { static: true },] }],
        sidenav: [{ type: i0.ViewChild, args: ['sidenav', { static: true },] }]
    };

    var ModProgressSpinnerComponent = /** @class */ (function () {
        function ModProgressSpinnerComponent() {
            this.value = 100;
            this.diameter = 100;
            this.mode = "indeterminate";
            this.strokeWidth = 10;
            this.overlay = false;
            this.color = "primary";
        }
        ModProgressSpinnerComponent.prototype.ngOnInit = function () {
        };
        return ModProgressSpinnerComponent;
    }());
    ModProgressSpinnerComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'mod-progress-spinner',
                    template: "<ng-container *ngIf=\"overlay;else progressSpinner\">\r\n    <div class=\"overlay\">\r\n        <div class=\"center\">\r\n            <ng-template [ngTemplateOutlet]=\"progressSpinner\"></ng-template>\r\n        </div>\r\n    </div>\r\n</ng-container>\r\n<ng-template #progressSpinner>\r\n    <mat-progress-spinner [diameter]=\"diameter\"\r\n                          [mode]=\"mode\"\r\n                          [color]=\"color\"\r\n                          [strokeWidth]=\"strokeWidth\"\r\n                          [value]=\"value\">\r\n    </mat-progress-spinner>\r\n</ng-template>\r\n",
                    styles: [".center{position:absolute;top:50%;left:50%;transform:translateX(-50%) translateY(-50%)}.overlay{height:100vh;width:100%;background-color:rgba(0,0,0,.286);z-index:10;top:0;left:0;position:fixed}"]
                },] }
    ];
    ModProgressSpinnerComponent.ctorParameters = function () { return []; };
    ModProgressSpinnerComponent.propDecorators = {
        value: [{ type: i0.Input }],
        diameter: [{ type: i0.Input }],
        mode: [{ type: i0.Input }],
        strokeWidth: [{ type: i0.Input }],
        overlay: [{ type: i0.Input }],
        color: [{ type: i0.Input }]
    };

    var ModLoadingOverlayComponent = /** @class */ (function () {
        function ModLoadingOverlayComponent(loadingService) {
            var _this = this;
            this.loadingService = loadingService;
            this.showProgressSpinner = false;
            this.loadingService.isLoading.subscribe(function (isLoading) {
                if (isLoading) {
                    _this.showProgressSpinner = true;
                }
                else {
                    _this.showProgressSpinner = false;
                }
            });
        }
        ModLoadingOverlayComponent.prototype.ngOnInit = function () {
        };
        return ModLoadingOverlayComponent;
    }());
    ModLoadingOverlayComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'mod-loading-overlay',
                    template: "<mod-progress-spinner *ngIf=\"showProgressSpinner\" [overlay]=\"true\"></mod-progress-spinner>\r\n",
                    styles: [""]
                },] }
    ];
    ModLoadingOverlayComponent.ctorParameters = function () { return [
        { type: LoadingService }
    ]; };

    var ModUserDisplayComponent = /** @class */ (function () {
        function ModUserDisplayComponent(userService, config) {
            this.userService = userService;
            this.showUser = false;
            this.selectOption = new i0.EventEmitter();
            this.config = config;
            this.config.userOptions.push('User Profile');
        }
        ModUserDisplayComponent.prototype.ngOnInit = function () {
        };
        Object.defineProperty(ModUserDisplayComponent.prototype, "user", {
            get: function () {
                return this.userService.user;
            },
            enumerable: false,
            configurable: true
        });
        ModUserDisplayComponent.prototype.optionSelected = function (option) {
            if (option == "User Profile") {
                window.open(this.config.profileUrl, '_blank');
            }
            else {
                this.selectOption.emit(option);
            }
        };
        return ModUserDisplayComponent;
    }());
    ModUserDisplayComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'mod-user-display',
                    template: "<div *ngIf=\"user\">\r\n    Welcome \r\n    <span style=\"padding-right: 5px;\">{{ user.displayName }}</span>\r\n    <ng-container *ngIf=\"showUser;else showMenu\">\r\n        <button mat-icon-button [matMenuTriggerFor]=\"menu\" class=\"mod-user-icon\" aria-label=\"User Menu\">\r\n            <mat-icon>account_circle</mat-icon>\r\n        </button>\r\n    </ng-container>\r\n    <ng-template #showMenu>\r\n        <button mat-icon-button [matMenuTriggerFor]=\"menu\" class=\"mat-icon-button\" aria-label=\"User Menu\">\r\n            <mat-icon>keyboard_arrow_down</mat-icon>\r\n        </button>\r\n    </ng-template>\r\n    <mat-menu #menu=\"matMenu\">\r\n        <button mat-menu-item *ngFor=\"let option of config.userOptions\" (click)=\"optionSelected(option)\">{{ option }}</button>\r\n    </mat-menu>\r\n</div>\r\n",
                    styles: [".delete-potentially-circle-user-icon{border:2px solid!important;border-color:inherit!important;border-radius:50%!important;padding:5px!important;margin-left:15px!important}.mat-button-base{height:auto;line-height:inherit}"]
                },] }
    ];
    ModUserDisplayComponent.ctorParameters = function () { return [
        { type: CurrentUserService },
        { type: ModFrameworkConfig, decorators: [{ type: i0.Inject, args: [ModConfig,] }] }
    ]; };
    ModUserDisplayComponent.propDecorators = {
        showUser: [{ type: i0.Input }],
        selectOption: [{ type: i0.Output }]
    };

    var BrowserCheckComponent = /** @class */ (function () {
        function BrowserCheckComponent(currentUserService) {
            this.currentUserService = currentUserService;
        }
        BrowserCheckComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.currentUserService.browserCheck().then(function (response) {
                _this.browserFail = '';
                return;
            }).catch(function (error) {
                $("#loginout").css("display", "none");
                _this.browserFail = error;
                _this.loginSite = _this.currentUserService.siteUrl;
                _this.loginDomain = _this.currentUserService.domain;
                _this.myDomain = _this.currentUserService.getDomain(window.location.href);
            });
        };
        return BrowserCheckComponent;
    }());
    BrowserCheckComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'mod-browser-check',
                    template: "<div *ngIf=\"browserFail\" class=\"container-fluid browser-check-container\">\r\n    <span class=\"fa fa-warning browser-check-icon\"></span><span class=\"browser-check-header-text\">&nbsp;&nbsp;You can't log in to this site.</span>\r\n    <div class=\"browser-check-text\">\r\n        Possible reasons for this include:\r\n        <ul>\r\n            <li>\r\n                You can't reach the site {{loginSite}}.\r\n                <ul>\r\n                    <li>Please check your network connection.</li>\r\n                </ul>\r\n            </li>\r\n            <li>\r\n                Site {{loginSite}} does not allow cross-origin scripting (CORS) from your domain {{myDomain}}.\r\n                <ul>\r\n                    <li>Please contact the administrator of {{loginSite}} and request access for your site.</li>\r\n                </ul>\r\n            </li>\r\n            <li>\r\n                Your browser doesn't accept third-party cookies from domain {{loginDomain}}.\r\n                <ul>\r\n                    <li>In your browser settings, either allow all third-party cookies, or </li>\r\n                    <li>Disallow third-party cookies, but add {{loginDomain}} as an exception.</li>\r\n                </ul>\r\n            </li>\r\n        </ul>\r\n        <i>The actual error returned is \"{{browserFail}}\".<br /></i>\r\n        Please correct these problems and try again.\r\n    </div>\r\n</div>\r\n",
                    styles: [".browser-check-container{border:4px solid red;padding-top:5px;padding-bottom:5px;padding-left:10px}.browser-check-icon{font-size:36px;color:red;vertical-align:middle}.browser-check-text{font-size:16px;vertical-align:middle;padding-left:30px;padding-top:10px}.browser-check-header-text{font-size:24px;font-weight:700;vertical-align:middle}"]
                },] }
    ];
    BrowserCheckComponent.ctorParameters = function () { return [
        { type: CurrentUserService }
    ]; };

    // Add credentials to every request.
    // Credit to https://weblog.west-wind.com/posts/2019/Apr/07/Creating-a-custom-HttpInterceptor-to-handle-withCredentials
    var HttpRequestInterceptor = /** @class */ (function () {
        function HttpRequestInterceptor(userService) {
            this.userService = userService;
        }
        HttpRequestInterceptor.prototype.intercept = function (req, next) {
            var _this = this;
            req = req.clone({
                withCredentials: true
            });
            return next.handle(req).pipe(operators.filter(function (event) { return event instanceof i1.HttpResponse; }), operators.tap(function (event) {
                // Don't force login when making a call to claims/user
                if (!_this.userService.user && !event.url.endsWith("claims/user"))
                    _this.userService.login();
            }, function (err) {
                if (err.status == 0)
                    _this.userService.redirectLogin();
            }));
        };
        return HttpRequestInterceptor;
    }());
    HttpRequestInterceptor.decorators = [
        { type: i0.Injectable }
    ];
    HttpRequestInterceptor.ctorParameters = function () { return [
        { type: CurrentUserService }
    ]; };

    var RoleGuardService = /** @class */ (function () {
        function RoleGuardService(userService, router) {
            this.userService = userService;
            this.router = router;
        }
        RoleGuardService.prototype.canActivate = function (route) {
            // this will be passed from the route config
            // on the data property
            var expectedRoles = route.data.expectedRoles;
            if (!this.userService.user || !this.userService.isInRoles(expectedRoles)) {
                this.router.navigate(['/']);
                return false;
            }
            return true;
        };
        return RoleGuardService;
    }());
    RoleGuardService.decorators = [
        { type: i0.Injectable }
    ];
    RoleGuardService.ctorParameters = function () { return [
        { type: CurrentUserService },
        { type: router.Router }
    ]; };

    function initiateSingleSignOn(userService) {
        return function () {
            var _a;
            var auth = (_a = sessionStorage.getItem("authenticating")) === null || _a === void 0 ? void 0 : _a.toString();
            if (auth) {
                return userService.login().then(function (response) {
                    sessionStorage.removeItem("authenticating");
                });
            }
            else {
                userService.redirectLogin();
                var promise = new Promise(function (resolve, reject) {
                    reject("Authenticating");
                });
                return promise;
            }
        };
    }
    var ModFrameworkModule = /** @class */ (function () {
        function ModFrameworkModule(parentModule) {
            if (parentModule) {
                throw new Error('ModFrameworkModule is already loaded. Import it in the AppModule only');
            }
        }
        ModFrameworkModule.forRoot = function (config) {
            if (config === void 0) { config = null; }
            return {
                ngModule: ModFrameworkModule,
                providers: [
                    {
                        provide: ModConfig,
                        useValue: config
                    },
                    CurrentUserService,
                    {
                        provide: i1.HTTP_INTERCEPTORS,
                        useClass: LoadingIntercepter,
                        multi: true
                    },
                    LoadingService,
                    // see https://weblog.west-wind.com/posts/2019/Apr/07/Creating-a-custom-HttpInterceptor-to-handle-withCredentials
                    {
                        provide: i1.HTTP_INTERCEPTORS,
                        useClass: HttpRequestInterceptor,
                        multi: true
                    },
                    {
                        provide: i0.APP_INITIALIZER,
                        useFactory: initiateSingleSignOn,
                        multi: true,
                        deps: [CurrentUserService]
                    },
                    RoleGuardService,
                ]
            };
        };
        return ModFrameworkModule;
    }());
    ModFrameworkModule.decorators = [
        { type: i0.NgModule, args: [{
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
                        common.CommonModule,
                        forms.FormsModule,
                        forms.ReactiveFormsModule,
                        i1.HttpClientModule,
                        router.RouterModule,
                        icon.MatIconModule, divider.MatDividerModule, list.MatListModule, sidenav.MatSidenavModule, toolbar.MatToolbarModule, menu.MatMenuModule, button.MatButtonModule, progressSpinner.MatProgressSpinnerModule, autocomplete.MatAutocompleteModule, tooltip.MatTooltipModule, formField.MatFormFieldModule, input.MatInputModule, select.MatSelectModule,
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
    ModFrameworkModule.ctorParameters = function () { return [
        { type: ModFrameworkModule, decorators: [{ type: i0.Optional }, { type: i0.SkipSelf }] }
    ]; };

    var DtoBase = /** @class */ (function () {
        function DtoBase() {
            this.id = 0;
        }
        return DtoBase;
    }());

    var ModSideMenuConfig = /** @class */ (function () {
        function ModSideMenuConfig() {
            this.sections = [];
        }
        return ModSideMenuConfig;
    }());
    var ModMenuSection = /** @class */ (function () {
        function ModMenuSection() {
            this.name = "";
            this.shortName = "";
            this.visible = true;
            this.allowedRoles = [];
            this.menuItems = [];
        }
        return ModMenuSection;
    }());
    var ModMenuItem = /** @class */ (function () {
        function ModMenuItem() {
            this.allowedRoles = [];
        }
        return ModMenuItem;
    }());

    var UserInfo = /** @class */ (function () {
        function UserInfo(uniqueName, upn) {
            this.uniqueName = uniqueName;
            this.upn = upn;
            console.log(uniqueName + '[]asdf');
            console.log(uniqueName == 'LOGIN\\kuennen_s');
            this.displayName = (uniqueName == "LOGIN\\kuennen_s") ? "Kuennen, Steve (Contractor)" : uniqueName;
            this.userProfileUrl = "";
        }
        return UserInfo;
    }());

    var Logging = /** @class */ (function () {
        function Logging() {
        }
        Logging.log = function (val) {
            if (this.logToConsole)
                console.log(val);
        };
        return Logging;
    }());
    Logging.logToConsole = true;

    var ModPromiseServiceBase = /** @class */ (function () {
        function ModPromiseServiceBase(http, url, endpoint, TCreator) {
            this.http = http;
            this.url = url;
            this.endpoint = endpoint;
            this.TCreator = TCreator;
            this.url = (url.endsWith('/') ? url.slice(0, -1) : url) + '/api';
        }
        ModPromiseServiceBase.prototype.save = function (item) {
            if (item.id <= 0)
                return this.create(item);
            else
                return this.update(item);
        };
        ModPromiseServiceBase.prototype.getAll = function (params) {
            var _this = this;
            var url = this.url + "/" + this.endpoint;
            return this.http
                .get(url, { params: params })
                .toPromise()
                .then(function (response) {
                var data = [];
                response.forEach(function (x) {
                    var obj = _this.formatResponse(x);
                    data.push(obj);
                });
                return data;
            })
                .catch(this.handleError);
        };
        ModPromiseServiceBase.prototype.create = function (item) {
            var _this = this;
            var url = this.url + "/" + this.endpoint;
            return this.http.post(url, item)
                .toPromise()
                .then(function (response) {
                var obj = _this.formatResponse(response);
                return obj;
            })
                .catch(this.handleError);
        };
        ModPromiseServiceBase.prototype.get = function (id) {
            var _this = this;
            var url = this.url + "/" + this.endpoint + "/" + id;
            return this.http.get(url)
                .toPromise()
                .then(function (response) {
                var obj = _this.formatResponse(response);
                return obj;
            })
                .catch(this.handleError);
        };
        ModPromiseServiceBase.prototype.update = function (item) {
            var _this = this;
            var url = this.url + "/" + this.endpoint + "/" + item.id;
            return this.http.put(url, item)
                .toPromise()
                .then(function (response) {
                var obj = _this.formatResponse(response);
                return obj;
            })
                .catch(this.handleError);
        };
        ModPromiseServiceBase.prototype.delete = function (id) {
            return this.http.delete(this.url + "/" + this.endpoint + "/" + id).toPromise();
        };
        // Override to fully instantiate child objects.  Be sure to call super.formatResponse first to instantiate the parent object.
        ModPromiseServiceBase.prototype.formatResponse = function (data) {
            return Object.assign(new this.TCreator(), data);
        };
        ModPromiseServiceBase.prototype.handleError = function (error) {
            Logging.log(error);
            return Promise.reject(error.message || error);
        };
        return ModPromiseServiceBase;
    }());

    /*
     * Public API Surface of mod-framework
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.BrowserCheckComponent = BrowserCheckComponent;
    exports.CurrentUserService = CurrentUserService;
    exports.DtoBase = DtoBase;
    exports.LoadingIntercepter = LoadingIntercepter;
    exports.LoadingService = LoadingService;
    exports.ModFrameworkConfig = ModFrameworkConfig;
    exports.ModFrameworkModule = ModFrameworkModule;
    exports.ModHeaderComponent = ModHeaderComponent;
    exports.ModLayoutComponent = ModLayoutComponent;
    exports.ModLoadingOverlayComponent = ModLoadingOverlayComponent;
    exports.ModMenuItem = ModMenuItem;
    exports.ModMenuSection = ModMenuSection;
    exports.ModProgressSpinnerComponent = ModProgressSpinnerComponent;
    exports.ModPromiseServiceBase = ModPromiseServiceBase;
    exports.ModSideMenuComponent = ModSideMenuComponent;
    exports.ModSideMenuConfig = ModSideMenuConfig;
    exports.ModUserDisplayComponent = ModUserDisplayComponent;
    exports.ModWelcomeBanner = ModWelcomeBanner;
    exports.RoleGuardService = RoleGuardService;
    exports.UserInfo = UserInfo;
    exports.initiateSingleSignOn = initiateSingleSignOn;
    exports.ɵa = ModConfig;
    exports.ɵb = HttpRequestInterceptor;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=mod-framework.umd.js.map
