import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { tap, filter } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "./current-user.service";
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
    static { this.ɵfac = function HttpRequestInterceptor_Factory(t) { return new (t || HttpRequestInterceptor)(i0.ɵɵinject(i1.CurrentUserService)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: HttpRequestInterceptor, factory: HttpRequestInterceptor.ɵfac }); }
}
export { HttpRequestInterceptor };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HttpRequestInterceptor, [{
        type: Injectable
    }], function () { return [{ type: i1.CurrentUserService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1yZXF1ZXN0LmludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbW9kLWZyYW1ld29yay9zcmMvbGliL3NlcnZpY2VzL2h0dHAtcmVxdWVzdC5pbnRlcmNlcHRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFDbUQsWUFBWSxFQUNyRSxNQUFNLHNCQUFzQixDQUFDO0FBRzlCLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQUc3QyxvQ0FBb0M7QUFDcEMsdUhBQXVIO0FBRXZILE1BQ2Esc0JBQXNCO0lBRS9CLFlBQW9CLFdBQStCO1FBQS9CLGdCQUFXLEdBQVgsV0FBVyxDQUFvQjtJQUVuRCxDQUFDO0lBRUQsU0FBUyxDQUFDLEdBQXFCLEVBQUUsSUFBaUI7UUFFOUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFDWixlQUFlLEVBQUUsSUFBSTtTQUN4QixDQUFDLENBQUM7UUFFSCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUN4QixNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLFlBQVksWUFBWSxDQUFDLEVBQzlDLEdBQUcsQ0FBQyxDQUFDLEtBQXdCLEVBQUUsRUFBRTtZQUM3QixzREFBc0Q7WUFDdEQsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDO2dCQUM1RCxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2pDLENBQUMsRUFBRSxDQUFDLEdBQVEsRUFBRSxFQUFFO1lBQ1osSUFBSSxHQUFHLENBQUMsTUFBTSxJQUFJLENBQUM7Z0JBQ2YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN6QyxDQUFDLENBQUMsQ0FDTCxDQUFDO0lBQ04sQ0FBQzt1RkF2QlEsc0JBQXNCO3VFQUF0QixzQkFBc0IsV0FBdEIsc0JBQXNCOztTQUF0QixzQkFBc0I7dUZBQXRCLHNCQUFzQjtjQURsQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtcclxuICAgIEh0dHBFdmVudCwgSHR0cEludGVyY2VwdG9yLCBIdHRwSGFuZGxlciwgSHR0cFJlcXVlc3QsIEh0dHBSZXNwb25zZVxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuXHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFwLCBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IEN1cnJlbnRVc2VyU2VydmljZSB9IGZyb20gJy4vY3VycmVudC11c2VyLnNlcnZpY2UnO1xyXG5cclxuLy8gQWRkIGNyZWRlbnRpYWxzIHRvIGV2ZXJ5IHJlcXVlc3QuXHJcbi8vIENyZWRpdCB0byBodHRwczovL3dlYmxvZy53ZXN0LXdpbmQuY29tL3Bvc3RzLzIwMTkvQXByLzA3L0NyZWF0aW5nLWEtY3VzdG9tLUh0dHBJbnRlcmNlcHRvci10by1oYW5kbGUtd2l0aENyZWRlbnRpYWxzXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBIdHRwUmVxdWVzdEludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHVzZXJTZXJ2aWNlOiBDdXJyZW50VXNlclNlcnZpY2UpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaW50ZXJjZXB0KHJlcTogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIpOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XHJcblxyXG4gICAgICAgIHJlcSA9IHJlcS5jbG9uZSh7XHJcbiAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxKS5waXBlKFxyXG4gICAgICAgICAgICBmaWx0ZXIoZXZlbnQgPT4gZXZlbnQgaW5zdGFuY2VvZiBIdHRwUmVzcG9uc2UpLFxyXG4gICAgICAgICAgICB0YXAoKGV2ZW50OiBIdHRwUmVzcG9uc2U8YW55PikgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gRG9uJ3QgZm9yY2UgbG9naW4gd2hlbiBtYWtpbmcgYSBjYWxsIHRvIGNsYWltcy91c2VyXHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMudXNlclNlcnZpY2UudXNlciAmJiAhZXZlbnQudXJsLmVuZHNXaXRoKFwiY2xhaW1zL3VzZXJcIikpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VyU2VydmljZS5sb2dpbigpO1xyXG4gICAgICAgICAgICB9LCAoZXJyOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnIuc3RhdHVzID09IDApXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VyU2VydmljZS5yZWRpcmVjdExvZ2luKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuIl19