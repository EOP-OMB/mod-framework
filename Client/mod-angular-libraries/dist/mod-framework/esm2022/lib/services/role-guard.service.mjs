import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./current-user.service";
import * as i2 from "@angular/router";
class RoleGuardService {
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
    static { this.ɵfac = function RoleGuardService_Factory(t) { return new (t || RoleGuardService)(i0.ɵɵinject(i1.CurrentUserService), i0.ɵɵinject(i2.Router)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RoleGuardService, factory: RoleGuardService.ɵfac }); }
}
export { RoleGuardService };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RoleGuardService, [{
        type: Injectable
    }], function () { return [{ type: i1.CurrentUserService }, { type: i2.Router }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9sZS1ndWFyZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbW9kLWZyYW1ld29yay9zcmMvbGliL3NlcnZpY2VzL3JvbGUtZ3VhcmQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBSTNDLE1BQ2EsZ0JBQWdCO0lBQ3pCLFlBQW1CLFdBQStCLEVBQVMsTUFBYztRQUF0RCxnQkFBVyxHQUFYLFdBQVcsQ0FBb0I7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQUksQ0FBQztJQUM5RSxXQUFXLENBQUMsS0FBNkI7UUFDckMsNENBQTRDO1FBQzVDLHVCQUF1QjtRQUN2QixNQUFNLGFBQWEsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUUvQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsRUFDdEU7WUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDNUIsT0FBTyxLQUFLLENBQUM7U0FDaEI7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO2lGQWJRLGdCQUFnQjt1RUFBaEIsZ0JBQWdCLFdBQWhCLGdCQUFnQjs7U0FBaEIsZ0JBQWdCO3VGQUFoQixnQkFBZ0I7Y0FENUIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgQ2FuQWN0aXZhdGUsIEFjdGl2YXRlZFJvdXRlU25hcHNob3QgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQ3VycmVudFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi9jdXJyZW50LXVzZXIuc2VydmljZSc7XHJcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJvbGVHdWFyZFNlcnZpY2UgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG4gICAgY29uc3RydWN0b3IocHVibGljIHVzZXJTZXJ2aWNlOiBDdXJyZW50VXNlclNlcnZpY2UsIHB1YmxpYyByb3V0ZXI6IFJvdXRlcikgeyB9XG4gICAgY2FuQWN0aXZhdGUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiBib29sZWFuIHtcbiAgICAgICAgLy8gdGhpcyB3aWxsIGJlIHBhc3NlZCBmcm9tIHRoZSByb3V0ZSBjb25maWdcbiAgICAgICAgLy8gb24gdGhlIGRhdGEgcHJvcGVydHlcbiAgICAgICAgY29uc3QgZXhwZWN0ZWRSb2xlcyA9IHJvdXRlLmRhdGEuZXhwZWN0ZWRSb2xlcztcblxuICAgICAgICBpZiAoIXRoaXMudXNlclNlcnZpY2UudXNlciB8fCAhdGhpcy51c2VyU2VydmljZS5pc0luUm9sZXMoZXhwZWN0ZWRSb2xlcylcbiAgICAgICAgKSB7XG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy8nXSk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufVxuIl19