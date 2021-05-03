import { Injectable, Inject } from '@angular/core';
import { CurrentUser } from '../models/current-user.model';
import { HttpClient } from '@angular/common/http';

import * as parseUri from 'parse-uri';
import { ModConfig } from '../static/mod-config.const';
import { ModFrameworkConfig } from '../models/mod-framework-config.model';

@Injectable({
    providedIn: 'root'
})
export class CurrentUserService {
    public loginPromise: Promise<CurrentUser>;

    private serviceUrl = '';
    private setCookieUrl = '';
    private checkCookieUrl = '';
    private noOpUrl = '';
    private cookieName = 'CookieSettingsCheck';

    private _user: CurrentUser;
    private _browserOk: boolean = false;

    private loginSiteUrl = "https://localhost:44374";

    constructor(private http: HttpClient, @Inject(ModConfig) config: ModFrameworkConfig) {
        this.loginSiteUrl = config ? config.loginSiteUrl : 'https://localhost:44374';

        this.serviceUrl = this.siteUrl + "api/claims/user";
        this.setCookieUrl = this.siteUrl + "api/health/setcookie";
        this.checkCookieUrl = this.siteUrl + "api/health/checkcookie";
        this.noOpUrl = this.siteUrl + "api/health/noop";
    }

    public getDomain(url): string {
        var u = parseUri(url);
        return u.host;
    }

    public get user(): CurrentUser {
        return this._user;
    }

    public get browserOk(): boolean {
        return this._browserOk;
    }

    public get domain(): string {
        return this.getDomain(this.loginSiteUrl);
    }

    public get siteUrl(): string {
        return this.loginSiteUrl + (this.loginSiteUrl.endsWith("/") ? "" : "/");
    }

    browserCheck(): Promise<boolean> {
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
                            })
                    })
                    .catch((error: Response) => {
                        this._browserOk = false;
                        this._user = null;
                        return Promise.reject<boolean>("Domain " + this.getDomain(this.setCookieUrl) + " probably doesn't allow CORS from domain " + this.domain);
                    });
            })
            .catch(error => {
                this._browserOk = false;
                this._user = null;
                return Promise.reject<boolean>("Can't reach site " + this.loginSiteUrl);
            });
    }

    preFlight(): Promise<any> {
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

    login(): Promise<CurrentUser> {
        this.loginPromise = this.http.get(this.serviceUrl)
            .toPromise()
            .then((response: CurrentUser) => {
                var user: CurrentUser;
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

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }

    public isInRole(role: string): boolean {
        return this.user.roles.find(x => x == role) !== undefined;
    }

    public isInRoles(roles: string[]): boolean {
        var returnValue = false;

        roles.forEach(x => {
            returnValue = returnValue || this.isInRole(x);
        });

        return returnValue;
    }
}
