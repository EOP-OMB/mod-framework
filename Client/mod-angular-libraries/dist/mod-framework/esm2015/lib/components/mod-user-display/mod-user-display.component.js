import { Component, Input, Output, EventEmitter, Inject } from '@angular/core';
import { CurrentUserService } from '../../services/current-user.service';
import { ModConfig } from '../../static/mod-config.const';
import { ModFrameworkConfig } from '../../models/mod-framework-config.model';
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
ModUserDisplayComponent.decorators = [
    { type: Component, args: [{
                selector: 'mod-user-display',
                template: "<div *ngIf=\"user\">\r\n    Welcome \r\n    <span style=\"padding-right: 5px;\">{{ user.displayName }}</span>\r\n    <ng-container *ngIf=\"showUser;else showMenu\">\r\n        <button mat-icon-button [matMenuTriggerFor]=\"menu\" class=\"mod-user-icon\" aria-label=\"User Menu\">\r\n            <mat-icon>account_circle</mat-icon>\r\n        </button>\r\n    </ng-container>\r\n    <ng-template #showMenu>\r\n        <button mat-icon-button [matMenuTriggerFor]=\"menu\" class=\"mat-icon-button\" aria-label=\"User Menu\">\r\n            <mat-icon>keyboard_arrow_down</mat-icon>\r\n        </button>\r\n    </ng-template>\r\n    <mat-menu #menu=\"matMenu\">\r\n        <button mat-menu-item *ngFor=\"let option of config.userOptions\" (click)=\"optionSelected(option)\">{{ option }}</button>\r\n    </mat-menu>\r\n</div>\r\n",
                styles: [".delete-potentially-circle-user-icon{border:2px solid!important;border-color:inherit!important;border-radius:50%!important;padding:5px!important;margin-left:15px!important}.mat-button-base{height:auto;line-height:inherit}"]
            },] }
];
ModUserDisplayComponent.ctorParameters = () => [
    { type: CurrentUserService },
    { type: ModFrameworkConfig, decorators: [{ type: Inject, args: [ModConfig,] }] }
];
ModUserDisplayComponent.propDecorators = {
    showUser: [{ type: Input }],
    selectOption: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kLXVzZXItZGlzcGxheS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tb2QtZnJhbWV3b3JrL3NyYy9saWIvY29tcG9uZW50cy9tb2QtdXNlci1kaXNwbGF5L21vZC11c2VyLWRpc3BsYXkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQU83RSxNQUFNLE9BQU8sdUJBQXVCO0lBV2hDLFlBQW9CLFdBQStCLEVBQXFCLE1BQTBCO1FBQTlFLGdCQUFXLEdBQVgsV0FBVyxDQUFvQjtRQVJuRCxhQUFRLEdBQVksS0FBSyxDQUFDO1FBRzFCLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQU10QyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELFFBQVE7SUFFUixDQUFDO0lBRUQsSUFBSSxJQUFJO1FBQ0osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztJQUNqQyxDQUFDO0lBRU0sY0FBYyxDQUFDLE1BQWM7UUFDaEMsSUFBSSxNQUFNLElBQUksY0FBYyxFQUFFO1lBQzFCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUE7U0FDaEQ7YUFDSTtZQUNELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2xDO0lBQ0wsQ0FBQzs7O1lBcENKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixrMEJBQWdEOzthQUVuRDs7O1lBUlEsa0JBQWtCO1lBRWxCLGtCQUFrQix1QkFrQitCLE1BQU0sU0FBQyxTQUFTOzs7dUJBVHJFLEtBQUs7MkJBR0wsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ3VycmVudFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY3VycmVudC11c2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgTW9kQ29uZmlnIH0gZnJvbSAnLi4vLi4vc3RhdGljL21vZC1jb25maWcuY29uc3QnO1xyXG5pbXBvcnQgeyBNb2RGcmFtZXdvcmtDb25maWcgfSBmcm9tICcuLi8uLi9tb2RlbHMvbW9kLWZyYW1ld29yay1jb25maWcubW9kZWwnO1xyXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbW9kLXVzZXItZGlzcGxheScsXG4gICAgdGVtcGxhdGVVcmw6ICcuL21vZC11c2VyLWRpc3BsYXkuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL21vZC11c2VyLWRpc3BsYXkuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNb2RVc2VyRGlzcGxheUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBASW5wdXQoKVxuICAgIHNob3dVc2VyOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBAT3V0cHV0KClcbiAgICBzZWxlY3RPcHRpb24gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuXG4gICAgcHVibGljIGNvbmZpZzogTW9kRnJhbWV3b3JrQ29uZmlnO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB1c2VyU2VydmljZTogQ3VycmVudFVzZXJTZXJ2aWNlLCBASW5qZWN0KE1vZENvbmZpZykgY29uZmlnOiBNb2RGcmFtZXdvcmtDb25maWcpIHtcbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gICAgICAgIHRoaXMuY29uZmlnLnVzZXJPcHRpb25zLnB1c2goJ1VzZXIgUHJvZmlsZScpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBcbiAgICB9XG5cbiAgICBnZXQgdXNlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXNlclNlcnZpY2UudXNlcjtcbiAgICB9XG5cbiAgICBwdWJsaWMgb3B0aW9uU2VsZWN0ZWQob3B0aW9uOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKG9wdGlvbiA9PSBcIlVzZXIgUHJvZmlsZVwiKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5vcGVuKHRoaXMuY29uZmlnLnByb2ZpbGVVcmwsICdfYmxhbmsnKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RPcHRpb24uZW1pdChvcHRpb24pO1xyXG4gICAgICAgIH1cclxuICAgIH1cbn1cbiJdfQ==