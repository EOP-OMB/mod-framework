import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/progress-spinner";
function ModProgressSpinnerComponent_ng_container_0_ng_template_3_Template(rf, ctx) { }
function ModProgressSpinnerComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 2)(2, "div", 3);
    i0.ɵɵtemplate(3, ModProgressSpinnerComponent_ng_container_0_ng_template_3_Template, 0, 0, "ng-template", 4);
    i0.ɵɵelementEnd()();
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
class ModProgressSpinnerComponent {
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
    static { this.ɵfac = function ModProgressSpinnerComponent_Factory(t) { return new (t || ModProgressSpinnerComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ModProgressSpinnerComponent, selectors: [["mod-progress-spinner"]], inputs: { value: "value", diameter: "diameter", mode: "mode", strokeWidth: "strokeWidth", overlay: "overlay", color: "color" }, decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["progressSpinner", ""], [1, "overlay"], [1, "center"], [3, "ngTemplateOutlet"], [3, "diameter", "mode", "color", "strokeWidth", "value"]], template: function ModProgressSpinnerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, ModProgressSpinnerComponent_ng_container_0_Template, 4, 1, "ng-container", 0);
            i0.ɵɵtemplate(1, ModProgressSpinnerComponent_ng_template_1_Template, 1, 5, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            const _r1 = i0.ɵɵreference(2);
            i0.ɵɵproperty("ngIf", ctx.overlay)("ngIfElse", _r1);
        } }, dependencies: [i1.NgIf, i1.NgTemplateOutlet, i2.MatProgressSpinner], styles: [".center[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%) translateY(-50%)}.overlay[_ngcontent-%COMP%]{height:100vh;width:100%;background-color:#00000049;z-index:10;top:0;left:0;position:fixed}"] }); }
}
export { ModProgressSpinnerComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModProgressSpinnerComponent, [{
        type: Component,
        args: [{ selector: 'mod-progress-spinner', template: "<ng-container *ngIf=\"overlay;else progressSpinner\">\r\n    <div class=\"overlay\">\r\n        <div class=\"center\">\r\n            <ng-template [ngTemplateOutlet]=\"progressSpinner\"></ng-template>\r\n        </div>\r\n    </div>\r\n</ng-container>\r\n<ng-template #progressSpinner>\r\n    <mat-progress-spinner [diameter]=\"diameter\"\r\n                          [mode]=\"mode\"\r\n                          [color]=\"color\"\r\n                          [strokeWidth]=\"strokeWidth\"\r\n                          [value]=\"value\">\r\n    </mat-progress-spinner>\r\n</ng-template>\r\n", styles: [".center{position:absolute;top:50%;left:50%;transform:translate(-50%) translateY(-50%)}.overlay{height:100vh;width:100%;background-color:#00000049;z-index:10;top:0;left:0;position:fixed}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kLXByb2dyZXNzLXNwaW5uZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbW9kLWZyYW1ld29yay9zcmMvbGliL2NvbXBvbmVudHMvbW9kLXByb2dyZXNzLXNwaW5uZXIvbW9kLXByb2dyZXNzLXNwaW5uZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbW9kLWZyYW1ld29yay9zcmMvbGliL2NvbXBvbmVudHMvbW9kLXByb2dyZXNzLXNwaW5uZXIvbW9kLXByb2dyZXNzLXNwaW5uZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7OztJQ0F6RCw2QkFBbUQ7SUFDL0MsOEJBQXFCLGFBQUE7SUFFYiwyR0FBZ0U7SUFDcEUsaUJBQU0sRUFBQTtJQUVkLDBCQUFlOzs7O0lBSFUsZUFBb0M7SUFBcEMsc0NBQW9DOzs7SUFLekQsMENBS3VCOzs7SUFMRCwwQ0FBcUIscUJBQUEsdUJBQUEsbUNBQUEsdUJBQUE7O0FETi9DLE1BS2EsMkJBQTJCO0lBU3BDO1FBUFMsVUFBSyxHQUFXLEdBQUcsQ0FBQztRQUNwQixhQUFRLEdBQVcsR0FBRyxDQUFDO1FBQ3ZCLFNBQUksR0FBVyxlQUFlLENBQUM7UUFDL0IsZ0JBQVcsR0FBVyxFQUFFLENBQUM7UUFDekIsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUN6QixVQUFLLEdBQVcsU0FBUyxDQUFDO0lBRW5CLENBQUM7SUFFakIsUUFBUTtJQUNSLENBQUM7NEZBWlEsMkJBQTJCO29FQUEzQiwyQkFBMkI7WUNQeEMsOEZBTWU7WUFDZiw2SEFPYzs7O1lBZEMsa0NBQWMsaUJBQUE7OztTRE9oQiwyQkFBMkI7dUZBQTNCLDJCQUEyQjtjQUx2QyxTQUFTOzJCQUNJLHNCQUFzQjtzQ0FNdkIsS0FBSztrQkFBYixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdtb2QtcHJvZ3Jlc3Mtc3Bpbm5lcicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL21vZC1wcm9ncmVzcy1zcGlubmVyLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9tb2QtcHJvZ3Jlc3Mtc3Bpbm5lci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE1vZFByb2dyZXNzU3Bpbm5lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBASW5wdXQoKSB2YWx1ZTogbnVtYmVyID0gMTAwO1xuICAgIEBJbnB1dCgpIGRpYW1ldGVyOiBudW1iZXIgPSAxMDA7XG4gICAgQElucHV0KCkgbW9kZTogc3RyaW5nID0gXCJpbmRldGVybWluYXRlXCI7XG4gICAgQElucHV0KCkgc3Ryb2tlV2lkdGg6IG51bWJlciA9IDEwO1xuICAgIEBJbnB1dCgpIG92ZXJsYXk6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSBjb2xvcjogc3RyaW5nID0gXCJwcmltYXJ5XCI7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgfVxuXG59XG4iLCI8bmctY29udGFpbmVyICpuZ0lmPVwib3ZlcmxheTtlbHNlIHByb2dyZXNzU3Bpbm5lclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cIm92ZXJsYXlcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJwcm9ncmVzc1NwaW5uZXJcIj48L25nLXRlbXBsYXRlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvbmctY29udGFpbmVyPlxyXG48bmctdGVtcGxhdGUgI3Byb2dyZXNzU3Bpbm5lcj5cclxuICAgIDxtYXQtcHJvZ3Jlc3Mtc3Bpbm5lciBbZGlhbWV0ZXJdPVwiZGlhbWV0ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFttb2RlXT1cIm1vZGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtjb2xvcl09XCJjb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW3N0cm9rZVdpZHRoXT1cInN0cm9rZVdpZHRoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBbdmFsdWVdPVwidmFsdWVcIj5cclxuICAgIDwvbWF0LXByb2dyZXNzLXNwaW5uZXI+XHJcbjwvbmctdGVtcGxhdGU+XHJcbiJdfQ==