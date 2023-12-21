import { Component, Input, Output, EventEmitter, Inject } from '@angular/core';
import { ModConfig } from '../../static/mod-config.const';
import * as i0 from "@angular/core";
import * as i1 from "../../services/current-user.service";
import * as i2 from "@angular/common";
import * as i3 from "@angular/material/icon";
import * as i4 from "@angular/material/menu";
import * as i5 from "@angular/material/button";
import * as i6 from "../../models/mod-framework-config.model";
function ModUserDisplayComponent_div_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "button", 6)(2, "mat-icon");
    i0.ɵɵtext(3, "account_circle");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r4 = i0.ɵɵreference(7);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matMenuTriggerFor", _r4);
} }
function ModUserDisplayComponent_div_0_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 7)(1, "mat-icon");
    i0.ɵɵtext(2, "keyboard_arrow_down");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r4 = i0.ɵɵreference(7);
    i0.ɵɵproperty("matMenuTriggerFor", _r4);
} }
function ModUserDisplayComponent_div_0_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 8);
    i0.ɵɵlistener("click", function ModUserDisplayComponent_div_0_button_8_Template_button_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r8); const option_r6 = restoredCtx.$implicit; const ctx_r7 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r7.optionSelected(option_r6)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r6 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(option_r6);
} }
function ModUserDisplayComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "span", 1);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, ModUserDisplayComponent_div_0_ng_container_3_Template, 4, 1, "ng-container", 2);
    i0.ɵɵtemplate(4, ModUserDisplayComponent_div_0_ng_template_4_Template, 3, 1, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementStart(6, "mat-menu", null, 4);
    i0.ɵɵtemplate(8, ModUserDisplayComponent_div_0_button_8_Template, 2, 1, "button", 5);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const _r2 = i0.ɵɵreference(5);
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.user.displayName);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.showUser)("ngIfElse", _r2);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", ctx_r0.config.userOptions);
} }
class ModUserDisplayComponent {
    constructor(userService, config) {
        this.userService = userService;
        this.showUser = false;
        this.selectOption = new EventEmitter();
        this.config = config;
        this.config.userOptions.push('User Profile');
    }
    ngOnInit() {
    }
    get user() {
        return this.userService.user;
    }
    optionSelected(option) {
        if (option == "User Profile") {
            window.open(this.config.profileUrl, '_blank');
        }
        else {
            this.selectOption.emit(option);
        }
    }
    static { this.ɵfac = function ModUserDisplayComponent_Factory(t) { return new (t || ModUserDisplayComponent)(i0.ɵɵdirectiveInject(i1.CurrentUserService), i0.ɵɵdirectiveInject(ModConfig)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ModUserDisplayComponent, selectors: [["mod-user-display"]], inputs: { showUser: "showUser" }, outputs: { selectOption: "selectOption" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [2, "padding-right", "5px", "margin-top", "-5px"], [4, "ngIf", "ngIfElse"], ["showMenu", ""], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["mat-icon-button", "", "aria-label", "User Menu", 1, "mod-user-icon", 3, "matMenuTriggerFor"], ["mat-icon-button", "", "aria-label", "User Menu", 1, "mat-icon-button", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"]], template: function ModUserDisplayComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, ModUserDisplayComponent_div_0_Template, 9, 4, "div", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.user);
        } }, dependencies: [i2.NgForOf, i2.NgIf, i3.MatIcon, i4.MatMenu, i4.MatMenuItem, i4.MatMenuTrigger, i5.MatIconButton], styles: [".delete-potentially-circle-user-icon[_ngcontent-%COMP%]{border:2px solid inherit!important;border-radius:50%!important;padding:5px!important;margin-left:15px!important}.mat-mdc-button-base[_ngcontent-%COMP%]{height:auto;line-height:inherit}"] }); }
}
export { ModUserDisplayComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModUserDisplayComponent, [{
        type: Component,
        args: [{ selector: 'mod-user-display', template: "<div *ngIf=\"user\">\r\n    <span style=\"padding-right: 5px; margin-top: -5px;\">{{ user.displayName }}</span>\r\n    <ng-container *ngIf=\"showUser;else showMenu\">\r\n        <button mat-icon-button [matMenuTriggerFor]=\"menu\" class=\"mod-user-icon\" aria-label=\"User Menu\">\r\n            <mat-icon>account_circle</mat-icon>\r\n        </button>\r\n    </ng-container>\r\n    <ng-template #showMenu>\r\n        <button mat-icon-button [matMenuTriggerFor]=\"menu\" class=\"mat-icon-button\" aria-label=\"User Menu\">\r\n            <mat-icon>keyboard_arrow_down</mat-icon>\r\n        </button>\r\n    </ng-template>\r\n    <mat-menu #menu=\"matMenu\">\r\n        <button mat-menu-item *ngFor=\"let option of config.userOptions\" (click)=\"optionSelected(option)\">{{ option }}</button>\r\n    </mat-menu>\r\n</div>\r\n", styles: [".delete-potentially-circle-user-icon{border:2px solid inherit!important;border-radius:50%!important;padding:5px!important;margin-left:15px!important}.mat-mdc-button-base{height:auto;line-height:inherit}\n"] }]
    }], function () { return [{ type: i1.CurrentUserService }, { type: i6.ModFrameworkConfig, decorators: [{
                type: Inject,
                args: [ModConfig]
            }] }]; }, { showUser: [{
            type: Input
        }], selectOption: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kLXVzZXItZGlzcGxheS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tb2QtZnJhbWV3b3JrL3NyYy9saWIvY29tcG9uZW50cy9tb2QtdXNlci1kaXNwbGF5L21vZC11c2VyLWRpc3BsYXkuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbW9kLWZyYW1ld29yay9zcmMvbGliL2NvbXBvbmVudHMvbW9kLXVzZXItZGlzcGxheS9tb2QtdXNlci1kaXNwbGF5LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXZGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7Ozs7Ozs7O0lDQXRELDZCQUE2QztJQUN6QyxpQ0FBZ0csZUFBQTtJQUNsRiw4QkFBYztJQUFBLGlCQUFXLEVBQUE7SUFFM0MsMEJBQWU7Ozs7SUFIYSxlQUEwQjtJQUExQix1Q0FBMEI7OztJQUtsRCxpQ0FBa0csZUFBQTtJQUNwRixtQ0FBbUI7SUFBQSxpQkFBVyxFQUFBOzs7O0lBRHBCLHVDQUEwQjs7OztJQUtsRCxpQ0FBaUc7SUFBakMsMk9BQVMsZUFBQSxnQ0FBc0IsQ0FBQSxJQUFDO0lBQUMsWUFBWTtJQUFBLGlCQUFTOzs7SUFBckIsZUFBWTtJQUFaLCtCQUFZOzs7SUFickgsMkJBQWtCLGNBQUE7SUFDc0MsWUFBc0I7SUFBQSxpQkFBTztJQUNqRixnR0FJZTtJQUNmLCtIQUljO0lBQ2QseUNBQTBCO0lBQ3RCLG9GQUFzSDtJQUMxSCxpQkFBVyxFQUFBOzs7O0lBYnlDLGVBQXNCO0lBQXRCLDZDQUFzQjtJQUMzRCxlQUFlO0lBQWYsc0NBQWUsaUJBQUE7SUFXZSxlQUFxQjtJQUFyQixtREFBcUI7O0FEUnRFLE1BS2EsdUJBQXVCO0lBV2hDLFlBQW9CLFdBQStCLEVBQXFCLE1BQTBCO1FBQTlFLGdCQUFXLEdBQVgsV0FBVyxDQUFvQjtRQVJuRCxhQUFRLEdBQVksS0FBSyxDQUFDO1FBRzFCLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQU10QyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELFFBQVE7SUFFUixDQUFDO0lBRUQsSUFBSSxJQUFJO1FBQ0osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztJQUNqQyxDQUFDO0lBRU0sY0FBYyxDQUFDLE1BQWM7UUFDaEMsSUFBSSxNQUFNLElBQUksY0FBYyxFQUFFO1lBQzFCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUE7U0FDaEQ7YUFDSTtZQUNELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2xDO0lBQ0wsQ0FBQzt3RkEvQlEsdUJBQXVCLG9FQVc2QixTQUFTO29FQVg3RCx1QkFBdUI7WUNWcEMsd0VBZU07O1lBZkEsK0JBQVU7OztTRFVILHVCQUF1Qjt1RkFBdkIsdUJBQXVCO2NBTG5DLFNBQVM7MkJBQ0ksa0JBQWtCOztzQkFlMEIsTUFBTTt1QkFBQyxTQUFTO3dCQVJ0RSxRQUFRO2tCQURQLEtBQUs7WUFJTixZQUFZO2tCQURYLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEN1cnJlbnRVc2VyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2N1cnJlbnQtdXNlci5zZXJ2aWNlJztcbmltcG9ydCB7IE1vZENvbmZpZyB9IGZyb20gJy4uLy4uL3N0YXRpYy9tb2QtY29uZmlnLmNvbnN0JztcclxuaW1wb3J0IHsgTW9kRnJhbWV3b3JrQ29uZmlnIH0gZnJvbSAnLi4vLi4vbW9kZWxzL21vZC1mcmFtZXdvcmstY29uZmlnLm1vZGVsJztcclxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ21vZC11c2VyLWRpc3BsYXknLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9tb2QtdXNlci1kaXNwbGF5LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9tb2QtdXNlci1kaXNwbGF5LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTW9kVXNlckRpc3BsYXlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQElucHV0KClcbiAgICBzaG93VXNlcjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgQE91dHB1dCgpXG4gICAgc2VsZWN0T3B0aW9uID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cblxuICAgIHB1YmxpYyBjb25maWc6IE1vZEZyYW1ld29ya0NvbmZpZztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdXNlclNlcnZpY2U6IEN1cnJlbnRVc2VyU2VydmljZSwgQEluamVjdChNb2RDb25maWcpIGNvbmZpZzogTW9kRnJhbWV3b3JrQ29uZmlnKSB7XG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgICAgICB0aGlzLmNvbmZpZy51c2VyT3B0aW9ucy5wdXNoKCdVc2VyIFByb2ZpbGUnKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgZ2V0IHVzZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVzZXJTZXJ2aWNlLnVzZXI7XG4gICAgfVxuXG4gICAgcHVibGljIG9wdGlvblNlbGVjdGVkKG9wdGlvbjogc3RyaW5nKSB7XG4gICAgICAgIGlmIChvcHRpb24gPT0gXCJVc2VyIFByb2ZpbGVcIikge1xyXG4gICAgICAgICAgICB3aW5kb3cub3Blbih0aGlzLmNvbmZpZy5wcm9maWxlVXJsLCAnX2JsYW5rJylcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0T3B0aW9uLmVtaXQob3B0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICB9XG59XG4iLCI8ZGl2ICpuZ0lmPVwidXNlclwiPlxyXG4gICAgPHNwYW4gc3R5bGU9XCJwYWRkaW5nLXJpZ2h0OiA1cHg7IG1hcmdpbi10b3A6IC01cHg7XCI+e3sgdXNlci5kaXNwbGF5TmFtZSB9fTwvc3Bhbj5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJzaG93VXNlcjtlbHNlIHNob3dNZW51XCI+XHJcbiAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gW21hdE1lbnVUcmlnZ2VyRm9yXT1cIm1lbnVcIiBjbGFzcz1cIm1vZC11c2VyLWljb25cIiBhcmlhLWxhYmVsPVwiVXNlciBNZW51XCI+XHJcbiAgICAgICAgICAgIDxtYXQtaWNvbj5hY2NvdW50X2NpcmNsZTwvbWF0LWljb24+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDxuZy10ZW1wbGF0ZSAjc2hvd01lbnU+XHJcbiAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gW21hdE1lbnVUcmlnZ2VyRm9yXT1cIm1lbnVcIiBjbGFzcz1cIm1hdC1pY29uLWJ1dHRvblwiIGFyaWEtbGFiZWw9XCJVc2VyIE1lbnVcIj5cclxuICAgICAgICAgICAgPG1hdC1pY29uPmtleWJvYXJkX2Fycm93X2Rvd248L21hdC1pY29uPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgIDxtYXQtbWVudSAjbWVudT1cIm1hdE1lbnVcIj5cclxuICAgICAgICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0gKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBjb25maWcudXNlck9wdGlvbnNcIiAoY2xpY2spPVwib3B0aW9uU2VsZWN0ZWQob3B0aW9uKVwiPnt7IG9wdGlvbiB9fTwvYnV0dG9uPlxyXG4gICAgPC9tYXQtbWVudT5cclxuPC9kaXY+XHJcbiJdfQ==