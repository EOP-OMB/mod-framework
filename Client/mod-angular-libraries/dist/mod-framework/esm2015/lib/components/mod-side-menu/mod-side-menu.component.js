import { Component, Input, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../../services/current-user.service";
import * as i3 from "@angular/material/sidenav";
import * as i4 from "@angular/common";
import * as i5 from "@angular/material/list";
import * as i6 from "@angular/material/icon";
import * as i7 from "@angular/material/tooltip";
const _c0 = ["mainContent"];
const _c1 = ["sidenav"];
function ModSideMenuComponent_mat_icon_5_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-icon", 9);
    i0.ɵɵlistener("click", function ModSideMenuComponent_mat_icon_5_Template_mat_icon_click_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.expandMenu(!ctx_r5.expanded); });
    i0.ɵɵtext(1, " keyboard_arrow_left ");
    i0.ɵɵelementEnd();
} }
function ModSideMenuComponent_mat_icon_6_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-icon", 10);
    i0.ɵɵlistener("click", function ModSideMenuComponent_mat_icon_6_Template_mat_icon_click_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.expandMenu(!ctx_r7.expanded); });
    i0.ɵɵtext(1, " keyboard_arrow_right ");
    i0.ɵɵelementEnd();
} }
const _c2 = function () { return { exact: true }; };
function ModSideMenuComponent_div_7_mat_list_item_4_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-list-item", 12);
    i0.ɵɵlistener("keyup.enter", function ModSideMenuComponent_div_7_mat_list_item_4_Template_mat_list_item_keyup_enter_0_listener() { i0.ɵɵrestoreView(_r13); const item_r11 = ctx.$implicit; const ctx_r12 = i0.ɵɵnextContext(2); return ctx_r12.navigateTo(item_r11.route); });
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
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "h1", 3);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-nav-list");
    i0.ɵɵtemplate(4, ModSideMenuComponent_div_7_mat_list_item_4_Template, 4, 6, "mat-list-item", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
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
export class ModSideMenuComponent {
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
}
ModSideMenuComponent.ɵfac = function ModSideMenuComponent_Factory(t) { return new (t || ModSideMenuComponent)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i2.CurrentUserService)); };
ModSideMenuComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ModSideMenuComponent, selectors: [["mod-side-menu"]], viewQuery: function ModSideMenuComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 3);
        i0.ɵɵviewQuery(_c1, 3);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.mainContentElement = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.sidenav = _t.first);
    } }, inputs: { config: "config" }, features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c5, decls: 11, vars: 10, consts: [[1, "mod-side-menu-container"], ["mode", "side", "opened", "", "role", "navigation", "id", "navigation-menu", 3, "ngClass"], ["sidenav", ""], ["mat-subheader", ""], ["class", "menu-close", 3, "click", 4, "ngIf"], ["class", "menu-open", 3, "click", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["role", "main", "tabindex", "0", 3, "ngClass"], ["mainContent", ""], [1, "menu-close", 3, "click"], [1, "menu-open", 3, "click"], ["routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions", "keyup.enter", 4, "ngFor", "ngForOf"], ["routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions", "keyup.enter"], ["mat-list-icon", "", 3, "matTooltip"]], template: function ModSideMenuComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "mat-sidenav-container", 0);
        i0.ɵɵelementStart(1, "mat-sidenav", 1, 2);
        i0.ɵɵelementStart(3, "h1", 3);
        i0.ɵɵtext(4);
        i0.ɵɵtemplate(5, ModSideMenuComponent_mat_icon_5_Template, 2, 0, "mat-icon", 4);
        i0.ɵɵtemplate(6, ModSideMenuComponent_mat_icon_6_Template, 2, 0, "mat-icon", 5);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(7, ModSideMenuComponent_div_7_Template, 5, 2, "div", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "mat-sidenav-content", 7, 8);
        i0.ɵɵprojection(10);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
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
    } }, directives: [i3.MatSidenavContainer, i3.MatSidenav, i4.NgClass, i5.MatListSubheaderCssMatStyler, i4.NgIf, i4.NgForOf, i3.MatSidenavContent, i6.MatIcon, i5.MatNavList, i5.MatListItem, i1.RouterLinkActive, i1.RouterLink, i5.MatListIconCssMatStyler, i7.MatTooltip], styles: ["#main-content[_ngcontent-%COMP%]:focus{border:1px solid #5b9acf}.menu-close[_ngcontent-%COMP%]{position:absolute;right:0;cursor:pointer}.menu-open[_ngcontent-%COMP%]{text-align:center;width:100%;cursor:pointer}.mod-side-menu[_ngcontent-%COMP%]{display:flex;align-items:flex-start;justify-content:left;width:250px;transition:width .25s}.mod-side-menu.collapsed[_ngcontent-%COMP%]{width:76px!important;transition:width .25s}.mod-side-menu-container[_ngcontent-%COMP%]{display:flex;height:100%}.mod-side-menu-content[_ngcontent-%COMP%]{transition:margin-left .25s;width:100%;overflow:auto;display:flex;align-items:stretch;outline:none!important}.mod-side-menu-content.collapsed[_ngcontent-%COMP%]{margin-left:76px!important;transition:margin-left .25s}h2[_ngcontent-%COMP%]{overflow:hidden;white-space:nowrap;text-overflow:clip}.mat-subheader[_ngcontent-%COMP%]{font-size:14px;line-height:20px;max-height:56px;color:#888;padding:12px 12px 12px 20px!important;margin-bottom:0!important;margin-top:0!important;border-left:5px solid #bbb;margin-left:-5px}.mat-subheader[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{padding-left:4px;margin-right:16px}.mat-expansion-panel[_ngcontent-%COMP%]{box-shadow:none;margin:0}.mat-expansion-indicator[_ngcontent-%COMP%]{line-height:0!important}mat-expansion-panel-header[aria-disabled=true][_ngcontent-%COMP%]{color:initial}.mat-expansion-panel-header[_ngcontent-%COMP%]{height:56px!important;max-height:56px!important;border-left:5px solid #bbb}.mat-expansion-panel-header-title[_ngcontent-%COMP%]{max-height:24px}.mat-expansion-panel.active[_ngcontent-%COMP%] > .mat-expansion-panel-header[_ngcontent-%COMP%]{border-color:#5b9acf}.mat-expansion-panel-header-title[_ngcontent-%COMP%] > .mat-icon[_ngcontent-%COMP%]{margin-right:16px}.mat-expansion-panel.mat-expanded[_ngcontent-%COMP%]{background-color:#eee}  .mat-expansion-panel-body{padding:0!important}  .mat-drawer-container{display:flex;align-items:stretch}.mat-list-icon[_ngcontent-%COMP%]{padding-right:16px!important;font-size:22px!important}.mat-list-item[_ngcontent-%COMP%]{font-size:15px!important;border-left:5px solid #bbb;margin-left:-5px;height:56px!important;max-height:56px!important;line-height:22.5px!important;width:auto!important}.mat-list-item[_ngcontent-%COMP%]:focus{border:1px solid #5b9acf}.mat-list-item-content[_ngcontent-%COMP%]{padding:0 24px!important}.mat-list-item.active[_ngcontent-%COMP%]{border-color:#5b9acf;background-color:#d1d1d1}.mat-list-base[_ngcontent-%COMP%]{padding-top:0}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModSideMenuComponent, [{
        type: Component,
        args: [{
                selector: 'mod-side-menu',
                templateUrl: './mod-side-menu.component.html',
                styleUrls: ['./mod-side-menu.component.scss']
            }]
    }], function () { return [{ type: i1.Router }, { type: i1.ActivatedRoute }, { type: i0.Renderer2 }, { type: i2.CurrentUserService }]; }, { config: [{
            type: Input
        }], mainContentElement: [{
            type: ViewChild,
            args: ['mainContent', { static: true }]
        }], sidenav: [{
            type: ViewChild,
            args: ['sidenav', { static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kLXNpZGUtbWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tb2QtZnJhbWV3b3JrL3NyYy9saWIvY29tcG9uZW50cy9tb2Qtc2lkZS1tZW51L21vZC1zaWRlLW1lbnUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbW9kLWZyYW1ld29yay9zcmMvbGliL2NvbXBvbmVudHMvbW9kLXNpZGUtbWVudS9tb2Qtc2lkZS1tZW51LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLEtBQUssRUFBNEIsU0FBUyxFQUFhLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7Ozs7O0lDSXhHLG1DQUFtRjtJQUFyQywrTUFBb0M7SUFDOUUscUNBQ0o7SUFBQSxpQkFBVzs7OztJQUNYLG9DQUFtRjtJQUFyQywrTUFBb0M7SUFDOUUsc0NBQ0o7SUFBQSxpQkFBVzs7Ozs7SUFRUCx5Q0FJc0Q7SUFBdkMsNlFBQXNDO0lBQ2pELG9DQUFpRDtJQUFBLFlBQWE7SUFBQSxpQkFBVztJQUN6RSxZQUNKO0lBQUEsaUJBQWdCOzs7O0lBTkQsMkNBQXlCLHVEQUFBO0lBSVosZUFBd0I7SUFBeEIsMENBQXdCO0lBQUMsZUFBYTtJQUFiLG1DQUFhO0lBQzlELGVBQ0o7SUFESSxzRUFDSjs7O0lBWlIsMkJBQThDO0lBQzFDLDZCQUFrQjtJQUNkLFlBQ0o7SUFBQSxpQkFBSztJQUNMLG9DQUFjO0lBQ1YsZ0dBT2dCO0lBQ3BCLGlCQUFlO0lBQ25CLGlCQUFNOzs7O0lBWkUsZUFDSjtJQURJLHVFQUNKO0lBRW9DLGVBQWdDO0lBQWhDLGlFQUFnQzs7Ozs7QUROaEYsTUFBTSxPQUFPLG9CQUFvQjtJQVk3QixZQUNXLE1BQWMsRUFDYixjQUE4QixFQUM5QixRQUFtQixFQUNuQixXQUErQjtRQUhoQyxXQUFNLEdBQU4sTUFBTSxD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S0FBSztZQUdzQyxrQkFBa0I7a0JBQTdELFNBQVM7bUJBQUMsYUFBYSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtZQUNGLE9BQU87a0JBQTlDLFNBQVM7bUJBQUMsU0FBUyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkNoYW5nZXMsIElucHV0LCBTaW1wbGVDaGFuZ2UsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNb2RTaWRlTWVudUNvbmZpZywgTW9kTWVudUl0ZW0sIE1vZE1lbnVTZWN0aW9uIH0gZnJvbSAnLi4vLi4vbW9kZWxzL21vZC1zaWRlLW1lbnUtY29uZmlnLm1vZGVsJztcclxuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IE1hdFNpZGVuYXYgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zaWRlbmF2JztcclxuaW1wb3J0IHsgQ3VycmVudFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY3VycmVudC11c2VyLnNlcnZpY2UnO1xyXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbW9kLXNpZGUtbWVudScsXG4gICAgdGVtcGxhdGVVcmw6ICcuL21vZC1zaWRlLW1lbnUuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL21vZC1zaWRlLW1lbnUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNb2RTaWRlTWVudUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcblxuICAgIHB1YmxpYyBtZW51T3B0aW9uOiBzdHJpbmc7XG4gICAgcHVibGljIGV4cGFuZGVkOiBib29sZWFuID0gdHJ1ZTtcbiAgICBwdWJsaWMgb3BlbmVkOiBib29sZWFuID0gdHJ1ZTtcblxuICAgIEBJbnB1dCgpXG4gICAgY29uZmlnOiBNb2RTaWRlTWVudUNvbmZpZztcblxuICAgIEBWaWV3Q2hpbGQoJ21haW5Db250ZW50JywgeyBzdGF0aWM6IHRydWUgfSkgbWFpbkNvbnRlbnRFbGVtZW50OiBFbGVtZW50UmVmO1xuICAgIEBWaWV3Q2hpbGQoJ3NpZGVuYXYnLCB7IHN0YXRpYzogdHJ1ZSB9KSBzaWRlbmF2OiBNYXRTaWRlbmF2O1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgcHJpdmF0ZSB1c2VyU2VydmljZTogQ3VycmVudFVzZXJTZXJ2aWNlKSB7XG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7IFtwcm9wTmFtZTogc3RyaW5nXTogU2ltcGxlQ2hhbmdlIH0pIHtcbiAgICAgICAgaWYgKGNoYW5nZXNbJ2NvbmZpZyddICYmIGNoYW5nZXNbJ2NvbmZpZyddLnByZXZpb3VzVmFsdWUgIT0gY2hhbmdlc1snY29uZmlnJ10uY3VycmVudFZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdEN1cnJlbnRSb3V0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZWxlY3RDdXJyZW50Um91dGUoKTogdm9pZCB7XG4gICAgICAgIHZhciB1cmxzID0gdGhpcy5yb3V0ZXIudXJsLnNwbGl0KCcvJyk7XG5cbiAgICAgICAgZm9yIChsZXQgc2VjdGlvbiBvZiB0aGlzLmNvbmZpZy5zZWN0aW9ucykge1xuICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBzZWN0aW9uLm1lbnVJdGVtcykge1xuICAgICAgICAgICAgICAgIGlmICh1cmxzW3VybHMubGVuZ3RoIC0gMV0udG9TdHJpbmcoKSA9PSBpdGVtLnJvdXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVudU9wdGlvbiA9IGl0ZW0udGV4dDtcblxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBVc2VkIGJ5IG1lbnUgaXRlbSBrZXl1cC5lbnRlciBoYW5kbGVyIHRvIHByb3ZpZGUga2V5Ym9hcmQgbmF2aWdhdGlvblxuICAgIHB1YmxpYyBuYXZpZ2F0ZVRvKHVybFNlZ21lbnQ6IHN0cmluZykge1xuICAgICAgICB1cmxTZWdtZW50ID0gdXJsU2VnbWVudC5zcGxpdCgnIycpWzBdO1xuICAgICAgICB2YXIgdXJsID0gXCJcIjtcbiAgICAgICAgaWYgKHVybFNlZ21lbnQuc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICB1cmwgPSB1cmxTZWdtZW50O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdXJsID0gdGhpcy5hY3RpdmF0ZWRSb3V0ZS5zbmFwc2hvdC51cmwuam9pbignLycpICsgJy8nICsgdXJsU2VnbWVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG5hdiB0byB0aGUgcm91dGUsIGFuZCB0aGVuIHNldCBmb2N1cyBvbiB0aGUgbWFpbiBjb250ZW50IGRpdiByYXRoZXIgdGhhbiBrZWVwIGZvY3VzXG4gICAgICAgIC8vIG9uIHRoZSBuYXYgbWVudSBpdHNlbGYgKHVzZXJzIHdpbGwgbmVlZCB0byBTaGlmdCtUYWIgdGhlaXIgd2F5IGJhY2sgdG8gbmF2IG1lbnUpXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwodXJsKS50aGVuKHggPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMubWFpbkNvbnRlbnRFbGVtZW50KVxuICAgICAgICAgICAgICAgIHRoaXMubWFpbkNvbnRlbnRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGV4cGFuZE1lbnUoZXhwYW5kZWQ6IGJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHRoaXMuZXhwYW5kZWQgPSBleHBhbmRlZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9nZ2xlU2lkZU5hdigpIHtcbiAgICAgICAgLy90aGlzLnNpZGVuYXYudG9nZ2xlKCk7XG4gICAgICAgIHZhciBvcGVuaW5nID0gIXRoaXMub3BlbmVkO1xuXG4gICAgICAgIGlmIChvcGVuaW5nKSB7XG4gICAgICAgICAgICB0aGlzLm9wZW5lZCA9ICF0aGlzLm9wZW5lZDtcbiAgICAgICAgICAgIHRoaXMuc2lkZW5hdi50b2dnbGUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2lkZW5hdi50b2dnbGUoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMub3BlbmVkID0gIXRoaXMub3BlbmVkO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHZpZXdhYmxlU2VjdGlvbnMoKTogTW9kTWVudVNlY3Rpb25bXSB7XG4gICAgICAgIGxldCBzZWN0aW9uczogTW9kTWVudVNlY3Rpb25bXSA9IFtdO1xyXG5cclxuICAgICAgICB0aGlzLmNvbmZpZy5zZWN0aW9ucy5mb3JFYWNoKHNlY3Rpb24gPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXNlY3Rpb24uYWxsb3dlZFJvbGVzIHx8IHRoaXMudXNlclNlcnZpY2UuaXNJblJvbGVzKHNlY3Rpb24uYWxsb3dlZFJvbGVzKSlcclxuICAgICAgICAgICAgICAgIHNlY3Rpb25zLnB1c2goc2VjdGlvbik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHNlY3Rpb25zO1xyXG4gICAgfVxuXG4gICAgcHVibGljIGdldFZpZXdhYmxlTWVudUl0ZW1zKHNlY3Rpb246IE1vZE1lbnVTZWN0aW9uKTogTW9kTWVudUl0ZW1bXSB7XG4gICAgICAgIGxldCBpdGVtczogTW9kTWVudUl0ZW1bXSA9IFtdO1xyXG5cclxuICAgICAgICBzZWN0aW9uLm1lbnVJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWl0ZW0uYWxsb3dlZFJvbGVzIHx8IHRoaXMudXNlclNlcnZpY2UuaXNJblJvbGVzKGl0ZW0uYWxsb3dlZFJvbGVzKSlcclxuICAgICAgICAgICAgICAgIGl0ZW1zLnB1c2goaXRlbSk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcmV0dXJuIGl0ZW1zO1xyXG4gICAgfVxuXG59XG4iLCI8bWF0LXNpZGVuYXYtY29udGFpbmVyIGNsYXNzPVwibW9kLXNpZGUtbWVudS1jb250YWluZXJcIj5cclxuICAgIDxtYXQtc2lkZW5hdiAjc2lkZW5hdiBtb2RlPVwic2lkZVwiIG9wZW5lZCByb2xlPVwibmF2aWdhdGlvblwiIGlkPVwibmF2aWdhdGlvbi1tZW51XCIgW25nQ2xhc3NdPVwieydtb2Qtc2lkZS1tZW51JyA6IHRydWUsICdjb2xsYXBzZWQnIDogKCFleHBhbmRlZCAmJiBvcGVuZWQpfVwiPlxyXG4gICAgICAgIDxoMSBtYXQtc3ViaGVhZGVyPlxyXG4gICAgICAgICAgICB7eyBleHBhbmRlZCA/IGNvbmZpZy50aXRsZSA6IFwiXCIgfX1cclxuICAgICAgICAgICAgPG1hdC1pY29uICpuZ0lmPVwiZXhwYW5kZWRcIiBjbGFzcz1cIm1lbnUtY2xvc2VcIiAoY2xpY2spPVwiZXhwYW5kTWVudSghdGhpcy5leHBhbmRlZClcIj5cclxuICAgICAgICAgICAgICAgIGtleWJvYXJkX2Fycm93X2xlZnRcclxuICAgICAgICAgICAgPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgPG1hdC1pY29uICpuZ0lmPVwiIWV4cGFuZGVkXCIgY2xhc3M9XCJtZW51LW9wZW5cIiAoY2xpY2spPVwiZXhwYW5kTWVudSghdGhpcy5leHBhbmRlZClcIj5cclxuICAgICAgICAgICAgICAgIGtleWJvYXJkX2Fycm93X3JpZ2h0XHJcbiAgICAgICAgICAgIDwvbWF0LWljb24+XHJcbiAgICAgICAgPC9oMT5cclxuXHJcbiAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgc2VjdGlvbiBvZiB2aWV3YWJsZVNlY3Rpb25zXCI+XHJcbiAgICAgICAgICAgIDxoMSBtYXQtc3ViaGVhZGVyPlxyXG4gICAgICAgICAgICAgICAge3sgZXhwYW5kZWQgPyBzZWN0aW9uLm5hbWUgOiBcIlwiIH19XHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDxtYXQtbmF2LWxpc3Q+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWxpc3QtaXRlbSAqbmdGb3I9XCJsZXQgaXRlbSBvZiBnZXRWaWV3YWJsZU1lbnVJdGVtcyhzZWN0aW9uKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcm91dGVyTGlua109XCJpdGVtLnJvdXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlckxpbmtBY3RpdmU9XCJhY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3JvdXRlckxpbmtBY3RpdmVPcHRpb25zXT1cIntleGFjdDogdHJ1ZX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGtleXVwLmVudGVyKT1cIm5hdmlnYXRlVG8oaXRlbS5yb3V0ZSlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24gbWF0LWxpc3QtaWNvbiBbbWF0VG9vbHRpcF09XCJpdGVtLnRleHRcIj57e2l0ZW0uaWNvbn19PC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICB7eyBleHBhbmRlZCA/IGl0ZW0udGV4dCA6IFwiXCJ9fVxyXG4gICAgICAgICAgICAgICAgPC9tYXQtbGlzdC1pdGVtPlxyXG4gICAgICAgICAgICA8L21hdC1uYXYtbGlzdD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvbWF0LXNpZGVuYXY+XHJcbiAgICA8bWF0LXNpZGVuYXYtY29udGVudCBbbmdDbGFzc109XCJ7J21vZC1zaWRlLW1lbnUtY29udGVudCcgOiB0cnVlLCAnY29sbGFwc2VkJyA6ICghZXhwYW5kZWQgJiYgb3BlbmVkKX1cIiByb2xlPVwibWFpblwiICNtYWluQ29udGVudCB0YWJpbmRleD1cIjBcIj5cclxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICA8L21hdC1zaWRlbmF2LWNvbnRlbnQ+XHJcbjwvbWF0LXNpZGVuYXYtY29udGFpbmVyPlxyXG4iXX0=