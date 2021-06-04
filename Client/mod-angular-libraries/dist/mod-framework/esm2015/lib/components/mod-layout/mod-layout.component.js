import { Component, ViewChild, Input, Output, EventEmitter, Inject } from '@angular/core';
import { ModFrameworkConfig } from '../../models/mod-framework-config.model';
import { ModConfig } from '../../static/mod-config.const';
export class ModLayoutComponent {
    constructor(config) {
        this.userOptionSelect = new EventEmitter();
        this.helpOptionSelect = new EventEmitter();
        this.search = new EventEmitter();
        this.config = config;
    }
    ngOnInit() {
    }
    onMenuClicked() {
        this.sideMenu.toggleSideNav();
    }
    onUserOptionSelect(option) {
        this.userOptionSelect.emit(option);
    }
    onHelpOptionSelect(option) {
        this.helpOptionSelect.emit(option);
    }
    onSearch() {
        this.search.emit(this.searchText);
        this.searchText = '';
    }
}
ModLayoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'mod-layout',
                template: "<mod-loading-overlay></mod-loading-overlay>\r\n<div class=\"mod-layout-container\">\r\n    <div class=\"layout-header\">\r\n        <!--<mod-welcome-banner>\r\n        </mod-welcome-banner>-->\r\n        <mod-header [appName]=\"appName\" (menuClick)=\"onMenuClicked()\" (userOptionSelect)=\"onUserOptionSelect($event)\" (helpOptionSelect)=\"onHelpOptionSelect($event)\">\r\n            <div *ngIf=\"config.showSearch\" style=\"display: flex; justify-content: center;\">\r\n                <input [(ngModel)]=\"searchText\" matInput placeholder=\"Search\" class=\"search-box\" (keyup.enter)=\"onSearch()\">\r\n            </div>\r\n        </mod-header>\r\n    </div>\r\n    <div class=\"layout-content\">\r\n        <mod-side-menu [config]=\"menuConfig\" #sidemenu>\r\n            <ng-content></ng-content>\r\n        </mod-side-menu>\r\n    </div>\r\n</div>\r\n",
                styles: [".mod-layout-container{display:flex;flex-flow:column;height:100%}.layout-header{flex:0}.layout-content{flex:1;overflow:auto}.search-box{background-color:#fff;box-shadow:none;border:none;min-height:32px;width:50%;color:#000;font-size:14px;padding-top:0;padding-right:15px;border-radius:16px;padding-left:15px;margin-left:15px;margin-right:15px}.search-box:focus{outline:none}"]
            },] }
];
ModLayoutComponent.ctorParameters = () => [
    { type: ModFrameworkConfig, decorators: [{ type: Inject, args: [ModConfig,] }] }
];
ModLayoutComponent.propDecorators = {
    sideMenu: [{ type: ViewChild, args: ['sidemenu', { static: true },] }],
    appName: [{ type: Input }],
    menuConfig: [{ type: Input }],
    userOptionSelect: [{ type: Output }],
    helpOptionSelect: [{ type: Output }],
    search: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kLWxheW91dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tb2QtZnJhbWV3b3JrL3NyYy9saWIvY29tcG9uZW50cy9tb2QtbGF5b3V0L21vZC1sYXlvdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUdsRyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFPMUQsTUFBTSxPQUFPLGtCQUFrQjtJQXVCM0IsWUFBK0IsTUFBMEI7UUFaekQscUJBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUc5QyxxQkFBZ0IsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBRzlDLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBT2hDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxRQUFRO0lBQ1IsQ0FBQztJQUVNLGFBQWE7UUFDaEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRU0sa0JBQWtCLENBQUMsTUFBYztRQUNwQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFTSxrQkFBa0IsQ0FBQyxNQUFjO1FBQ3BDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVNLFFBQVE7UUFDWCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7SUFDekIsQ0FBQzs7O1lBbERKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsMDJCQUEwQzs7YUFFN0M7OztZQVBRLGtCQUFrQix1QkErQlYsTUFBTSxTQUFDLFNBQVM7Ozt1QkFyQjVCLFNBQVMsU0FBQyxVQUFVLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO3NCQUV0QyxLQUFLO3lCQUdMLEtBQUs7K0JBR0wsTUFBTTsrQkFHTixNQUFNO3FCQUdOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTW9kU2lkZU1lbnVDb21wb25lbnQgfSBmcm9tICcuLi9tb2Qtc2lkZS1tZW51L21vZC1zaWRlLW1lbnUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTW9kU2lkZU1lbnVDb25maWcgfSBmcm9tICcuLi8uLi9tb2RlbHMvbW9kLXNpZGUtbWVudS1jb25maWcubW9kZWwnO1xyXG5pbXBvcnQgeyBNb2RGcmFtZXdvcmtDb25maWcgfSBmcm9tICcuLi8uLi9tb2RlbHMvbW9kLWZyYW1ld29yay1jb25maWcubW9kZWwnO1xyXG5pbXBvcnQgeyBNb2RDb25maWcgfSBmcm9tICcuLi8uLi9zdGF0aWMvbW9kLWNvbmZpZy5jb25zdCc7XHJcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdtb2QtbGF5b3V0JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbW9kLWxheW91dC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vbW9kLWxheW91dC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE1vZExheW91dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBAVmlld0NoaWxkKCdzaWRlbWVudScsIHsgc3RhdGljOiB0cnVlIH0pIHNpZGVNZW51OiBNb2RTaWRlTWVudUNvbXBvbmVudDtcblxuICAgIEBJbnB1dCgpXG4gICAgYXBwTmFtZTogc3RyaW5nO1xuXG4gICAgQElucHV0KClcbiAgICBtZW51Q29uZmlnOiBNb2RTaWRlTWVudUNvbmZpZztcblxuICAgIEBPdXRwdXQoKVxuICAgIHVzZXJPcHRpb25TZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICAgIEBPdXRwdXQoKVxuICAgIGhlbHBPcHRpb25TZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICAgIEBPdXRwdXQoKVxuICAgIHNlYXJjaCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gICAgcHVibGljIHNlYXJjaFRleHQ6IHN0cmluZztcblxuICAgIHB1YmxpYyBjb25maWc6IE1vZEZyYW1ld29ya0NvbmZpZztcblxuICAgIGNvbnN0cnVjdG9yKEBJbmplY3QoTW9kQ29uZmlnKSBjb25maWc6IE1vZEZyYW1ld29ya0NvbmZpZykge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25NZW51Q2xpY2tlZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zaWRlTWVudS50b2dnbGVTaWRlTmF2KCk7XHJcbiAgICB9XG5cbiAgICBwdWJsaWMgb25Vc2VyT3B0aW9uU2VsZWN0KG9wdGlvbjogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMudXNlck9wdGlvblNlbGVjdC5lbWl0KG9wdGlvbik7XHJcbiAgICB9XG5cbiAgICBwdWJsaWMgb25IZWxwT3B0aW9uU2VsZWN0KG9wdGlvbjogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaGVscE9wdGlvblNlbGVjdC5lbWl0KG9wdGlvbik7XHJcbiAgICB9XG5cbiAgICBwdWJsaWMgb25TZWFyY2goKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2VhcmNoLmVtaXQodGhpcy5zZWFyY2hUZXh0KTtcclxuICAgICAgICB0aGlzLnNlYXJjaFRleHQgPSAnJztcclxuICAgIH1cbn1cbiJdfQ==