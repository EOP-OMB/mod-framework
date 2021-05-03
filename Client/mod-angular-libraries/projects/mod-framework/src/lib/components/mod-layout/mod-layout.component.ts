import { Component, OnInit, ViewChild, Input, Output, EventEmitter, Inject } from '@angular/core';
import { ModSideMenuComponent } from '../mod-side-menu/mod-side-menu.component';
import { ModSideMenuConfig } from '../../models/mod-side-menu-config.model';
import { ModFrameworkConfig } from '../../models/mod-framework-config.model';
import { ModConfig } from '../../static/mod-config.const';

@Component({
    selector: 'mod-layout',
    templateUrl: './mod-layout.component.html',
    styleUrls: ['./mod-layout.component.scss']
})
export class ModLayoutComponent implements OnInit {

    @ViewChild('sidemenu', { static: true }) sideMenu: ModSideMenuComponent;

    @Input()
    appName: string;

    @Input()
    menuConfig: ModSideMenuConfig;

    @Output()
    userOptionSelect = new EventEmitter<string>();

    @Output()
    helpOptionSelect = new EventEmitter<string>();

    @Output()
    search = new EventEmitter<string>();

    public searchText: string;

    public config: ModFrameworkConfig;

    constructor(@Inject(ModConfig) config: ModFrameworkConfig) {
        this.config = config;
    }

    ngOnInit(): void {
    }

    public onMenuClicked(): void {
        this.sideMenu.toggleSideNav();
    }

    public onUserOptionSelect(option: string): void {
        this.userOptionSelect.emit(option);
    }

    public onHelpOptionSelect(option: string): void {
        this.helpOptionSelect.emit(option);
    }

    public onSearch(): void {
        this.search.emit(this.searchText);
        this.searchText = '';
    }
}
