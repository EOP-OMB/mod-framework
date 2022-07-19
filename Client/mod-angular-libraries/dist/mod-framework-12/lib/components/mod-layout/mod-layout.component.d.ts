import { OnInit, EventEmitter } from '@angular/core';
import { ModSideMenuComponent } from '../mod-side-menu/mod-side-menu.component';
import { ModSideMenuConfig } from '../../models/mod-side-menu-config.model';
import { ModFrameworkConfig } from '../../models/mod-framework-config.model';
import * as i0 from "@angular/core";
export declare class ModLayoutComponent implements OnInit {
    sideMenu: ModSideMenuComponent;
    appName: string;
    menuConfig: ModSideMenuConfig;
    userOptionSelect: EventEmitter<string>;
    helpOptionSelect: EventEmitter<string>;
    search: EventEmitter<string>;
    searchText: string;
    config: ModFrameworkConfig;
    constructor(config: ModFrameworkConfig);
    ngOnInit(): void;
    onMenuClicked(): void;
    onUserOptionSelect(option: string): void;
    onHelpOptionSelect(option: string): void;
    onSearch(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ModLayoutComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ModLayoutComponent, "mod-layout", never, { "appName": "appName"; "menuConfig": "menuConfig"; }, { "userOptionSelect": "userOptionSelect"; "helpOptionSelect": "helpOptionSelect"; "search": "search"; }, never, ["*"]>;
}
//# sourceMappingURL=mod-layout.component.d.ts.map