import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/progress-spinner";
function ModProgressSpinnerComponent_ng_container_0_ng_template_3_Template(rf, ctx) { }
function ModProgressSpinnerComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 2);
    i0.ɵɵelementStart(2, "div", 3);
    i0.ɵɵtemplate(3, ModProgressSpinnerComponent_ng_container_0_ng_template_3_Template, 0, 0, "ng-template", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r1 = i0.ɵɵreference(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngTemplateOutlet", _r1);
} }
function ModProgressSpinnerComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mat-progress-spinner", 5);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("diameter", ctx_r2.diameter)("mode", ctx_r2.mode)("color", ctx_r2.color)("strokeWidth", ctx_r2.strokeWidth)("value", ctx_r2.value);
} }
export class ModProgressSpinnerComponent {
    constructor() {
        this.value = 100;
        this.diameter = 100;
        this.mode = "indeterminate";
        this.strokeWidth = 10;
        this.overlay = false;
        this.color = "primary";
    }
    ngOnInit() {
    }
}
ModProgressSpinnerComponent.ɵfac = function ModProgressSpinnerComponent_Factory(t) { return new (t || ModProgressSpinnerComponent)(); };
ModProgressSpinnerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ModProgressSpinnerComponent, selectors: [["mod-progress-spinner"]], inputs: { value: "value", diameter: "diameter", mode: "mode", strokeWidth: "strokeWidth", overlay: "overlay", color: "color" }, decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["progressSpinner", ""], [1, "overlay"], [1, "center"], [3, "ngTemplateOutlet"], [3, "diameter", "mode", "color", "strokeWidth", "value"]], template: function ModProgressSpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, ModProgressSpinnerComponent_ng_container_0_Template, 4, 1, "ng-container", 0);
        i0.ɵɵtemplate(1, ModProgressSpinnerComponent_ng_template_1_Template, 1, 5, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(2);
        i0.ɵɵproperty("ngIf", ctx.overlay)("ngIfElse", _r1);
    } }, directives: [i1.NgIf, i1.NgTemplateOutlet, i2.MatProgressSpinner], styles: [".center[_ngcontent-%COMP%]{left:50%;position:absolute;top:50%;transform:translateX(-50%) translateY(-50%)}.overlay[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.286);height:100vh;left:0;position:fixed;top:0;width:100%;z-index:10}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ModProgressSpinnerComponent, [{
        type: Component,
        args: [{
                selector: 'mod-progress-spinner',
                templateUrl: './mod-progress-spinner.component.html',
                styleUrls: ['./mod-progress-spinner.component.scss']
            }]
    }], function () { return []; }, { value: [{
            type: Input
        }], diameter: [{
            type: Input
        }], mode: [{
            type: Input
        }], strokeWidth: [{
            type: Input
        }], overlay: [{
            type: Input
        }], color: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kLXByb2dyZXNzLXNwaW5uZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbW9kLWZyYW1ld29yay9zcmMvbGliL2NvbXBvbmVudHMvbW9kLXByb2dyZXNzLXNwaW5uZXIvbW9kLXByb2dyZXNzLXNwaW5uZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbW9kLWZyYW1ld29yay9zcmMvbGliL2NvbXBvbmVudHMvbW9kLXByb2dyZXNzLXNwaW5uZXIvbW9kLXByb2dyZXNzLXNwaW5uZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7OztJQ0F6RCw2QkFDSTtJQUFBLDhCQUNJO0lBQUEsOEJBQ0k7SUFBQSwyR0FBa0Q7SUFDdEQsaUJBQU07SUFDVixpQkFBTTtJQUNWLDBCQUFlOzs7O0lBSFUsZUFBb0M7SUFBcEMsc0NBQW9DOzs7SUFLekQsMENBS3VCOzs7SUFMRCwwQ0FBcUIscUJBQUEsdUJBQUEsbUNBQUEsdUJBQUE7O0FERC9DLE1BQU0sT0FBTywyQkFBMkI7SUFTcEM7UUFQUyxVQUFLLEdBQVcsR0FBRyxDQUFDO1FBQ3BCLGFBQVEsR0FBVyxHQUFHLENBQUM7UUFDdkIsU0FBSSxHQUFXLGVBQWUsQ0FBQztRQUMvQixnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUN6QixZQUFPLEdBQVksS0FBSyxDQUFDO1FBQ3pCLFVBQUssR0FBVyxTQUFTLENBQUM7SUFFbkIsQ0FBQztJQUVqQixRQUFRO0lBQ1IsQ0FBQzs7c0dBWlEsMkJBQTJCO2dFQUEzQiwyQkFBMkI7UUNQeEMsOEZBQ0k7UUFNSiw2SEFDSTs7O1FBUlUsa0NBQW9DLGlCQUFBOztrRERPckMsMkJBQTJCO2NBTHZDLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxXQUFXLEVBQUUsdUNBQXVDO2dCQUNwRCxTQUFTLEVBQUUsQ0FBQyx1Q0FBdUMsQ0FBQzthQUN2RDs7a0JBR0ksS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ21vZC1wcm9ncmVzcy1zcGlubmVyJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbW9kLXByb2dyZXNzLXNwaW5uZXIuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL21vZC1wcm9ncmVzcy1zcGlubmVyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTW9kUHJvZ3Jlc3NTcGlubmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIEBJbnB1dCgpIHZhbHVlOiBudW1iZXIgPSAxMDA7XG4gICAgQElucHV0KCkgZGlhbWV0ZXI6IG51bWJlciA9IDEwMDtcbiAgICBASW5wdXQoKSBtb2RlOiBzdHJpbmcgPSBcImluZGV0ZXJtaW5hdGVcIjtcbiAgICBASW5wdXQoKSBzdHJva2VXaWR0aDogbnVtYmVyID0gMTA7XG4gICAgQElucHV0KCkgb3ZlcmxheTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmcgPSBcInByaW1hcnlcIjtcblxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB9XG5cbn1cbiIsIjxuZy1jb250YWluZXIgKm5nSWY9XCJvdmVybGF5O2Vsc2UgcHJvZ3Jlc3NTcGlubmVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwib3ZlcmxheVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInByb2dyZXNzU3Bpbm5lclwiPjwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC9uZy1jb250YWluZXI+XHJcbjxuZy10ZW1wbGF0ZSAjcHJvZ3Jlc3NTcGlubmVyPlxyXG4gICAgPG1hdC1wcm9ncmVzcy1zcGlubmVyIFtkaWFtZXRlcl09XCJkaWFtZXRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW21vZGVdPVwibW9kZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbG9yXT1cImNvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBbc3Ryb2tlV2lkdGhdPVwic3Ryb2tlV2lkdGhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJ2YWx1ZVwiPlxyXG4gICAgPC9tYXQtcHJvZ3Jlc3Mtc3Bpbm5lcj5cclxuPC9uZy10ZW1wbGF0ZT5cclxuIl19