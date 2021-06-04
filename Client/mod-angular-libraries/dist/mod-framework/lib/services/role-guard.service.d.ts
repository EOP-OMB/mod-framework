import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { CurrentUserService } from './current-user.service';
export declare class RoleGuardService implements CanActivate {
    userService: CurrentUserService;
    router: Router;
    constructor(userService: CurrentUserService, router: Router);
    canActivate(route: ActivatedRouteSnapshot): boolean;
}
