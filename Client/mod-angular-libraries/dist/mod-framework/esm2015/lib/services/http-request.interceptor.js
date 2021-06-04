import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { tap, filter } from 'rxjs/operators';
import { CurrentUserService } from './current-user.service';
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
HttpRequestInterceptor.decorators = [
    { type: Injectable }
];
HttpRequestInterceptor.ctorParameters = () => [
    { type: CurrentUserService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1yZXF1ZXN0LmludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbW9kLWZyYW1ld29yay9zcmMvbGliL3NlcnZpY2VzL2h0dHAtcmVxdWVzdC5pbnRlcmNlcHRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFDbUQsWUFBWSxFQUNyRSxNQUFNLHNCQUFzQixDQUFDO0FBRzlCLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFNUQsb0NBQW9DO0FBQ3BDLHVIQUF1SDtBQUd2SCxNQUFNLE9BQU8sc0JBQXNCO0lBRS9CLFlBQW9CLFdBQStCO1FBQS9CLGdCQUFXLEdBQVgsV0FBVyxDQUFvQjtJQUVuRCxDQUFDO0lBRUQsU0FBUyxDQUFDLEdBQXFCLEVBQUUsSUFBaUI7UUFFOUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFDWixlQUFlLEVBQUUsSUFBSTtTQUN4QixDQUFDLENBQUM7UUFFSCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUN4QixNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLFlBQVksWUFBWSxDQUFDLEVBQzlDLEdBQUcsQ0FBQyxDQUFDLEtBQXdCLEVBQUUsRUFBRTtZQUM3QixzREFBc0Q7WUFDdEQsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDO2dCQUM1RCxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2pDLENBQUMsRUFBRSxDQUFDLEdBQVEsRUFBRSxFQUFFO1lBQ1osSUFBSSxHQUFHLENBQUMsTUFBTSxJQUFJLENBQUM7Z0JBQ2YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN6QyxDQUFDLENBQUMsQ0FDTCxDQUFDO0lBQ04sQ0FBQzs7O1lBeEJKLFVBQVU7OztZQUxGLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7XHJcbiAgICBIdHRwRXZlbnQsIEh0dHBJbnRlcmNlcHRvciwgSHR0cEhhbmRsZXIsIEh0dHBSZXF1ZXN0LCBIdHRwUmVzcG9uc2VcclxufSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcblxyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRhcCwgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBDdXJyZW50VXNlclNlcnZpY2UgfSBmcm9tICcuL2N1cnJlbnQtdXNlci5zZXJ2aWNlJztcclxuXHJcbi8vIEFkZCBjcmVkZW50aWFscyB0byBldmVyeSByZXF1ZXN0LlxyXG4vLyBDcmVkaXQgdG8gaHR0cHM6Ly93ZWJsb2cud2VzdC13aW5kLmNvbS9wb3N0cy8yMDE5L0Fwci8wNy9DcmVhdGluZy1hLWN1c3RvbS1IdHRwSW50ZXJjZXB0b3ItdG8taGFuZGxlLXdpdGhDcmVkZW50aWFsc1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSHR0cFJlcXVlc3RJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB1c2VyU2VydmljZTogQ3VycmVudFVzZXJTZXJ2aWNlKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGludGVyY2VwdChyZXE6IEh0dHBSZXF1ZXN0PGFueT4sIG5leHQ6IEh0dHBIYW5kbGVyKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xyXG5cclxuICAgICAgICByZXEgPSByZXEuY2xvbmUoe1xyXG4gICAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcSkucGlwZShcclxuICAgICAgICAgICAgZmlsdGVyKGV2ZW50ID0+IGV2ZW50IGluc3RhbmNlb2YgSHR0cFJlc3BvbnNlKSxcclxuICAgICAgICAgICAgdGFwKChldmVudDogSHR0cFJlc3BvbnNlPGFueT4pID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIERvbid0IGZvcmNlIGxvZ2luIHdoZW4gbWFraW5nIGEgY2FsbCB0byBjbGFpbXMvdXNlclxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnVzZXJTZXJ2aWNlLnVzZXIgJiYgIWV2ZW50LnVybC5lbmRzV2l0aChcImNsYWltcy91c2VyXCIpKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlclNlcnZpY2UubG9naW4oKTtcclxuICAgICAgICAgICAgfSwgKGVycjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyLnN0YXR1cyA9PSAwKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlclNlcnZpY2UucmVkaXJlY3RMb2dpbigpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ==