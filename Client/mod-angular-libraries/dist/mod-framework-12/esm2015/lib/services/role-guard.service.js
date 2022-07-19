import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./current-user.service";
import * as i2 from "@angular/router";
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
RoleGuardService.ɵfac = function RoleGuardService_Factory(t) { return new (t || RoleGuardService)(i0.ɵɵinject(i1.CurrentUserService), i0.ɵɵinject(i2.Router)); };
RoleGuardService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RoleGuardService, factory: RoleGuardService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RoleGuardService, [{
        type: Injectable
    }], function () { return [{ type: i1.CurrentUserService }, { type: i2.Router }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9sZS1ndWFyZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbW9kLWZyYW1ld29yay9zcmMvbGliL3NlcnZpY2VzL3JvbGUtZ3VhcmQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBSzNDLE1BQU0sT0FBTyxnQkFBZ0I7SUFDekIsWUFBbUIsV0FBK0IsRUFBUyxNQUFjO1FBQXRELGdCQUFXLEdBQVgsV0FBVyxDQUFvQjtRQUFTLFdBQU0sR0FBTixNQUFNLENBQVE7SUFBSSxDQUFDO0lBQzlFLFdBQVcsQ0FBQyxLQUE2QjtRQUNyQyw0Q0FBNEM7UUFDNUMsdUJBQXVCO1FBQ3ZCLE1BQU0sYUFBYSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBRS9DLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxFQUN0RTtZQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUM1QixPQUFPLEtBQUssQ0FBQztTQUNoQjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7O2dGQWJRLGdCQUFnQjtzRUFBaEIsZ0JBQWdCLFdBQWhCLGdCQUFnQjt1RkFBaEIsZ0JBQWdCO2NBRDVCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIsIENhbkFjdGl2YXRlLCBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEN1cnJlbnRVc2VyU2VydmljZSB9IGZyb20gJy4vY3VycmVudC11c2VyLnNlcnZpY2UnO1xyXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBSb2xlR3VhcmRTZXJ2aWNlIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB1c2VyU2VydmljZTogQ3VycmVudFVzZXJTZXJ2aWNlLCBwdWJsaWMgcm91dGVyOiBSb3V0ZXIpIHsgfVxuICAgIGNhbkFjdGl2YXRlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KTogYm9vbGVhbiB7XG4gICAgICAgIC8vIHRoaXMgd2lsbCBiZSBwYXNzZWQgZnJvbSB0aGUgcm91dGUgY29uZmlnXG4gICAgICAgIC8vIG9uIHRoZSBkYXRhIHByb3BlcnR5XG4gICAgICAgIGNvbnN0IGV4cGVjdGVkUm9sZXMgPSByb3V0ZS5kYXRhLmV4cGVjdGVkUm9sZXM7XG5cbiAgICAgICAgaWYgKCF0aGlzLnVzZXJTZXJ2aWNlLnVzZXIgfHwgIXRoaXMudXNlclNlcnZpY2UuaXNJblJvbGVzKGV4cGVjdGVkUm9sZXMpXG4gICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvJ10pO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn1cbiJdfQ==