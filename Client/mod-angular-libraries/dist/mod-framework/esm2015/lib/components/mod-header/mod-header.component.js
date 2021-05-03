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
    } }, directives: [i2.MatToolbar, i3.MatButton, i4.MatIcon, i5.RouterLinkWithHref, i6.ModUserDisplayComponent, i7.NgIf, i8.MatMenuTrigger, i8._MatMenu, i7.NgForOf, i8.MatMenuItem], styles: [".mod-header[_ngcontent-%COMP%]{justify-content:center;background-color:#112e51;display:flex;color:#fff}a[_ngcontent-%COMP%]{text-decoration:none}.logo-text-mark[_ngcontent-%COMP%]{cursor:pointer;display:flex;align-items:center}.text-mark[_ngcontent-%COMP%]{cursor:pointer;margin-left:12px;font-size:1.4em;display:inline-block;vertical-align:middle;color:#d8b304}.mod-logo[_ngcontent-%COMP%]{margin-left:4px;height:50px}.fill-remaining-space[_ngcontent-%COMP%]{flex:1 1 auto;align-items:center;margin-left:15px}.welcome-user[_ngcontent-%COMP%]{font-size:.85em;padding-top:2px;padding-right:5px;flex:1;display:flex;justify-content:flex-end}.mat-button-base[_ngcontent-%COMP%]{height:auto;line-height:inherit}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModHeaderComponent, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kLWhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tb2QtZnJhbWV3b3JrL3NyYy9saWIvY29tcG9uZW50cy9tb2QtaGVhZGVyL21vZC1oZWFkZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbW9kLWZyYW1ld29yay9zcmMvbGliL2NvbXBvbmVudHMvbW9kLWhlYWRlci9tb2QtaGVhZGVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7Ozs7Ozs7Ozs7O0lDc0IxQyxrQ0FBaUc7SUFBakMsK09BQWdDO0lBQUMsWUFBWTtJQUFBLGlCQUFTOzs7SUFBckIsZUFBWTtJQUFaLCtCQUFZOzs7SUFMckgsMkJBQTZCO0lBQ3pCLGlDQUEwRTtJQUN0RSxnQ0FBVTtJQUFBLG9CQUFJO0lBQUEsaUJBQVc7SUFDN0IsaUJBQVM7SUFDVCwwQ0FBMEI7SUFDdEIsaUZBQXNIO0lBQzFILGlCQUFXO0lBQ2YsaUJBQU07Ozs7SUFOc0IsZUFBMEI7SUFBMUIsdUNBQTBCO0lBSUwsZUFBcUI7SUFBckIsbURBQXFCOzs7O0FEZDlFLE1BQU0sT0FBTyxrQkFBa0I7SUFnQjNCLFlBQStCLE1BQTBCO1FBVnpELGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBR3BDLHFCQUFnQixHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFHOUMscUJBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUsxQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN6QixDQUFDO0lBRUQsUUFBUTtJQUNSLENBQUM7SUFFTSxXQUFXO1FBQ2QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRU0sa0JBQWtCLENBQUMsTUFBYztRQUNwQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFTSxjQUFjLENBQUMsTUFBYztRQUNoQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7O29GQWpDUSxrQkFBa0IsdUJBZ0JQLFNBQVM7dURBaEJwQixrQkFBa0I7O1FDVC9CLHNDQUFnQztRQUM1QixpQ0FBZ0Q7UUFBeEIsK0ZBQVMsaUJBQWEsSUFBQztRQUMzQyxnQ0FBVTtRQUNOLHNCQUNKO1FBQUEsaUJBQVc7UUFDZixpQkFBUztRQUVULDRCQUErQztRQUMzQyx5QkFBNEY7UUFDNUYsOEJBQW9EO1FBQUEsWUFBYTtRQUFBLGlCQUFNO1FBQzNFLGlCQUFJO1FBRUosK0JBQW1DO1FBQy9CLGtCQUF5QjtRQUM3QixpQkFBTztRQUVQLCtCQUEwQjtRQUN0Qiw0Q0FBZ0Y7UUFBNUMsOEhBQWdCLDhCQUEwQixJQUFDO1FBQUMsaUJBQW1CO1FBQ25HLHFFQU9NO1FBQ1YsaUJBQU07UUFDVixpQkFBYzs7UUFwQmdCLGVBQW9CO1FBQXBCLHVEQUFvQjtRQUVVLGVBQWE7UUFBYixpQ0FBYTtRQVEvQyxlQUFpQjtRQUFqQiwrQkFBaUI7UUFDN0IsZUFBcUI7UUFBckIsMENBQXFCOzt1RkRUdEIsa0JBQWtCO2NBTDlCLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsV0FBVyxFQUFFLDZCQUE2QjtnQkFDMUMsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7YUFDN0M7O3NCQWlCZ0IsTUFBTTt1QkFBQyxTQUFTO3dCQWI3QixPQUFPO2tCQUROLEtBQUs7WUFJTixTQUFTO2tCQURSLE1BQU07WUFJUCxnQkFBZ0I7a0JBRGYsTUFBTTtZQUlQLGdCQUFnQjtrQkFEZixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNb2RDb25maWcgfSBmcm9tICcuLi8uLi9zdGF0aWMvbW9kLWNvbmZpZy5jb25zdCc7XHJcbmltcG9ydCB7IE1vZEZyYW1ld29ya0NvbmZpZyB9IGZyb20gJy4uLy4uL21vZGVscy9tb2QtZnJhbWV3b3JrLWNvbmZpZy5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbW9kLWhlYWRlcicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL21vZC1oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL21vZC1oZWFkZXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNb2RIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQElucHV0KClcbiAgICBhcHBOYW1lOiBzdHJpbmc7XG5cbiAgICBAT3V0cHV0KClcbiAgICBtZW51Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICAgIEBPdXRwdXQoKVxuICAgIHVzZXJPcHRpb25TZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICAgIEBPdXRwdXQoKVxuICAgIGhlbHBPcHRpb25TZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICAgIHB1YmxpYyBjb25maWc6IE1vZEZyYW1ld29ya0NvbmZpZztcblxuICAgIGNvbnN0cnVjdG9yKEBJbmplY3QoTW9kQ29uZmlnKSBjb25maWc6IE1vZEZyYW1ld29ya0NvbmZpZykge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25NZW51Q2xpY2soKTogdm9pZCB7XG4gICAgICAgIHRoaXMubWVudUNsaWNrLmVtaXQoKTtcclxuICAgIH1cblxuICAgIHB1YmxpYyBvblVzZXJPcHRpb25TZWxlY3Qob3B0aW9uOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy51c2VyT3B0aW9uU2VsZWN0LmVtaXQob3B0aW9uKTtcclxuICAgIH1cblxuICAgIHB1YmxpYyBvcHRpb25TZWxlY3RlZChvcHRpb246IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLmhlbHBPcHRpb25TZWxlY3QuZW1pdChvcHRpb24pO1xyXG4gICAgfVxufVxuIiwiPG1hdC10b29sYmFyIGNsYXNzPVwibW9kLWhlYWRlclwiPlxyXG4gICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gKGNsaWNrKT1cIm9uTWVudUNsaWNrKClcIj5cclxuICAgICAgICA8bWF0LWljb24+XHJcbiAgICAgICAgICAgIG1lbnVcclxuICAgICAgICA8L21hdC1pY29uPlxyXG4gICAgPC9idXR0b24+XHJcblxyXG4gICAgPGEgY2xhc3M9XCJsb2dvLXRleHQtbWFya1wiIFtyb3V0ZXJMaW5rXT1cIlsnLyddXCI+XHJcbiAgICAgICAgPGltZyBjbGFzcz1cIm1vZC1sb2dvXCIgc3JjPVwiL2Fzc2V0cy9VUy1PZmZpY2VPZk1hbmFnZW1lbnRBbmRCdWRnZXQtU2VhbC5wbmdcIiB0YWJpbmRleD1cIi0xXCIgLz5cclxuICAgICAgICA8ZGl2IHRhYmluZGV4PVwiLTFcIiBhbHQ9XCJUZXh0bWFya1wiIGNsYXNzPVwidGV4dC1tYXJrXCI+e3sgYXBwTmFtZSB9fTwvZGl2PlxyXG4gICAgPC9hPlxyXG5cclxuICAgIDxzcGFuIGNsYXNzPVwiZmlsbC1yZW1haW5pbmctc3BhY2VcIj5cclxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICA8L3NwYW4+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cIndlbGNvbWUtdXNlclwiPlxyXG4gICAgICAgIDxtb2QtdXNlci1kaXNwbGF5IFtzaG93VXNlcl09XCJ0cnVlXCIgKHNlbGVjdE9wdGlvbik9XCJvblVzZXJPcHRpb25TZWxlY3QoJGV2ZW50KVwiPjwvbW9kLXVzZXItZGlzcGxheT5cclxuICAgICAgICA8ZGl2ICpuZ0lmPVwiY29uZmlnLnNob3dIZWxwXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIFttYXRNZW51VHJpZ2dlckZvcl09XCJtZW51XCIgYXJpYS1sYWJlbD1cIkhlbHAgTWVudVwiPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1pY29uPmhlbHA8L21hdC1pY29uPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPG1hdC1tZW51ICNtZW51PVwibWF0TWVudVwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgY29uZmlnLmhlbHBPcHRpb25zXCIgKGNsaWNrKT1cIm9wdGlvblNlbGVjdGVkKG9wdGlvbilcIj57eyBvcHRpb24gfX08L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9tYXQtbWVudT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L21hdC10b29sYmFyPlxyXG4iXX0=