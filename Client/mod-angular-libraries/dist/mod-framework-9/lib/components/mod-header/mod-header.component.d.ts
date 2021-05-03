import { OnInit, EventEmitter } from '@angular/core';
import { ModFrameworkConfig } from '../../models/mod-framework-config.model';
import * as i0 from "@angular/core";
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
    static ɵfac: i0.ɵɵFactoryDef<ModHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ModHeaderComponent, "mod-header", never, { "appName": "appName"; }, { "menuClick": "menuClick"; "userOptionSelect": "userOptionSelect"; "helpOptionSelect": "helpOptionSelect"; }, never, ["*"]>;
}
