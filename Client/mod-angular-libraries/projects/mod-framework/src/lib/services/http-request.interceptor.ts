import { Injectable } from '@angular/core';

import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap, filter } from 'rxjs/operators';
import { CurrentUserService } from './current-user.service';

// Add credentials to every request.
// Credit to https://weblog.west-wind.com/posts/2019/Apr/07/Creating-a-custom-HttpInterceptor-to-handle-withCredentials

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {

    constructor(private userService: CurrentUserService) {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        req = req.clone({
            withCredentials: true
        });

        return next.handle(req).pipe(
            filter(event => event instanceof HttpResponse),
            tap((event: HttpResponse<any>) => {
                // Don't force login when making a call to claims/user
                if (!this.userService.user && !event.url.endsWith("claims/user"))
                    this.userService.login();
            }, (err: any) => {
                if (err.status == 0)
                    this.userService.redirectLogin();
            })
        );
    }
}

