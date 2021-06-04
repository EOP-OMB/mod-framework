import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CurrentUserService } from './current-user.service';
export declare class HttpRequestInterceptor implements HttpInterceptor {
    private userService;
    constructor(userService: CurrentUserService);
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
}
