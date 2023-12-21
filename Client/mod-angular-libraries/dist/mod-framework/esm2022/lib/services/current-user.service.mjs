import { Injectable, Inject } from '@angular/core';
import { CurrentUser } from '../models/current-user.model';
import * as parseUri from 'parse-uri';
import { ModConfig } from '../static/mod-config.const';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "../models/mod-framework-config.model";
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
    static { this.ɵfac = function CurrentUserService_Factory(t) { return new (t || CurrentUserService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(ModConfig)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CurrentUserService, factory: CurrentUserService.ɵfac, providedIn: 'root' }); }
}
export { CurrentUserService };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CurrentUserService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.HttpClient }, { type: i2.ModFrameworkConfig, decorators: [{
                type: Inject,
                args: [ModConfig]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVudC11c2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tb2QtZnJhbWV3b3JrL3NyYy9saWIvc2VydmljZXMvY3VycmVudC11c2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRzNELE9BQU8sS0FBSyxRQUFRLE1BQU0sV0FBVyxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7OztBQUd2RCxNQUdhLGtCQUFrQjtJQWMzQixZQUFvQixJQUFnQixFQUFxQixNQUEwQjtRQUEvRCxTQUFJLEdBQUosSUFBSSxDQUFZO1FBWDVCLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFDaEIsaUJBQVksR0FBRyxFQUFFLENBQUM7UUFDbEIsbUJBQWMsR0FBRyxFQUFFLENBQUM7UUFDcEIsWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLGVBQVUsR0FBRyxxQkFBcUIsQ0FBQztRQUduQyxlQUFVLEdBQVksS0FBSyxDQUFDO1FBRTVCLGlCQUFZLEdBQUcseUJBQXlCLENBQUM7UUFHN0MsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLHlCQUF5QixDQUFDO1FBRTdFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxpQkFBaUIsQ0FBQztRQUNuRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsc0JBQXNCLENBQUM7UUFDMUQsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLHdCQUF3QixDQUFDO1FBQzlELElBQUksQ0FBQyxPQUFPLEdB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V0FBVyxHQUFHLFdBQVcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xELENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxXQUFXLENBQUM7SUFDdkIsQ0FBQzttRkF4SFEsa0JBQWtCLDBDQWNtQixTQUFTO3VFQWQ5QyxrQkFBa0IsV0FBbEIsa0JBQWtCLG1CQUZmLE1BQU07O1NBRVQsa0JBQWtCO3VGQUFsQixrQkFBa0I7Y0FIOUIsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCOztzQkFlMEMsTUFBTTt1QkFBQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEN1cnJlbnRVc2VyIH0gZnJvbSAnLi4vbW9kZWxzL2N1cnJlbnQtdXNlci5tb2RlbCc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcblxyXG5pbXBvcnQgKiBhcyBwYXJzZVVyaSBmcm9tICdwYXJzZS11cmknO1xyXG5pbXBvcnQgeyBNb2RDb25maWcgfSBmcm9tICcuLi9zdGF0aWMvbW9kLWNvbmZpZy5jb25zdCc7XHJcbmltcG9ydCB7IE1vZEZyYW1ld29ya0NvbmZpZyB9IGZyb20gJy4uL21vZGVscy9tb2QtZnJhbWV3b3JrLWNvbmZpZy5tb2RlbCc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEN1cnJlbnRVc2VyU2VydmljZSB7XHJcbiAgICBwdWJsaWMgbG9naW5Qcm9taXNlOiBQcm9taXNlPEN1cnJlbnRVc2VyPjtcclxuXHJcbiAgICBwcml2YXRlIHNlcnZpY2VVcmwgPSAnJztcclxuICAgIHByaXZhdGUgc2V0Q29va2llVXJsID0gJyc7XHJcbiAgICBwcml2YXRlIGNoZWNrQ29va2llVXJsID0gJyc7XHJcbiAgICBwcml2YXRlIG5vT3BVcmwgPSAnJztcclxuICAgIHByaXZhdGUgY29va2llTmFtZSA9ICdDb29raWVTZXR0aW5nc0NoZWNrJztcclxuXHJcbiAgICBwcml2YXRlIF91c2VyOiBDdXJyZW50VXNlcjtcclxuICAgIHByaXZhdGUgX2Jyb3dzZXJPazogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgbG9naW5TaXRlVXJsID0gXCJodHRwczovL2xvY2FsaG9zdDo0NDM3NFwiO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgQEluamVjdChNb2RDb25maWcpIGNvbmZpZzogTW9kRnJhbWV3b3JrQ29uZmlnKSB7XHJcbiAgICAgICAgdGhpcy5sb2dpblNpdGVVcmwgPSBjb25maWcgPyBjb25maWcubG9naW5TaXRlVXJsIDogJ2h0dHBzOi8vbG9jYWxob3N0OjQ0Mzc0JztcclxuXHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlVXJsID0gdGhpcy5zaXRlVXJsICsgXCJhcGkvY2xhaW1zL3VzZXJcIjtcclxuICAgICAgICB0aGlzLnNldENvb2tpZVVybCA9IHRoaXMuc2l0ZVVybCArIFwiYXBpL2hlYWx0aC9zZXRjb29raWVcIjtcclxuICAgICAgICB0aGlzLmNoZWNrQ29va2llVXJsID0gdGhpcy5zaXRlVXJsICsgXCJhcGkvaGVhbHRoL2NoZWNrY29va2llXCI7XHJcbiAgICAgICAgdGhpcy5ub09wVXJsID0gdGhpcy5zaXRlVXJsICsgXCJhcGkvaGVhbHRoL25vb3BcIjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0RG9tYWluKHVybCk6IHN0cmluZyB7XHJcbiAgICAgICAgdmFyIHUgPSBwYXJzZVVyaSh1cmwpO1xyXG4gICAgICAgIHJldHVybiB1Lmhvc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCB1c2VyKCk6IEN1cnJlbnRVc2VyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdXNlcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGJyb3dzZXJPaygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYnJvd3Nlck9rO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgZG9tYWluKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RG9tYWluKHRoaXMubG9naW5TaXRlVXJsKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHNpdGVVcmwoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5sb2dpblNpdGVVcmwgKyAodGhpcy5sb2dpblNpdGVVcmwuZW5kc1dpdGgoXCIvXCIpID8gXCJcIiA6IFwiL1wiKTtcclxuICAgIH1cclxuXHJcbiAgICBicm93c2VyQ2hlY2soKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5ub09wVXJsLCB7IHdpdGhDcmVkZW50aWFsczogZmFsc2UgfSlcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuc2V0Q29va2llVXJsKVxyXG4gICAgICAgICAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5jaGVja0Nvb2tpZVVybClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50b1Byb21pc2UoKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9icm93c2VyT2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IFJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2Jyb3dzZXJPayA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl91c2VyID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0PGJvb2xlYW4+KFwiRG9tYWluIFwiICsgdGhpcy5nZXREb21haW4odGhpcy5zZXRDb29raWVVcmwpICsgXCIgcHJvYmFibHkgZG9lc24ndCBhbGxvdyBDT1JTIGZyb20gZG9tYWluIFwiICsgdGhpcy5kb21haW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYnJvd3Nlck9rID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl91c2VyID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdDxib29sZWFuPihcIkNhbid0IHJlYWNoIHNpdGUgXCIgKyB0aGlzLmxvZ2luU2l0ZVVybCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByZUZsaWdodCgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAub3B0aW9ucyh0aGlzLnNlcnZpY2VVcmwpXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7IHJldHVybiByZXNwb25zZTsgfSlcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZGlyZWN0TG9naW4oKSB7XHJcbiAgICAgICAgdmFyIHJldHVyblVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG5cclxuICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdhdXRoZW50aWNhdGluZycsICdhdXRoZW50aWNhdGluZycpO1xyXG4gICAgICAgIHZhciB1cmwgPSB0aGlzLnNpdGVVcmwgKyAnYXBpL2xvZ2luJyArIFwiP1JldHVyblVybD1cIiArIHJldHVyblVybDtcclxuICAgICAgICB3aW5kb3cub3Blbih1cmwsICdfc2VsZicpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvZ2luKCk6IFByb21pc2U8Q3VycmVudFVzZXI+IHtcclxuICAgICAgICB0aGlzLmxvZ2luUHJvbWlzZSA9IHRoaXMuaHR0cC5nZXQodGhpcy5zZXJ2aWNlVXJsKVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlOiBDdXJyZW50VXNlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgdmFyIHVzZXI6IEN1cnJlbnRVc2VyO1xyXG4gICAgICAgICAgICAgICAgdXNlciA9IE9iamVjdC5hc3NpZ24obmV3IEN1cnJlbnRVc2VyKCksIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3VzZXIgPSB1c2VyO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZXI7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVFcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxvZ2luUHJvbWlzZTtcclxuICAgIH1cclxuXHJcbiAgICBsb2dvdXQoKSB7XHJcbiAgICAgICAgdGhpcy5fdXNlciA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVFcnJvcihlcnJvcjogYW55KTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IubWVzc2FnZSB8fCBlcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzSW5Sb2xlKHJvbGU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnVzZXIucm9sZXMuZmluZCh4ID0+IHggPT0gcm9sZSkgIT09IHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNJblJvbGVzKHJvbGVzOiBzdHJpbmdbXSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHZhciByZXR1cm5WYWx1ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICByb2xlcy5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICByZXR1cm5WYWx1ZSA9IHJldHVyblZhbHVlIHx8IHRoaXMuaXNJblJvbGUoeCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiByZXR1cm5WYWx1ZTtcclxuICAgIH1cclxufVxyXG4iXX0=