import { Component, Input } from '@angular/core';
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
ModProgressSpinnerComponent.decorators = [
    { type: Component, args: [{
                selector: 'mod-progress-spinner',
                template: "<ng-container *ngIf=\"overlay;else progressSpinner\">\r\n    <div class=\"overlay\">\r\n        <div class=\"center\">\r\n            <ng-template [ngTemplateOutlet]=\"progressSpinner\"></ng-template>\r\n        </div>\r\n    </div>\r\n</ng-container>\r\n<ng-template #progressSpinner>\r\n    <mat-progress-spinner [diameter]=\"diameter\"\r\n                          [mode]=\"mode\"\r\n                          [color]=\"color\"\r\n                          [strokeWidth]=\"strokeWidth\"\r\n                          [value]=\"value\">\r\n    </mat-progress-spinner>\r\n</ng-template>\r\n",
                styles: [".center{position:absolute;top:50%;left:50%;transform:translateX(-50%) translateY(-50%)}.overlay{height:100vh;width:100%;background-color:rgba(0,0,0,.286);z-index:10;top:0;left:0;position:fixed}"]
            },] }
];
ModProgressSpinnerComponent.ctorParameters = () => [];
ModProgressSpinnerComponent.propDecorators = {
    value: [{ type: Input }],
    diameter: [{ type: Input }],
    mode: [{ type: Input }],
    strokeWidth: [{ type: Input }],
    overlay: [{ type: Input }],
    color: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kLXByb2dyZXNzLXNwaW5uZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbW9kLWZyYW1ld29yay9zcmMvbGliL2NvbXBvbmVudHMvbW9kLXByb2dyZXNzLXNwaW5uZXIvbW9kLXByb2dyZXNzLXNwaW5uZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBT3pELE1BQU0sT0FBTywyQkFBMkI7SUFTcEM7UUFQUyxVQUFLLEdBQVcsR0FBRyxDQUFDO1FBQ3BCLGFBQVEsR0FBVyxHQUFHLENBQUM7UUFDdkIsU0FBSSxHQUFXLGVBQWUsQ0FBQztRQUMvQixnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUN6QixZQUFPLEdBQVksS0FBSyxDQUFDO1FBQ3pCLFVBQUssR0FBVyxTQUFTLENBQUM7SUFFbkIsQ0FBQztJQUVqQixRQUFRO0lBQ1IsQ0FBQzs7O1lBakJKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQywwbEJBQW9EOzthQUV2RDs7OztvQkFHSSxLQUFLO3VCQUNMLEtBQUs7bUJBQ0wsS0FBSzswQkFDTCxLQUFLO3NCQUNMLEtBQUs7b0JBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ21vZC1wcm9ncmVzcy1zcGlubmVyJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbW9kLXByb2dyZXNzLXNwaW5uZXIuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL21vZC1wcm9ncmVzcy1zcGlubmVyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTW9kUHJvZ3Jlc3NTcGlubmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIEBJbnB1dCgpIHZhbHVlOiBudW1iZXIgPSAxMDA7XG4gICAgQElucHV0KCkgZGlhbWV0ZXI6IG51bWJlciA9IDEwMDtcbiAgICBASW5wdXQoKSBtb2RlOiBzdHJpbmcgPSBcImluZGV0ZXJtaW5hdGVcIjtcbiAgICBASW5wdXQoKSBzdHJva2VXaWR0aDogbnVtYmVyID0gMTA7XG4gICAgQElucHV0KCkgb3ZlcmxheTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmcgPSBcInByaW1hcnlcIjtcblxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB9XG5cbn1cbiJdfQ==