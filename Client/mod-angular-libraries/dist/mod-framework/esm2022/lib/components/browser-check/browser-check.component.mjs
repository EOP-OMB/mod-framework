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
    i0.ɵɵelementStart(6, "ul")(7, "li");
    i0.ɵɵtext(8);
    i0.ɵɵelementStart(9, "ul")(10, "li");
    i0.ɵɵtext(11, "Please check your network connection.");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(12, "li");
    i0.ɵɵtext(13);
    i0.ɵɵelementStart(14, "ul")(15, "li");
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(17, "li");
    i0.ɵɵtext(18);
    i0.ɵɵelementStart(19, "ul")(20, "li");
    i0.ɵɵtext(21, "In your browser settings, either allow all third-party cookies, or ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "li");
    i0.ɵɵtext(23);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(24, "i");
    i0.ɵɵtext(25);
    i0.ɵɵelement(26, "br");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(27, " Please correct these problems and try again. ");
    i0.ɵɵelementEnd()();
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
class BrowserCheckComponent {
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
    static { this.ɵfac = function BrowserCheckComponent_Factory(t) { return new (t || BrowserCheckComponent)(i0.ɵɵdirectiveInject(i1.CurrentUserService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BrowserCheckComponent, selectors: [["mod-browser-check"]], decls: 1, vars: 1, consts: [["class", "container-fluid browser-check-container", 4, "ngIf"], [1, "container-fluid", "browser-check-container"], [1, "fa", "fa-warning", "browser-check-icon"], [1, "browser-check-header-text"], [1, "browser-check-text"]], template: function BrowserCheckComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, BrowserCheckComponent_div_0_Template, 28, 7, "div", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.browserFail);
        } }, dependencies: [i2.NgIf], styles: [".browser-check-container[_ngcontent-%COMP%]{border:4px solid red;padding-top:5px;padding-bottom:5px;padding-left:10px}.browser-check-icon[_ngcontent-%COMP%]{font-size:36px;color:red;vertical-align:middle}.browser-check-text[_ngcontent-%COMP%]{font-size:16px;vertical-align:middle;padding-left:30px;padding-top:10px}.browser-check-header-text[_ngcontent-%COMP%]{font-size:24px;font-weight:700;vertical-align:middle}"] }); }
}
export { BrowserCheckComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BrowserCheckComponent, [{
        type: Component,
        args: [{ selector: 'mod-browser-check', template: "<div *ngIf=\"browserFail\" class=\"container-fluid browser-check-container\">\r\n    <span class=\"fa fa-warning browser-check-icon\"></span><span class=\"browser-check-header-text\">&nbsp;&nbsp;You can't log in to this site.</span>\r\n    <div class=\"browser-check-text\">\r\n        Possible reasons for this include:\r\n        <ul>\r\n            <li>\r\n                You can't reach the site {{loginSite}}.\r\n                <ul>\r\n                    <li>Please check your network connection.</li>\r\n                </ul>\r\n            </li>\r\n            <li>\r\n                Site {{loginSite}} does not allow cross-origin scripting (CORS) from your domain {{myDomain}}.\r\n                <ul>\r\n                    <li>Please contact the administrator of {{loginSite}} and request access for your site.</li>\r\n                </ul>\r\n            </li>\r\n            <li>\r\n                Your browser doesn't accept third-party cookies from domain {{loginDomain}}.\r\n                <ul>\r\n                    <li>In your browser settings, either allow all third-party cookies, or </li>\r\n                    <li>Disallow third-party cookies, but add {{loginDomain}} as an exception.</li>\r\n                </ul>\r\n            </li>\r\n        </ul>\r\n        <i>The actual error returned is \"{{browserFail}}\".<br /></i>\r\n        Please correct these problems and try again.\r\n    </div>\r\n</div>\r\n", styles: [".browser-check-container{border:4px solid red;padding-top:5px;padding-bottom:5px;padding-left:10px}.browser-check-icon{font-size:36px;color:red;vertical-align:middle}.browser-check-text{font-size:16px;vertical-align:middle;padding-left:30px;padding-top:10px}.browser-check-header-text{font-size:24px;font-weight:700;vertical-align:middle}\n"] }]
    }], function () { return [{ type: i1.CurrentUserService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3Nlci1jaGVjay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tb2QtZnJhbWV3b3JrL3NyYy9saWIvY29tcG9uZW50cy9icm93c2VyLWNoZWNrL2Jyb3dzZXItY2hlY2suY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbW9kLWZyYW1ld29yay9zcmMvbGliL2NvbXBvbmVudHMvYnJvd3Nlci1jaGVjay9icm93c2VyLWNoZWNrLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWlCLE1BQU0sZUFBZSxDQUFDOzs7OztJQ0F6RCw4QkFBeUU7SUFDckUsMEJBQXNEO0lBQUEsK0JBQXdDO0lBQUEsMERBQTBDO0lBQUEsaUJBQU87SUFDL0ksOEJBQWdDO0lBQzVCLG9EQUNBO0lBQUEsMEJBQUksU0FBQTtJQUVJLFlBQ0E7SUFBQSwwQkFBSSxVQUFBO0lBQ0ksc0RBQXFDO0lBQUEsaUJBQUssRUFBQSxFQUFBO0lBR3RELDJCQUFJO0lBQ0EsYUFDQTtJQUFBLDJCQUFJLFVBQUE7SUFDSSxhQUFtRjtJQUFBLGlCQUFLLEVBQUEsRUFBQTtJQUdwRywyQkFBSTtJQUNBLGFBQ0E7SUFBQSwyQkFBSSxVQUFBO0lBQ0ksb0ZBQW1FO0lBQUEsaUJBQUs7SUFDNUUsMkJBQUk7SUFBQSxhQUFzRTtJQUFBLGlCQUFLLEVBQUEsRUFBQSxFQUFBO0lBSTNGLDBCQUFHO0lBQUEsYUFBK0M7SUFBQSxzQkFBTTtJQUFBLGlCQUFJO0lBQzVELCtEQUNKO0lBQUEsaUJBQU0sRUFBQTs7O0lBckJNLGVBQ0E7SUFEQSwyRUFDQTtJQUtBLGVBQ0E7SUFEQSwySUFDQTtJQUNRLGVBQW1GO0lBQW5GLHFIQUFtRjtJQUkzRixlQUNBO0lBREEsZ0hBQ0E7SUFFUSxlQUFzRTtJQUF0RSx3R0FBc0U7SUFJbkYsZUFBK0M7SUFBL0MsbUZBQStDOztBRHBCMUQsTUFNYSxxQkFBcUI7SUFFOUIsWUFBb0Isa0JBQXNDO1FBQXRDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7SUFDMUQsQ0FBQztJQU9ELFFBQVE7UUFDSixJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ25ELElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1lBQ3RCLE9BQU87UUFDWCxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDYixDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUN0QyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztZQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUM7WUFDakQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDO1lBQ2xELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVFLENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQztzRkF0QlEscUJBQXFCO29FQUFyQixxQkFBcUI7WUNYbEMsdUVBNEJNOztZQTVCQSxzQ0FBaUI7OztTRFdWLHFCQUFxQjt1RkFBckIscUJBQXFCO2NBTmpDLFNBQVM7MkJBQ0ksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDdXJyZW50VXNlclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvY3VycmVudC11c2VyLnNlcnZpY2VcIjtcblxuZGVjbGFyZSB2YXIgJDogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ21vZC1icm93c2VyLWNoZWNrJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vYnJvd3Nlci1jaGVjay5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vYnJvd3Nlci1jaGVjay5jb21wb25lbnQuc2NzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgQnJvd3NlckNoZWNrQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY3VycmVudFVzZXJTZXJ2aWNlOiBDdXJyZW50VXNlclNlcnZpY2UpIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgYnJvd3NlckZhaWw6IHN0cmluZztcbiAgICBwdWJsaWMgbG9naW5TaXRlOiBzdHJpbmc7XG4gICAgcHVibGljIGxvZ2luRG9tYWluOiBzdHJpbmc7XG4gICAgcHVibGljIG15RG9tYWluOiBzdHJpbmc7XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jdXJyZW50VXNlclNlcnZpY2UuYnJvd3NlckNoZWNrKCkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICB0aGlzLmJyb3dzZXJGYWlsID0gJyc7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICQoXCIjbG9naW5vdXRcIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG4gICAgICAgICAgICB0aGlzLmJyb3dzZXJGYWlsID0gZXJyb3I7XG4gICAgICAgICAgICB0aGlzLmxvZ2luU2l0ZSA9IHRoaXMuY3VycmVudFVzZXJTZXJ2aWNlLnNpdGVVcmw7XG4gICAgICAgICAgICB0aGlzLmxvZ2luRG9tYWluID0gdGhpcy5jdXJyZW50VXNlclNlcnZpY2UuZG9tYWluO1xuICAgICAgICAgICAgdGhpcy5teURvbWFpbiA9IHRoaXMuY3VycmVudFVzZXJTZXJ2aWNlLmdldERvbWFpbih3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG59XG4iLCI8ZGl2ICpuZ0lmPVwiYnJvd3NlckZhaWxcIiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZCBicm93c2VyLWNoZWNrLWNvbnRhaW5lclwiPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJmYSBmYS13YXJuaW5nIGJyb3dzZXItY2hlY2staWNvblwiPjwvc3Bhbj48c3BhbiBjbGFzcz1cImJyb3dzZXItY2hlY2staGVhZGVyLXRleHRcIj4mbmJzcDsmbmJzcDtZb3UgY2FuJ3QgbG9nIGluIHRvIHRoaXMgc2l0ZS48L3NwYW4+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYnJvd3Nlci1jaGVjay10ZXh0XCI+XHJcbiAgICAgICAgUG9zc2libGUgcmVhc29ucyBmb3IgdGhpcyBpbmNsdWRlOlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgWW91IGNhbid0IHJlYWNoIHRoZSBzaXRlIHt7bG9naW5TaXRlfX0uXHJcbiAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlBsZWFzZSBjaGVjayB5b3VyIG5ldHdvcmsgY29ubmVjdGlvbi48L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgU2l0ZSB7e2xvZ2luU2l0ZX19IGRvZXMgbm90IGFsbG93IGNyb3NzLW9yaWdpbiBzY3JpcHRpbmcgKENPUlMpIGZyb20geW91ciBkb21haW4ge3tteURvbWFpbn19LlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5QbGVhc2UgY29udGFjdCB0aGUgYWRtaW5pc3RyYXRvciBvZiB7e2xvZ2luU2l0ZX19IGFuZCByZXF1ZXN0IGFjY2VzcyBmb3IgeW91ciBzaXRlLjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICBZb3VyIGJyb3dzZXIgZG9lc24ndCBhY2NlcHQgdGhpcmQtcGFydHkgY29va2llcyBmcm9tIGRvbWFpbiB7e2xvZ2luRG9tYWlufX0uXHJcbiAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPkluIHlvdXIgYnJvd3NlciBzZXR0aW5ncywgZWl0aGVyIGFsbG93IGFsbCB0aGlyZC1wYXJ0eSBjb29raWVzLCBvciA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5EaXNhbGxvdyB0aGlyZC1wYXJ0eSBjb29raWVzLCBidXQgYWRkIHt7bG9naW5Eb21haW59fSBhcyBhbiBleGNlcHRpb24uPC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICA8aT5UaGUgYWN0dWFsIGVycm9yIHJldHVybmVkIGlzIFwie3ticm93c2VyRmFpbH19XCIuPGJyIC8+PC9pPlxyXG4gICAgICAgIFBsZWFzZSBjb3JyZWN0IHRoZXNlIHByb2JsZW1zIGFuZCB0cnkgYWdhaW4uXHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbiJdfQ==