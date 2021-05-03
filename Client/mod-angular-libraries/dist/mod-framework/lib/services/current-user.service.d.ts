import { CurrentUser } from '../models/current-user.model';
import { HttpClient } from '@angular/common/http';
import { ModFrameworkConfig } from '../models/mod-framework-config.model';
import * as i0 from "@angular/core";
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
    static ɵfac: i0.ɵɵFactoryDef<CurrentUserService, never>;
    static ɵprov: i0.ɵɵInjectableDef<CurrentUserService>;
}
//# sourceMappingURL=current-user.service.d.ts.map