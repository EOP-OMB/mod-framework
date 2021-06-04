import { CurrentUser } from '../models/current-user.model';
import { HttpClient } from '@angular/common/http';
import { ModFrameworkConfig } from '../models/mod-framework-config.model';
export declare class CurrentUserService {
    private http;
    loginPromise: Promise<CurrentUser>;
    private serviceUrl;
    private setCookieUrl;
    private checkCookieUrl;
    private noOpUrl;
    private cookieName;
    private _user;
    private _browserOk;
    private loginSiteUrl;
    constructor(http: HttpClient, config: ModFrameworkConfig);
    getDomain(url: any): string;
    get user(): CurrentUser;
    get browserOk(): boolean;
    get domain(): string;
    get siteUrl(): string;
    browserCheck(): Promise<boolean>;
    preFlight(): Promise<any>;
    redirectLogin(): void;
    login(): Promise<CurrentUser>;
    logout(): void;
    private handleError;
    isInRole(role: string): boolean;
    isInRoles(roles: string[]): boolean;
}
