import { OnInit, EventEmitter } from '@angular/core';
import { CurrentUserService } from '../../services/current-user.service';
import { ModFrameworkConfig } from '../../models/mod-framework-config.model';
export declare class ModUserDisplayComponent implements OnInit {
    private userService;
    showUser: boolean;
    selectOption: EventEmitter<string>;
    config: ModFrameworkConfig;
    constructor(userService: CurrentUserService, config: ModFrameworkConfig);
    ngOnInit(): void;
    get user(): import("../../models/current-user.model").CurrentUser;
    optionSelected(option: string): void;
}
