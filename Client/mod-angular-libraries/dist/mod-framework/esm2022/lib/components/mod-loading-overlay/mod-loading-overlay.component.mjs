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
class ModLoadingOverlayComponent {
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
    static { this.ɵfac = function ModLoadingOverlayComponent_Factory(t) { return new (t || ModLoadingOverlayComponent)(i0.ɵɵdirectiveInject(i1.LoadingService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ModLoadingOverlayComponent, selectors: [["mod-loading-overlay"]], decls: 1, vars: 1, consts: [[3, "overlay", 4, "ngIf"], [3, "overlay"]], template: function ModLoadingOverlayComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, ModLoadingOverlayComponent_mod_progress_spinner_0_Template, 1, 1, "mod-progress-spinner", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.showProgressSpinner);
        } }, dependencies: [i2.NgIf, i3.ModProgressSpinnerComponent] }); }
}
export { ModLoadingOverlayComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModLoadingOverlayComponent, [{
        type: Component,
        args: [{ selector: 'mod-loading-overlay', template: "<mod-progress-spinner *ngIf=\"showProgressSpinner\" [overlay]=\"true\"></mod-progress-spinner>\r\n" }]
    }], function () { return [{ type: i1.LoadingService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kLWxvYWRpbmctb3ZlcmxheS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tb2QtZnJhbWV3b3JrL3NyYy9saWIvY29tcG9uZW50cy9tb2QtbG9hZGluZy1vdmVybGF5L21vZC1sb2FkaW5nLW92ZXJsYXkuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbW9kLWZyYW1ld29yay9zcmMvbGliL2NvbXBvbmVudHMvbW9kLWxvYWRpbmctb3ZlcmxheS9tb2QtbG9hZGluZy1vdmVybGF5LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7Ozs7OztJQ0FsRCwwQ0FBMEY7O0lBQXhDLDhCQUFnQjs7QURHbEUsTUFLYSwwQkFBMEI7SUFJbkMsWUFBb0IsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBRjNDLHdCQUFtQixHQUFZLEtBQUssQ0FBQztRQUd4QyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUNsRCxJQUFJLFNBQVMsRUFBRTtnQkFDWCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDO2FBQ25DO2lCQUNJO2dCQUNELElBQUksQ0FBQyxtQkFBbUIsR0FBRyxLQUFLLENBQUM7YUFDcEM7UUFDTCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFDRCxRQUFRO0lBQ1IsQ0FBQzsyRkFmUSwwQkFBMEI7b0VBQTFCLDBCQUEwQjtZQ1J2Qyw2R0FBMEY7O1lBQW5FLDhDQUF5Qjs7O1NEUW5DLDBCQUEwQjt1RkFBMUIsMEJBQTBCO2NBTHRDLFNBQVM7MkJBQ0kscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExvYWRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbG9hZGluZy5zZXJ2aWNlJztcclxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ21vZC1sb2FkaW5nLW92ZXJsYXknLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9tb2QtbG9hZGluZy1vdmVybGF5LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9tb2QtbG9hZGluZy1vdmVybGF5LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTW9kTG9hZGluZ092ZXJsYXlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgcHVibGljIHNob3dQcm9ncmVzc1NwaW5uZXI6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9hZGluZ1NlcnZpY2U6IExvYWRpbmdTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMubG9hZGluZ1NlcnZpY2UuaXNMb2FkaW5nLnN1YnNjcmliZSgoaXNMb2FkaW5nKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXNMb2FkaW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93UHJvZ3Jlc3NTcGlubmVyID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1Byb2dyZXNzU3Bpbm5lciA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB9XG5cbn1cbiIsIjxtb2QtcHJvZ3Jlc3Mtc3Bpbm5lciAqbmdJZj1cInNob3dQcm9ncmVzc1NwaW5uZXJcIiBbb3ZlcmxheV09XCJ0cnVlXCI+PC9tb2QtcHJvZ3Jlc3Mtc3Bpbm5lcj5cclxuIl19