import { Component, Input, Output, EventEmitter, Inject } from '@angular/core';
import { ModConfig } from '../../static/mod-config.const';
import * as i0 from "@angular/core";
import * as i1 from "../../services/current-user.service";
import * as i2 from "../../models/mod-framework-config.model";
import * as i3 from "@angular/common";
import * as i4 from "@angular/material/menu";
import * as i5 from "@angular/material/button";
import * as i6 from "@angular/material/icon";
function ModUserDisplayComponent_div_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "button", 6);
    i0.ɵɵelementStart(2, "mat-icon");
    i0.ɵɵtext(3, "account_circle");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r4 = i0.ɵɵreference(8);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matMenuTriggerFor", _r4);
} }
function ModUserDisplayComponent_div_0_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 7);
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2, "keyboard_arrow_down");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r4 = i0.ɵɵreference(8);
    i0.ɵɵproperty("matMenuTriggerFor", _r4);
} }
function ModUserDisplayComponent_div_0_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 8);
    i0.ɵɵlistener("click", function ModUserDisplayComponent_div_0_button_9_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r8); const option_r6 = ctx.$implicit; const ctx_r7 = i0.ɵɵnextContext(2); return ctx_r7.optionSelected(option_r6); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r6 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(option_r6);
} }
function ModUserDisplayComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, " Welcome ");
    i0.ɵɵelementStart(2, "span", 1);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, ModUserDisplayComponent_div_0_ng_container_4_Template, 4, 1, "ng-container", 2);
    i0.ɵɵtemplate(5, ModUserDisplayComponent_div_0_ng_template_5_Template, 3, 1, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementStart(7, "mat-menu", null, 4);
    i0.ɵɵtemplate(9, ModUserDisplayComponent_div_0_button_9_Template, 2, 1, "button", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r2 = i0.ɵɵreference(6);
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.user.displayName);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.showUser)("ngIfElse", _r2);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", ctx_r0.config.userOptions);
} }
export class ModUserDisplayComponent {
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
}
ModUserDisplayComponent.ɵfac = function ModUserDisplayComponent_Factory(t) { return new (t || ModUserDisplayComponent)(i0.ɵɵdirectiveInject(i1.CurrentUserService), i0.ɵɵdirectiveInject(ModConfig)); };
ModUserDisplayComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ModUserDisplayComponent, selectors: [["mod-user-display"]], inputs: { showUser: "showUser" }, outputs: { selectOption: "selectOption" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [2, "padding-right", "5px"], [4, "ngIf", "ngIfElse"], ["showMenu", ""], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["mat-icon-button", "", "aria-label", "User Menu", 1, "mod-user-icon", 3, "matMenuTriggerFor"], ["mat-icon-button", "", "aria-label", "User Menu", 1, "mat-icon-button", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"]], template: function ModUserDisplayComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, ModUserDisplayComponent_div_0_Template, 10, 4, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.user);
    } }, directives: [i3.NgIf, i4._MatMenu, i3.NgForOf, i5.MatButton, i4.MatMenuTrigger, i6.MatIcon, i4.MatMenuItem], styles: [".delete-potentially-circle-user-icon[_ngcontent-%COMP%]{border:2px solid inherit!important;border-radius:50%!important;padding:5px!important;margin-left:15px!important}.mat-button-base[_ngcontent-%COMP%]{height:auto;line-height:inherit}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModUserDisplayComponent, [{
        type: Component,
        args: [{
                selector: 'mod-user-display',
                templateUrl: './mod-user-display.component.html',
                styleUrls: ['./mod-user-display.component.scss']
            }]
    }], function () { return [{ type: i1.CurrentUserService }, { type: i2.ModFrameworkConfig, decorators: [{
                type: Inject,
                args: [ModConfig]
            }] }]; }, { showUser: [{
            type: Input
        }], selectOption: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kLXVzZXItZGlzcGxheS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tb2QtZnJhbWV3b3JrL3NyYy9saWIvY29tcG9uZW50cy9tb2QtdXNlci1kaXNwbGF5L21vZC11c2VyLWRpc3BsYXkuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbW9kLWZyYW1ld29yay9zcmMvbGliL2NvbXBvbmVudHMvbW9kLXVzZXItZGlzcGxheS9tb2QtdXNlci1kaXNwbGF5LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXZGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7Ozs7Ozs7O0lDQ3RELDZCQUE2QztJQUN6QyxpQ0FBZ0c7SUFDNUYsZ0NBQVU7SUFBQSw4QkFBYztJQUFBLGlCQUFXO0lBQ3ZDLGlCQUFTO0lBQ2IsMEJBQWU7Ozs7SUFIYSxlQUEwQjtJQUExQix1Q0FBMEI7OztJQUtsRCxpQ0FBa0c7SUFDOUYsZ0NBQVU7SUFBQSxtQ0FBbUI7SUFBQSxpQkFBVztJQUM1QyxpQkFBUzs7OztJQUZlLHVDQUEwQjs7OztJQUtsRCxpQ0FBaUc7SUFBakMsbVBBQWdDO0lBQUMsWUFBWTtJQUFBLGlCQUFTOzs7SUFBckIsZUFBWTtJQUFaLCtCQUFZOzs7SUFkckgsMkJBQWtCO0lBQ2QseUJBQ0E7SUFBQSwrQkFBa0M7SUFBQSxZQUFzQjtJQUFBLGlCQUFPO0lBQy9ELGdHQUllO0lBQ2YsK0hBSWM7SUFDZCx5Q0FBMEI7SUFDdEIsb0ZBQXNIO0lBQzFILGlCQUFXO0lBQ2YsaUJBQU07Ozs7SUFkZ0MsZUFBc0I7SUFBdEIsNkNBQXNCO0lBQ3pDLGVBQWU7SUFBZixzQ0FBZSxpQkFBQTtJQVdlLGVBQXFCO0lBQXJCLG1EQUFxQjs7QURKdEUsTUFBTSxPQUFPLHVCQUF1QjtJQVdoQyxZQUFvQixXQUErQixFQUFxQixNQUEwQjtRQUE5RSxnQkFBVyxHQUFYLFdBQVcsQ0FBb0I7UUFSbkQsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUcxQixpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFNdEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCxRQUFRO0lBRVIsQ0FBQztJQUVELElBQUksSUFBSTtRQUNKLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7SUFDakMsQ0FBQztJQUVNLGNBQWMsQ0FBQyxNQUFjO1FBQ2hDLElBQUksTUFBTSxJQUFJLGNBQWMsRUFBRTtZQUMxQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFBO1NBQ2hEO2FBQ0k7WUFDRCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNsQztJQUNMLENBQUM7OzhGQS9CUSx1QkFBdUIsb0VBVzZCLFNBQVM7NERBWDdELHVCQUF1QjtRQ1ZwQyx5RUFnQk07O1FBaEJBLCtCQUFVOzt1RkRVSCx1QkFBdUI7Y0FMbkMsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFdBQVcsRUFBRSxtQ0FBbUM7Z0JBQ2hELFNBQVMsRUFBRSxDQUFDLG1DQUFtQyxDQUFDO2FBQ25EOztzQkFZeUQsTUFBTTt1QkFBQyxTQUFTO3dCQVJ0RSxRQUFRO2tCQURQLEtBQUs7WUFJTixZQUFZO2tCQURYLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEN1cnJlbnRVc2VyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2N1cnJlbnQtdXNlci5zZXJ2aWNlJztcbmltcG9ydCB7IE1vZENvbmZpZyB9IGZyb20gJy4uLy4uL3N0YXRpYy9tb2QtY29uZmlnLmNvbnN0JztcclxuaW1wb3J0IHsgTW9kRnJhbWV3b3JrQ29uZmlnIH0gZnJvbSAnLi4vLi4vbW9kZWxzL21vZC1mcmFtZXdvcmstY29uZmlnLm1vZGVsJztcclxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ21vZC11c2VyLWRpc3BsYXknLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9tb2QtdXNlci1kaXNwbGF5LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9tb2QtdXNlci1kaXNwbGF5LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTW9kVXNlckRpc3BsYXlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQElucHV0KClcbiAgICBzaG93VXNlcjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgQE91dHB1dCgpXG4gICAgc2VsZWN0T3B0aW9uID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cblxuICAgIHB1YmxpYyBjb25maWc6IE1vZEZyYW1ld29ya0NvbmZpZztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdXNlclNlcnZpY2U6IEN1cnJlbnRVc2VyU2VydmljZSwgQEluamVjdChNb2RDb25maWcpIGNvbmZpZzogTW9kRnJhbWV3b3JrQ29uZmlnKSB7XG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgICAgICB0aGlzLmNvbmZpZy51c2VyT3B0aW9ucy5wdXNoKCdVc2VyIFByb2ZpbGUnKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgZ2V0IHVzZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVzZXJTZXJ2aWNlLnVzZXI7XG4gICAgfVxuXG4gICAgcHVibGljIG9wdGlvblNlbGVjdGVkKG9wdGlvbjogc3RyaW5nKSB7XG4gICAgICAgIGlmIChvcHRpb24gPT0gXCJVc2VyIFByb2ZpbGVcIikge1xyXG4gICAgICAgICAgICB3aW5kb3cub3Blbih0aGlzLmNvbmZpZy5wcm9maWxlVXJsLCAnX2JsYW5rJylcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0T3B0aW9uLmVtaXQob3B0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICB9XG59XG4iLCI8ZGl2ICpuZ0lmPVwidXNlclwiPlxyXG4gICAgV2VsY29tZSBcclxuICAgIDxzcGFuIHN0eWxlPVwicGFkZGluZy1yaWdodDogNXB4O1wiPnt7IHVzZXIuZGlzcGxheU5hbWUgfX08L3NwYW4+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwic2hvd1VzZXI7ZWxzZSBzaG93TWVudVwiPlxyXG4gICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIFttYXRNZW51VHJpZ2dlckZvcl09XCJtZW51XCIgY2xhc3M9XCJtb2QtdXNlci1pY29uXCIgYXJpYS1sYWJlbD1cIlVzZXIgTWVudVwiPlxyXG4gICAgICAgICAgICA8bWF0LWljb24+YWNjb3VudF9jaXJjbGU8L21hdC1pY29uPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8bmctdGVtcGxhdGUgI3Nob3dNZW51PlxyXG4gICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIFttYXRNZW51VHJpZ2dlckZvcl09XCJtZW51XCIgY2xhc3M9XCJtYXQtaWNvbi1idXR0b25cIiBhcmlhLWxhYmVsPVwiVXNlciBNZW51XCI+XHJcbiAgICAgICAgICAgIDxtYXQtaWNvbj5rZXlib2FyZF9hcnJvd19kb3duPC9tYXQtaWNvbj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICA8bWF0LW1lbnUgI21lbnU9XCJtYXRNZW51XCI+XHJcbiAgICAgICAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgY29uZmlnLnVzZXJPcHRpb25zXCIgKGNsaWNrKT1cIm9wdGlvblNlbGVjdGVkKG9wdGlvbilcIj57eyBvcHRpb24gfX08L2J1dHRvbj5cclxuICAgIDwvbWF0LW1lbnU+XHJcbjwvZGl2PlxyXG4iXX0=