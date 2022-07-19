(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router'), require('@angular/common/http'), require('rxjs'), require('@angular/material/toolbar'), require('parse-uri'), require('@angular/common'), require('@angular/material/menu'), require('@angular/material/button'), require('@angular/material/icon'), require('@angular/material/progress-spinner'), require('@angular/material/sidenav'), require('@angular/material/list'), require('@angular/material/tooltip'), require('@angular/material/input'), require('@angular/forms'), require('@angular/material/divider'), require('@angular/material/autocomplete'), require('@angular/material/form-field'), require('@angular/material/select'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('mod-framework', ['exports', '@angular/core', '@angular/router', '@angular/common/http', 'rxjs', '@angular/material/toolbar', 'parse-uri', '@angular/common', '@angular/material/menu', '@angular/material/button', '@angular/material/icon', '@angular/material/progress-spinner', '@angular/material/sidenav', '@angular/material/list', '@angular/material/tooltip', '@angular/material/input', '@angular/forms', '@angular/material/divider', '@angular/material/autocomplete', '@angular/material/form-field', '@angular/material/select', 'rxjs/operators'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['mod-framework'] = {}, global.ng.core, global.ng.router, global.ng.common.http, global.rxjs, global.ng.material.toolbar, global.parseUri, global.ng.common, global.ng.material.menu, global.ng.material.button, global.ng.material.icon, global.ng.material.progressSpinner, global.ng.material.sidenav, global.ng.material.list, global.ng.material.tooltip, global.ng.material.input, global.ng.forms, global.ng.material.divider, global.ng.material.autocomplete, global.ng.material.formField, global.ng.material.select, global.rxjs.operators));
}(this, (function (exports, i0, i1$2, i1, rxjs, i1$1, parseUri, i4, i3, i4$1, i5, i2, i3$1, i5$1, i7, i5$2, i6, divider, autocomplete, formField, select, operators) { 'use strict';

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
    var i1__namespace$2 = /*#__PURE__*/_interopNamespace(i1$2);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var i1__namespace$1 = /*#__PURE__*/_interopNamespace(i1$1);
    var parseUri__namespace = /*#__PURE__*/_interopNamespace(parseUri);
    var i4__namespace = /*#__PURE__*/_interopNamespace(i4);
    var i3__namespace = /*#__PURE__*/_interopNamespace(i3);
    var i4__namespace$1 = /*#__PURE__*/_interopNamespace(i4$1);
    var i5__namespace = /*#__PURE__*/_interopNamespace(i5);
    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);
    var i3__namespace$1 = /*#__PURE__*/_interopNamespace(i3$1);
    var i5__namespace$1 = /*#__PURE__*/_interopNamespace(i5$1);
    var i7__namespace = /*#__PURE__*/_interopNamespace(i7);
    var i5__namespace$2 = /*#__PURE__*/_interopNamespace(i5$2);
    var i6__namespace = /*#__PURE__*/_interopNamespace(i6);

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
    LoadingService.ɵfac = function LoadingService_Factory(t) { return new (t || LoadingService)(i0__namespace.ɵɵinject(ModConfig)); };
    LoadingService.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: LoadingService, factory: LoadingService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(LoadingService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () {
            return [{ type: ModFrameworkConfig, decorators: [{
                            type: i0.Inject,
                            args: [ModConfig]
                        }] }];
        }, null);
    })();

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
    LoadingIntercepter.ɵfac = function LoadingIntercepter_Factory(t) { return new (t || LoadingIntercepter)(i0__namespace.ɵɵinject(LoadingService), i0__namespace.ɵɵinject(ModConfig)); };
    LoadingIntercepter.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: LoadingIntercepter, factory: LoadingIntercepter.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(LoadingIntercepter, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () {
            return [{ type: LoadingService }, { type: ModFrameworkConfig, decorators: [{
                            type: i0.Inject,
                            args: [ModConfig]
                        }] }];
        }, null);
    })();

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
    CurrentUserService.ɵfac = function CurrentUserService_Factory(t) { return new (t || CurrentUserService)(i0__namespace.ɵɵinject(i1__namespace.HttpClient), i0__namespace.ɵɵinject(ModConfig)); };
    CurrentUserService.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: CurrentUserService, factory: CurrentUserService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(CurrentUserService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () {
            return [{ type: i1__namespace.HttpClient }, { type: ModFrameworkConfig, decorators: [{
                            type: i0.Inject,
                            args: [ModConfig]
                        }] }];
        }, null);
    })();

    function ModProgressSpinnerComponent_ng_container_0_ng_template_3_Template(rf, ctx) { }
    function ModProgressSpinnerComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainerStart(0);
            i0__namespace.ɵɵelementStart(1, "div", 2);
            i0__namespace.ɵɵelementStart(2, "div", 3);
            i0__namespace.ɵɵtemplate(3, ModProgressSpinnerComponent_ng_container_0_ng_template_3_Template, 0, 0, "ng-template", 4);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            i0__namespace.ɵɵnextContext();
            var _r1 = i0__namespace.ɵɵreference(2);
            i0__namespace.ɵɵadvance(3);
            i0__namespace.ɵɵproperty("ngTemplateOutlet", _r1);
        }
    }
    function ModProgressSpinnerComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "mat-progress-spinner", 5);
        }
        if (rf & 2) {
            var ctx_r2 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("diameter", ctx_r2.diameter)("mode", ctx_r2.mode)("color", ctx_r2.color)("strokeWidth", ctx_r2.strokeWidth)("value", ctx_r2.value);
        }
    }
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
    ModProgressSpinnerComponent.ɵfac = function ModProgressSpinnerComponent_Factory(t) { return new (t || ModProgressSpinnerComponent)(); };
    ModProgressSpinnerComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: ModProgressSpinnerComponent, selectors: [["mod-progress-spinner"]], inputs: { value: "value", diameter: "diameter", mode: "mode", strokeWidth: "strokeWidth", overlay: "overlay", color: "color" }, decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["progressSpinner", ""], [1, "overlay"], [1, "center"], [3, "ngTemplateOutlet"], [3, "diameter", "mode", "color", "strokeWidth", "value"]], template: function ModProgressSpinnerComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵtemplate(0, ModProgressSpinnerComponent_ng_container_0_Template, 4, 1, "ng-container", 0);
                i0__namespace.ɵɵtemplate(1, ModProgressSpinnerComponent_ng_template_1_Template, 1, 5, "ng-template", null, 1, i0__namespace.ɵɵtemplateRefExtractor);
            }
            if (rf & 2) {
                var _r1 = i0__namespace.ɵɵreference(2);
                i0__namespace.ɵɵproperty("ngIf", ctx.overlay)("ngIfElse", _r1);
            }
        }, directives: [i4__namespace.NgIf, i4__namespace.NgTemplateOutlet, i2__namespace.MatProgressSpinner], styles: [".center[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translateX(-50%) translateY(-50%)}.overlay[_ngcontent-%COMP%]{height:100vh;width:100%;background-color:rgba(0,0,0,.286);z-index:10;top:0;left:0;position:fixed}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ModProgressSpinnerComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'mod-progress-spinner',
                        templateUrl: './mod-progress-spinner.component.html',
                        styleUrls: ['./mod-progress-spinner.component.scss']
                    }]
            }], function () { return []; }, { value: [{
                    type: i0.Input
                }], diameter: [{
                    type: i0.Input
                }], mode: [{
                    type: i0.Input
                }], strokeWidth: [{
                    type: i0.Input
                }], overlay: [{
                    type: i0.Input
                }], color: [{
                    type: i0.Input
                }] });
    })();

    function ModLoadingOverlayComponent_mod_progress_spinner_0_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "mod-progress-spinner", 1);
        }
        if (rf & 2) {
            i0__namespace.ɵɵproperty("overlay", true);
        }
    }
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
    ModLoadingOverlayComponent.ɵfac = function ModLoadingOverlayComponent_Factory(t) { return new (t || ModLoadingOverlayComponent)(i0__namespace.ɵɵdirectiveInject(LoadingService)); };
    ModLoadingOverlayComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: ModLoadingOverlayComponent, selectors: [["mod-loading-overlay"]], decls: 1, vars: 1, consts: [[3, "overlay", 4, "ngIf"], [3, "overlay"]], template: function ModLoadingOverlayComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵtemplate(0, ModLoadingOverlayComponent_mod_progress_spinner_0_Template, 1, 1, "mod-progress-spinner", 0);
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("ngIf", ctx.showProgressSpinner);
            }
        }, directives: [i4__namespace.NgIf, ModProgressSpinnerComponent], styles: [""] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ModLoadingOverlayComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'mod-loading-overlay',
                        templateUrl: './mod-loading-overlay.component.html',
                        styleUrls: ['./mod-loading-overlay.component.scss']
                    }]
            }], function () { return [{ type: LoadingService }]; }, null);
    })();

    function ModUserDisplayComponent_div_0_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainerStart(0);
            i0__namespace.ɵɵelementStart(1, "button", 6);
            i0__namespace.ɵɵelementStart(2, "mat-icon");
            i0__namespace.ɵɵtext(3, "account_circle");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            i0__namespace.ɵɵnextContext();
            var _r4 = i0__namespace.ɵɵreference(7);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("matMenuTriggerFor", _r4);
        }
    }
    function ModUserDisplayComponent_div_0_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "button", 7);
            i0__namespace.ɵɵelementStart(1, "mat-icon");
            i0__namespace.ɵɵtext(2, "keyboard_arrow_down");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0__namespace.ɵɵnextContext();
            var _r4 = i0__namespace.ɵɵreference(7);
            i0__namespace.ɵɵproperty("matMenuTriggerFor", _r4);
        }
    }
    function ModUserDisplayComponent_div_0_button_8_Template(rf, ctx) {
        if (rf & 1) {
            var _r8_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "button", 8);
            i0__namespace.ɵɵlistener("click", function ModUserDisplayComponent_div_0_button_8_Template_button_click_0_listener() { var restoredCtx = i0__namespace.ɵɵrestoreView(_r8_1); var option_r6 = restoredCtx.$implicit; var ctx_r7 = i0__namespace.ɵɵnextContext(2); return ctx_r7.optionSelected(option_r6); });
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var option_r6 = ctx.$implicit;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate(option_r6);
        }
    }
    function ModUserDisplayComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div");
            i0__namespace.ɵɵelementStart(1, "span", 1);
            i0__namespace.ɵɵtext(2);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵtemplate(3, ModUserDisplayComponent_div_0_ng_container_3_Template, 4, 1, "ng-container", 2);
            i0__namespace.ɵɵtemplate(4, ModUserDisplayComponent_div_0_ng_template_4_Template, 3, 1, "ng-template", null, 3, i0__namespace.ɵɵtemplateRefExtractor);
            i0__namespace.ɵɵelementStart(6, "mat-menu", null, 4);
            i0__namespace.ɵɵtemplate(8, ModUserDisplayComponent_div_0_button_8_Template, 2, 1, "button", 5);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var _r2 = i0__namespace.ɵɵreference(5);
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵtextInterpolate(ctx_r0.user.displayName);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", ctx_r0.showUser)("ngIfElse", _r2);
            i0__namespace.ɵɵadvance(5);
            i0__namespace.ɵɵproperty("ngForOf", ctx_r0.config.userOptions);
        }
    }
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
    ModUserDisplayComponent.ɵfac = function ModUserDisplayComponent_Factory(t) { return new (t || ModUserDisplayComponent)(i0__namespace.ɵɵdirectiveInject(CurrentUserService), i0__namespace.ɵɵdirectiveInject(ModConfig)); };
    ModUserDisplayComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: ModUserDisplayComponent, selectors: [["mod-user-display"]], inputs: { showUser: "showUser" }, outputs: { selectOption: "selectOption" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [2, "padding-right", "5px"], [4, "ngIf", "ngIfElse"], ["showMenu", ""], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["mat-icon-button", "", "aria-label", "User Menu", 1, "mod-user-icon", 3, "matMenuTriggerFor"], ["mat-icon-button", "", "aria-label", "User Menu", 1, "mat-icon-button", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"]], template: function ModUserDisplayComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵtemplate(0, ModUserDisplayComponent_div_0_Template, 9, 4, "div", 0);
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("ngIf", ctx.user);
            }
        }, directives: [i4__namespace.NgIf, i3__namespace.MatMenu, i4__namespace.NgForOf, i4__namespace$1.MatButton, i3__namespace.MatMenuTrigger, i5__namespace.MatIcon, i3__namespace.MatMenuItem], styles: [".delete-potentially-circle-user-icon[_ngcontent-%COMP%]{border:2px solid!important;border-color:inherit!important;border-radius:50%!important;padding:5px!important;margin-left:15px!important}.mat-button-base[_ngcontent-%COMP%]{height:auto;line-height:inherit}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ModUserDisplayComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'mod-user-display',
                        templateUrl: './mod-user-display.component.html',
                        styleUrls: ['./mod-user-display.component.scss']
                    }]
            }], function () {
            return [{ type: CurrentUserService }, { type: ModFrameworkConfig, decorators: [{
                            type: i0.Inject,
                            args: [ModConfig]
                        }] }];
        }, { showUser: [{
                    type: i0.Input
                }], selectOption: [{
                    type: i0.Output
                }] });
    })();

    function ModHeaderComponent_div_9_button_6_Template(rf, ctx) {
        if (rf & 1) {
            var _r5_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "button", 11);
            i0__namespace.ɵɵlistener("click", function ModHeaderComponent_div_9_button_6_Template_button_click_0_listener() { var restoredCtx = i0__namespace.ɵɵrestoreView(_r5_1); var option_r3 = restoredCtx.$implicit; var ctx_r4 = i0__namespace.ɵɵnextContext(2); return ctx_r4.optionSelected(option_r3); });
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var option_r3 = ctx.$implicit;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate(option_r3);
        }
    }
    function ModHeaderComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div");
            i0__namespace.ɵɵelementStart(1, "button", 8);
            i0__namespace.ɵɵelementStart(2, "mat-icon");
            i0__namespace.ɵɵtext(3, "help");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(4, "mat-menu", null, 9);
            i0__namespace.ɵɵtemplate(6, ModHeaderComponent_div_9_button_6_Template, 2, 1, "button", 10);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var _r1 = i0__namespace.ɵɵreference(5);
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("matMenuTriggerFor", _r1);
            i0__namespace.ɵɵadvance(5);
            i0__namespace.ɵɵproperty("ngForOf", ctx_r0.config.helpOptions);
        }
    }
    var _c0$2 = function () { return ["/"]; };
    var _c1$2 = ["*"];
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
    ModHeaderComponent.ɵfac = function ModHeaderComponent_Factory(t) { return new (t || ModHeaderComponent)(i0__namespace.ɵɵdirectiveInject(ModConfig)); };
    ModHeaderComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: ModHeaderComponent, selectors: [["mod-header"]], inputs: { appName: "appName" }, outputs: { menuClick: "menuClick", userOptionSelect: "userOptionSelect", helpOptionSelect: "helpOptionSelect" }, ngContentSelectors: _c1$2, decls: 10, vars: 5, consts: [[1, "mod-header"], [1, "logo-text-mark", 3, "routerLink"], ["src", "/assets/US-OfficeOfManagementAndBudget-Seal.png", "tabindex", "-1", 1, "mod-logo"], ["tabindex", "-1", "alt", "Textmark", 1, "text-mark"], [1, "fill-remaining-space"], [1, "welcome-user"], [3, "showUser", "selectOption"], [4, "ngIf"], ["mat-icon-button", "", "aria-label", "Help Menu", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["mat-menu-item", "", 3, "click"]], template: function ModHeaderComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵprojectionDef();
                i0__namespace.ɵɵelementStart(0, "mat-toolbar", 0);
                i0__namespace.ɵɵelementStart(1, "a", 1);
                i0__namespace.ɵɵelement(2, "img", 2);
                i0__namespace.ɵɵelementStart(3, "div", 3);
                i0__namespace.ɵɵtext(4);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(5, "span", 4);
                i0__namespace.ɵɵprojection(6);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(7, "div", 5);
                i0__namespace.ɵɵelementStart(8, "mod-user-display", 6);
                i0__namespace.ɵɵlistener("selectOption", function ModHeaderComponent_Template_mod_user_display_selectOption_8_listener($event) { return ctx.onUserOptionSelect($event); });
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵtemplate(9, ModHeaderComponent_div_9_Template, 7, 2, "div", 7);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("routerLink", i0__namespace.ɵɵpureFunction0(4, _c0$2));
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵtextInterpolate(ctx.appName);
                i0__namespace.ɵɵadvance(4);
                i0__namespace.ɵɵproperty("showUser", true);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.config.showHelp);
            }
        }, directives: [i1__namespace$1.MatToolbar, i1__namespace$2.RouterLinkWithHref, ModUserDisplayComponent, i4__namespace.NgIf, i4__namespace$1.MatButton, i3__namespace.MatMenuTrigger, i5__namespace.MatIcon, i3__namespace.MatMenu, i4__namespace.NgForOf, i3__namespace.MatMenuItem], styles: [".mod-header[_ngcontent-%COMP%]{justify-content:center;background-color:#112e51;display:flex;color:#fff}a[_ngcontent-%COMP%]{text-decoration:none}.logo-text-mark[_ngcontent-%COMP%]{cursor:pointer;display:flex;align-items:center}.text-mark[_ngcontent-%COMP%]{cursor:pointer;margin-left:12px;font-size:1.4em;display:inline-block;vertical-align:middle;color:#d8b304}.mod-logo[_ngcontent-%COMP%]{margin-left:4px;height:50px}.fill-remaining-space[_ngcontent-%COMP%]{flex:1 1 auto;align-items:center;margin-left:15px}.welcome-user[_ngcontent-%COMP%]{font-size:.85em;padding-top:2px;padding-right:5px;flex:1;display:flex;justify-content:flex-end}.mat-button-base[_ngcontent-%COMP%]{height:auto;line-height:inherit}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ModHeaderComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'mod-header',
                        templateUrl: './mod-header.component.html',
                        styleUrls: ['./mod-header.component.scss']
                    }]
            }], function () {
            return [{ type: ModFrameworkConfig, decorators: [{
                            type: i0.Inject,
                            args: [ModConfig]
                        }] }];
        }, { appName: [{
                    type: i0.Input
                }], menuClick: [{
                    type: i0.Output
                }], userOptionSelect: [{
                    type: i0.Output
                }], helpOptionSelect: [{
                    type: i0.Output
                }] });
    })();

    var _c0$1 = ["mainContent"];
    var _c1$1 = ["sidenav"];
    function ModSideMenuComponent_mat_icon_5_Template(rf, ctx) {
        if (rf & 1) {
            var _r6_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "mat-icon", 9);
            i0__namespace.ɵɵlistener("click", function ModSideMenuComponent_mat_icon_5_Template_mat_icon_click_0_listener() { i0__namespace.ɵɵrestoreView(_r6_1); var ctx_r5 = i0__namespace.ɵɵnextContext(); return ctx_r5.expandMenu(!ctx_r5.expanded); });
            i0__namespace.ɵɵtext(1, " keyboard_arrow_left ");
            i0__namespace.ɵɵelementEnd();
        }
    }
    function ModSideMenuComponent_mat_icon_6_Template(rf, ctx) {
        if (rf & 1) {
            var _r8_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "mat-icon", 10);
            i0__namespace.ɵɵlistener("click", function ModSideMenuComponent_mat_icon_6_Template_mat_icon_click_0_listener() { i0__namespace.ɵɵrestoreView(_r8_1); var ctx_r7 = i0__namespace.ɵɵnextContext(); return ctx_r7.expandMenu(!ctx_r7.expanded); });
            i0__namespace.ɵɵtext(1, " keyboard_arrow_right ");
            i0__namespace.ɵɵelementEnd();
        }
    }
    var _c2 = function () { return { exact: true }; };
    function ModSideMenuComponent_div_7_mat_list_item_4_Template(rf, ctx) {
        if (rf & 1) {
            var _r13_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "mat-list-item", 12);
            i0__namespace.ɵɵlistener("keyup.enter", function ModSideMenuComponent_div_7_mat_list_item_4_Template_mat_list_item_keyup_enter_0_listener() { var restoredCtx = i0__namespace.ɵɵrestoreView(_r13_1); var item_r11 = restoredCtx.$implicit; var ctx_r12 = i0__namespace.ɵɵnextContext(2); return ctx_r12.navigateTo(item_r11.route); });
            i0__namespace.ɵɵelementStart(1, "mat-icon", 13);
            i0__namespace.ɵɵtext(2);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵtext(3);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var item_r11 = ctx.$implicit;
            var ctx_r10 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵproperty("routerLink", item_r11.route)("routerLinkActiveOptions", i0__namespace.ɵɵpureFunction0(5, _c2));
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("matTooltip", item_r11.text);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate(item_r11.icon);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", ctx_r10.expanded ? item_r11.text : "", " ");
        }
    }
    function ModSideMenuComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div");
            i0__namespace.ɵɵelementStart(1, "h1", 3);
            i0__namespace.ɵɵtext(2);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(3, "mat-nav-list");
            i0__namespace.ɵɵtemplate(4, ModSideMenuComponent_div_7_mat_list_item_4_Template, 4, 6, "mat-list-item", 11);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var section_r9 = ctx.$implicit;
            var ctx_r3 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵtextInterpolate1(" ", ctx_r3.expanded ? section_r9.name : "", " ");
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("ngForOf", ctx_r3.getViewableMenuItems(section_r9));
        }
    }
    var _c3 = function (a1) { return { "mod-side-menu": true, "collapsed": a1 }; };
    var _c4 = function (a1) { return { "mod-side-menu-content": true, "collapsed": a1 }; };
    var _c5 = ["*"];
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
    ModSideMenuComponent.ɵfac = function ModSideMenuComponent_Factory(t) { return new (t || ModSideMenuComponent)(i0__namespace.ɵɵdirectiveInject(i1__namespace$2.Router), i0__namespace.ɵɵdirectiveInject(i1__namespace$2.ActivatedRoute), i0__namespace.ɵɵdirectiveInject(i0__namespace.Renderer2), i0__namespace.ɵɵdirectiveInject(CurrentUserService)); };
    ModSideMenuComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: ModSideMenuComponent, selectors: [["mod-side-menu"]], viewQuery: function ModSideMenuComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵviewQuery(_c0$1, 7);
                i0__namespace.ɵɵviewQuery(_c1$1, 7);
            }
            if (rf & 2) {
                var _t = void 0;
                i0__namespace.ɵɵqueryRefresh(_t = i0__namespace.ɵɵloadQuery()) && (ctx.mainContentElement = _t.first);
                i0__namespace.ɵɵqueryRefresh(_t = i0__namespace.ɵɵloadQuery()) && (ctx.sidenav = _t.first);
            }
        }, inputs: { config: "config" }, features: [i0__namespace.ɵɵNgOnChangesFeature], ngContentSelectors: _c5, decls: 11, vars: 10, consts: [[1, "mod-side-menu-container"], ["mode", "side", "opened", "", "role", "navigation", "id", "navigation-menu", 3, "ngClass"], ["sidenav", ""], ["mat-subheader", ""], ["class", "menu-close", 3, "click", 4, "ngIf"], ["class", "menu-open", 3, "click", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["role", "main", "tabindex", "0", 3, "ngClass"], ["mainContent", ""], [1, "menu-close", 3, "click"], [1, "menu-open", 3, "click"], ["routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions", "keyup.enter", 4, "ngFor", "ngForOf"], ["routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions", "keyup.enter"], ["mat-list-icon", "", 3, "matTooltip"]], template: function ModSideMenuComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵprojectionDef();
                i0__namespace.ɵɵelementStart(0, "mat-sidenav-container", 0);
                i0__namespace.ɵɵelementStart(1, "mat-sidenav", 1, 2);
                i0__namespace.ɵɵelementStart(3, "h1", 3);
                i0__namespace.ɵɵtext(4);
                i0__namespace.ɵɵtemplate(5, ModSideMenuComponent_mat_icon_5_Template, 2, 0, "mat-icon", 4);
                i0__namespace.ɵɵtemplate(6, ModSideMenuComponent_mat_icon_6_Template, 2, 0, "mat-icon", 5);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵtemplate(7, ModSideMenuComponent_div_7_Template, 5, 2, "div", 6);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(8, "mat-sidenav-content", 7, 8);
                i0__namespace.ɵɵprojection(10);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngClass", i0__namespace.ɵɵpureFunction1(6, _c3, !ctx.expanded && ctx.opened));
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵtextInterpolate1(" ", ctx.expanded ? ctx.config.title : "", " ");
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.expanded);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", !ctx.expanded);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngForOf", ctx.viewableSections);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngClass", i0__namespace.ɵɵpureFunction1(8, _c4, !ctx.expanded && ctx.opened));
            }
        }, directives: [i3__namespace$1.MatSidenavContainer, i3__namespace$1.MatSidenav, i4__namespace.NgClass, i5__namespace$1.MatListSubheaderCssMatStyler, i4__namespace.NgIf, i4__namespace.NgForOf, i3__namespace$1.MatSidenavContent, i5__namespace.MatIcon, i5__namespace$1.MatNavList, i5__namespace$1.MatListItem, i1__namespace$2.RouterLinkActive, i1__namespace$2.RouterLink, i5__namespace$1.MatListIconCssMatStyler, i7__namespace.MatTooltip], styles: ["#main-content[_ngcontent-%COMP%]:focus{border:1px solid #5b9acf}.menu-close[_ngcontent-%COMP%]{position:absolute;right:0;cursor:pointer}.menu-open[_ngcontent-%COMP%]{text-align:center;width:100%;cursor:pointer}.mod-side-menu[_ngcontent-%COMP%]{display:flex;align-items:flex-start;justify-content:left;width:250px;transition:width .25s}.mod-side-menu.collapsed[_ngcontent-%COMP%]{width:76px!important;transition:width .25s}.mod-side-menu-container[_ngcontent-%COMP%]{display:flex;height:100%}.mod-side-menu-content[_ngcontent-%COMP%]{transition:margin-left .25s;width:100%;overflow:auto;display:flex;align-items:stretch;outline:none!important}.mod-side-menu-content.collapsed[_ngcontent-%COMP%]{margin-left:76px!important;transition:margin-left .25s}h2[_ngcontent-%COMP%]{overflow:hidden;white-space:nowrap;text-overflow:clip}.mat-subheader[_ngcontent-%COMP%]{font-size:14px;line-height:20px;max-height:56px;color:#888;padding:12px 12px 12px 20px!important;margin-bottom:0!important;margin-top:0!important;border-left:5px solid #bbb;margin-left:-5px}.mat-subheader[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{padding-left:4px;margin-right:16px}.mat-expansion-panel[_ngcontent-%COMP%]{box-shadow:none;margin:0}.mat-expansion-indicator[_ngcontent-%COMP%]{line-height:0!important}mat-expansion-panel-header[aria-disabled=true][_ngcontent-%COMP%]{color:#000;color:initial}.mat-expansion-panel-header[_ngcontent-%COMP%]{height:56px!important;max-height:56px!important;border-left:5px solid #bbb}.mat-expansion-panel-header-title[_ngcontent-%COMP%]{max-height:24px}.mat-expansion-panel.active[_ngcontent-%COMP%] > .mat-expansion-panel-header[_ngcontent-%COMP%]{border-color:#5b9acf}.mat-expansion-panel-header-title[_ngcontent-%COMP%] > .mat-icon[_ngcontent-%COMP%]{margin-right:16px}.mat-expansion-panel.mat-expanded[_ngcontent-%COMP%]{background-color:#eee}  .mat-expansion-panel-body{padding:0!important}  .mat-drawer-container{display:flex;align-items:stretch}.mat-list-icon[_ngcontent-%COMP%]{padding-right:16px!important;font-size:22px!important}.mat-list-item[_ngcontent-%COMP%]{font-size:15px!important;border-left:5px solid #bbb;margin-left:-5px;height:56px!important;max-height:56px!important;line-height:22.5px!important;width:auto!important}.mat-list-item[_ngcontent-%COMP%]:focus{border:1px solid #5b9acf}.mat-list-item-content[_ngcontent-%COMP%]{padding:0 24px!important}.mat-list-item.active[_ngcontent-%COMP%]{border-color:#5b9acf;background-color:#d1d1d1}.mat-list-base[_ngcontent-%COMP%]{padding-top:0}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ModSideMenuComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'mod-side-menu',
                        templateUrl: './mod-side-menu.component.html',
                        styleUrls: ['./mod-side-menu.component.scss']
                    }]
            }], function () { return [{ type: i1__namespace$2.Router }, { type: i1__namespace$2.ActivatedRoute }, { type: i0__namespace.Renderer2 }, { type: CurrentUserService }]; }, { config: [{
                    type: i0.Input
                }], mainContentElement: [{
                    type: i0.ViewChild,
                    args: ['mainContent', { static: true }]
                }], sidenav: [{
                    type: i0.ViewChild,
                    args: ['sidenav', { static: true }]
                }] });
    })();

    var _c0 = ["sidemenu"];
    function ModLayoutComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
            var _r3_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "div", 7);
            i0__namespace.ɵɵelementStart(1, "input", 8);
            i0__namespace.ɵɵlistener("ngModelChange", function ModLayoutComponent_div_4_Template_input_ngModelChange_1_listener($event) { i0__namespace.ɵɵrestoreView(_r3_1); var ctx_r2 = i0__namespace.ɵɵnextContext(); return ctx_r2.searchText = $event; })("keyup.enter", function ModLayoutComponent_div_4_Template_input_keyup_enter_1_listener() { i0__namespace.ɵɵrestoreView(_r3_1); var ctx_r4 = i0__namespace.ɵɵnextContext(); return ctx_r4.onSearch(); });
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngModel", ctx_r0.searchText);
        }
    }
    var _c1 = ["*"];
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
    ModLayoutComponent.ɵfac = function ModLayoutComponent_Factory(t) { return new (t || ModLayoutComponent)(i0__namespace.ɵɵdirectiveInject(ModConfig)); };
    ModLayoutComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: ModLayoutComponent, selectors: [["mod-layout"]], viewQuery: function ModLayoutComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵviewQuery(_c0, 7);
            }
            if (rf & 2) {
                var _t = void 0;
                i0__namespace.ɵɵqueryRefresh(_t = i0__namespace.ɵɵloadQuery()) && (ctx.sideMenu = _t.first);
            }
        }, inputs: { appName: "appName", menuConfig: "menuConfig" }, outputs: { userOptionSelect: "userOptionSelect", helpOptionSelect: "helpOptionSelect", search: "search" }, ngContentSelectors: _c1, decls: 9, vars: 3, consts: [[1, "mod-layout-container"], [1, "layout-header"], [3, "appName", "menuClick", "userOptionSelect", "helpOptionSelect"], ["style", "display: flex; justify-content: center;", 4, "ngIf"], [1, "layout-content"], [3, "config"], ["sidemenu", ""], [2, "display", "flex", "justify-content", "center"], ["matInput", "", "placeholder", "Search", 1, "search-box", 3, "ngModel", "ngModelChange", "keyup.enter"]], template: function ModLayoutComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵprojectionDef();
                i0__namespace.ɵɵelement(0, "mod-loading-overlay");
                i0__namespace.ɵɵelementStart(1, "div", 0);
                i0__namespace.ɵɵelementStart(2, "div", 1);
                i0__namespace.ɵɵelementStart(3, "mod-header", 2);
                i0__namespace.ɵɵlistener("menuClick", function ModLayoutComponent_Template_mod_header_menuClick_3_listener() { return ctx.onMenuClicked(); })("userOptionSelect", function ModLayoutComponent_Template_mod_header_userOptionSelect_3_listener($event) { return ctx.onUserOptionSelect($event); })("helpOptionSelect", function ModLayoutComponent_Template_mod_header_helpOptionSelect_3_listener($event) { return ctx.onHelpOptionSelect($event); });
                i0__namespace.ɵɵtemplate(4, ModLayoutComponent_div_4_Template, 2, 1, "div", 3);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(5, "div", 4);
                i0__namespace.ɵɵelementStart(6, "mod-side-menu", 5, 6);
                i0__namespace.ɵɵprojection(8);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("appName", ctx.appName);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.config.showSearch);
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("config", ctx.menuConfig);
            }
        }, directives: [ModLoadingOverlayComponent, ModHeaderComponent, i4__namespace.NgIf, ModSideMenuComponent, i5__namespace$2.MatInput, i6__namespace.DefaultValueAccessor, i6__namespace.NgControlStatus, i6__namespace.NgModel], styles: [".mod-layout-container[_ngcontent-%COMP%]{display:flex;flex-flow:column;height:100%}.layout-header[_ngcontent-%COMP%]{flex:0}.layout-content[_ngcontent-%COMP%]{flex:1;overflow:auto}.search-box[_ngcontent-%COMP%]{background-color:#fff;box-shadow:none;border:none;min-height:32px;width:50%;color:#000;font-size:14px;padding-top:0;padding-right:15px;border-radius:16px;padding-left:15px;margin-left:15px;margin-right:15px}.search-box[_ngcontent-%COMP%]:focus{outline:none}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ModLayoutComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'mod-layout',
                        templateUrl: './mod-layout.component.html',
                        styleUrls: ['./mod-layout.component.scss']
                    }]
            }], function () {
            return [{ type: ModFrameworkConfig, decorators: [{
                            type: i0.Inject,
                            args: [ModConfig]
                        }] }];
        }, { sideMenu: [{
                    type: i0.ViewChild,
                    args: ['sidemenu', { static: true }]
                }], appName: [{
                    type: i0.Input
                }], menuConfig: [{
                    type: i0.Input
                }], userOptionSelect: [{
                    type: i0.Output
                }], helpOptionSelect: [{
                    type: i0.Output
                }], search: [{
                    type: i0.Output
                }] });
    })();

    var ModWelcomeBanner = /** @class */ (function () {
        function ModWelcomeBanner() {
            this.onLogin = new i0.EventEmitter();
            this.onLogout = new i0.EventEmitter();
        }
        ModWelcomeBanner.prototype.ngOnInit = function () {
        };
        return ModWelcomeBanner;
    }());
    ModWelcomeBanner.ɵfac = function ModWelcomeBanner_Factory(t) { return new (t || ModWelcomeBanner)(); };
    ModWelcomeBanner.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: ModWelcomeBanner, selectors: [["mod-welcome-banner"]], outputs: { onLogin: "onLogin", onLogout: "onLogout" }, decls: 4, vars: 0, consts: [["role", "banner", 1, "mod-header"], [1, "mod-welcome-banner"], [1, "welcome-user"]], template: function ModWelcomeBanner_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "header", 0);
                i0__namespace.ɵɵelementStart(1, "div", 1);
                i0__namespace.ɵɵelementStart(2, "div", 2);
                i0__namespace.ɵɵelement(3, "mod-user-display");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
        }, directives: [ModUserDisplayComponent], styles: [".mod-header[_ngcontent-%COMP%]{display:flex;flex-direction:column}.mod-welcome-banner[_ngcontent-%COMP%]{padding-left:10px;padding-right:10px;background-color:#f0f0f0;padding-bottom:0;display:flex;font-family:Source Sans Pro Web,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif}.welcome-user[_ngcontent-%COMP%]{font-weight:700;font-size:.85em;padding-top:2px;padding-right:5px;flex:1;display:flex;justify-content:flex-end}.loginout-button[_ngcontent-%COMP%]{vertical-align:middle;width:auto!important;display:inline!important}.loginout-text[_ngcontent-%COMP%]{align-items:center}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ModWelcomeBanner, [{
                type: i0.Component,
                args: [{
                        selector: 'mod-welcome-banner',
                        templateUrl: './mod-welcome-banner.component.html',
                        styleUrls: ['./mod-welcome-banner.component.scss']
                    }]
            }], function () { return []; }, { onLogin: [{
                    type: i0.Output
                }], onLogout: [{
                    type: i0.Output
                }] });
    })();

    function BrowserCheckComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div", 1);
            i0__namespace.ɵɵelement(1, "span", 2);
            i0__namespace.ɵɵelementStart(2, "span", 3);
            i0__namespace.ɵɵtext(3, "\u00A0\u00A0You can't log in to this site.");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(4, "div", 4);
            i0__namespace.ɵɵtext(5, " Possible reasons for this include: ");
            i0__namespace.ɵɵelementStart(6, "ul");
            i0__namespace.ɵɵelementStart(7, "li");
            i0__namespace.ɵɵtext(8);
            i0__namespace.ɵɵelementStart(9, "ul");
            i0__namespace.ɵɵelementStart(10, "li");
            i0__namespace.ɵɵtext(11, "Please check your network connection.");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(12, "li");
            i0__namespace.ɵɵtext(13);
            i0__namespace.ɵɵelementStart(14, "ul");
            i0__namespace.ɵɵelementStart(15, "li");
            i0__namespace.ɵɵtext(16);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(17, "li");
            i0__namespace.ɵɵtext(18);
            i0__namespace.ɵɵelementStart(19, "ul");
            i0__namespace.ɵɵelementStart(20, "li");
            i0__namespace.ɵɵtext(21, "In your browser settings, either allow all third-party cookies, or ");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(22, "li");
            i0__namespace.ɵɵtext(23);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(24, "i");
            i0__namespace.ɵɵtext(25);
            i0__namespace.ɵɵelement(26, "br");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵtext(27, " Please correct these problems and try again. ");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(8);
            i0__namespace.ɵɵtextInterpolate1(" You can't reach the site ", ctx_r0.loginSite, ". ");
            i0__namespace.ɵɵadvance(5);
            i0__namespace.ɵɵtextInterpolate2(" Site ", ctx_r0.loginSite, " does not allow cross-origin scripting (CORS) from your domain ", ctx_r0.myDomain, ". ");
            i0__namespace.ɵɵadvance(3);
            i0__namespace.ɵɵtextInterpolate1("Please contact the administrator of ", ctx_r0.loginSite, " and request access for your site.");
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵtextInterpolate1(" Your browser doesn't accept third-party cookies from domain ", ctx_r0.loginDomain, ". ");
            i0__namespace.ɵɵadvance(5);
            i0__namespace.ɵɵtextInterpolate1("Disallow third-party cookies, but add ", ctx_r0.loginDomain, " as an exception.");
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵtextInterpolate1("The actual error returned is \"", ctx_r0.browserFail, "\".");
        }
    }
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
    BrowserCheckComponent.ɵfac = function BrowserCheckComponent_Factory(t) { return new (t || BrowserCheckComponent)(i0__namespace.ɵɵdirectiveInject(CurrentUserService)); };
    BrowserCheckComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: BrowserCheckComponent, selectors: [["mod-browser-check"]], decls: 1, vars: 1, consts: [["class", "container-fluid browser-check-container", 4, "ngIf"], [1, "container-fluid", "browser-check-container"], [1, "fa", "fa-warning", "browser-check-icon"], [1, "browser-check-header-text"], [1, "browser-check-text"]], template: function BrowserCheckComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵtemplate(0, BrowserCheckComponent_div_0_Template, 28, 7, "div", 0);
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("ngIf", ctx.browserFail);
            }
        }, directives: [i4__namespace.NgIf], styles: [".browser-check-container[_ngcontent-%COMP%]{border:4px solid red;padding-top:5px;padding-bottom:5px;padding-left:10px}.browser-check-icon[_ngcontent-%COMP%]{font-size:36px;color:red;vertical-align:middle}.browser-check-text[_ngcontent-%COMP%]{font-size:16px;vertical-align:middle;padding-left:30px;padding-top:10px}.browser-check-header-text[_ngcontent-%COMP%]{font-size:24px;font-weight:700;vertical-align:middle}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(BrowserCheckComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'mod-browser-check',
                        templateUrl: './browser-check.component.html',
                        styleUrls: ['./browser-check.component.scss']
                    }]
            }], function () { return [{ type: CurrentUserService }]; }, null);
    })();

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
    HttpRequestInterceptor.ɵfac = function HttpRequestInterceptor_Factory(t) { return new (t || HttpRequestInterceptor)(i0__namespace.ɵɵinject(CurrentUserService)); };
    HttpRequestInterceptor.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: HttpRequestInterceptor, factory: HttpRequestInterceptor.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(HttpRequestInterceptor, [{
                type: i0.Injectable
            }], function () { return [{ type: CurrentUserService }]; }, null);
    })();

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
    RoleGuardService.ɵfac = function RoleGuardService_Factory(t) { return new (t || RoleGuardService)(i0__namespace.ɵɵinject(CurrentUserService), i0__namespace.ɵɵinject(i1__namespace$2.Router)); };
    RoleGuardService.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: RoleGuardService, factory: RoleGuardService.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(RoleGuardService, [{
                type: i0.Injectable
            }], function () { return [{ type: CurrentUserService }, { type: i1__namespace$2.Router }]; }, null);
    })();

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
    ModFrameworkModule.ɵfac = function ModFrameworkModule_Factory(t) { return new (t || ModFrameworkModule)(i0__namespace.ɵɵinject(ModFrameworkModule, 12)); };
    ModFrameworkModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: ModFrameworkModule });
    ModFrameworkModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ providers: [], imports: [[
                i4.CommonModule,
                i6.FormsModule,
                i6.ReactiveFormsModule,
                i1.HttpClientModule,
                i1$2.RouterModule,
                i5.MatIconModule, divider.MatDividerModule, i5$1.MatListModule, i3$1.MatSidenavModule, i1$1.MatToolbarModule, i3.MatMenuModule, i4$1.MatButtonModule, i2.MatProgressSpinnerModule, autocomplete.MatAutocompleteModule, i7.MatTooltipModule, formField.MatFormFieldModule, i5$2.MatInputModule, select.MatSelectModule,
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ModFrameworkModule, [{
                type: i0.NgModule,
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
                            i4.CommonModule,
                            i6.FormsModule,
                            i6.ReactiveFormsModule,
                            i1.HttpClientModule,
                            i1$2.RouterModule,
                            i5.MatIconModule, divider.MatDividerModule, i5$1.MatListModule, i3$1.MatSidenavModule, i1$1.MatToolbarModule, i3.MatMenuModule, i4$1.MatButtonModule, i2.MatProgressSpinnerModule, autocomplete.MatAutocompleteModule, i7.MatTooltipModule, formField.MatFormFieldModule, i5$2.MatInputModule, select.MatSelectModule,
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
            }], function () {
            return [{ type: ModFrameworkModule, decorators: [{
                            type: i0.Optional
                        }, {
                            type: i0.SkipSelf
                        }] }];
        }, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(ModFrameworkModule, { declarations: [ModWelcomeBanner,
                ModSideMenuComponent,
                ModLayoutComponent,
                ModHeaderComponent,
                ModProgressSpinnerComponent,
                ModLoadingOverlayComponent,
                ModUserDisplayComponent,
                BrowserCheckComponent], imports: [i4.CommonModule,
                i6.FormsModule,
                i6.ReactiveFormsModule,
                i1.HttpClientModule,
                i1$2.RouterModule,
                i5.MatIconModule, divider.MatDividerModule, i5$1.MatListModule, i3$1.MatSidenavModule, i1$1.MatToolbarModule, i3.MatMenuModule, i4$1.MatButtonModule, i2.MatProgressSpinnerModule, autocomplete.MatAutocompleteModule, i7.MatTooltipModule, formField.MatFormFieldModule, i5$2.MatInputModule, select.MatSelectModule], exports: [ModHeaderComponent,
                ModLayoutComponent,
                ModLoadingOverlayComponent,
                ModProgressSpinnerComponent,
                ModSideMenuComponent,
                ModUserDisplayComponent,
                ModWelcomeBanner,
                BrowserCheckComponent] });
    })();

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

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=mod-framework.umd.js.map
