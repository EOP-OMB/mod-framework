import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../services/current-user.service";
import * as i2 from "@angular/common";
function BrowserCheckComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵelement(1, "span", 2);
    i0.ɵɵelementStart(2, "span", 3);
    i0.ɵɵtext(3, "\u00A0\u00A0You can't log in to this site.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 4);
    i0.ɵɵtext(5, " Possible reasons for this include: ");
    i0.ɵɵelementStart(6, "ul");
    i0.ɵɵelementStart(7, "li");
    i0.ɵɵtext(8);
    i0.ɵɵelementStart(9, "ul");
    i0.ɵɵelementStart(10, "li");
    i0.ɵɵtext(11, "Please check your network connection.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "li");
    i0.ɵɵtext(13);
    i0.ɵɵelementStart(14, "ul");
    i0.ɵɵelementStart(15, "li");
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "li");
    i0.ɵɵtext(18);
    i0.ɵɵelementStart(19, "ul");
    i0.ɵɵelementStart(20, "li");
    i0.ɵɵtext(21, "In your browser settings, either allow all third-party cookies, or ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "li");
    i0.ɵɵtext(23);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "i");
    i0.ɵɵtext(25);
    i0.ɵɵelement(26, "br");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(27, " Please correct these problems and try again. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate1(" You can't reach the site ", ctx_r0.loginSite, ". ");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate2(" Site ", ctx_r0.loginSite, " does not allow cross-origin scripting (CORS) from your domain ", ctx_r0.myDomain, ". ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Please contact the administrator of ", ctx_r0.loginSite, " and request access for your site.");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" Your browser doesn't accept third-party cookies from domain ", ctx_r0.loginDomain, ". ");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1("Disallow third-party cookies, but add ", ctx_r0.loginDomain, " as an exception.");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("The actual error returned is \"", ctx_r0.browserFail, "\".");
} }
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
BrowserCheckComponent.ɵfac = function BrowserCheckComponent_Factory(t) { return new (t || BrowserCheckComponent)(i0.ɵɵdirectiveInject(i1.CurrentUserService)); };
BrowserCheckComponent.ɵcmp = i0.ɵɵdefineComponent({ type: BrowserCheckComponent, selectors: [["mod-browser-check"]], decls: 1, vars: 1, consts: [["class", "container-fluid browser-check-container", 4, "ngIf"], [1, "container-fluid", "browser-check-container"], [1, "fa", "fa-warning", "browser-check-icon"], [1, "browser-check-header-text"], [1, "browser-check-text"]], template: function BrowserCheckComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, BrowserCheckComponent_div_0_Template, 28, 7, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.browserFail);
    } }, directives: [i2.NgIf], styles: [".browser-check-container[_ngcontent-%COMP%]{border:4px solid red;padding-bottom:5px;padding-left:10px;padding-top:5px}.browser-check-icon[_ngcontent-%COMP%]{color:red;font-size:36px;vertical-align:middle}.browser-check-text[_ngcontent-%COMP%]{font-size:16px;padding-left:30px;padding-top:10px;vertical-align:middle}.browser-check-header-text[_ngcontent-%COMP%]{font-size:24px;font-weight:700;vertical-align:middle}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(BrowserCheckComponent, [{
        type: Component,
        args: [{
                selector: 'mod-browser-check',
                templateUrl: './browser-check.component.html',
                styleUrls: ['./browser-check.component.scss']
            }]
    }], function () { return [{ type: i1.CurrentUserService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3Nlci1jaGVjay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tb2QtZnJhbWV3b3JrL3NyYy9saWIvY29tcG9uZW50cy9icm93c2VyLWNoZWNrL2Jyb3dzZXItY2hlY2suY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbW9kLWZyYW1ld29yay9zcmMvbGliL2NvbXBvbmVudHMvYnJvd3Nlci1jaGVjay9icm93c2VyLWNoZWNrLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWlCLE1BQU0sZUFBZSxDQUFDOzs7OztJQ0F6RCw4QkFDSTtJQUFBLDBCQUFzRDtJQUFBLCtCQUF3QztJQUFBLDBEQUEwQztJQUFBLGlCQUFPO0lBQy9JLDhCQUNJO0lBQUEsb0RBQ0E7SUFBQSwwQkFDSTtJQUFBLDBCQUNJO0lBQUEsWUFDQTtJQUFBLDBCQUNJO0lBQUEsMkJBQUk7SUFBQSxzREFBcUM7SUFBQSxpQkFBSztJQUNsRCxpQkFBSztJQUNULGlCQUFLO0lBQ0wsMkJBQ0k7SUFBQSxhQUNBO0lBQUEsMkJBQ0k7SUFBQSwyQkFBSTtJQUFBLGFBQW1GO0lBQUEsaUJBQUs7SUFDaEcsaUJBQUs7SUFDVCxpQkFBSztJQUNMLDJCQUNJO0lBQUEsYUFDQTtJQUFBLDJCQUNJO0lBQUEsMkJBQUk7SUFBQSxvRkFBbUU7SUFBQSxpQkFBSztJQUM1RSwyQkFBSTtJQUFBLGFBQXNFO0lBQUEsaUJBQUs7SUFDbkYsaUJBQUs7SUFDVCxpQkFBSztJQUNULGlCQUFLO0lBQ0wsMEJBQUc7SUFBQSxhQUErQztJQUFBLHNCQUFNO0lBQUEsaUJBQUk7SUFDNUQsK0RBQ0o7SUFBQSxpQkFBTTtJQUNWLGlCQUFNOzs7SUF0QlUsZUFDQTtJQURBLDJFQUNBO0lBS0EsZUFDQTtJQURBLDJJQUNBO0lBQ1EsZUFBbUY7SUFBbkYscUhBQW1GO0lBSTNGLGVBQ0E7SUFEQSxnSEFDQTtJQUVRLGVBQXNFO0lBQXRFLHdHQUFzRTtJQUluRixlQUErQztJQUEvQyxtRkFBK0M7O0FEZDFELE1BQU0sT0FBTyxxQkFBcUI7SUFFOUIsWUFBb0Isa0JBQXNDO1FBQXRDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7SUFDMUQsQ0FBQztJQU9ELFFBQVE7UUFDSixJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ25ELElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1lBQ3RCLE9BQU87UUFDWCxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDYixDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUN0QyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztZQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUM7WUFDakQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDO1lBQ2xELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVFLENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQzs7MEZBdEJRLHFCQUFxQjswREFBckIscUJBQXFCO1FDWGxDLHVFQUNJOztRQURDLHNDQUFtQjs7a0REV1gscUJBQXFCO2NBTmpDLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixXQUFXLEVBQUUsZ0NBQWdDO2dCQUM3QyxTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQzthQUNoRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ3VycmVudFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2N1cnJlbnQtdXNlci5zZXJ2aWNlXCI7XG5cbmRlY2xhcmUgdmFyICQ6IGFueTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdtb2QtYnJvd3Nlci1jaGVjaycsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2Jyb3dzZXItY2hlY2suY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2Jyb3dzZXItY2hlY2suY29tcG9uZW50LnNjc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIEJyb3dzZXJDaGVja0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGN1cnJlbnRVc2VyU2VydmljZTogQ3VycmVudFVzZXJTZXJ2aWNlKSB7XG4gICAgfVxuXG4gICAgcHVibGljIGJyb3dzZXJGYWlsOiBzdHJpbmc7XG4gICAgcHVibGljIGxvZ2luU2l0ZTogc3RyaW5nO1xuICAgIHB1YmxpYyBsb2dpbkRvbWFpbjogc3RyaW5nO1xuICAgIHB1YmxpYyBteURvbWFpbjogc3RyaW5nO1xuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY3VycmVudFVzZXJTZXJ2aWNlLmJyb3dzZXJDaGVjaygpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgdGhpcy5icm93c2VyRmFpbCA9ICcnO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICAkKFwiI2xvZ2lub3V0XCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuICAgICAgICAgICAgdGhpcy5icm93c2VyRmFpbCA9IGVycm9yO1xuICAgICAgICAgICAgdGhpcy5sb2dpblNpdGUgPSB0aGlzLmN1cnJlbnRVc2VyU2VydmljZS5zaXRlVXJsO1xuICAgICAgICAgICAgdGhpcy5sb2dpbkRvbWFpbiA9IHRoaXMuY3VycmVudFVzZXJTZXJ2aWNlLmRvbWFpbjtcbiAgICAgICAgICAgIHRoaXMubXlEb21haW4gPSB0aGlzLmN1cnJlbnRVc2VyU2VydmljZS5nZXREb21haW4od2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgICB9KTtcblxuICAgIH1cblxufVxuIiwiPGRpdiAqbmdJZj1cImJyb3dzZXJGYWlsXCIgY2xhc3M9XCJjb250YWluZXItZmx1aWQgYnJvd3Nlci1jaGVjay1jb250YWluZXJcIj5cclxuICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtd2FybmluZyBicm93c2VyLWNoZWNrLWljb25cIj48L3NwYW4+PHNwYW4gY2xhc3M9XCJicm93c2VyLWNoZWNrLWhlYWRlci10ZXh0XCI+Jm5ic3A7Jm5ic3A7WW91IGNhbid0IGxvZyBpbiB0byB0aGlzIHNpdGUuPC9zcGFuPlxyXG4gICAgPGRpdiBjbGFzcz1cImJyb3dzZXItY2hlY2stdGV4dFwiPlxyXG4gICAgICAgIFBvc3NpYmxlIHJlYXNvbnMgZm9yIHRoaXMgaW5jbHVkZTpcclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIFlvdSBjYW4ndCByZWFjaCB0aGUgc2l0ZSB7e2xvZ2luU2l0ZX19LlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5QbGVhc2UgY2hlY2sgeW91ciBuZXR3b3JrIGNvbm5lY3Rpb24uPC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIFNpdGUge3tsb2dpblNpdGV9fSBkb2VzIG5vdCBhbGxvdyBjcm9zcy1vcmlnaW4gc2NyaXB0aW5nIChDT1JTKSBmcm9tIHlvdXIgZG9tYWluIHt7bXlEb21haW59fS5cclxuICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+UGxlYXNlIGNvbnRhY3QgdGhlIGFkbWluaXN0cmF0b3Igb2Yge3tsb2dpblNpdGV9fSBhbmQgcmVxdWVzdCBhY2Nlc3MgZm9yIHlvdXIgc2l0ZS48L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgWW91ciBicm93c2VyIGRvZXNuJ3QgYWNjZXB0IHRoaXJkLXBhcnR5IGNvb2tpZXMgZnJvbSBkb21haW4ge3tsb2dpbkRvbWFpbn19LlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5JbiB5b3VyIGJyb3dzZXIgc2V0dGluZ3MsIGVpdGhlciBhbGxvdyBhbGwgdGhpcmQtcGFydHkgY29va2llcywgb3IgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+RGlzYWxsb3cgdGhpcmQtcGFydHkgY29va2llcywgYnV0IGFkZCB7e2xvZ2luRG9tYWlufX0gYXMgYW4gZXhjZXB0aW9uLjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICAgPGk+VGhlIGFjdHVhbCBlcnJvciByZXR1cm5lZCBpcyBcInt7YnJvd3NlckZhaWx9fVwiLjxiciAvPjwvaT5cclxuICAgICAgICBQbGVhc2UgY29ycmVjdCB0aGVzZSBwcm9ibGVtcyBhbmQgdHJ5IGFnYWluLlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG4iXX0=