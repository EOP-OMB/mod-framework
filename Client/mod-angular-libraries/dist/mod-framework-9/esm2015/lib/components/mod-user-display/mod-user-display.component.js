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
    } }, directives: [i3.NgIf, i4._MatMenu, i3.NgForOf, i5.MatButton, i4.MatMenuTrigger, i6.MatIcon, i4.MatMenuItem], styles: [".delete-potentially-circle-user-icon[_ngcontent-%COMP%]{border:2px solid inherit!important;border-radius:50%!important;margin-left:15px!important;padding:5px!important}.mat-button-base[_ngcontent-%COMP%]{height:auto;line-height:inherit}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ModUserDisplayComponent, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kLXVzZXItZGlzcGxheS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tb2QtZnJhbWV3b3JrL3NyYy9saWIvY29tcG9uZW50cy9tb2QtdXNlci1kaXNwbGF5L21vZC11c2VyLWRpc3BsYXkuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbW9kLWZyYW1ld29yay9zcmMvbGliL2NvbXBvbmVudHMvbW9kLXVzZXItZGlzcGxheS9tb2QtdXNlci1kaXNwbGF5LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXZGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7Ozs7Ozs7O0lDQ3RELDZCQUNJO0lBQUEsaUNBQ0k7SUFBQSxnQ0FBVTtJQUFBLDhCQUFjO0lBQUEsaUJBQVc7SUFDdkMsaUJBQVM7SUFDYiwwQkFBZTs7OztJQUhhLGVBQTBCO0lBQTFCLHVDQUEwQjs7O0lBS2xELGlDQUNJO0lBQUEsZ0NBQVU7SUFBQSxtQ0FBbUI7SUFBQSxpQkFBVztJQUM1QyxpQkFBUzs7OztJQUZlLHVDQUEwQjs7OztJQUtsRCxpQ0FBaUc7SUFBakMsbVBBQWdDO0lBQUMsWUFBWTtJQUFBLGlCQUFTOzs7SUFBckIsZUFBWTtJQUFaLCtCQUFZOzs7SUFkckgsMkJBQ0k7SUFBQSx5QkFDQTtJQUFBLCtCQUFrQztJQUFBLFlBQXNCO0lBQUEsaUJBQU87SUFDL0QsZ0dBQ0k7SUFJSiwrSEFDSTtJQUlKLHlDQUNJO0lBQUEsb0ZBQWlHO0lBQ3JHLGlCQUFXO0lBQ2YsaUJBQU07Ozs7SUFkZ0MsZUFBc0I7SUFBdEIsNkNBQXNCO0lBQzFDLGVBQThCO0lBQTlCLHNDQUE4QixpQkFBQTtJQVdsQixlQUF5QztJQUF6QyxtREFBeUM7O0FESnZFLE1BQU0sT0FBTyx1QkFBdUI7SUFXaEMsWUFBb0IsV0FBK0IsRUFBcUIsTUFBMEI7UUFBOUUsZ0JBQVcsR0FBWCxXQUFXLENBQW9CO1FBUm5ELGFBQVEsR0FBWSxLQUFLLENBQUM7UUFHMUIsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBTXRDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsUUFBUTtJQUVSLENBQUM7SUFFRCxJQUFJLElBQUk7UUFDSixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO0lBQ2pDLENBQUM7SUFFTSxjQUFjLENBQUMsTUFBYztRQUNoQyxJQUFJLE1BQU0sSUFBSSxjQUFjLEVBQUU7WUFDMUIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQTtTQUNoRDthQUNJO1lBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDbEM7SUFDTCxDQUFDOzs4RkEvQlEsdUJBQXVCLG9FQVc2QixTQUFTOzREQVg3RCx1QkFBdUI7UUNWcEMseUVBQ0k7O1FBREMsK0JBQVk7O2tERFVKLHVCQUF1QjtjQUxuQyxTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsV0FBVyxFQUFFLG1DQUFtQztnQkFDaEQsU0FBUyxFQUFFLENBQUMsbUNBQW1DLENBQUM7YUFDbkQ7O3NCQVl5RCxNQUFNO3VCQUFDLFNBQVM7O2tCQVRyRSxLQUFLOztrQkFHTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDdXJyZW50VXNlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jdXJyZW50LXVzZXIuc2VydmljZSc7XG5pbXBvcnQgeyBNb2RDb25maWcgfSBmcm9tICcuLi8uLi9zdGF0aWMvbW9kLWNvbmZpZy5jb25zdCc7XHJcbmltcG9ydCB7IE1vZEZyYW1ld29ya0NvbmZpZyB9IGZyb20gJy4uLy4uL21vZGVscy9tb2QtZnJhbWV3b3JrLWNvbmZpZy5tb2RlbCc7XHJcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdtb2QtdXNlci1kaXNwbGF5JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbW9kLXVzZXItZGlzcGxheS5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vbW9kLXVzZXItZGlzcGxheS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE1vZFVzZXJEaXNwbGF5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIEBJbnB1dCgpXG4gICAgc2hvd1VzZXI6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIEBPdXRwdXQoKVxuICAgIHNlbGVjdE9wdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG5cbiAgICBwdWJsaWMgY29uZmlnOiBNb2RGcmFtZXdvcmtDb25maWc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHVzZXJTZXJ2aWNlOiBDdXJyZW50VXNlclNlcnZpY2UsIEBJbmplY3QoTW9kQ29uZmlnKSBjb25maWc6IE1vZEZyYW1ld29ya0NvbmZpZykge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgICAgICAgdGhpcy5jb25maWcudXNlck9wdGlvbnMucHVzaCgnVXNlciBQcm9maWxlJyk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIFxuICAgIH1cblxuICAgIGdldCB1c2VyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51c2VyU2VydmljZS51c2VyO1xuICAgIH1cblxuICAgIHB1YmxpYyBvcHRpb25TZWxlY3RlZChvcHRpb246IHN0cmluZykge1xuICAgICAgICBpZiAob3B0aW9uID09IFwiVXNlciBQcm9maWxlXCIpIHtcclxuICAgICAgICAgICAgd2luZG93Lm9wZW4odGhpcy5jb25maWcucHJvZmlsZVVybCwgJ19ibGFuaycpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdE9wdGlvbi5lbWl0KG9wdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxufVxuIiwiPGRpdiAqbmdJZj1cInVzZXJcIj5cclxuICAgIFdlbGNvbWUgXHJcbiAgICA8c3BhbiBzdHlsZT1cInBhZGRpbmctcmlnaHQ6IDVweDtcIj57eyB1c2VyLmRpc3BsYXlOYW1lIH19PC9zcGFuPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInNob3dVc2VyO2Vsc2Ugc2hvd01lbnVcIj5cclxuICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBbbWF0TWVudVRyaWdnZXJGb3JdPVwibWVudVwiIGNsYXNzPVwibW9kLXVzZXItaWNvblwiIGFyaWEtbGFiZWw9XCJVc2VyIE1lbnVcIj5cclxuICAgICAgICAgICAgPG1hdC1pY29uPmFjY291bnRfY2lyY2xlPC9tYXQtaWNvbj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPG5nLXRlbXBsYXRlICNzaG93TWVudT5cclxuICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBbbWF0TWVudVRyaWdnZXJGb3JdPVwibWVudVwiIGNsYXNzPVwibWF0LWljb24tYnV0dG9uXCIgYXJpYS1sYWJlbD1cIlVzZXIgTWVudVwiPlxyXG4gICAgICAgICAgICA8bWF0LWljb24+a2V5Ym9hcmRfYXJyb3dfZG93bjwvbWF0LWljb24+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgPG1hdC1tZW51ICNtZW51PVwibWF0TWVudVwiPlxyXG4gICAgICAgIDxidXR0b24gbWF0LW1lbnUtaXRlbSAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIGNvbmZpZy51c2VyT3B0aW9uc1wiIChjbGljayk9XCJvcHRpb25TZWxlY3RlZChvcHRpb24pXCI+e3sgb3B0aW9uIH19PC9idXR0b24+XHJcbiAgICA8L21hdC1tZW51PlxyXG48L2Rpdj5cclxuIl19