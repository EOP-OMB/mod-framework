import { Component, Input, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../../services/current-user.service";
import * as i3 from "@angular/common";
import * as i4 from "@angular/material/icon";
import * as i5 from "@angular/material/list";
import * as i6 from "@angular/material/sidenav";
import * as i7 from "@angular/material/tooltip";
const _c0 = ["mainContent"];
const _c1 = ["sidenav"];
function ModSideMenuComponent_mat_icon_5_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-icon", 9);
    i0.ɵɵlistener("click", function ModSideMenuComponent_mat_icon_5_Template_mat_icon_click_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r5.expandMenu(!ctx_r5.expanded)); });
    i0.ɵɵtext(1, " keyboard_arrow_left ");
    i0.ɵɵelementEnd();
} }
function ModSideMenuComponent_mat_icon_6_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-icon", 10);
    i0.ɵɵlistener("click", function ModSideMenuComponent_mat_icon_6_Template_mat_icon_click_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r7.expandMenu(!ctx_r7.expanded)); });
    i0.ɵɵtext(1, " keyboard_arrow_right ");
    i0.ɵɵelementEnd();
} }
const _c2 = function () { return { exact: true }; };
function ModSideMenuComponent_div_7_mat_list_item_4_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-list-item", 12);
    i0.ɵɵlistener("keyup.enter", function ModSideMenuComponent_div_7_mat_list_item_4_Template_mat_list_item_keyup_enter_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r13); const item_r11 = restoredCtx.$implicit; const ctx_r12 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r12.navigateTo(item_r11.route)); });
    i0.ɵɵelementStart(1, "mat-icon", 13);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const ctx_r10 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("routerLink", item_r11.route)("routerLinkActiveOptions", i0.ɵɵpureFunction0(5, _c2));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matTooltip", item_r11.text);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r11.icon);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r10.expanded ? item_r11.text : "", " ");
} }
function ModSideMenuComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "h1", 3);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-nav-list");
    i0.ɵɵtemplate(4, ModSideMenuComponent_div_7_mat_list_item_4_Template, 4, 6, "mat-list-item", 11);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const section_r9 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r3.expanded ? section_r9.name : "", " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r3.getViewableMenuItems(section_r9));
} }
const _c3 = function (a1) { return { "mod-side-menu": true, "collapsed": a1 }; };
const _c4 = function (a1) { return { "mod-side-menu-content": true, "collapsed": a1 }; };
const _c5 = ["*"];
class ModSideMenuComponent {
    constructor(router, activatedRoute, renderer, userService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.renderer = renderer;
        this.userService = userService;
        this.expanded = true;
        this.opened = true;
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        if (changes['config'] && changes['config'].previousValue != changes['config'].currentValue) {
            this.selectCurrentRoute();
        }
    }
    selectCurrentRoute() {
        var urls = this.router.url.split('/');
        for (let section of this.config.sections) {
            for (let item of section.menuItems) {
                if (urls[urls.length - 1].toString() == item.route) {
                    this.menuOption = item.text;
                    break;
                }
            }
        }
    }
    // Used by menu item keyup.enter handler to provide keyboard navigation
    navigateTo(urlSegment) {
        urlSegment = urlSegment.split('#')[0];
        var url = "";
        if (urlSegment.startsWith('/')) {
            url = urlSegment;
        }
        else {
            url = this.activatedRoute.snapshot.url.join('/') + '/' + urlSegment;
        }
        // nav to the route, and then set focus on the main content div rather than keep focus
        // on the nav menu itself (users will need to Shift+Tab their way back to nav menu)
        this.router.navigateByUrl(url).then(x => {
            if (this.mainContentElement)
                this.mainContentElement.nativeElement.focus();
        });
    }
    expandMenu(expanded = true) {
        this.expanded = expanded;
    }
    toggleSideNav() {
        //this.sidenav.toggle();
        var opening = !this.opened;
        if (opening) {
            this.opened = !this.opened;
            this.sidenav.toggle();
        }
        else {
            this.sidenav.toggle().then(() => {
                this.opened = !this.opened;
            });
        }
    }
    get viewableSections() {
        let sections = [];
        this.config.sections.forEach(section => {
            if (!section.allowedRoles || this.userService.isInRoles(section.allowedRoles))
                sections.push(section);
        });
        return sections;
    }
    getViewableMenuItems(section) {
        let items = [];
        section.menuItems.forEach(item => {
            if (!item.allowedRoles || this.userService.isInRoles(item.allowedRoles))
                items.push(item);
        });
        return items;
    }
    static { this.ɵfac = function ModSideMenuComponent_Factory(t) { return new (t || ModSideMenuComponent)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i2.CurrentUserService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ModSideMenuComponent, selectors: [["mod-side-menu"]], viewQuery: function ModSideMenuComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 7);
            i0.ɵɵviewQuery(_c1, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.mainContentElement = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.sidenav = _t.first);
        } }, inputs: { config: "config" }, features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c5, decls: 11, vars: 10, consts: [[1, "mod-side-menu-container"], ["mode", "side", "opened", "", "role", "navigation", "id", "navigation-menu", 3, "ngClass"], ["sidenav", ""], ["mat-subheader", ""], ["class", "menu-close", 3, "click", 4, "ngIf"], ["class", "menu-open", 3, "click", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["role", "main", "tabindex", "0", 3, "ngClass"], ["mainContent", ""], [1, "menu-close", 3, "click"], [1, "menu-open", 3, "click"], ["routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions", "keyup.enter", 4, "ngFor", "ngForOf"], ["routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions", "keyup.enter"], ["matListItemIcon", "", 3, "matTooltip"]], template: function ModSideMenuComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "mat-sidenav-container", 0)(1, "mat-sidenav", 1, 2)(3, "h1", 3);
            i0.ɵɵtext(4);
            i0.ɵɵtemplate(5, ModSideMenuComponent_mat_icon_5_Template, 2, 0, "mat-icon", 4);
            i0.ɵɵtemplate(6, ModSideMenuComponent_mat_icon_6_Template, 2, 0, "mat-icon", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(7, ModSideMenuComponent_div_7_Template, 5, 2, "div", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "mat-sidenav-content", 7, 8);
            i0.ɵɵprojection(10);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(6, _c3, !ctx.expanded && ctx.opened));
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1(" ", ctx.expanded ? ctx.config.title : "", " ");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.expanded);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.expanded);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.viewableSections);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(8, _c4, !ctx.expanded && ctx.opened));
        } }, dependencies: [i3.NgClass, i3.NgForOf, i3.NgIf, i1.RouterLink, i1.RouterLinkActive, i4.MatIcon, i5.MatNavList, i5.MatListItem, i5.MatListItemIcon, i5.MatListSubheaderCssMatStyler, i6.MatSidenav, i6.MatSidenavContainer, i6.MatSidenavContent, i7.MatTooltip], styles: ["#main-content[_ngcontent-%COMP%]:focus{border:1px solid #5b9acf}.menu-close[_ngcontent-%COMP%]{position:absolute;right:0;cursor:pointer}.menu-open[_ngcontent-%COMP%]{text-align:center;width:100%;cursor:pointer}.mod-side-menu[_ngcontent-%COMP%]{display:flex;align-items:flex-start;justify-content:left;width:250px;transition:width .25s}.mod-side-menu.collapsed[_ngcontent-%COMP%]{width:76px!important;transition:width .25s}.mod-side-menu-container[_ngcontent-%COMP%]{display:flex;height:100%}.mod-side-menu-content[_ngcontent-%COMP%]{transition:margin-left .25s;width:100%;overflow:auto;display:flex;align-items:stretch;outline:none!important}.mod-side-menu-content.collapsed[_ngcontent-%COMP%]{margin-left:76px!important;transition:margin-left .25s}h2[_ngcontent-%COMP%]{overflow:hidden;white-space:nowrap;text-overflow:clip}.mat-mdc-subheader[_ngcontent-%COMP%]{font-size:14px;line-height:20px;max-height:56px;color:#888;padding:12px 12px 12px 20px!important;margin-bottom:0!important;margin-top:0!important}.mat-mdc-subheader[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{padding-left:4px;margin-right:16px}.mat-mdc-expansion-panel[_ngcontent-%COMP%]{box-shadow:none;margin:0}.mat-mdc-expansion-indicator[_ngcontent-%COMP%]{line-height:0!important}mat-mdc-expansion-panel-header[aria-disabled=true][_ngcontent-%COMP%]{color:initial}.mat-mdc-expansion-panel-header[_ngcontent-%COMP%]{height:56px!important;max-height:56px!important;border-left:5px solid #bbb}.mat-mdc-expansion-panel-header-title[_ngcontent-%COMP%]{max-height:24px}.mat-mdc-expansion-panel.active[_ngcontent-%COMP%] > .mat-mdc-expansion-panel-header[_ngcontent-%COMP%]{border-color:#5b9acf}.mat-mdc-expansion-panel-header-title[_ngcontent-%COMP%] > .mat-icon[_ngcontent-%COMP%]{margin-right:16px}.mat-mdc-expansion-panel.mat-mdc-expanded[_ngcontent-%COMP%]{background-color:#eee}  .mat-mdc-expansion-panel-body{padding:0!important}  .mat-drawer-container{display:flex;align-items:stretch}  .mat-drawer-inner-container{overflow-x:hidden!important}.mdc-list-item--with-leading-icon[_ngcontent-%COMP%]   .mdc-list-item__start[_ngcontent-%COMP%]{margin-right:16px!important;color:#000000de!important}.mat-mdc-list-item[_ngcontent-%COMP%]{font-size:15px!important;border-left:5px solid #bbb;margin-left:-5px;height:56px!important;max-height:56px!important;line-height:22.5px!important;width:auto!important}.mat-mdc-list-item[_ngcontent-%COMP%]:focus{border:1px solid #5b9acf}.mdc-list-item__content[_ngcontent-%COMP%]{padding:0 24px!important}.mat-mdc-list-item.active[_ngcontent-%COMP%]{border-color:#5b9acf;background-color:#d1d1d1}.mat-mdc-list-base[_ngcontent-%COMP%]{padding-top:0}"] }); }
}
export { ModSideMenuComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModSideMenuComponent, [{
        type: Component,
        args: [{ selector: 'mod-side-menu', template: "<mat-sidenav-container class=\"mod-side-menu-container\">\r\n    <mat-sidenav #sidenav mode=\"side\" opened role=\"navigation\" id=\"navigation-menu\" [ngClass]=\"{'mod-side-menu' : true, 'collapsed' : (!expanded && opened)}\">\r\n        <h1 mat-subheader>\r\n            {{ expanded ? config.title : \"\" }}\r\n            <mat-icon *ngIf=\"expanded\" class=\"menu-close\" (click)=\"expandMenu(!this.expanded)\">\r\n                keyboard_arrow_left\r\n            </mat-icon>\r\n            <mat-icon *ngIf=\"!expanded\" class=\"menu-open\" (click)=\"expandMenu(!this.expanded)\">\r\n                keyboard_arrow_right\r\n            </mat-icon>\r\n        </h1>\r\n\r\n        <div *ngFor=\"let section of viewableSections\">\r\n            <h1 mat-subheader>\r\n                {{ expanded ? section.name : \"\" }}\r\n            </h1>\r\n            <mat-nav-list>\r\n                <mat-list-item *ngFor=\"let item of getViewableMenuItems(section)\"\r\n                               [routerLink]=\"item.route\"\r\n                               routerLinkActive=\"active\"\r\n                               [routerLinkActiveOptions]=\"{exact: true}\"\r\n                               (keyup.enter)=\"navigateTo(item.route)\">\r\n                    <mat-icon matListItemIcon [matTooltip]=\"item.text\">{{item.icon}}</mat-icon>\r\n                    {{ expanded ? item.text : \"\"}}\r\n                </mat-list-item>\r\n            </mat-nav-list>\r\n        </div>\r\n    </mat-sidenav>\r\n    <mat-sidenav-content [ngClass]=\"{'mod-side-menu-content' : true, 'collapsed' : (!expanded && opened)}\" role=\"main\" #mainContent tabindex=\"0\">\r\n        <ng-content></ng-content>\r\n    </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n", styles: ["#main-content:focus{border:1px solid #5b9acf}.menu-close{position:absolute;right:0;cursor:pointer}.menu-open{text-align:center;width:100%;cursor:pointer}.mod-side-menu{display:flex;align-items:flex-start;justify-content:left;width:250px;transition:width .25s}.mod-side-menu.collapsed{width:76px!important;transition:width .25s}.mod-side-menu-container{display:flex;height:100%}.mod-side-menu-content{transition:margin-left .25s;width:100%;overflow:auto;display:flex;align-items:stretch;outline:none!important}.mod-side-menu-content.collapsed{margin-left:76px!important;transition:margin-left .25s}h2{overflow:hidden;white-space:nowrap;text-overflow:clip}.mat-mdc-subheader{font-size:14px;line-height:20px;max-height:56px;color:#888;padding:12px 12px 12px 20px!important;margin-bottom:0!important;margin-top:0!important}.mat-mdc-subheader .mat-icon{padding-left:4px;margin-right:16px}.mat-mdc-expansion-panel{box-shadow:none;margin:0}.mat-mdc-expansion-indicator{line-height:0!important}mat-mdc-expansion-panel-header[aria-disabled=true]{color:initial}.mat-mdc-expansion-panel-header{height:56px!important;max-height:56px!important;border-left:5px solid #bbb}.mat-mdc-expansion-panel-header-title{max-height:24px}.mat-mdc-expansion-panel.active>.mat-mdc-expansion-panel-header{border-color:#5b9acf}.mat-mdc-expansion-panel-header-title>.mat-icon{margin-right:16px}.mat-mdc-expansion-panel.mat-mdc-expanded{background-color:#eee}::ng-deep .mat-mdc-expansion-panel-body{padding:0!important}::ng-deep .mat-drawer-container{display:flex;align-items:stretch}::ng-deep .mat-drawer-inner-container{overflow-x:hidden!important}.mdc-list-item--with-leading-icon .mdc-list-item__start{margin-right:16px!important;color:#000000de!important}.mat-mdc-list-item{font-size:15px!important;border-left:5px solid #bbb;margin-left:-5px;height:56px!important;max-height:56px!important;line-height:22.5px!important;width:auto!important}.mat-mdc-list-item:focus{border:1px solid #5b9acf}.mdc-list-item__content{padding:0 24px!important}.mat-mdc-list-item.active{border-color:#5b9acf;background-color:#d1d1d1}.mat-mdc-list-base{padding-top:0}\n"] }]
    }], function () { return [{ type: i1.Router }, { type: i1.ActivatedRoute }, { type: i0.Renderer2 }, { type: i2.CurrentUserService }]; }, { config: [{
            type: Input
        }], mainContentElement: [{
            type: ViewChild,
            args: ['mainContent', { static: true }]
        }], sidenav: [{
            type: ViewChild,
            args: ['sidenav', { static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kLXNpZGUtbWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tb2QtZnJhbWV3b3JrL3NyYy9saWIvY29tcG9uZW50cy9tb2Qtc2lkZS1tZW51L21vZC1zaWRlLW1lbnUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbW9kLWZyYW1ld29yay9zcmMvbGliL2NvbXBvbmVudHMvbW9kLXNpZGUtbWVudS9tb2Qtc2lkZS1tZW51LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLEtBQUssRUFBNEIsU0FBUyxFQUFhLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7Ozs7O0lDSXhHLG1DQUFtRjtJQUFyQyx3S0FBUyxlQUFBLG1DQUEwQixDQUFBLElBQUM7SUFDOUUscUNBQ0o7SUFBQSxpQkFBVzs7OztJQUNYLG9DQUFtRjtJQUFyQyx3S0FBUyxlQUFBLG1DQUEwQixDQUFBLElBQUM7SUFDOUUsc0NBQ0o7SUFBQSxpQkFBVzs7Ozs7SUFRUCx5Q0FJc0Q7SUFBdkMsbVFBQWUsZUFBQSxrQ0FBc0IsQ0FBQSxJQUFDO0lBQ2pELG9DQUFtRDtJQUFBLFlBQWE7SUFBQSxpQkFBVztJQUMzRSxZQUNKO0lBQUEsaUJBQWdCOzs7O0lBTkQsMkNBQXlCLHVEQUFBO0lBSVYsZUFBd0I7SUFBeEIsMENBQXdCO0lBQUMsZUFBYTtJQUFiLG1DQUFhO0lBQ2hFLGVBQ0o7SUFESSxzRUFDSjs7O0lBWlIsMkJBQThDLFlBQUE7SUFFdEMsWUFDSjtJQUFBLGlCQUFLO0lBQ0wsb0NBQWM7SUFDVixnR0FPZ0I7SUFDcEIsaUJBQWUsRUFBQTs7OztJQVhYLGVBQ0o7SUFESSx1RUFDSjtJQUVvQyxlQUFnQztJQUFoQyxpRUFBZ0M7Ozs7O0FEWGhGLE1BS2Esb0JBQW9CO0lBWTdCLFlBQ1csTUFBYyxFQUNiLGNBQThCLEVB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QUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO1lBQ0YsT0FBTztrQkFBOUMsU0FBUzttQkFBQyxTQUFTLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uQ2hhbmdlcywgSW5wdXQsIFNpbXBsZUNoYW5nZSwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1vZFNpZGVNZW51Q29uZmlnLCBNb2RNZW51SXRlbSwgTW9kTWVudVNlY3Rpb24gfSBmcm9tICcuLi8uLi9tb2RlbHMvbW9kLXNpZGUtbWVudS1jb25maWcubW9kZWwnO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgTWF0U2lkZW5hdiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NpZGVuYXYnO1xyXG5pbXBvcnQgeyBDdXJyZW50VXNlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jdXJyZW50LXVzZXIuc2VydmljZSc7XHJcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdtb2Qtc2lkZS1tZW51JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbW9kLXNpZGUtbWVudS5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vbW9kLXNpZGUtbWVudS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE1vZFNpZGVNZW51Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuXG4gICAgcHVibGljIG1lbnVPcHRpb246IHN0cmluZztcbiAgICBwdWJsaWMgZXhwYW5kZWQ6IGJvb2xlYW4gPSB0cnVlO1xuICAgIHB1YmxpYyBvcGVuZWQ6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgQElucHV0KClcbiAgICBjb25maWc6IE1vZFNpZGVNZW51Q29uZmlnO1xuXG4gICAgQFZpZXdDaGlsZCgnbWFpbkNvbnRlbnQnLCB7IHN0YXRpYzogdHJ1ZSB9KSBtYWluQ29udGVudEVsZW1lbnQ6IEVsZW1lbnRSZWY7XG4gICAgQFZpZXdDaGlsZCgnc2lkZW5hdicsIHsgc3RhdGljOiB0cnVlIH0pIHNpZGVuYXY6IE1hdFNpZGVuYXY7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIHJvdXRlcjogUm91dGVyLFxuICAgICAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOiBDdXJyZW50VXNlclNlcnZpY2UpIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgfVxuXG4gICAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHsgW3Byb3BOYW1lOiBzdHJpbmddOiBTaW1wbGVDaGFuZ2UgfSkge1xuICAgICAgICBpZiAoY2hhbmdlc1snY29uZmlnJ10gJiYgY2hhbmdlc1snY29uZmlnJ10ucHJldmlvdXNWYWx1ZSAhPSBjaGFuZ2VzWydjb25maWcnXS5jdXJyZW50VmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0Q3VycmVudFJvdXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHNlbGVjdEN1cnJlbnRSb3V0ZSgpOiB2b2lkIHtcbiAgICAgICAgdmFyIHVybHMgPSB0aGlzLnJvdXRlci51cmwuc3BsaXQoJy8nKTtcblxuICAgICAgICBmb3IgKGxldCBzZWN0aW9uIG9mIHRoaXMuY29uZmlnLnNlY3Rpb25zKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpdGVtIG9mIHNlY3Rpb24ubWVudUl0ZW1zKSB7XG4gICAgICAgICAgICAgICAgaWYgKHVybHNbdXJscy5sZW5ndGggLSAxXS50b1N0cmluZygpID09IGl0ZW0ucm91dGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZW51T3B0aW9uID0gaXRlbS50ZXh0O1xuXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFVzZWQgYnkgbWVudSBpdGVtIGtleXVwLmVudGVyIGhhbmRsZXIgdG8gcHJvdmlkZSBrZXlib2FyZCBuYXZpZ2F0aW9uXG4gICAgcHVibGljIG5hdmlnYXRlVG8odXJsU2VnbWVudDogc3RyaW5nKSB7XG4gICAgICAgIHVybFNlZ21lbnQgPSB1cmxTZWdtZW50LnNwbGl0KCcjJylbMF07XG4gICAgICAgIHZhciB1cmwgPSBcIlwiO1xuICAgICAgICBpZiAodXJsU2VnbWVudC5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgIHVybCA9IHVybFNlZ21lbnQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB1cmwgPSB0aGlzLmFjdGl2YXRlZFJvdXRlLnNuYXBzaG90LnVybC5qb2luKCcvJykgKyAnLycgKyB1cmxTZWdtZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbmF2IHRvIHRoZSByb3V0ZSwgYW5kIHRoZW4gc2V0IGZvY3VzIG9uIHRoZSBtYWluIGNvbnRlbnQgZGl2IHJhdGhlciB0aGFuIGtlZXAgZm9jdXNcbiAgICAgICAgLy8gb24gdGhlIG5hdiBtZW51IGl0c2VsZiAodXNlcnMgd2lsbCBuZWVkIHRvIFNoaWZ0K1RhYiB0aGVpciB3YXkgYmFjayB0byBuYXYgbWVudSlcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCh1cmwpLnRoZW4oeCA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5tYWluQ29udGVudEVsZW1lbnQpXG4gICAgICAgICAgICAgICAgdGhpcy5tYWluQ29udGVudEVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZXhwYW5kTWVudShleHBhbmRlZDogYm9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgdGhpcy5leHBhbmRlZCA9IGV4cGFuZGVkO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b2dnbGVTaWRlTmF2KCkge1xuICAgICAgICAvL3RoaXMuc2lkZW5hdi50b2dnbGUoKTtcbiAgICAgICAgdmFyIG9wZW5pbmcgPSAhdGhpcy5vcGVuZWQ7XG5cbiAgICAgICAgaWYgKG9wZW5pbmcpIHtcbiAgICAgICAgICAgIHRoaXMub3BlbmVkID0gIXRoaXMub3BlbmVkO1xuICAgICAgICAgICAgdGhpcy5zaWRlbmF2LnRvZ2dsZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zaWRlbmF2LnRvZ2dsZSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuZWQgPSAhdGhpcy5vcGVuZWQ7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgdmlld2FibGVTZWN0aW9ucygpOiBNb2RNZW51U2VjdGlvbltdIHtcbiAgICAgICAgbGV0IHNlY3Rpb25zOiBNb2RNZW51U2VjdGlvbltdID0gW107XHJcblxyXG4gICAgICAgIHRoaXMuY29uZmlnLnNlY3Rpb25zLmZvckVhY2goc2VjdGlvbiA9PiB7XHJcbiAgICAgICAgICAgIGlmICghc2VjdGlvbi5hbGxvd2VkUm9sZXMgfHwgdGhpcy51c2VyU2VydmljZS5pc0luUm9sZXMoc2VjdGlvbi5hbGxvd2VkUm9sZXMpKVxyXG4gICAgICAgICAgICAgICAgc2VjdGlvbnMucHVzaChzZWN0aW9uKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gc2VjdGlvbnM7XHJcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Vmlld2FibGVNZW51SXRlbXMoc2VjdGlvbjogTW9kTWVudVNlY3Rpb24pOiBNb2RNZW51SXRlbVtdIHtcbiAgICAgICAgbGV0IGl0ZW1zOiBNb2RNZW51SXRlbVtdID0gW107XHJcblxyXG4gICAgICAgIHNlY3Rpb24ubWVudUl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghaXRlbS5hbGxvd2VkUm9sZXMgfHwgdGhpcy51c2VyU2VydmljZS5pc0luUm9sZXMoaXRlbS5hbGxvd2VkUm9sZXMpKVxyXG4gICAgICAgICAgICAgICAgaXRlbXMucHVzaChpdGVtKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICByZXR1cm4gaXRlbXM7XHJcbiAgICB9XG5cbn1cbiIsIjxtYXQtc2lkZW5hdi1jb250YWluZXIgY2xhc3M9XCJtb2Qtc2lkZS1tZW51LWNvbnRhaW5lclwiPlxyXG4gICAgPG1hdC1zaWRlbmF2ICNzaWRlbmF2IG1vZGU9XCJzaWRlXCIgb3BlbmVkIHJvbGU9XCJuYXZpZ2F0aW9uXCIgaWQ9XCJuYXZpZ2F0aW9uLW1lbnVcIiBbbmdDbGFzc109XCJ7J21vZC1zaWRlLW1lbnUnIDogdHJ1ZSwgJ2NvbGxhcHNlZCcgOiAoIWV4cGFuZGVkICYmIG9wZW5lZCl9XCI+XHJcbiAgICAgICAgPGgxIG1hdC1zdWJoZWFkZXI+XHJcbiAgICAgICAgICAgIHt7IGV4cGFuZGVkID8gY29uZmlnLnRpdGxlIDogXCJcIiB9fVxyXG4gICAgICAgICAgICA8bWF0LWljb24gKm5nSWY9XCJleHBhbmRlZFwiIGNsYXNzPVwibWVudS1jbG9zZVwiIChjbGljayk9XCJleHBhbmRNZW51KCF0aGlzLmV4cGFuZGVkKVwiPlxyXG4gICAgICAgICAgICAgICAga2V5Ym9hcmRfYXJyb3dfbGVmdFxyXG4gICAgICAgICAgICA8L21hdC1pY29uPlxyXG4gICAgICAgICAgICA8bWF0LWljb24gKm5nSWY9XCIhZXhwYW5kZWRcIiBjbGFzcz1cIm1lbnUtb3BlblwiIChjbGljayk9XCJleHBhbmRNZW51KCF0aGlzLmV4cGFuZGVkKVwiPlxyXG4gICAgICAgICAgICAgICAga2V5Ym9hcmRfYXJyb3dfcmlnaHRcclxuICAgICAgICAgICAgPC9tYXQtaWNvbj5cclxuICAgICAgICA8L2gxPlxyXG5cclxuICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBzZWN0aW9uIG9mIHZpZXdhYmxlU2VjdGlvbnNcIj5cclxuICAgICAgICAgICAgPGgxIG1hdC1zdWJoZWFkZXI+XHJcbiAgICAgICAgICAgICAgICB7eyBleHBhbmRlZCA/IHNlY3Rpb24ubmFtZSA6IFwiXCIgfX1cclxuICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgPG1hdC1uYXYtbGlzdD5cclxuICAgICAgICAgICAgICAgIDxtYXQtbGlzdC1pdGVtICpuZ0Zvcj1cImxldCBpdGVtIG9mIGdldFZpZXdhYmxlTWVudUl0ZW1zKHNlY3Rpb24pXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtyb3V0ZXJMaW5rXT1cIml0ZW0ucm91dGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyTGlua0FjdGl2ZT1cImFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcm91dGVyTGlua0FjdGl2ZU9wdGlvbnNdPVwie2V4YWN0OiB0cnVlfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoa2V5dXAuZW50ZXIpPVwibmF2aWdhdGVUbyhpdGVtLnJvdXRlKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbiBtYXRMaXN0SXRlbUljb24gW21hdFRvb2x0aXBdPVwiaXRlbS50ZXh0XCI+e3tpdGVtLmljb259fTwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAge3sgZXhwYW5kZWQgPyBpdGVtLnRleHQgOiBcIlwifX1cclxuICAgICAgICAgICAgICAgIDwvbWF0LWxpc3QtaXRlbT5cclxuICAgICAgICAgICAgPC9tYXQtbmF2LWxpc3Q+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L21hdC1zaWRlbmF2PlxyXG4gICAgPG1hdC1zaWRlbmF2LWNvbnRlbnQgW25nQ2xhc3NdPVwieydtb2Qtc2lkZS1tZW51LWNvbnRlbnQnIDogdHJ1ZSwgJ2NvbGxhcHNlZCcgOiAoIWV4cGFuZGVkICYmIG9wZW5lZCl9XCIgcm9sZT1cIm1haW5cIiAjbWFpbkNvbnRlbnQgdGFiaW5kZXg9XCIwXCI+XHJcbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgPC9tYXQtc2lkZW5hdi1jb250ZW50PlxyXG48L21hdC1zaWRlbmF2LWNvbnRhaW5lcj5cclxuIl19