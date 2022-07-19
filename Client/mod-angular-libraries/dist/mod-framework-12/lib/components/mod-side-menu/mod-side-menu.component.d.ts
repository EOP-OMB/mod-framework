import { OnInit, OnChanges, SimpleChange, ElementRef, Renderer2 } from '@angular/core';
import { ModSideMenuConfig, ModMenuItem, ModMenuSection } from '../../models/mod-side-menu-config.model';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { CurrentUserService } from '../../services/current-user.service';
import * as i0 from "@angular/core";
export declare class ModSideMenuComponent implements OnInit, OnChanges {
    router: Router;
    private activatedRoute;
    private renderer;
    private userService;
    menuOption: string;
    expanded: boolean;
    opened: boolean;
    config: ModSideMenuConfig;
    mainContentElement: ElementRef;
    sidenav: MatSidenav;
    constructor(router: Router, activatedRoute: ActivatedRoute, renderer: Renderer2, userService: CurrentUserService);
    ngOnInit(): void;
    ngOnChanges(changes: {
        [propName: string]: SimpleChange;
    }): void;
    private selectCurrentRoute;
    navigateTo(urlSegment: string): void;
    expandMenu(expanded?: boolean): void;
    toggleSideNav(): void;
    get viewableSections(): ModMenuSection[];
    getViewableMenuItems(section: ModMenuSection): ModMenuItem[];
    static ɵfac: i0.ɵɵFactoryDeclaration<ModSideMenuComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ModSideMenuComponent, "mod-side-menu", never, { "config": "config"; }, {}, never, ["*"]>;
}
//# sourceMappingURL=mod-side-menu.component.d.ts.map