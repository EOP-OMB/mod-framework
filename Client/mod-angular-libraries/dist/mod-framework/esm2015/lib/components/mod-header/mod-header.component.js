import { Component, Input, Output, EventEmitter, Inject } from '@angular/core';
import { ModConfig } from '../../static/mod-config.const';
import { ModFrameworkConfig } from '../../models/mod-framework-config.model';
export class ModHeaderComponent {
    constructor(config) {
        this.menuClick = new EventEmitter();
        this.userOptionSelect = new EventEmitter();
        this.helpOptionSelect = new EventEmitter();
        this.config = config;
    }
    ngOnInit() {
    }
    onMenuClick() {
        this.menuClick.emit();
    }
    onUserOptionSelect(option) {
        this.userOptionSelect.emit(option);
    }
    optionSelected(option) {
        this.helpOptionSelect.emit(option);
    }
}
ModHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'mod-header',
                template: "<mat-toolbar class=\"mod-header\">\r\n    <button mat-icon-button (click)=\"onMenuClick()\">\r\n        <mat-icon>\r\n            menu\r\n        </mat-icon>\r\n    </button>\r\n\r\n    <a class=\"logo-text-mark\" [routerLink]=\"['/']\">\r\n        <img class=\"mod-logo\" src=\"/assets/US-OfficeOfManagementAndBudget-Seal.png\" tabindex=\"-1\" />\r\n        <div tabindex=\"-1\" alt=\"Textmark\" class=\"text-mark\">{{ appName }}</div>\r\n    </a>\r\n\r\n    <span class=\"fill-remaining-space\">\r\n        <ng-content></ng-content>\r\n    </span>\r\n\r\n    <div class=\"welcome-user\">\r\n        <mod-user-display [showUser]=\"true\" (selectOption)=\"onUserOptionSelect($event)\"></mod-user-display>\r\n        <div *ngIf=\"config.showHelp\">\r\n            <button mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"Help Menu\">\r\n                <mat-icon>help</mat-icon>\r\n            </button>\r\n            <mat-menu #menu=\"matMenu\">\r\n                <button mat-menu-item *ngFor=\"let option of config.helpOptions\" (click)=\"optionSelected(option)\">{{ option }}</button>\r\n            </mat-menu>\r\n        </div>\r\n    </div>\r\n</mat-toolbar>\r\n",
                styles: [".mod-header{justify-content:center;background-color:#112e51;display:flex;color:#fff}a{text-decoration:none}.logo-text-mark{cursor:pointer;display:flex;align-items:center}.text-mark{cursor:pointer;margin-left:12px;font-size:1.4em;display:inline-block;vertical-align:middle;color:#d8b304}.mod-logo{margin-left:4px;height:50px}.fill-remaining-space{flex:1 1 auto;align-items:center;margin-left:15px}.welcome-user{font-size:.85em;padding-top:2px;padding-right:5px;flex:1;display:flex;justify-content:flex-end}.mat-button-base{height:auto;line-height:inherit}"]
            },] }
];
ModHeaderComponent.ctorParameters = () => [
    { type: ModFrameworkConfig, decorators: [{ type: Inject, args: [ModConfig,] }] }
];
ModHeaderComponent.propDecorators = {
    appName: [{ type: Input }],
    menuClick: [{ type: Output }],
    userOptionSelect: [{ type: Output }],
    helpOptionSelect: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kLWhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tb2QtZnJhbWV3b3JrL3NyYy9saWIvY29tcG9uZW50cy9tb2QtaGVhZGVyL21vZC1oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQU83RSxNQUFNLE9BQU8sa0JBQWtCO0lBZ0IzQixZQUErQixNQUEwQjtRQVZ6RCxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUdwQyxxQkFBZ0IsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBRzlDLHFCQUFnQixHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFLMUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDekIsQ0FBQztJQUVELFFBQVE7SUFDUixDQUFDO0lBRU0sV0FBVztRQUNkLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVNLGtCQUFrQixDQUFDLE1BQWM7UUFDcEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRU0sY0FBYyxDQUFDLE1BQWM7UUFDaEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7WUF0Q0osU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxZQUFZO2dCQUN0QixzcUNBQTBDOzthQUU3Qzs7O1lBTlEsa0JBQWtCLHVCQXVCVixNQUFNLFNBQUMsU0FBUzs7O3NCQWQ1QixLQUFLO3dCQUdMLE1BQU07K0JBR04sTUFBTTsrQkFHTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNb2RDb25maWcgfSBmcm9tICcuLi8uLi9zdGF0aWMvbW9kLWNvbmZpZy5jb25zdCc7XHJcbmltcG9ydCB7IE1vZEZyYW1ld29ya0NvbmZpZyB9IGZyb20gJy4uLy4uL21vZGVscy9tb2QtZnJhbWV3b3JrLWNvbmZpZy5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbW9kLWhlYWRlcicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL21vZC1oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL21vZC1oZWFkZXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNb2RIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQElucHV0KClcbiAgICBhcHBOYW1lOiBzdHJpbmc7XG5cbiAgICBAT3V0cHV0KClcbiAgICBtZW51Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICAgIEBPdXRwdXQoKVxuICAgIHVzZXJPcHRpb25TZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICAgIEBPdXRwdXQoKVxuICAgIGhlbHBPcHRpb25TZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICAgIHB1YmxpYyBjb25maWc6IE1vZEZyYW1ld29ya0NvbmZpZztcblxuICAgIGNvbnN0cnVjdG9yKEBJbmplY3QoTW9kQ29uZmlnKSBjb25maWc6IE1vZEZyYW1ld29ya0NvbmZpZykge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25NZW51Q2xpY2soKTogdm9pZCB7XG4gICAgICAgIHRoaXMubWVudUNsaWNrLmVtaXQoKTtcclxuICAgIH1cblxuICAgIHB1YmxpYyBvblVzZXJPcHRpb25TZWxlY3Qob3B0aW9uOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy51c2VyT3B0aW9uU2VsZWN0LmVtaXQob3B0aW9uKTtcclxuICAgIH1cblxuICAgIHB1YmxpYyBvcHRpb25TZWxlY3RlZChvcHRpb246IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLmhlbHBPcHRpb25TZWxlY3QuZW1pdChvcHRpb24pO1xyXG4gICAgfVxufVxuIl19