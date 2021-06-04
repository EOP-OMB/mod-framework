import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CurrentUserService } from './current-user.service';
export class RoleGuardService {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    canActivate(route) {
        // this will be passed from the route config
        // on the data property
        const expectedRoles = route.data.expectedRoles;
        if (!this.userService.user || !this.userService.isInRoles(expectedRoles)) {
            this.router.navigate(['/']);
            return false;
        }
        return true;
    }
}
RoleGuardService.decorators = [
    { type: Injectable }
];
RoleGuardService.ctorParameters = () => [
    { type: CurrentUserService },
    { type: Router }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9sZS1ndWFyZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbW9kLWZyYW1ld29yay9zcmMvbGliL3NlcnZpY2VzL3JvbGUtZ3VhcmQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQXVDLE1BQU0saUJBQWlCLENBQUM7QUFDOUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFHNUQsTUFBTSxPQUFPLGdCQUFnQjtJQUN6QixZQUFtQixXQUErQixFQUFTLE1BQWM7UUFBdEQsZ0JBQVcsR0FBWCxXQUFXLENBQW9CO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUFJLENBQUM7SUFDOUUsV0FBVyxDQUFDLEtBQTZCO1FBQ3JDLDRDQUE0QztRQUM1Qyx1QkFBdUI7UUFDdkIsTUFBTSxhQUFhLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7UUFFL0MsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLEVBQ3RFO1lBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzVCLE9BQU8sS0FBSyxDQUFDO1NBQ2hCO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQzs7O1lBZEosVUFBVTs7O1lBRkYsa0JBQWtCO1lBRGxCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIsIENhbkFjdGl2YXRlLCBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEN1cnJlbnRVc2VyU2VydmljZSB9IGZyb20gJy4vY3VycmVudC11c2VyLnNlcnZpY2UnO1xyXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBSb2xlR3VhcmRTZXJ2aWNlIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB1c2VyU2VydmljZTogQ3VycmVudFVzZXJTZXJ2aWNlLCBwdWJsaWMgcm91dGVyOiBSb3V0ZXIpIHsgfVxuICAgIGNhbkFjdGl2YXRlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KTogYm9vbGVhbiB7XG4gICAgICAgIC8vIHRoaXMgd2lsbCBiZSBwYXNzZWQgZnJvbSB0aGUgcm91dGUgY29uZmlnXG4gICAgICAgIC8vIG9uIHRoZSBkYXRhIHByb3BlcnR5XG4gICAgICAgIGNvbnN0IGV4cGVjdGVkUm9sZXMgPSByb3V0ZS5kYXRhLmV4cGVjdGVkUm9sZXM7XG5cbiAgICAgICAgaWYgKCF0aGlzLnVzZXJTZXJ2aWNlLnVzZXIgfHwgIXRoaXMudXNlclNlcnZpY2UuaXNJblJvbGVzKGV4cGVjdGVkUm9sZXMpXG4gICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvJ10pO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn1cbiJdfQ==