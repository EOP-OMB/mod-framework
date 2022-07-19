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
ModLoadingOverlayComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ModLoadingOverlayComponent, selectors: [["mod-loading-overlay"]], decls: 1, vars: 1, consts: [[3, "overlay", 4, "ngIf"], [3, "overlay"]], template: function ModLoadingOverlayComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, ModLoadingOverlayComponent_mod_progress_spinner_0_Template, 1, 1, "mod-progress-spinner", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.showProgressSpinner);
    } }, directives: [i2.NgIf, i3.ModProgressSpinnerComponent], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModLoadingOverlayComponent, [{
        type: Component,
        args: [{ selector: 'mod-loading-overlay', template: "<mod-progress-spinner *ngIf=\"showProgressSpinner\" [overlay]=\"true\"></mod-progress-spinner>\r\n", styles: [""] }]
    }], function () { return [{ type: i1.LoadingService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kLWxvYWRpbmctb3ZlcmxheS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tb2QtZnJhbWV3b3JrL3NyYy9saWIvY29tcG9uZW50cy9tb2QtbG9hZGluZy1vdmVybGF5L21vZC1sb2FkaW5nLW92ZXJsYXkuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbW9kLWZyYW1ld29yay9zcmMvbGliL2NvbXBvbmVudHMvbW9kLWxvYWRpbmctb3ZlcmxheS9tb2QtbG9hZGluZy1vdmVybGF5LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7Ozs7OztJQ0FsRCwwQ0FBMEY7O0lBQXhDLDhCQUFnQjs7QURRbEUsTUFBTSxPQUFPLDBCQUEwQjtJQUluQyxZQUFvQixjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFGM0Msd0JBQW1CLEdBQVksS0FBSyxDQUFDO1FBR3hDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQ2xELElBQUksU0FBUyxFQUFFO2dCQUNYLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUM7YUFDbkM7aUJBQ0k7Z0JBQ0QsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEtBQUssQ0FBQzthQUNwQztRQUNMLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUNELFFBQVE7SUFDUixDQUFDOztvR0FmUSwwQkFBMEI7NkVBQTFCLDBCQUEwQjtRQ1J2Qyw2R0FBMEY7O1FBQW5FLDhDQUF5Qjs7dUZEUW5DLDBCQUEwQjtjQUx0QyxTQUFTOzJCQUNJLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMb2FkaW5nU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2xvYWRpbmcuc2VydmljZSc7XHJcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdtb2QtbG9hZGluZy1vdmVybGF5JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbW9kLWxvYWRpbmctb3ZlcmxheS5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vbW9kLWxvYWRpbmctb3ZlcmxheS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE1vZExvYWRpbmdPdmVybGF5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIHB1YmxpYyBzaG93UHJvZ3Jlc3NTcGlubmVyOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvYWRpbmdTZXJ2aWNlOiBMb2FkaW5nU2VydmljZSkge1xuICAgICAgICB0aGlzLmxvYWRpbmdTZXJ2aWNlLmlzTG9hZGluZy5zdWJzY3JpYmUoKGlzTG9hZGluZykgPT4ge1xuICAgICAgICAgICAgaWYgKGlzTG9hZGluZykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1Byb2dyZXNzU3Bpbm5lciA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dQcm9ncmVzc1NwaW5uZXIgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgfVxuXG59XG4iLCI8bW9kLXByb2dyZXNzLXNwaW5uZXIgKm5nSWY9XCJzaG93UHJvZ3Jlc3NTcGlubmVyXCIgW292ZXJsYXldPVwidHJ1ZVwiPjwvbW9kLXByb2dyZXNzLXNwaW5uZXI+XHJcbiJdfQ==