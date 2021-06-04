import { OnInit, EventEmitter } from '@angular/core';
import { ModFrameworkConfig } from '../../models/mod-framework-config.model';
export declare class ModHeaderComponent implements OnInit {
    appName: string;
    menuClick: EventEmitter<any>;
    userOptionSelect: EventEmitter<string>;
    helpOptionSelect: EventEmitter<string>;
    config: ModFrameworkConfig;
    constructor(config: ModFrameworkConfig);
    ngOnInit(): void;
    onMenuClick(): void;
    onUserOptionSelect(option: string): void;
    optionSelected(option: string): void;
}
