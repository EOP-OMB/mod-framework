import { Component, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../mod-user-display/mod-user-display.component";
export class ModWelcomeBanner {
    constructor() {
        this.onLogin = new EventEmitter();
        this.onLogout = new EventEmitter();
    }
    ngOnInit() {
    }
}
ModWelcomeBanner.ɵfac = function ModWelcomeBanner_Factory(t) { return new (t || ModWelcomeBanner)(); };
ModWelcomeBanner.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ModWelcomeBanner, selectors: [["mod-welcome-banner"]], outputs: { onLogin: "onLogin", onLogout: "onLogout" }, decls: 4, vars: 0, consts: [["role", "banner", 1, "mod-header"], [1, "mod-welcome-banner"], [1, "welcome-user"]], template: function ModWelcomeBanner_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "header", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelement(3, "mod-user-display");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, directives: [i1.ModUserDisplayComponent], styles: [".mod-header[_ngcontent-%COMP%]{display:flex;flex-direction:column}.mod-welcome-banner[_ngcontent-%COMP%]{padding-left:10px;padding-right:10px;background-color:#f0f0f0;padding-bottom:0;display:flex;font-family:Source Sans Pro Web,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif}.welcome-user[_ngcontent-%COMP%]{font-weight:700;font-size:.85em;padding-top:2px;padding-right:5px;flex:1;display:flex;justify-content:flex-end}.loginout-button[_ngcontent-%COMP%]{vertical-align:middle;width:auto!important;display:inline!important}.loginout-text[_ngcontent-%COMP%]{align-items:center}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModWelcomeBanner, [{
        type: Component,
        args: [{
                selector: 'mod-welcome-banner',
                templateUrl: './mod-welcome-banner.component.html',
                styleUrls: ['./mod-welcome-banner.component.scss']
            }]
    }], function () { return []; }, { onLogin: [{
            type: Output
        }], onLogout: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kLXdlbGNvbWUtYmFubmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21vZC1mcmFtZXdvcmsvc3JjL2xpYi9jb21wb25lbnRzL21vZC13ZWxjb21lLWJhbm5lci9tb2Qtd2VsY29tZS1iYW5uZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbW9kLWZyYW1ld29yay9zcmMvbGliL2NvbXBvbmVudHMvbW9kLXdlbGNvbWUtYmFubmVyL21vZC13ZWxjb21lLWJhbm5lci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQU94RSxNQUFNLE9BQU8sZ0JBQWdCO0lBT3pCO1FBTEEsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFHbEMsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7SUFFbkIsQ0FBQztJQUVqQixRQUFRO0lBQ1IsQ0FBQzs7Z0ZBVlEsZ0JBQWdCO21FQUFoQixnQkFBZ0I7UUNQN0IsaUNBQXlDO1FBQ3JDLDhCQUFnQztRQUM1Qiw4QkFBMEI7UUFDdEIsbUNBQXFDO1FBQ3pDLGlCQUFNO1FBQ1YsaUJBQU07UUFDVixpQkFBUzs7dUZEQ0ksZ0JBQWdCO2NBTDVCLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixXQUFXLEVBQUUscUNBQXFDO2dCQUNsRCxTQUFTLEVBQUUsQ0FBQyxxQ0FBcUMsQ0FBQzthQUNyRDtzQ0FHRyxPQUFPO2tCQUROLE1BQU07WUFJUCxRQUFRO2tCQURQLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdtb2Qtd2VsY29tZS1iYW5uZXInLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9tb2Qtd2VsY29tZS1iYW5uZXIuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL21vZC13ZWxjb21lLWJhbm5lci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE1vZFdlbGNvbWVCYW5uZXIgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIEBPdXRwdXQoKVxuICAgIG9uTG9naW4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICAgIEBPdXRwdXQoKVxyXG4gICAgb25Mb2dvdXQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICB9XG5cbn1cbiIsIjxoZWFkZXIgY2xhc3M9XCJtb2QtaGVhZGVyXCIgcm9sZT1cImJhbm5lclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cIm1vZC13ZWxjb21lLWJhbm5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3ZWxjb21lLXVzZXJcIj5cclxuICAgICAgICAgICAgPG1vZC11c2VyLWRpc3BsYXk+PC9tb2QtdXNlci1kaXNwbGF5PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvaGVhZGVyPlxyXG4iXX0=