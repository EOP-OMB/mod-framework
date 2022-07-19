import { Component, Input, Output, EventEmitter, Inject } from '@angular/core';
import { ModConfig } from '../../static/mod-config.const';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/toolbar";
import * as i2 from "@angular/router";
import * as i3 from "../mod-user-display/mod-user-display.component";
import * as i4 from "@angular/common";
import * as i5 from "@angular/material/button";
import * as i6 from "@angular/material/menu";
import * as i7 from "@angular/material/icon";
import * as i8 from "../../models/mod-framework-config.model";
function ModHeaderComponent_div_9_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 11);
    i0.ɵɵlistener("click", function ModHeaderComponent_div_9_button_6_Template_button_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r5); const option_r3 = restoredCtx.$implicit; const ctx_r4 = i0.ɵɵnextContext(2); return ctx_r4.optionSelected(option_r3); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r3 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(option_r3);
} }
function ModHeaderComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "button", 8)(2, "mat-icon");
    i0.ɵɵtext(3, "help");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "mat-menu", null, 9);
    i0.ɵɵtemplate(6, ModHeaderComponent_div_9_button_6_Template, 2, 1, "button", 10);
    i0.ɵɵelementEnd()();
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
ModHeaderComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ModHeaderComponent, selectors: [["mod-header"]], inputs: { appName: "appName" }, outputs: { menuClick: "menuClick", userOptionSelect: "userOptionSelect", helpOptionSelect: "helpOptionSelect" }, ngContentSelectors: _c1, decls: 10, vars: 5, consts: [[1, "mod-header"], [1, "logo-text-mark", 3, "routerLink"], ["src", "/assets/US-OfficeOfManagementAndBudget-Seal.png", "tabindex", "-1", 1, "mod-logo"], ["tabindex", "-1", "alt", "Textmark", 1, "text-mark"], [1, "fill-remaining-space"], [1, "welcome-user"], [3, "showUser", "selectOption"], [4, "ngIf"], ["mat-icon-button", "", "aria-label", "Help Menu", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["mat-menu-item", "", 3, "click"]], template: function ModHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "mat-toolbar", 0)(1, "a", 1);
        i0.ɵɵelement(2, "img", 2);
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵtext(4);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(5, "span", 4);
        i0.ɵɵprojection(6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "div", 5)(8, "mod-user-display", 6);
        i0.ɵɵlistener("selectOption", function ModHeaderComponent_Template_mod_user_display_selectOption_8_listener($event) { return ctx.onUserOptionSelect($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(9, ModHeaderComponent_div_9_Template, 7, 2, "div", 7);
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction0(4, _c0));
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(ctx.appName);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("showUser", true);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.config.showHelp);
    } }, directives: [i1.MatToolbar, i2.RouterLinkWithHref, i3.ModUserDisplayComponent, i4.NgIf, i5.MatButton, i6.MatMenuTrigger, i7.MatIcon, i6.MatMenu, i4.NgForOf, i6.MatMenuItem], styles: [".mod-header[_ngcontent-%COMP%]{justify-content:center;background-color:#112e51;display:flex;color:#fff}a[_ngcontent-%COMP%]{text-decoration:none}.logo-text-mark[_ngcontent-%COMP%]{cursor:pointer;display:flex;align-items:center}.text-mark[_ngcontent-%COMP%]{cursor:pointer;margin-left:12px;font-size:1.4em;display:inline-block;vertical-align:middle;color:#d8b304}.mod-logo[_ngcontent-%COMP%]{margin-left:4px;height:50px}.fill-remaining-space[_ngcontent-%COMP%]{flex:1 1 auto;align-items:center;margin-left:15px}.welcome-user[_ngcontent-%COMP%]{font-size:.85em;padding-top:2px;padding-right:5px;flex:1;display:flex;justify-content:flex-end}.mat-button-base[_ngcontent-%COMP%]{height:auto;line-height:inherit}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModHeaderComponent, [{
        type: Component,
        args: [{ selector: 'mod-header', template: "<mat-toolbar class=\"mod-header\">\r\n    <!--<button mat-icon-button (click)=\"onMenuClick()\">\r\n        <mat-icon>\r\n            menu\r\n        </mat-icon>\r\n    </button>-->\r\n\r\n    <a class=\"logo-text-mark\" [routerLink]=\"['/']\">\r\n        <img class=\"mod-logo\" src=\"/assets/US-OfficeOfManagementAndBudget-Seal.png\" tabindex=\"-1\" />\r\n        <div tabindex=\"-1\" alt=\"Textmark\" class=\"text-mark\">{{ appName }}</div>\r\n    </a>\r\n\r\n    <span class=\"fill-remaining-space\">\r\n        <ng-content></ng-content>\r\n    </span>\r\n\r\n    <div class=\"welcome-user\">\r\n        <mod-user-display [showUser]=\"true\" (selectOption)=\"onUserOptionSelect($event)\"></mod-user-display>\r\n        <div *ngIf=\"config.showHelp\">\r\n            <button mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"Help Menu\">\r\n                <mat-icon>help</mat-icon>\r\n            </button>\r\n            <mat-menu #menu=\"matMenu\">\r\n                <button mat-menu-item *ngFor=\"let option of config.helpOptions\" (click)=\"optionSelected(option)\">{{ option }}</button>\r\n            </mat-menu>\r\n        </div>\r\n    </div>\r\n</mat-toolbar>\r\n", styles: [".mod-header{justify-content:center;background-color:#112e51;display:flex;color:#fff}a{text-decoration:none}.logo-text-mark{cursor:pointer;display:flex;align-items:center}.text-mark{cursor:pointer;margin-left:12px;font-size:1.4em;display:inline-block;vertical-align:middle;color:#d8b304}.mod-logo{margin-left:4px;height:50px}.fill-remaining-space{flex:1 1 auto;align-items:center;margin-left:15px}.welcome-user{font-size:.85em;padding-top:2px;padding-right:5px;flex:1;display:flex;justify-content:flex-end}.mat-button-base{height:auto;line-height:inherit}\n"] }]
    }], function () { return [{ type: i8.ModFrameworkConfig, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kLWhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tb2QtZnJhbWV3b3JrL3NyYy9saWIvY29tcG9uZW50cy9tb2QtaGVhZGVyL21vZC1oZWFkZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbW9kLWZyYW1ld29yay9zcmMvbGliL2NvbXBvbmVudHMvbW9kLWhlYWRlci9tb2QtaGVhZGVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7Ozs7Ozs7Ozs7O0lDc0IxQyxrQ0FBaUc7SUFBakMsc09BQVMsZ0NBQXNCLElBQUM7SUFBQyxZQUFZO0lBQUEsaUJBQVM7OztJQUFyQixlQUFZO0lBQVosK0JBQVk7OztJQUxySCwyQkFBNkIsZ0JBQUEsZUFBQTtJQUVYLG9CQUFJO0lBQUEsaUJBQVcsRUFBQTtJQUU3Qix5Q0FBMEI7SUFDdEIsZ0ZBQXNIO0lBQzFILGlCQUFXLEVBQUE7Ozs7SUFMYSxlQUEwQjtJQUExQix1Q0FBMEI7SUFJTCxlQUFxQjtJQUFyQixtREFBcUI7Ozs7QURkOUUsTUFBTSxPQUFPLGtCQUFrQjtJQWdCM0IsWUFBK0IsTUFBMEI7UUFWekQsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFHcEMscUJBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUc5QyxxQkFBZ0IsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBSzFDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxRQUFRO0lBQ1IsQ0FBQztJQUVNLFdBQVc7UUFDZCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFTSxrQkFBa0IsQ0FBQyxNQUFjO1FBQ3BDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVNLGNBQWMsQ0FBQyxNQUFjO1FBQ2hDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7b0ZBakNRLGtCQUFrQix1QkFnQlAsU0FBUztxRUFoQnBCLGtCQUFrQjs7UUNUL0Isc0NBQWdDLFdBQUE7UUFReEIseUJBQTRGO1FBQzVGLDhCQUFvRDtRQUFBLFlBQWE7UUFBQSxpQkFBTSxFQUFBO1FBRzNFLCtCQUFtQztRQUMvQixrQkFBeUI7UUFDN0IsaUJBQU87UUFFUCw4QkFBMEIsMEJBQUE7UUFDYyw2SEFBZ0IsOEJBQTBCLElBQUM7UUFBQyxpQkFBbUI7UUFDbkcsbUVBT007UUFDVixpQkFBTSxFQUFBOztRQW5Cb0IsZUFBb0I7UUFBcEIsdURBQW9CO1FBRVUsZUFBYTtRQUFiLGlDQUFhO1FBUS9DLGVBQWlCO1FBQWpCLCtCQUFpQjtRQUM3QixlQUFxQjtRQUFyQiwwQ0FBcUI7O3VGRFR0QixrQkFBa0I7Y0FMOUIsU0FBUzsyQkFDSSxZQUFZOztzQkFvQlQsTUFBTTt1QkFBQyxTQUFTO3dCQWI3QixPQUFPO2tCQUROLEtBQUs7WUFJTixTQUFTO2tCQURSLE1BQU07WUFJUCxnQkFBZ0I7a0JBRGYsTUFBTTtZQUlQLGdCQUFnQjtrQkFEZixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNb2RDb25maWcgfSBmcm9tICcuLi8uLi9zdGF0aWMvbW9kLWNvbmZpZy5jb25zdCc7XHJcbmltcG9ydCB7IE1vZEZyYW1ld29ya0NvbmZpZyB9IGZyb20gJy4uLy4uL21vZGVscy9tb2QtZnJhbWV3b3JrLWNvbmZpZy5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbW9kLWhlYWRlcicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL21vZC1oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL21vZC1oZWFkZXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNb2RIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQElucHV0KClcbiAgICBhcHBOYW1lOiBzdHJpbmc7XG5cbiAgICBAT3V0cHV0KClcbiAgICBtZW51Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICAgIEBPdXRwdXQoKVxuICAgIHVzZXJPcHRpb25TZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICAgIEBPdXRwdXQoKVxuICAgIGhlbHBPcHRpb25TZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICAgIHB1YmxpYyBjb25maWc6IE1vZEZyYW1ld29ya0NvbmZpZztcblxuICAgIGNvbnN0cnVjdG9yKEBJbmplY3QoTW9kQ29uZmlnKSBjb25maWc6IE1vZEZyYW1ld29ya0NvbmZpZykge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25NZW51Q2xpY2soKTogdm9pZCB7XG4gICAgICAgIHRoaXMubWVudUNsaWNrLmVtaXQoKTtcclxuICAgIH1cblxuICAgIHB1YmxpYyBvblVzZXJPcHRpb25TZWxlY3Qob3B0aW9uOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy51c2VyT3B0aW9uU2VsZWN0LmVtaXQob3B0aW9uKTtcclxuICAgIH1cblxuICAgIHB1YmxpYyBvcHRpb25TZWxlY3RlZChvcHRpb246IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLmhlbHBPcHRpb25TZWxlY3QuZW1pdChvcHRpb24pO1xyXG4gICAgfVxufVxuIiwiPG1hdC10b29sYmFyIGNsYXNzPVwibW9kLWhlYWRlclwiPlxyXG4gICAgPCEtLTxidXR0b24gbWF0LWljb24tYnV0dG9uIChjbGljayk9XCJvbk1lbnVDbGljaygpXCI+XHJcbiAgICAgICAgPG1hdC1pY29uPlxyXG4gICAgICAgICAgICBtZW51XHJcbiAgICAgICAgPC9tYXQtaWNvbj5cclxuICAgIDwvYnV0dG9uPi0tPlxyXG5cclxuICAgIDxhIGNsYXNzPVwibG9nby10ZXh0LW1hcmtcIiBbcm91dGVyTGlua109XCJbJy8nXVwiPlxyXG4gICAgICAgIDxpbWcgY2xhc3M9XCJtb2QtbG9nb1wiIHNyYz1cIi9hc3NldHMvVVMtT2ZmaWNlT2ZNYW5hZ2VtZW50QW5kQnVkZ2V0LVNlYWwucG5nXCIgdGFiaW5kZXg9XCItMVwiIC8+XHJcbiAgICAgICAgPGRpdiB0YWJpbmRleD1cIi0xXCIgYWx0PVwiVGV4dG1hcmtcIiBjbGFzcz1cInRleHQtbWFya1wiPnt7IGFwcE5hbWUgfX08L2Rpdj5cclxuICAgIDwvYT5cclxuXHJcbiAgICA8c3BhbiBjbGFzcz1cImZpbGwtcmVtYWluaW5nLXNwYWNlXCI+XHJcbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgPC9zcGFuPlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJ3ZWxjb21lLXVzZXJcIj5cclxuICAgICAgICA8bW9kLXVzZXItZGlzcGxheSBbc2hvd1VzZXJdPVwidHJ1ZVwiIChzZWxlY3RPcHRpb24pPVwib25Vc2VyT3B0aW9uU2VsZWN0KCRldmVudClcIj48L21vZC11c2VyLWRpc3BsYXk+XHJcbiAgICAgICAgPGRpdiAqbmdJZj1cImNvbmZpZy5zaG93SGVscFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBbbWF0TWVudVRyaWdnZXJGb3JdPVwibWVudVwiIGFyaWEtbGFiZWw9XCJIZWxwIE1lbnVcIj5cclxuICAgICAgICAgICAgICAgIDxtYXQtaWNvbj5oZWxwPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxtYXQtbWVudSAjbWVudT1cIm1hdE1lbnVcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LW1lbnUtaXRlbSAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIGNvbmZpZy5oZWxwT3B0aW9uc1wiIChjbGljayk9XCJvcHRpb25TZWxlY3RlZChvcHRpb24pXCI+e3sgb3B0aW9uIH19PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvbWF0LW1lbnU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC9tYXQtdG9vbGJhcj5cclxuIl19