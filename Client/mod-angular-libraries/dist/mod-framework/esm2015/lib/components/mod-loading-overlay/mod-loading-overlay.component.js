import { Component } from '@angular/core';
import { LoadingService } from '../../services/loading.service';
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
ModLoadingOverlayComponent.decorators = [
    { type: Component, args: [{
                selector: 'mod-loading-overlay',
                template: "<mod-progress-spinner *ngIf=\"showProgressSpinner\" [overlay]=\"true\"></mod-progress-spinner>\r\n",
                styles: [""]
            },] }
];
ModLoadingOverlayComponent.ctorParameters = () => [
    { type: LoadingService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kLWxvYWRpbmctb3ZlcmxheS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tb2QtZnJhbWV3b3JrL3NyYy9saWIvY29tcG9uZW50cy9tb2QtbG9hZGluZy1vdmVybGF5L21vZC1sb2FkaW5nLW92ZXJsYXkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBT2hFLE1BQU0sT0FBTywwQkFBMEI7SUFJbkMsWUFBb0IsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBRjNDLHdCQUFtQixHQUFZLEtBQUssQ0FBQztRQUd4QyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUNsRCxJQUFJLFNBQVMsRUFBRTtnQkFDWCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDO2FBQ25DO2lCQUNJO2dCQUNELElBQUksQ0FBQyxtQkFBbUIsR0FBRyxLQUFLLENBQUM7YUFDcEM7UUFDTCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFDRCxRQUFRO0lBQ1IsQ0FBQzs7O1lBcEJKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQiw4R0FBbUQ7O2FBRXREOzs7WUFOUSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExvYWRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbG9hZGluZy5zZXJ2aWNlJztcclxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ21vZC1sb2FkaW5nLW92ZXJsYXknLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9tb2QtbG9hZGluZy1vdmVybGF5LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9tb2QtbG9hZGluZy1vdmVybGF5LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTW9kTG9hZGluZ092ZXJsYXlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgcHVibGljIHNob3dQcm9ncmVzc1NwaW5uZXI6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9hZGluZ1NlcnZpY2U6IExvYWRpbmdTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMubG9hZGluZ1NlcnZpY2UuaXNMb2FkaW5nLnN1YnNjcmliZSgoaXNMb2FkaW5nKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXNMb2FkaW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93UHJvZ3Jlc3NTcGlubmVyID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1Byb2dyZXNzU3Bpbm5lciA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB9XG5cbn1cbiJdfQ==