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
ModWelcomeBanner.ɵcmp = i0.ɵɵdefineComponent({ type: ModWelcomeBanner, selectors: [["mod-welcome-banner"]], outputs: { onLogin: "onLogin", onLogout: "onLogout" }, decls: 4, vars: 0, consts: [["role", "banner", 1, "mod-header"], [1, "mod-welcome-banner"], [1, "welcome-user"]], template: function ModWelcomeBanner_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "header", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelement(3, "mod-user-display");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, directives: [i1.ModUserDisplayComponent], styles: [".mod-header[_ngcontent-%COMP%]{display:flex;flex-direction:column}.mod-welcome-banner[_ngcontent-%COMP%]{background-color:#f0f0f0;display:flex;font-family:Source Sans Pro Web,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif;padding-bottom:0;padding-left:10px;padding-right:10px}.welcome-user[_ngcontent-%COMP%]{display:flex;flex:1;font-size:.85em;font-weight:700;justify-content:flex-end;padding-right:5px;padding-top:2px}.loginout-button[_ngcontent-%COMP%]{display:inline!important;vertical-align:middle;width:auto!important}.loginout-text[_ngcontent-%COMP%]{align-items:center}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ModWelcomeBanner, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kLXdlbGNvbWUtYmFubmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21vZC1mcmFtZXdvcmsvc3JjL2xpYi9jb21wb25lbnRzL21vZC13ZWxjb21lLWJhbm5lci9tb2Qtd2VsY29tZS1iYW5uZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbW9kLWZyYW1ld29yay9zcmMvbGliL2NvbXBvbmVudHMvbW9kLXdlbGNvbWUtYmFubmVyL21vZC13ZWxjb21lLWJhbm5lci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQU94RSxNQUFNLE9BQU8sZ0JBQWdCO0lBT3pCO1FBTEEsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFHbEMsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7SUFFbkIsQ0FBQztJQUVqQixRQUFRO0lBQ1IsQ0FBQzs7Z0ZBVlEsZ0JBQWdCO3FEQUFoQixnQkFBZ0I7UUNQN0IsaUNBQ0k7UUFBQSw4QkFDSTtRQUFBLDhCQUNJO1FBQUEsbUNBQXFDO1FBQ3pDLGlCQUFNO1FBQ1YsaUJBQU07UUFDVixpQkFBUzs7a0REQ0ksZ0JBQWdCO2NBTDVCLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixXQUFXLEVBQUUscUNBQXFDO2dCQUNsRCxTQUFTLEVBQUUsQ0FBQyxxQ0FBcUMsQ0FBQzthQUNyRDs7a0JBRUksTUFBTTs7a0JBR04sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ21vZC13ZWxjb21lLWJhbm5lcicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL21vZC13ZWxjb21lLWJhbm5lci5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vbW9kLXdlbGNvbWUtYmFubmVyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTW9kV2VsY29tZUJhbm5lciBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgQE91dHB1dCgpXG4gICAgb25Mb2dpbiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gICAgQE91dHB1dCgpXHJcbiAgICBvbkxvZ291dCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gICAgY29uc3RydWN0b3IoKSB7IH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgIH1cblxufVxuIiwiPGhlYWRlciBjbGFzcz1cIm1vZC1oZWFkZXJcIiByb2xlPVwiYmFubmVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwibW9kLXdlbGNvbWUtYmFubmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIndlbGNvbWUtdXNlclwiPlxyXG4gICAgICAgICAgICA8bW9kLXVzZXItZGlzcGxheT48L21vZC11c2VyLWRpc3BsYXk+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC9oZWFkZXI+XHJcbiJdfQ==