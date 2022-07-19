import { OnInit, EventEmitter } from '@angular/core';
import { CurrentUserService } from '../../services/current-user.service';
import { ModFrameworkConfig } from '../../models/mod-framework-config.model';
import * as i0 from "@angular/core";
export declare class ModUserDisplayComponent implements OnInit {
    private userService;
    showUser: boolean;
    selectOption: EventEmitter<string>;
    config: ModFrameworkConfig;
    constructor(userService: CurrentUserService, config: ModFrameworkConfig);
    ngOnInit(): void;
    get user(): import("../../models/current-user.model").CurrentUser;
    optionSelected(option: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ModUserDisplayComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ModUserDisplayComponent, "mod-user-display", never, { "showUser": "showUser"; }, { "selectOption": "selectOption"; }, never, never>;
}
//# sourceMappingURL=mod-user-display.component.d.ts.map