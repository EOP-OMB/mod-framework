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
        i0.ɵɵstaticViewQuery(_c0, true);
        i0.ɵɵstaticViewQuery(_c1, true);
    } if (rf & 2) {
        var _t;
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
    } }, directives: [i3.MatSidenavContainer, i3.MatSidenav, i4.NgClass, i5.MatListSubheaderCssMatStyler, i4.NgIf, i4.NgForOf, i3.MatSidenavContent, i6.MatIcon, i5.MatNavList, i5.MatListItem, i1.RouterLinkActive, i1.RouterLink, i5.MatListIconCssMatStyler, i7.MatTooltip], styles: ["#main-content[_ngcontent-%COMP%]:focus{border:1px solid #5b9acf}.menu-close[_ngcontent-%COMP%]{cursor:pointer;position:absolute;right:0}.menu-open[_ngcontent-%COMP%]{cursor:pointer;text-align:center;width:100%}.mod-side-menu[_ngcontent-%COMP%]{align-items:flex-start;display:flex;justify-content:left;transition:width .25s;width:250px}.mod-side-menu.collapsed[_ngcontent-%COMP%]{transition:width .25s;width:76px!important}.mod-side-menu-container[_ngcontent-%COMP%]{display:flex;height:100%}.mod-side-menu-content[_ngcontent-%COMP%]{align-items:stretch;display:flex;outline:none!important;overflow:auto;transition:margin-left .25s;width:100%}.mod-side-menu-content.collapsed[_ngcontent-%COMP%]{margin-left:76px!important;transition:margin-left .25s}h2[_ngcontent-%COMP%]{overflow:hidden;text-overflow:clip;white-space:nowrap}.mat-subheader[_ngcontent-%COMP%]{border-left:5px solid #bbb;color:#888;font-size:14px;line-height:20px;margin-bottom:0!important;margin-left:-5px;margin-top:0!important;max-height:56px;padding:12px 12px 12px 20px!important}.mat-subheader[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{margin-right:16px;padding-left:4px}.mat-expansion-panel[_ngcontent-%COMP%]{box-shadow:none;margin:0}.mat-expansion-indicator[_ngcontent-%COMP%]{line-height:0!important}mat-expansion-panel-header[aria-disabled=true][_ngcontent-%COMP%]{color:initial}.mat-expansion-panel-header[_ngcontent-%COMP%]{border-left:5px solid #bbb;height:56px!important;max-height:56px!important}.mat-expansion-panel-header-title[_ngcontent-%COMP%]{max-height:24px}.mat-expansion-panel.active[_ngcontent-%COMP%] > .mat-expansion-panel-header[_ngcontent-%COMP%]{border-color:#5b9acf}.mat-expansion-panel-header-title[_ngcontent-%COMP%] > .mat-icon[_ngcontent-%COMP%]{margin-right:16px}.mat-expansion-panel.mat-expanded[_ngcontent-%COMP%]{background-color:#eee}  .mat-expansion-panel-body{padding:0!important}  .mat-drawer-container{align-items:stretch;display:flex}.mat-list-icon[_ngcontent-%COMP%]{font-size:22px!important;padding-right:16px!important}.mat-list-item[_ngcontent-%COMP%]{border-left:5px solid #bbb;font-size:15px!important;height:56px!important;line-height:22.5px!important;margin-left:-5px;max-height:56px!important;width:auto!important}.mat-list-item[_ngcontent-%COMP%]:focus{border:1px solid #5b9acf}.mat-list-item-content[_ngcontent-%COMP%]{padding:0 24px!important}.mat-list-item.active[_ngcontent-%COMP%]{background-color:#d1d1d1;border-color:#5b9acf}.mat-list-base[_ngcontent-%COMP%]{padding-top:0}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ModSideMenuComponent, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kLXNpZGUtbWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tb2QtZnJhbWV3b3JrL3NyYy9saWIvY29tcG9uZW50cy9tb2Qtc2lkZS1tZW51L21vZC1zaWRlLW1lbnUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbW9kLWZyYW1ld29yay9zcmMvbGliL2NvbXBvbmVudHMvbW9kLXNpZGUtbWVudS9tb2Qtc2lkZS1tZW51LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLEtBQUssRUFBNEIsU0FBUyxFQUFhLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7Ozs7O0lDSXhHLG1DQUNJO0lBRDBDLCtNQUFvQztJQUM5RSxxQ0FDSjtJQUFBLGlCQUFXOzs7O0lBQ1gsb0NBQ0k7SUFEMEMsK01BQW9DO0lBQzlFLHNDQUNKO0lBQUEsaUJBQVc7Ozs7O0lBUVAseUNBS0k7SUFEVyw2UUFBc0M7SUFDakQsb0NBQWlEO0lBQUEsWUFBYTtJQUFBLGlCQUFXO0lBQ3pFLFlBQ0o7SUFBQSxpQkFBZ0I7Ozs7SUFORCwyQ0FBeUIsdURBQUE7SUFJWixlQUF3QjtJQUF4QiwwQ0FBd0I7SUFBQyxlQUFhO0lBQWIsbUNBQWE7SUFDOUQsZUFDSjtJQURJLHNFQUNKOzs7SUFaUiwyQkFDSTtJQUFBLDZCQUNJO0lBQUEsWUFDSjtJQUFBLGlCQUFLO0lBQ0wsb0NBQ0k7SUFBQSxnR0FLSTtJQUdSLGlCQUFlO0lBQ25CLGlCQUFNOzs7O0lBWkUsZUFDSjtJQURJLHVFQUNKO0lBRW1CLGVBQWtEO0lBQWxELGlFQUFrRDs7Ozs7QUROakYsTUFBTSxPQUFPLG9CQUFvQjtJQVk3QixZQUNXLE1BQWMsRUFDYixjQUE4QixFQUM5QixRQUFtQixFQUNuQixXQUErQjtRQUhoQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2Is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QUFDLGFBQWEsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7O2tCQUN6QyxTQUFTO21CQUFDLFNBQVMsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25DaGFuZ2VzLCBJbnB1dCwgU2ltcGxlQ2hhbmdlLCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTW9kU2lkZU1lbnVDb25maWcsIE1vZE1lbnVJdGVtLCBNb2RNZW51U2VjdGlvbiB9IGZyb20gJy4uLy4uL21vZGVscy9tb2Qtc2lkZS1tZW51LWNvbmZpZy5tb2RlbCc7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBNYXRTaWRlbmF2IH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2lkZW5hdic7XHJcbmltcG9ydCB7IEN1cnJlbnRVc2VyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2N1cnJlbnQtdXNlci5zZXJ2aWNlJztcclxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ21vZC1zaWRlLW1lbnUnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9tb2Qtc2lkZS1tZW51LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9tb2Qtc2lkZS1tZW51LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTW9kU2lkZU1lbnVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG5cbiAgICBwdWJsaWMgbWVudU9wdGlvbjogc3RyaW5nO1xuICAgIHB1YmxpYyBleHBhbmRlZDogYm9vbGVhbiA9IHRydWU7XG4gICAgcHVibGljIG9wZW5lZDogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBASW5wdXQoKVxuICAgIGNvbmZpZzogTW9kU2lkZU1lbnVDb25maWc7XG5cbiAgICBAVmlld0NoaWxkKCdtYWluQ29udGVudCcsIHsgc3RhdGljOiB0cnVlIH0pIG1haW5Db250ZW50RWxlbWVudDogRWxlbWVudFJlZjtcbiAgICBAVmlld0NoaWxkKCdzaWRlbmF2JywgeyBzdGF0aWM6IHRydWUgfSkgc2lkZW5hdjogTWF0U2lkZW5hdjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgIHByaXZhdGUgdXNlclNlcnZpY2U6IEN1cnJlbnRVc2VyU2VydmljZSkge1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogeyBbcHJvcE5hbWU6IHN0cmluZ106IFNpbXBsZUNoYW5nZSB9KSB7XG4gICAgICAgIGlmIChjaGFuZ2VzWydjb25maWcnXSAmJiBjaGFuZ2VzWydjb25maWcnXS5wcmV2aW91c1ZhbHVlICE9IGNoYW5nZXNbJ2NvbmZpZyddLmN1cnJlbnRWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RDdXJyZW50Um91dGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgc2VsZWN0Q3VycmVudFJvdXRlKCk6IHZvaWQge1xuICAgICAgICB2YXIgdXJscyA9IHRoaXMucm91dGVyLnVybC5zcGxpdCgnLycpO1xuXG4gICAgICAgIGZvciAobGV0IHNlY3Rpb24gb2YgdGhpcy5jb25maWcuc2VjdGlvbnMpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGl0ZW0gb2Ygc2VjdGlvbi5tZW51SXRlbXMpIHtcbiAgICAgICAgICAgICAgICBpZiAodXJsc1t1cmxzLmxlbmd0aCAtIDFdLnRvU3RyaW5nKCkgPT0gaXRlbS5yb3V0ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lbnVPcHRpb24gPSBpdGVtLnRleHQ7XG5cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gVXNlZCBieSBtZW51IGl0ZW0ga2V5dXAuZW50ZXIgaGFuZGxlciB0byBwcm92aWRlIGtleWJvYXJkIG5hdmlnYXRpb25cbiAgICBwdWJsaWMgbmF2aWdhdGVUbyh1cmxTZWdtZW50OiBzdHJpbmcpIHtcbiAgICAgICAgdXJsU2VnbWVudCA9IHVybFNlZ21lbnQuc3BsaXQoJyMnKVswXTtcbiAgICAgICAgdmFyIHVybCA9IFwiXCI7XG4gICAgICAgIGlmICh1cmxTZWdtZW50LnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgdXJsID0gdXJsU2VnbWVudDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHVybCA9IHRoaXMuYWN0aXZhdGVkUm91dGUuc25hcHNob3QudXJsLmpvaW4oJy8nKSArICcvJyArIHVybFNlZ21lbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBuYXYgdG8gdGhlIHJvdXRlLCBhbmQgdGhlbiBzZXQgZm9jdXMgb24gdGhlIG1haW4gY29udGVudCBkaXYgcmF0aGVyIHRoYW4ga2VlcCBmb2N1c1xuICAgICAgICAvLyBvbiB0aGUgbmF2IG1lbnUgaXRzZWxmICh1c2VycyB3aWxsIG5lZWQgdG8gU2hpZnQrVGFiIHRoZWlyIHdheSBiYWNrIHRvIG5hdiBtZW51KVxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKHVybCkudGhlbih4ID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLm1haW5Db250ZW50RWxlbWVudClcbiAgICAgICAgICAgICAgICB0aGlzLm1haW5Db250ZW50RWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBleHBhbmRNZW51KGV4cGFuZGVkOiBib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICB0aGlzLmV4cGFuZGVkID0gZXhwYW5kZWQ7XG4gICAgfVxuXG4gICAgcHVibGljIHRvZ2dsZVNpZGVOYXYoKSB7XG4gICAgICAgIC8vdGhpcy5zaWRlbmF2LnRvZ2dsZSgpO1xuICAgICAgICB2YXIgb3BlbmluZyA9ICF0aGlzLm9wZW5lZDtcblxuICAgICAgICBpZiAob3BlbmluZykge1xuICAgICAgICAgICAgdGhpcy5vcGVuZWQgPSAhdGhpcy5vcGVuZWQ7XG4gICAgICAgICAgICB0aGlzLnNpZGVuYXYudG9nZ2xlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNpZGVuYXYudG9nZ2xlKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW5lZCA9ICF0aGlzLm9wZW5lZDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxuXG4gICAgcHVibGljIGdldCB2aWV3YWJsZVNlY3Rpb25zKCk6IE1vZE1lbnVTZWN0aW9uW10ge1xuICAgICAgICBsZXQgc2VjdGlvbnM6IE1vZE1lbnVTZWN0aW9uW10gPSBbXTtcclxuXHJcbiAgICAgICAgdGhpcy5jb25maWcuc2VjdGlvbnMuZm9yRWFjaChzZWN0aW9uID0+IHtcclxuICAgICAgICAgICAgaWYgKCFzZWN0aW9uLmFsbG93ZWRSb2xlcyB8fCB0aGlzLnVzZXJTZXJ2aWNlLmlzSW5Sb2xlcyhzZWN0aW9uLmFsbG93ZWRSb2xlcykpXHJcbiAgICAgICAgICAgICAgICBzZWN0aW9ucy5wdXNoKHNlY3Rpb24pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBzZWN0aW9ucztcclxuICAgIH1cblxuICAgIHB1YmxpYyBnZXRWaWV3YWJsZU1lbnVJdGVtcyhzZWN0aW9uOiBNb2RNZW51U2VjdGlvbik6IE1vZE1lbnVJdGVtW10ge1xuICAgICAgICBsZXQgaXRlbXM6IE1vZE1lbnVJdGVtW10gPSBbXTtcclxuXHJcbiAgICAgICAgc2VjdGlvbi5tZW51SXRlbXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgaWYgKCFpdGVtLmFsbG93ZWRSb2xlcyB8fCB0aGlzLnVzZXJTZXJ2aWNlLmlzSW5Sb2xlcyhpdGVtLmFsbG93ZWRSb2xlcykpXHJcbiAgICAgICAgICAgICAgICBpdGVtcy5wdXNoKGl0ZW0pO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHJldHVybiBpdGVtcztcclxuICAgIH1cblxufVxuIiwiPG1hdC1zaWRlbmF2LWNvbnRhaW5lciBjbGFzcz1cIm1vZC1zaWRlLW1lbnUtY29udGFpbmVyXCI+XHJcbiAgICA8bWF0LXNpZGVuYXYgI3NpZGVuYXYgbW9kZT1cInNpZGVcIiBvcGVuZWQgcm9sZT1cIm5hdmlnYXRpb25cIiBpZD1cIm5hdmlnYXRpb24tbWVudVwiIFtuZ0NsYXNzXT1cInsnbW9kLXNpZGUtbWVudScgOiB0cnVlLCAnY29sbGFwc2VkJyA6ICghZXhwYW5kZWQgJiYgb3BlbmVkKX1cIj5cclxuICAgICAgICA8aDEgbWF0LXN1YmhlYWRlcj5cclxuICAgICAgICAgICAge3sgZXhwYW5kZWQgPyBjb25maWcudGl0bGUgOiBcIlwiIH19XHJcbiAgICAgICAgICAgIDxtYXQtaWNvbiAqbmdJZj1cImV4cGFuZGVkXCIgY2xhc3M9XCJtZW51LWNsb3NlXCIgKGNsaWNrKT1cImV4cGFuZE1lbnUoIXRoaXMuZXhwYW5kZWQpXCI+XHJcbiAgICAgICAgICAgICAgICBrZXlib2FyZF9hcnJvd19sZWZ0XHJcbiAgICAgICAgICAgIDwvbWF0LWljb24+XHJcbiAgICAgICAgICAgIDxtYXQtaWNvbiAqbmdJZj1cIiFleHBhbmRlZFwiIGNsYXNzPVwibWVudS1vcGVuXCIgKGNsaWNrKT1cImV4cGFuZE1lbnUoIXRoaXMuZXhwYW5kZWQpXCI+XHJcbiAgICAgICAgICAgICAgICBrZXlib2FyZF9hcnJvd19yaWdodFxyXG4gICAgICAgICAgICA8L21hdC1pY29uPlxyXG4gICAgICAgIDwvaDE+XHJcblxyXG4gICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IHNlY3Rpb24gb2Ygdmlld2FibGVTZWN0aW9uc1wiPlxyXG4gICAgICAgICAgICA8aDEgbWF0LXN1YmhlYWRlcj5cclxuICAgICAgICAgICAgICAgIHt7IGV4cGFuZGVkID8gc2VjdGlvbi5uYW1lIDogXCJcIiB9fVxyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICA8bWF0LW5hdi1saXN0PlxyXG4gICAgICAgICAgICAgICAgPG1hdC1saXN0LWl0ZW0gKm5nRm9yPVwibGV0IGl0ZW0gb2YgZ2V0Vmlld2FibGVNZW51SXRlbXMoc2VjdGlvbilcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3JvdXRlckxpbmtdPVwiaXRlbS5yb3V0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXJMaW5rQWN0aXZlPVwiYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtyb3V0ZXJMaW5rQWN0aXZlT3B0aW9uc109XCJ7ZXhhY3Q6IHRydWV9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChrZXl1cC5lbnRlcik9XCJuYXZpZ2F0ZVRvKGl0ZW0ucm91dGUpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uIG1hdC1saXN0LWljb24gW21hdFRvb2x0aXBdPVwiaXRlbS50ZXh0XCI+e3tpdGVtLmljb259fTwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAge3sgZXhwYW5kZWQgPyBpdGVtLnRleHQgOiBcIlwifX1cclxuICAgICAgICAgICAgICAgIDwvbWF0LWxpc3QtaXRlbT5cclxuICAgICAgICAgICAgPC9tYXQtbmF2LWxpc3Q+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L21hdC1zaWRlbmF2PlxyXG4gICAgPG1hdC1zaWRlbmF2LWNvbnRlbnQgW25nQ2xhc3NdPVwieydtb2Qtc2lkZS1tZW51LWNvbnRlbnQnIDogdHJ1ZSwgJ2NvbGxhcHNlZCcgOiAoIWV4cGFuZGVkICYmIG9wZW5lZCl9XCIgcm9sZT1cIm1haW5cIiAjbWFpbkNvbnRlbnQgdGFiaW5kZXg9XCIwXCI+XHJcbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgPC9tYXQtc2lkZW5hdi1jb250ZW50PlxyXG48L21hdC1zaWRlbmF2LWNvbnRhaW5lcj5cclxuIl19