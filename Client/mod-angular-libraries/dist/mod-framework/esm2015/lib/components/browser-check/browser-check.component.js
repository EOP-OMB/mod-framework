import { Component } from '@angular/core';
import { CurrentUserService } from "../../services/current-user.service";
export class BrowserCheckComponent {
    constructor(currentUserService) {
        this.currentUserService = currentUserService;
    }
    ngOnInit() {
        this.currentUserService.browserCheck().then(response => {
            this.browserFail = '';
            return;
        }).catch(error => {
            $("#loginout").css("display", "none");
            this.browserFail = error;
            this.loginSite = this.currentUserService.siteUrl;
            this.loginDomain = this.currentUserService.domain;
            this.myDomain = this.currentUserService.getDomain(window.location.href);
        });
    }
}
BrowserCheckComponent.decorators = [
    { type: Component, args: [{
                selector: 'mod-browser-check',
                template: "<div *ngIf=\"browserFail\" class=\"container-fluid browser-check-container\">\r\n    <span class=\"fa fa-warning browser-check-icon\"></span><span class=\"browser-check-header-text\">&nbsp;&nbsp;You can't log in to this site.</span>\r\n    <div class=\"browser-check-text\">\r\n        Possible reasons for this include:\r\n        <ul>\r\n            <li>\r\n                You can't reach the site {{loginSite}}.\r\n                <ul>\r\n                    <li>Please check your network connection.</li>\r\n                </ul>\r\n            </li>\r\n            <li>\r\n                Site {{loginSite}} does not allow cross-origin scripting (CORS) from your domain {{myDomain}}.\r\n                <ul>\r\n                    <li>Please contact the administrator of {{loginSite}} and request access for your site.</li>\r\n                </ul>\r\n            </li>\r\n            <li>\r\n                Your browser doesn't accept third-party cookies from domain {{loginDomain}}.\r\n                <ul>\r\n                    <li>In your browser settings, either allow all third-party cookies, or </li>\r\n                    <li>Disallow third-party cookies, but add {{loginDomain}} as an exception.</li>\r\n                </ul>\r\n            </li>\r\n        </ul>\r\n        <i>The actual error returned is \"{{browserFail}}\".<br /></i>\r\n        Please correct these problems and try again.\r\n    </div>\r\n</div>\r\n",
                styles: [".browser-check-container{border:4px solid red;padding-top:5px;padding-bottom:5px;padding-left:10px}.browser-check-icon{font-size:36px;color:red;vertical-align:middle}.browser-check-text{font-size:16px;vertical-align:middle;padding-left:30px;padding-top:10px}.browser-check-header-text{font-size:24px;font-weight:700;vertical-align:middle}"]
            },] }
];
BrowserCheckComponent.ctorParameters = () => [
    { type: CurrentUserService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3Nlci1jaGVjay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tb2QtZnJhbWV3b3JrL3NyYy9saWIvY29tcG9uZW50cy9icm93c2VyLWNoZWNrL2Jyb3dzZXItY2hlY2suY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBVXpFLE1BQU0sT0FBTyxxQkFBcUI7SUFFOUIsWUFBb0Isa0JBQXNDO1FBQXRDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7SUFDMUQsQ0FBQztJQU9ELFFBQVE7UUFDSixJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ25ELElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1lBQ3RCLE9BQU87UUFDWCxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDYixDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUN0QyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztZQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUM7WUFDakQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDO1lBQ2xELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVFLENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQzs7O1lBNUJKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QiwyNkNBQTZDOzthQUVoRDs7O1lBUlEsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDdXJyZW50VXNlclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvY3VycmVudC11c2VyLnNlcnZpY2VcIjtcblxuZGVjbGFyZSB2YXIgJDogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ21vZC1icm93c2VyLWNoZWNrJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vYnJvd3Nlci1jaGVjay5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vYnJvd3Nlci1jaGVjay5jb21wb25lbnQuc2NzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgQnJvd3NlckNoZWNrQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY3VycmVudFVzZXJTZXJ2aWNlOiBDdXJyZW50VXNlclNlcnZpY2UpIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgYnJvd3NlckZhaWw6IHN0cmluZztcbiAgICBwdWJsaWMgbG9naW5TaXRlOiBzdHJpbmc7XG4gICAgcHVibGljIGxvZ2luRG9tYWluOiBzdHJpbmc7XG4gICAgcHVibGljIG15RG9tYWluOiBzdHJpbmc7XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jdXJyZW50VXNlclNlcnZpY2UuYnJvd3NlckNoZWNrKCkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICB0aGlzLmJyb3dzZXJGYWlsID0gJyc7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICQoXCIjbG9naW5vdXRcIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG4gICAgICAgICAgICB0aGlzLmJyb3dzZXJGYWlsID0gZXJyb3I7XG4gICAgICAgICAgICB0aGlzLmxvZ2luU2l0ZSA9IHRoaXMuY3VycmVudFVzZXJTZXJ2aWNlLnNpdGVVcmw7XG4gICAgICAgICAgICB0aGlzLmxvZ2luRG9tYWluID0gdGhpcy5jdXJyZW50VXNlclNlcnZpY2UuZG9tYWluO1xuICAgICAgICAgICAgdGhpcy5teURvbWFpbiA9IHRoaXMuY3VycmVudFVzZXJTZXJ2aWNlLmdldERvbWFpbih3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG59XG4iXX0=