import { Component, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../mod-user-display/mod-user-display.component";
class ModWelcomeBanner {
    constructor() {
        this.onLogin = new EventEmitter();
        this.onLogout = new EventEmitter();
    }
    ngOnInit() {
    }
    static { this.ɵfac = function ModWelcomeBanner_Factory(t) { return new (t || ModWelcomeBanner)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ModWelcomeBanner, selectors: [["mod-welcome-banner"]], outputs: { onLogin: "onLogin", onLogout: "onLogout" }, decls: 4, vars: 0, consts: [["role", "banner", 1, "mod-header"], [1, "mod-welcome-banner"], [1, "welcome-user"]], template: function ModWelcomeBanner_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "header", 0)(1, "div", 1)(2, "div", 2);
            i0.ɵɵelement(3, "mod-user-display");
            i0.ɵɵelementEnd()()();
        } }, dependencies: [i1.ModUserDisplayComponent], styles: [".mod-header[_ngcontent-%COMP%]{display:flex;flex-direction:column}.mod-welcome-banner[_ngcontent-%COMP%]{padding-left:10px;padding-right:10px;background-color:#f0f0f0;padding-bottom:0;display:flex;font-family:Source Sans Pro Web,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif}.welcome-user[_ngcontent-%COMP%]{font-weight:700;font-size:.85em;padding-top:2px;padding-right:5px;flex:1;display:flex;justify-content:flex-end}.loginout-button[_ngcontent-%COMP%]{vertical-align:middle;width:auto!important;display:inline!important}.loginout-text[_ngcontent-%COMP%]{align-items:center}"] }); }
}
export { ModWelcomeBanner };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModWelcomeBanner, [{
        type: Component,
        args: [{ selector: 'mod-welcome-banner', template: "<header class=\"mod-header\" role=\"banner\">\r\n    <div class=\"mod-welcome-banner\">\r\n        <div class=\"welcome-user\">\r\n            <mod-user-display></mod-user-display>\r\n        </div>\r\n    </div>\r\n</header>\r\n", styles: [".mod-header{display:flex;flex-direction:column}.mod-welcome-banner{padding-left:10px;padding-right:10px;background-color:#f0f0f0;padding-bottom:0;display:flex;font-family:Source Sans Pro Web,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif}.welcome-user{font-weight:700;font-size:.85em;padding-top:2px;padding-right:5px;flex:1;display:flex;justify-content:flex-end}.loginout-button{vertical-align:middle;width:auto!important;display:inline!important}.loginout-text{align-items:center}\n"] }]
    }], function () { return []; }, { onLogin: [{
            type: Output
        }], onLogout: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kLXdlbGNvbWUtYmFubmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21vZC1mcmFtZXdvcmsvc3JjL2xpYi9jb21wb25lbnRzL21vZC13ZWxjb21lLWJhbm5lci9tb2Qtd2VsY29tZS1iYW5uZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbW9kLWZyYW1ld29yay9zcmMvbGliL2NvbXBvbmVudHMvbW9kLXdlbGNvbWUtYmFubmVyL21vZC13ZWxjb21lLWJhbm5lci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQUV4RSxNQUthLGdCQUFnQjtJQU96QjtRQUxBLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBR2xDLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBRW5CLENBQUM7SUFFakIsUUFBUTtJQUNSLENBQUM7aUZBVlEsZ0JBQWdCO29FQUFoQixnQkFBZ0I7WUNQN0IsaUNBQXlDLGFBQUEsYUFBQTtZQUc3QixtQ0FBcUM7WUFDekMsaUJBQU0sRUFBQSxFQUFBOzs7U0RHRCxnQkFBZ0I7dUZBQWhCLGdCQUFnQjtjQUw1QixTQUFTOzJCQUNJLG9CQUFvQjtzQ0FNOUIsT0FBTztrQkFETixNQUFNO1lBSVAsUUFBUTtrQkFEUCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbW9kLXdlbGNvbWUtYmFubmVyJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbW9kLXdlbGNvbWUtYmFubmVyLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9tb2Qtd2VsY29tZS1iYW5uZXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNb2RXZWxjb21lQmFubmVyIGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBAT3V0cHV0KClcbiAgICBvbkxvZ2luID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgICBAT3V0cHV0KClcclxuICAgIG9uTG9nb3V0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgfVxuXG59XG4iLCI8aGVhZGVyIGNsYXNzPVwibW9kLWhlYWRlclwiIHJvbGU9XCJiYW5uZXJcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJtb2Qtd2VsY29tZS1iYW5uZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwid2VsY29tZS11c2VyXCI+XHJcbiAgICAgICAgICAgIDxtb2QtdXNlci1kaXNwbGF5PjwvbW9kLXVzZXItZGlzcGxheT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L2hlYWRlcj5cclxuIl19