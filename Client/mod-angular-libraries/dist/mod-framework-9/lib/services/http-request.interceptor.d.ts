import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CurrentUserService } from './current-user.service';
import * as i0 from "@angular/core";
export declare class HttpRequestInterceptor implements HttpInterceptor {
    private userService;
    constructor(userService: CurrentUserService);
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    static ɵfac: i0.ɵɵFactoryDef<HttpRequestInterceptor, never>;
    static ɵprov: i0.ɵɵInjectableDef<HttpRequestInterceptor>;
}
