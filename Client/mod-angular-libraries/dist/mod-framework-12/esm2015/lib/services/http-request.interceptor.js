import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { tap, filter } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "./current-user.service";
// Add credentials to every request.
// Credit to https://weblog.west-wind.com/posts/2019/Apr/07/Creating-a-custom-HttpInterceptor-to-handle-withCredentials
export class HttpRequestInterceptor {
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
}
HttpRequestInterceptor.ɵfac = function HttpRequestInterceptor_Factory(t) { return new (t || HttpRequestInterceptor)(i0.ɵɵinject(i1.CurrentUserService)); };
HttpRequestInterceptor.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: HttpRequestInterceptor, factory: HttpRequestInterceptor.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HttpRequestInterceptor, [{
        type: Injectable
    }], function () { return [{ type: i1.CurrentUserService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1yZXF1ZXN0LmludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbW9kLWZyYW1ld29yay9zcmMvbGliL3NlcnZpY2VzL2h0dHAtcmVxdWVzdC5pbnRlcmNlcHRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFDbUQsWUFBWSxFQUNyRSxNQUFNLHNCQUFzQixDQUFDO0FBRzlCLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQUc3QyxvQ0FBb0M7QUFDcEMsdUhBQXVIO0FBR3ZILE1BQU0sT0FBTyxzQkFBc0I7SUFFL0IsWUFBb0IsV0FBK0I7UUFBL0IsZ0JBQVcsR0FBWCxXQUFXLENBQW9CO0lBRW5ELENBQUM7SUFFRCxTQUFTLENBQUMsR0FBcUIsRUFBRSxJQUFpQjtRQUU5QyxHQUFHLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztZQUNaLGVBQWUsRUFBRSxJQUFJO1NBQ3hCLENBQUMsQ0FBQztRQUVILE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQ3hCLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssWUFBWSxZQUFZLENBQUMsRUFDOUMsR0FBRyxDQUFDLENBQUMsS0FBd0IsRUFBRSxFQUFFO1lBQzdCLHNEQUFzRDtZQUN0RCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUM7Z0JBQzVELElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDakMsQ0FBQyxFQUFFLENBQUMsR0FBUSxFQUFFLEVBQUU7WUFDWixJQUFJLEdBQUcsQ0FBQyxNQUFNLElBQUksQ0FBQztnQkFDZixJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3pDLENBQUMsQ0FBQyxDQUNMLENBQUM7SUFDTixDQUFDOzs0RkF2QlEsc0JBQXNCOzRFQUF0QixzQkFBc0IsV0FBdEIsc0JBQXNCO3VGQUF0QixzQkFBc0I7Y0FEbEMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7XHJcbiAgICBIdHRwRXZlbnQsIEh0dHBJbnRlcmNlcHRvciwgSHR0cEhhbmRsZXIsIEh0dHBSZXF1ZXN0LCBIdHRwUmVzcG9uc2VcclxufSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcblxyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRhcCwgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBDdXJyZW50VXNlclNlcnZpY2UgfSBmcm9tICcuL2N1cnJlbnQtdXNlci5zZXJ2aWNlJztcclxuXHJcbi8vIEFkZCBjcmVkZW50aWFscyB0byBldmVyeSByZXF1ZXN0LlxyXG4vLyBDcmVkaXQgdG8gaHR0cHM6Ly93ZWJsb2cud2VzdC13aW5kLmNvbS9wb3N0cy8yMDE5L0Fwci8wNy9DcmVhdGluZy1hLWN1c3RvbS1IdHRwSW50ZXJjZXB0b3ItdG8taGFuZGxlLXdpdGhDcmVkZW50aWFsc1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSHR0cFJlcXVlc3RJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB1c2VyU2VydmljZTogQ3VycmVudFVzZXJTZXJ2aWNlKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGludGVyY2VwdChyZXE6IEh0dHBSZXF1ZXN0PGFueT4sIG5leHQ6IEh0dHBIYW5kbGVyKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xyXG5cclxuICAgICAgICByZXEgPSByZXEuY2xvbmUoe1xyXG4gICAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcSkucGlwZShcclxuICAgICAgICAgICAgZmlsdGVyKGV2ZW50ID0+IGV2ZW50IGluc3RhbmNlb2YgSHR0cFJlc3BvbnNlKSxcclxuICAgICAgICAgICAgdGFwKChldmVudDogSHR0cFJlc3BvbnNlPGFueT4pID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIERvbid0IGZvcmNlIGxvZ2luIHdoZW4gbWFraW5nIGEgY2FsbCB0byBjbGFpbXMvdXNlclxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnVzZXJTZXJ2aWNlLnVzZXIgJiYgIWV2ZW50LnVybC5lbmRzV2l0aChcImNsYWltcy91c2VyXCIpKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlclNlcnZpY2UubG9naW4oKTtcclxuICAgICAgICAgICAgfSwgKGVycjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyLnN0YXR1cyA9PSAwKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlclNlcnZpY2UucmVkaXJlY3RMb2dpbigpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ==