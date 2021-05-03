import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../services/loading.service";
import * as i2 from "@angular/common";
import * as i3 from "../mod-progress-spinner/mod-progress-spinner.component";
function ModLoadingOverlayComponent_mod_progress_spinner_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mod-progress-spinner", 1);
} if (rf & 2) {
    i0.ɵɵproperty("overlay", true);
} }
export class ModLoadingOverlayComponent {
    constructor(loadingService) {
        this.loadingService = loadingService;
        this.showProgressSpinner = false;
        this.loadingService.isLoading.subscribe((isLoading) => {
            if (isLoading) {
                this.showProgressSpinner = true;
            }
            else {
                this.showProgressSpinner = false;
            }
        });
    }
    ngOnInit() {
    }
}
ModLoadingOverlayComponent.ɵfac = function ModLoadingOverlayComponent_Factory(t) { return new (t || ModLoadingOverlayComponent)(i0.ɵɵdirectiveInject(i1.LoadingService)); };
ModLoadingOverlayComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ModLoadingOverlayComponent, selectors: [["mod-loading-overlay"]], decls: 1, vars: 1, consts: [[3, "overlay", 4, "ngIf"], [3, "overlay"]], template: function ModLoadingOverlayComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, ModLoadingOverlayComponent_mod_progress_spinner_0_Template, 1, 1, "mod-progress-spinner", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.showProgressSpinner);
    } }, directives: [i2.NgIf, i3.ModProgressSpinnerComponent], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ModLoadingOverlayComponent, [{
        type: Component,
        args: [{
                selector: 'mod-loading-overlay',
                templateUrl: './mod-loading-overlay.component.html',
                styleUrls: ['./mod-loading-overlay.component.scss']
            }]
    }], function () { return [{ type: i1.LoadingService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kLWxvYWRpbmctb3ZlcmxheS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tb2QtZnJhbWV3b3JrL3NyYy9saWIvY29tcG9uZW50cy9tb2QtbG9hZGluZy1vdmVybGF5L21vZC1sb2FkaW5nLW92ZXJsYXkuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbW9kLWZyYW1ld29yay9zcmMvbGliL2NvbXBvbmVudHMvbW9kLWxvYWRpbmctb3ZlcmxheS9tb2QtbG9hZGluZy1vdmVybGF5LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7Ozs7OztJQ0FsRCwwQ0FBMEY7O0lBQXhDLDhCQUFnQjs7QURRbEUsTUFBTSxPQUFPLDBCQUEwQjtJQUluQyxZQUFvQixjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFGM0Msd0JBQW1CLEdBQVksS0FBSyxDQUFDO1FBR3hDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQ2xELElBQUksU0FBUyxFQUFFO2dCQUNYLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUM7YUFDbkM7aUJBQ0k7Z0JBQ0QsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEtBQUssQ0FBQzthQUNwQztRQUNMLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUNELFFBQVE7SUFDUixDQUFDOztvR0FmUSwwQkFBMEI7K0RBQTFCLDBCQUEwQjtRQ1J2Qyw2R0FBbUU7O1FBQTdDLDhDQUEyQjs7a0REUXBDLDBCQUEwQjtjQUx0QyxTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsV0FBVyxFQUFFLHNDQUFzQztnQkFDbkQsU0FBUyxFQUFFLENBQUMsc0NBQXNDLENBQUM7YUFDdEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTG9hZGluZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9sb2FkaW5nLnNlcnZpY2UnO1xyXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbW9kLWxvYWRpbmctb3ZlcmxheScsXG4gICAgdGVtcGxhdGVVcmw6ICcuL21vZC1sb2FkaW5nLW92ZXJsYXkuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL21vZC1sb2FkaW5nLW92ZXJsYXkuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNb2RMb2FkaW5nT3ZlcmxheUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBwdWJsaWMgc2hvd1Byb2dyZXNzU3Bpbm5lcjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBsb2FkaW5nU2VydmljZTogTG9hZGluZ1NlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nU2VydmljZS5pc0xvYWRpbmcuc3Vic2NyaWJlKChpc0xvYWRpbmcpID0+IHtcbiAgICAgICAgICAgIGlmIChpc0xvYWRpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dQcm9ncmVzc1NwaW5uZXIgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93UHJvZ3Jlc3NTcGlubmVyID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIH1cblxufVxuIiwiPG1vZC1wcm9ncmVzcy1zcGlubmVyICpuZ0lmPVwic2hvd1Byb2dyZXNzU3Bpbm5lclwiIFtvdmVybGF5XT1cInRydWVcIj48L21vZC1wcm9ncmVzcy1zcGlubmVyPlxyXG4iXX0=