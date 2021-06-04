import { ModuleWithProviders } from '@angular/core';
import { ModFrameworkConfig } from './models/mod-framework-config.model';
import { CurrentUserService } from './services/current-user.service';
export declare function initiateSingleSignOn(userService: CurrentUserService): () => Promise<unknown>;
export declare class ModFrameworkModule {
    static forRoot(config?: ModFrameworkConfig): ModuleWithProviders<ModFrameworkModule>;
    constructor(parentModule: ModFrameworkModule);
}
