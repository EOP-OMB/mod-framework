import { Component, Input, Output, EventEmitter, Inject } from '@angular/core';
import { ModConfig } from '../../static/mod-config.const';
import * as i0 from "@angular/core";
import * as i1 from "../../services/current-user.service";
import * as i2 from "@angular/common";
import * as i3 from "@angular/material/menu";
import * as i4 from "@angular/material/button";
import * as i5 from "@angular/material/icon";
import * as i6 from "../../models/mod-framework-config.model";
function ModUserDisplayComponent_div_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "button", 6);
    i0.ɵɵelementStart(2, "mat-icon");
    i0.ɵɵtext(3, "account_circle");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r4 = i0.ɵɵreference(7);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matMenuTriggerFor", _r4);
} }
function ModUserDisplayComponent_div_0_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 7);
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2, "keyboard_arrow_down");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r4 = i0.ɵɵreference(7);
    i0.ɵɵproperty("matMenuTriggerFor", _r4);
} }
function ModUserDisplayComponent_div_0_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 8);
    i0.ɵɵlistener("click", function ModUserDisplayComponent_div_0_button_8_Template_button_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r8); const option_r6 = restoredCtx.$implicit; const ctx_r7 = i0.ɵɵnextContext(2); return ctx_r7.optionSelected(option_r6); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r6 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(option_r6);
} }
function ModUserDisplayComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "span", 1);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, ModUserDisplayComponent_div_0_ng_container_3_Template, 4, 1, "ng-container", 2);
    i0.ɵɵtemplate(4, ModUserDisplayComponent_div_0_ng_template_4_Template, 3, 1, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementStart(6, "mat-menu", null, 4);
    i0.ɵɵtemplate(8, ModUserDisplayComponent_div_0_button_8_Template, 2, 1, "button", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
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
ModUserDisplayComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ModUserDisplayComponent, selectors: [["mod-user-display"]], inputs: { showUser: "showUser" }, outputs: { selectOption: "selectOption" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [2, "padding-right", "5px"], [4, "ngIf", "ngIfElse"], ["showMenu", ""], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["mat-icon-button", "", "aria-label", "User Menu", 1, "mod-user-icon", 3, "matMenuTriggerFor"], ["mat-icon-button", "", "aria-label", "User Menu", 1, "mat-icon-button", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"]], template: function ModUserDisplayComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, ModUserDisplayComponent_div_0_Template, 9, 4, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.user);
    } }, directives: [i2.NgIf, i3.MatMenu, i2.NgForOf, i4.MatButton, i3.MatMenuTrigger, i5.MatIcon, i3.MatMenuItem], styles: [".delete-potentially-circle-user-icon[_ngcontent-%COMP%]{border:2px solid!important;border-color:inherit!important;border-radius:50%!important;padding:5px!important;margin-left:15px!important}.mat-button-base[_ngcontent-%COMP%]{height:auto;line-height:inherit}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModUserDisplayComponent, [{
        type: Component,
        args: [{
                selector: 'mod-user-display',
                templateUrl: './mod-user-display.component.html',
                styleUrls: ['./mod-user-display.component.scss']
            }]
    }], function () { return [{ type: i1.CurrentUserService }, { type: i6.ModFrameworkConfig, decorators: [{
                type: Inject,
                args: [ModConfig]
            }] }]; }, { showUser: [{
            type: Input
        }], selectOption: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kLXVzZXItZGlzcGxheS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tb2QtZnJhbWV3b3JrL3NyYy9saWIvY29tcG9uZW50cy9tb2QtdXNlci1kaXNwbGF5L21vZC11c2VyLWRpc3BsYXkuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbW9kLWZyYW1ld29yay9zcmMvbGliL2NvbXBvbmVudHMvbW9kLXVzZXItZGlzcGxheS9tb2QtdXNlci1kaXNwbGF5LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXZGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7Ozs7Ozs7O0lDQXRELDZCQUE2QztJQUN6QyxpQ0FBZ0c7SUFDNUYsZ0NBQVU7SUFBQSw4QkFBYztJQUFBLGlCQUFXO0lBQ3ZDLGlCQUFTO0lBQ2IsMEJBQWU7Ozs7SUFIYSxlQUEwQjtJQUExQix1Q0FBMEI7OztJQUtsRCxpQ0FBa0c7SUFDOUYsZ0NBQVU7SUFBQSxtQ0FBbUI7SUFBQSxpQkFBVztJQUM1QyxpQkFBUzs7OztJQUZlLHVDQUEwQjs7OztJQUtsRCxpQ0FBaUc7SUFBakMsK1FBQWdDO0lBQUMsWUFBWTtJQUFBLGlCQUFTOzs7SUFBckIsZUFBWTtJQUFaLCtCQUFZOzs7SUFickgsMkJBQWtCO0lBQ2QsK0JBQWtDO0lBQUEsWUFBc0I7SUFBQSxpQkFBTztJQUMvRCxnR0FJZTtJQUNmLCtIQUljO0lBQ2QseUNBQTBCO0lBQ3RCLG9GQUFzSDtJQUMxSCxpQkFBVztJQUNmLGlCQUFNOzs7O0lBZGdDLGVBQXNCO0lBQXRCLDZDQUFzQjtJQUN6QyxlQUFlO0lBQWYsc0NBQWUsaUJBQUE7SUFXZSxlQUFxQjtJQUFyQixtREFBcUI7O0FESHRFLE1BQU0sT0FBTyx1QkFBdUI7SUFXaEMsWUFBb0IsV0FBK0IsRUFBcUIsTUFBMEI7UUFBOUUsZ0JBQVcsR0FBWCxXQUFXLENBQW9CO1FBUm5ELGFBQVEsR0FBWSxLQUFLLENBQUM7UUFHMUIsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBTXRDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsUUFBUTtJQUVSLENBQUM7SUFFRCxJQUFJLElBQUk7UUFDSixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO0lBQ2pDLENBQUM7SUFFTSxjQUFjLENBQUMsTUFBYztRQUNoQyxJQUFJLE1BQU0sSUFBSSxjQUFjLEVBQUU7WUFDMUIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQTtTQUNoRDthQUNJO1lBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDbEM7SUFDTCxDQUFDOzs4RkEvQlEsdUJBQXVCLG9FQVc2QixTQUFTOzBFQVg3RCx1QkFBdUI7UUNWcEMsd0VBZU07O1FBZkEsK0JBQVU7O3VGRFVILHVCQUF1QjtjQUxuQyxTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsV0FBVyxFQUFFLG1DQUFtQztnQkFDaEQsU0FBUyxFQUFFLENBQUMsbUNBQW1DLENBQUM7YUFDbkQ7O3NCQVl5RCxNQUFNO3VCQUFDLFNBQVM7d0JBUnRFLFFBQVE7a0JBRFAsS0FBSztZQUlOLFlBQVk7a0JBRFgsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ3VycmVudFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY3VycmVudC11c2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgTW9kQ29uZmlnIH0gZnJvbSAnLi4vLi4vc3RhdGljL21vZC1jb25maWcuY29uc3QnO1xyXG5pbXBvcnQgeyBNb2RGcmFtZXdvcmtDb25maWcgfSBmcm9tICcuLi8uLi9tb2RlbHMvbW9kLWZyYW1ld29yay1jb25maWcubW9kZWwnO1xyXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbW9kLXVzZXItZGlzcGxheScsXG4gICAgdGVtcGxhdGVVcmw6ICcuL21vZC11c2VyLWRpc3BsYXkuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL21vZC11c2VyLWRpc3BsYXkuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNb2RVc2VyRGlzcGxheUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBASW5wdXQoKVxuICAgIHNob3dVc2VyOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBAT3V0cHV0KClcbiAgICBzZWxlY3RPcHRpb24gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuXG4gICAgcHVibGljIGNvbmZpZzogTW9kRnJhbWV3b3JrQ29uZmlnO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB1c2VyU2VydmljZTogQ3VycmVudFVzZXJTZXJ2aWNlLCBASW5qZWN0KE1vZENvbmZpZykgY29uZmlnOiBNb2RGcmFtZXdvcmtDb25maWcpIHtcbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gICAgICAgIHRoaXMuY29uZmlnLnVzZXJPcHRpb25zLnB1c2goJ1VzZXIgUHJvZmlsZScpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBcbiAgICB9XG5cbiAgICBnZXQgdXNlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXNlclNlcnZpY2UudXNlcjtcbiAgICB9XG5cbiAgICBwdWJsaWMgb3B0aW9uU2VsZWN0ZWQob3B0aW9uOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKG9wdGlvbiA9PSBcIlVzZXIgUHJvZmlsZVwiKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5vcGVuKHRoaXMuY29uZmlnLnByb2ZpbGVVcmwsICdfYmxhbmsnKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RPcHRpb24uZW1pdChvcHRpb24pO1xyXG4gICAgICAgIH1cclxuICAgIH1cbn1cbiIsIjxkaXYgKm5nSWY9XCJ1c2VyXCI+XHJcbiAgICA8c3BhbiBzdHlsZT1cInBhZGRpbmctcmlnaHQ6IDVweDtcIj57eyB1c2VyLmRpc3BsYXlOYW1lIH19PC9zcGFuPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInNob3dVc2VyO2Vsc2Ugc2hvd01lbnVcIj5cclxuICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBbbWF0TWVudVRyaWdnZXJGb3JdPVwibWVudVwiIGNsYXNzPVwibW9kLXVzZXItaWNvblwiIGFyaWEtbGFiZWw9XCJVc2VyIE1lbnVcIj5cclxuICAgICAgICAgICAgPG1hdC1pY29uPmFjY291bnRfY2lyY2xlPC9tYXQtaWNvbj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPG5nLXRlbXBsYXRlICNzaG93TWVudT5cclxuICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBbbWF0TWVudVRyaWdnZXJGb3JdPVwibWVudVwiIGNsYXNzPVwibWF0LWljb24tYnV0dG9uXCIgYXJpYS1sYWJlbD1cIlVzZXIgTWVudVwiPlxyXG4gICAgICAgICAgICA8bWF0LWljb24+a2V5Ym9hcmRfYXJyb3dfZG93bjwvbWF0LWljb24+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgPG1hdC1tZW51ICNtZW51PVwibWF0TWVudVwiPlxyXG4gICAgICAgIDxidXR0b24gbWF0LW1lbnUtaXRlbSAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIGNvbmZpZy51c2VyT3B0aW9uc1wiIChjbGljayk9XCJvcHRpb25TZWxlY3RlZChvcHRpb24pXCI+e3sgb3B0aW9uIH19PC9idXR0b24+XHJcbiAgICA8L21hdC1tZW51PlxyXG48L2Rpdj5cclxuIl19