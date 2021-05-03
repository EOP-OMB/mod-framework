import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { CurrentUserService } from './current-user.service';

@Injectable()
export class RoleGuardService implements CanActivate {
    constructor(public userService: CurrentUserService, public router: Router) { }
    canActivate(route: ActivatedRouteSnapshot): boolean {
        // this will be passed from the route config
        // on the data property
        const expectedRoles = route.data.expectedRoles;

        if (!this.userService.user || !this.userService.isInRoles(expectedRoles)
        ) {
            this.router.navigate(['/']);
            return false;
        }
        return true;
    }
}
