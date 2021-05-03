import { Component, Input, Output, EventEmitter, Inject } from '@angular/core';
import { ModConfig } from '../../static/mod-config.const';
import * as i0 from "@angular/core";
import * as i1 from "../../models/mod-framework-config.model";
import * as i2 from "@angular/material/toolbar";
import * as i3 from "@angular/material/button";
import * as i4 from "@angular/material/icon";
import * as i5 from "@angular/router";
import * as i6 from "../mod-user-display/mod-user-display.component";
import * as i7 from "@angular/common";
import * as i8 from "@angular/material/menu";
function ModHeaderComponent_div_12_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 12);
    i0.ɵɵlistener("click", function ModHeaderComponent_div_12_button_6_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r5); const option_r3 = ctx.$implicit; const ctx_r4 = i0.ɵɵnextContext(2); return ctx_r4.optionSelected(option_r3); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r3 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(option_r3);
} }
function ModHeaderComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "button", 9);
    i0.ɵɵelementStart(2, "mat-icon");
    i0.ɵɵtext(3, "help");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-menu", null, 10);
    i0.ɵɵtemplate(6, ModHeaderComponent_div_12_button_6_Template, 2, 1, "button", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r1 = i0.ɵɵreference(5);
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matMenuTriggerFor", _r1);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", ctx_r0.config.helpOptions);
} }
const _c0 = function () { return ["/"]; };
const _c1 = ["*"];
export class ModHeaderComponent {
    constructor(config) {
        this.menuClick = new EventEmitter();
        this.userOptionSelect = new EventEmitter();
        this.helpOptionSelect = new EventEmitter();
        this.config = config;
    }
    ngOnInit() {
    }
    onMenuClick() {
        this.menuClick.emit();
    }
    onUserOptionSelect(option) {
        this.userOptionSelect.emit(option);
    }
    optionSelected(option) {
        this.helpOptionSelect.emit(option);
    }
}
ModHeaderComponent.ɵfac = function ModHeaderComponent_Factory(t) { return new (t || ModHeaderComponent)(i0.ɵɵdirectiveInject(ModConfig)); };
ModHeaderComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ModHeaderComponent, selectors: [["mod-header"]], inputs: { appName: "appName" }, outputs: { menuClick: "menuClick", userOptionSelect: "userOptionSelect", helpOptionSelect: "helpOptionSelect" }, ngContentSelectors: _c1, decls: 13, vars: 5, consts: [[1, "mod-header"], ["mat-icon-button", "", 3, "click"], [1, "logo-text-mark", 3, "routerLink"], ["src", "/assets/US-OfficeOfManagementAndBudget-Seal.png", "tabindex", "-1", 1, "mod-logo"], ["tabindex", "-1", "alt", "Textmark", 1, "text-mark"], [1, "fill-remaining-space"], [1, "welcome-user"], [3, "showUser", "selectOption"], [4, "ngIf"], ["mat-icon-button", "", "aria-label", "Help Menu", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["mat-menu-item", "", 3, "click"]], template: function ModHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "mat-toolbar", 0);
        i0.ɵɵelementStart(1, "button", 1);
        i0.ɵɵlistener("click", function ModHeaderComponent_Template_button_click_1_listener() { return ctx.onMenuClick(); });
        i0.ɵɵelementStart(2, "mat-icon");
        i0.ɵɵtext(3, " menu ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "a", 2);
        i0.ɵɵelement(5, "img", 3);
        i0.ɵɵelementStart(6, "div", 4);
        i0.ɵɵtext(7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "span", 5);
        i0.ɵɵprojection(9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "div", 6);
        i0.ɵɵelementStart(11, "mod-user-display", 7);
        i0.ɵɵlistener("selectOption", function ModHeaderComponent_Template_mod_user_display_selectOption_11_listener($event) { return ctx.onUserOptionSelect($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(12, ModHeaderComponent_div_12_Template, 7, 2, "div", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction0(4, _c0));
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(ctx.appName);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("showUser", true);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.config.showHelp);
    } }, directives: [i2.MatToolbar, i3.MatButton, i4.MatIcon, i5.RouterLinkWithHref, i6.ModUserDisplayComponent, i7.NgIf, i8.MatMenuTrigger, i8._MatMenu, i7.NgForOf, i8.MatMenuItem], styles: [".mod-header[_ngcontent-%COMP%]{background-color:#112e51;color:#fff;display:flex;justify-content:center}a[_ngcontent-%COMP%]{text-decoration:none}.logo-text-mark[_ngcontent-%COMP%]{align-items:center;cursor:pointer;display:flex}.text-mark[_ngcontent-%COMP%]{color:#d8b304;cursor:pointer;display:inline-block;font-size:1.4em;margin-left:12px;vertical-align:middle}.mod-logo[_ngcontent-%COMP%]{height:50px;margin-left:4px}.fill-remaining-space[_ngcontent-%COMP%]{align-items:center;flex:1 1 auto;margin-left:15px}.welcome-user[_ngcontent-%COMP%]{display:flex;flex:1;font-size:.85em;justify-content:flex-end;padding-right:5px;padding-top:2px}.mat-button-base[_ngcontent-%COMP%]{height:auto;line-height:inherit}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ModHeaderComponent, [{
        type: Component,
        args: [{
                selector: 'mod-header',
                templateUrl: './mod-header.component.html',
                styleUrls: ['./mod-header.component.scss']
            }]
    }], function () { return [{ type: i1.ModFrameworkConfig, decorators: [{
                type: Inject,
                args: [ModConfig]
            }] }]; }, { appName: [{
            type: Input
        }], menuClick: [{
            type: Output
        }], userOptionSelect: [{
            type: Output
        }], helpOptionSelect: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kLWhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tb2QtZnJhbWV3b3JrL3NyYy9saWIvY29tcG9uZW50cy9tb2QtaGVhZGVyL21vZC1oZWFkZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbW9kLWZyYW1ld29yay9zcmMvbGliL2NvbXBvbmVudHMvbW9kLWhlYWRlci9tb2QtaGVhZGVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7Ozs7Ozs7Ozs7O0lDc0IxQyxrQ0FBaUc7SUFBakMsK09BQWdDO0lBQUMsWUFBWTtJQUFBLGlCQUFTOzs7SUFBckIsZUFBWTtJQUFaLCtCQUFZOzs7SUFMckgsMkJBQ0k7SUFBQSxpQ0FDSTtJQUFBLGdDQUFVO0lBQUEsb0JBQUk7SUFBQSxpQkFBVztJQUM3QixpQkFBUztJQUNULDBDQUNJO0lBQUEsaUZBQWlHO0lBQ3JHLGlCQUFXO0lBQ2YsaUJBQU07Ozs7SUFOc0IsZUFBMEI7SUFBMUIsdUNBQTBCO0lBSXhCLGVBQXlDO0lBQXpDLG1EQUF5Qzs7OztBRGQvRSxNQUFNLE9BQU8sa0JBQWtCO0lBZ0IzQixZQUErQixNQUEwQjtRQVZ6RCxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUdwQyxxQkFBZ0IsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBRzlDLHFCQUFnQixHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFLMUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDekIsQ0FBQztJQUVELFFBQVE7SUFDUixDQUFDO0lBRU0sV0FBVztRQUNkLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVNLGtCQUFrQixDQUFDLE1BQWM7UUFDcEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRU0sY0FBYyxDQUFDLE1BQWM7UUFDaEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN2QyxDQUFDOztvRkFqQ1Esa0JBQWtCLHVCQWdCUCxTQUFTO3VEQWhCcEIsa0JBQWtCOztRQ1QvQixzQ0FDSTtRQUFBLGlDQUNJO1FBRG9CLCtGQUFTLGlCQUFhLElBQUM7UUFDM0MsZ0NBQ0k7UUFBQSxzQkFDSjtRQUFBLGlCQUFXO1FBQ2YsaUJBQVM7UUFFVCw0QkFDSTtRQUFBLHlCQUNBO1FBQUEsOEJBQW9EO1FBQUEsWUFBYTtRQUFBLGlCQUFNO1FBQzNFLGlCQUFJO1FBRUosK0JBQ0k7UUFBQSxrQkFBWTtRQUNoQixpQkFBTztRQUVQLCtCQUNJO1FBQUEsNENBQW1HO1FBQS9ELDhIQUFnQiw4QkFBMEIsSUFBQztRQUFDLGlCQUFtQjtRQUNuRyxxRUFDSTtRQU9SLGlCQUFNO1FBQ1YsaUJBQWM7O1FBcEJnQixlQUFvQjtRQUFwQix1REFBb0I7UUFFVSxlQUFhO1FBQWIsaUNBQWE7UUFRL0MsZUFBaUI7UUFBakIsK0JBQWlCO1FBQzlCLGVBQXVCO1FBQXZCLDBDQUF1Qjs7a0REVHZCLGtCQUFrQjtjQUw5QixTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFdBQVcsRUFBRSw2QkFBNkI7Z0JBQzFDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO2FBQzdDOztzQkFpQmdCLE1BQU07dUJBQUMsU0FBUzs7a0JBZDVCLEtBQUs7O2tCQUdMLE1BQU07O2tCQUdOLE1BQU07O2tCQUdOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1vZENvbmZpZyB9IGZyb20gJy4uLy4uL3N0YXRpYy9tb2QtY29uZmlnLmNvbnN0JztcclxuaW1wb3J0IHsgTW9kRnJhbWV3b3JrQ29uZmlnIH0gZnJvbSAnLi4vLi4vbW9kZWxzL21vZC1mcmFtZXdvcmstY29uZmlnLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdtb2QtaGVhZGVyJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbW9kLWhlYWRlci5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vbW9kLWhlYWRlci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE1vZEhlYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBASW5wdXQoKVxuICAgIGFwcE5hbWU6IHN0cmluZztcblxuICAgIEBPdXRwdXQoKVxuICAgIG1lbnVDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gICAgQE91dHB1dCgpXG4gICAgdXNlck9wdGlvblNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gICAgQE91dHB1dCgpXG4gICAgaGVscE9wdGlvblNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gICAgcHVibGljIGNvbmZpZzogTW9kRnJhbWV3b3JrQ29uZmlnO1xuXG4gICAgY29uc3RydWN0b3IoQEluamVjdChNb2RDb25maWcpIGNvbmZpZzogTW9kRnJhbWV3b3JrQ29uZmlnKSB7XG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIH1cblxuICAgIHB1YmxpYyBvbk1lbnVDbGljaygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5tZW51Q2xpY2suZW1pdCgpO1xyXG4gICAgfVxuXG4gICAgcHVibGljIG9uVXNlck9wdGlvblNlbGVjdChvcHRpb246IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLnVzZXJPcHRpb25TZWxlY3QuZW1pdChvcHRpb24pO1xyXG4gICAgfVxuXG4gICAgcHVibGljIG9wdGlvblNlbGVjdGVkKG9wdGlvbjogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaGVscE9wdGlvblNlbGVjdC5lbWl0KG9wdGlvbik7XHJcbiAgICB9XG59XG4iLCI8bWF0LXRvb2xiYXIgY2xhc3M9XCJtb2QtaGVhZGVyXCI+XHJcbiAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiAoY2xpY2spPVwib25NZW51Q2xpY2soKVwiPlxyXG4gICAgICAgIDxtYXQtaWNvbj5cclxuICAgICAgICAgICAgbWVudVxyXG4gICAgICAgIDwvbWF0LWljb24+XHJcbiAgICA8L2J1dHRvbj5cclxuXHJcbiAgICA8YSBjbGFzcz1cImxvZ28tdGV4dC1tYXJrXCIgW3JvdXRlckxpbmtdPVwiWycvJ11cIj5cclxuICAgICAgICA8aW1nIGNsYXNzPVwibW9kLWxvZ29cIiBzcmM9XCIvYXNzZXRzL1VTLU9mZmljZU9mTWFuYWdlbWVudEFuZEJ1ZGdldC1TZWFsLnBuZ1wiIHRhYmluZGV4PVwiLTFcIiAvPlxyXG4gICAgICAgIDxkaXYgdGFiaW5kZXg9XCItMVwiIGFsdD1cIlRleHRtYXJrXCIgY2xhc3M9XCJ0ZXh0LW1hcmtcIj57eyBhcHBOYW1lIH19PC9kaXY+XHJcbiAgICA8L2E+XHJcblxyXG4gICAgPHNwYW4gY2xhc3M9XCJmaWxsLXJlbWFpbmluZy1zcGFjZVwiPlxyXG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgIDwvc3Bhbj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwid2VsY29tZS11c2VyXCI+XHJcbiAgICAgICAgPG1vZC11c2VyLWRpc3BsYXkgW3Nob3dVc2VyXT1cInRydWVcIiAoc2VsZWN0T3B0aW9uKT1cIm9uVXNlck9wdGlvblNlbGVjdCgkZXZlbnQpXCI+PC9tb2QtdXNlci1kaXNwbGF5PlxyXG4gICAgICAgIDxkaXYgKm5nSWY9XCJjb25maWcuc2hvd0hlbHBcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gW21hdE1lbnVUcmlnZ2VyRm9yXT1cIm1lbnVcIiBhcmlhLWxhYmVsPVwiSGVscCBNZW51XCI+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWljb24+aGVscDwvbWF0LWljb24+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8bWF0LW1lbnUgI21lbnU9XCJtYXRNZW51XCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0gKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBjb25maWcuaGVscE9wdGlvbnNcIiAoY2xpY2spPVwib3B0aW9uU2VsZWN0ZWQob3B0aW9uKVwiPnt7IG9wdGlvbiB9fTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L21hdC1tZW51PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvbWF0LXRvb2xiYXI+XHJcbiJdfQ==