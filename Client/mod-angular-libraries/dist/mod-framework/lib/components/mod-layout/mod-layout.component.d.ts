import { OnInit, EventEmitter } from '@angular/core';
import { ModSideMenuComponent } from '../mod-side-menu/mod-side-menu.component';
import { ModSideMenuConfig } from '../../models/mod-side-menu-config.model';
import { ModFrameworkConfig } from '../../models/mod-framework-config.model';
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
}
