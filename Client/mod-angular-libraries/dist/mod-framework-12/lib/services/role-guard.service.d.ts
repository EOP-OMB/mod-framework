import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { CurrentUserService } from './current-user.service';
import * as i0 from "@angular/core";
export declare class RoleGuardService implements CanActivate {
    userService: CurrentUserService;
    router: Router;
    constructor(userService: CurrentUserService, router: Router);
    canActivate(route: ActivatedRouteSnapshot): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<RoleGuardService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RoleGuardService>;
}
//# sourceMappingURL=role-guard.service.d.ts.map