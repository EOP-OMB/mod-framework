import { Component, ViewChild, Input, Output, EventEmitter, Inject } from '@angular/core';
import { ModConfig } from '../../static/mod-config.const';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/material/input";
import * as i4 from "../mod-side-menu/mod-side-menu.component";
import * as i5 from "../mod-header/mod-header.component";
import * as i6 from "../mod-loading-overlay/mod-loading-overlay.component";
import * as i7 from "../../models/mod-framework-config.model";
const _c0 = ["sidemenu"];
function ModLayoutComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 7)(1, "input", 8);
    i0.ɵɵlistener("ngModelChange", function ModLayoutComponent_div_4_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.searchText = $event); })("keyup.enter", function ModLayoutComponent_div_4_Template_input_keyup_enter_1_listener() { i0.ɵɵrestoreView(_r3); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.onSearch()); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r0.searchText);
} }
const _c1 = ["*"];
class ModLayoutComponent {
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
    static { this.ɵfac = function ModLayoutComponent_Factory(t) { return new (t || ModLayoutComponent)(i0.ɵɵdirectiveInject(ModConfig)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ModLayoutComponent, selectors: [["mod-layout"]], viewQuery: function ModLayoutComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.sideMenu = _t.first);
        } }, inputs: { appName: "appName", menuConfig: "menuConfig" }, outputs: { userOptionSelect: "userOptionSelect", helpOptionSelect: "helpOptionSelect", search: "search" }, ngContentSelectors: _c1, decls: 9, vars: 3, consts: [[1, "mod-layout-container"], [1, "layout-header"], [3, "appName", "menuClick", "userOptionSelect", "helpOptionSelect"], ["style", "display: flex; justify-content: center;", 4, "ngIf"], [1, "layout-content"], [3, "config"], ["sidemenu", ""], [2, "display", "flex", "justify-content", "center"], ["matInput", "", "placeholder", "Search", 1, "search-box", 3, "ngModel", "ngModelChange", "keyup.enter"]], template: function ModLayoutComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelement(0, "mod-loading-overlay");
            i0.ɵɵelementStart(1, "div", 0)(2, "div", 1)(3, "mod-header", 2);
            i0.ɵɵlistener("menuClick", function ModLayoutComponent_Template_mod_header_menuClick_3_listener() { return ctx.onMenuClicked(); })("userOptionSelect", function ModLayoutComponent_Template_mod_header_userOptionSelect_3_listener($event) { return ctx.onUserOptionSelect($event); })("helpOptionSelect", function ModLayoutComponent_Template_mod_header_helpOptionSelect_3_listener($event) { return ctx.onHelpOptionSelect($event); });
            i0.ɵɵtemplate(4, ModLayoutComponent_div_4_Template, 2, 1, "div", 3);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(5, "div", 4)(6, "mod-side-menu", 5, 6);
            i0.ɵɵprojection(8);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("appName", ctx.appName);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.config.showSearch);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("config", ctx.menuConfig);
        } }, dependencies: [i1.NgIf, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgModel, i3.MatInput, i4.ModSideMenuComponent, i5.ModHeaderComponent, i6.ModLoadingOverlayComponent], styles: [".mod-layout-container[_ngcontent-%COMP%]{display:flex;flex-flow:column;height:100%}.layout-header[_ngcontent-%COMP%]{flex:0}.layout-content[_ngcontent-%COMP%]{flex:1;overflow:auto}.search-box[_ngcontent-%COMP%]{background-color:#fff;box-shadow:none;border:none;min-height:32px;width:50%;color:#000;font-size:14px;padding-top:0;padding-right:15px;border-radius:16px;padding-left:15px;margin-left:15px;margin-right:15px}.search-box[_ngcontent-%COMP%]:focus{outline:none}"] }); }
}
export { ModLayoutComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModLayoutComponent, [{
        type: Component,
        args: [{ selector: 'mod-layout', template: "<mod-loading-overlay></mod-loading-overlay>\r\n<div class=\"mod-layout-container\">\r\n    <div class=\"layout-header\">\r\n        <!--<mod-welcome-banner>\r\n        </mod-welcome-banner>-->\r\n        <mod-header [appName]=\"appName\" (menuClick)=\"onMenuClicked()\" (userOptionSelect)=\"onUserOptionSelect($event)\" (helpOptionSelect)=\"onHelpOptionSelect($event)\">\r\n            <div *ngIf=\"config.showSearch\" style=\"display: flex; justify-content: center;\">\r\n                <input [(ngModel)]=\"searchText\" matInput placeholder=\"Search\" class=\"search-box\" (keyup.enter)=\"onSearch()\">\r\n            </div>\r\n        </mod-header>\r\n    </div>\r\n    <div class=\"layout-content\">\r\n        <mod-side-menu [config]=\"menuConfig\" #sidemenu>\r\n            <ng-content></ng-content>\r\n        </mod-side-menu>\r\n    </div>\r\n</div>\r\n", styles: [".mod-layout-container{display:flex;flex-flow:column;height:100%}.layout-header{flex:0}.layout-content{flex:1;overflow:auto}.search-box{background-color:#fff;box-shadow:none;border:none;min-height:32px;width:50%;color:#000;font-size:14px;padding-top:0;padding-right:15px;border-radius:16px;padding-left:15px;margin-left:15px;margin-right:15px}.search-box:focus{outline:none}\n"] }]
    }], function () { return [{ type: i7.ModFrameworkConfig, decorators: [{
                type: Inject,
                args: [ModConfig]
            }] }]; }, { sideMenu: [{
            type: ViewChild,
            args: ['sidemenu', { static: true }]
        }], appName: [{
            type: Input
        }], menuConfig: [{
            type: Input
        }], userOptionSelect: [{
            type: Output
        }], helpOptionSelect: [{
            type: Output
        }], search: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kLWxheW91dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tb2QtZnJhbWV3b3JrL3NyYy9saWIvY29tcG9uZW50cy9tb2QtbGF5b3V0L21vZC1sYXlvdXQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbW9kLWZyYW1ld29yay9zcmMvbGliL2NvbXBvbmVudHMvbW9kLWxheW91dC9tb2QtbGF5b3V0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUlsRyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sK0JBQStCLENBQUM7Ozs7Ozs7Ozs7OztJQ0U5Qyw4QkFBK0UsZUFBQTtJQUNwRSxrT0FBd0IsNkpBQWlFLGVBQUEsaUJBQVUsQ0FBQSxJQUEzRTtJQUEvQixpQkFBNEcsRUFBQTs7O0lBQXJHLGVBQXdCO0lBQXhCLDJDQUF3Qjs7O0FERC9DLE1BS2Esa0JBQWtCO0lBdUIzQixZQUErQixNQUEwQjtRQVp6RCxxQkFBZ0IsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBRzlDLHFCQUFnQixHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFHOUMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFPaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDekIsQ0FBQztJQUVELFFBQVE7SUFDUixDQUFDO0lBRU0sYUFBYTtRQUNoQixJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFTSxrQkFBa0IsQ0FBQyxNQUFjO1FBQ3BDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVNLGtCQUFrQixDQUFDLE1BQWM7UUFDcEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRU0sUUFBUTtRQUNYLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztJQUN6QixDQUFDO21GQTdDUSxrQkFBa0IsdUJBdUJQLFNBQVM7b0VBdkJwQixrQkFBa0I7Ozs7Ozs7WUNYL0Isc0NBQTJDO1lBQzNDLDhCQUFrQyxhQUFBLG9CQUFBO1lBSU0sMkdBQWEsbUJBQWUsSUFBQyxrSEFBcUIsOEJBQTBCLElBQS9DLGtIQUFxRSw4QkFBMEIsSUFBL0Y7WUFDekQsbUVBRU07WUFDVixpQkFBYSxFQUFBO1lBRWpCLDhCQUE0QiwwQkFBQTtZQUVwQixrQkFBeUI7WUFDN0IsaUJBQWdCLEVBQUEsRUFBQTs7WUFUSixlQUFtQjtZQUFuQixxQ0FBbUI7WUFDckIsZUFBdUI7WUFBdkIsNENBQXVCO1lBTWxCLGVBQXFCO1lBQXJCLHVDQUFxQjs7O1NERC9CLGtCQUFrQjt1RkFBbEIsa0JBQWtCO2NBTDlCLFNBQVM7MkJBQ0ksWUFBWTs7c0JBMkJULE1BQU07dUJBQUMsU0FBUzt3QkFyQlksUUFBUTtrQkFBaEQsU0FBUzttQkFBQyxVQUFVLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO1lBR3ZDLE9BQU87a0JBRE4sS0FBSztZQUlOLFVBQVU7a0JBRFQsS0FBSztZQUlOLGdCQUFnQjtrQkFEZixNQUFNO1lBSVAsZ0JBQWdCO2tCQURmLE1BQU07WUFJUCxNQUFNO2tCQURMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNb2RTaWRlTWVudUNvbXBvbmVudCB9IGZyb20gJy4uL21vZC1zaWRlLW1lbnUvbW9kLXNpZGUtbWVudS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNb2RTaWRlTWVudUNvbmZpZyB9IGZyb20gJy4uLy4uL21vZGVscy9tb2Qtc2lkZS1tZW51LWNvbmZpZy5tb2RlbCc7XHJcbmltcG9ydCB7IE1vZEZyYW1ld29ya0NvbmZpZyB9IGZyb20gJy4uLy4uL21vZGVscy9tb2QtZnJhbWV3b3JrLWNvbmZpZy5tb2RlbCc7XHJcbmltcG9ydCB7IE1vZENvbmZpZyB9IGZyb20gJy4uLy4uL3N0YXRpYy9tb2QtY29uZmlnLmNvbnN0JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdtb2QtbGF5b3V0JyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9tb2QtbGF5b3V0LmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL21vZC1sYXlvdXQuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTW9kTGF5b3V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBAVmlld0NoaWxkKCdzaWRlbWVudScsIHsgc3RhdGljOiB0cnVlIH0pIHNpZGVNZW51OiBNb2RTaWRlTWVudUNvbXBvbmVudDtcclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgYXBwTmFtZTogc3RyaW5nO1xyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBtZW51Q29uZmlnOiBNb2RTaWRlTWVudUNvbmZpZztcclxuXHJcbiAgICBAT3V0cHV0KClcclxuICAgIHVzZXJPcHRpb25TZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuXHJcbiAgICBAT3V0cHV0KClcclxuICAgIGhlbHBPcHRpb25TZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuXHJcbiAgICBAT3V0cHV0KClcclxuICAgIHNlYXJjaCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG5cclxuICAgIHB1YmxpYyBzZWFyY2hUZXh0OiBzdHJpbmc7XHJcblxyXG4gICAgcHVibGljIGNvbmZpZzogTW9kRnJhbWV3b3JrQ29uZmlnO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKEBJbmplY3QoTW9kQ29uZmlnKSBjb25maWc6IE1vZEZyYW1ld29ya0NvbmZpZykge1xyXG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbk1lbnVDbGlja2VkKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2lkZU1lbnUudG9nZ2xlU2lkZU5hdigpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblVzZXJPcHRpb25TZWxlY3Qob3B0aW9uOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnVzZXJPcHRpb25TZWxlY3QuZW1pdChvcHRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkhlbHBPcHRpb25TZWxlY3Qob3B0aW9uOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmhlbHBPcHRpb25TZWxlY3QuZW1pdChvcHRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblNlYXJjaCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNlYXJjaC5lbWl0KHRoaXMuc2VhcmNoVGV4dCk7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hUZXh0ID0gJyc7XHJcbiAgICB9XHJcbn1cclxuIiwiPG1vZC1sb2FkaW5nLW92ZXJsYXk+PC9tb2QtbG9hZGluZy1vdmVybGF5PlxyXG48ZGl2IGNsYXNzPVwibW9kLWxheW91dC1jb250YWluZXJcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJsYXlvdXQtaGVhZGVyXCI+XHJcbiAgICAgICAgPCEtLTxtb2Qtd2VsY29tZS1iYW5uZXI+XHJcbiAgICAgICAgPC9tb2Qtd2VsY29tZS1iYW5uZXI+LS0+XHJcbiAgICAgICAgPG1vZC1oZWFkZXIgW2FwcE5hbWVdPVwiYXBwTmFtZVwiIChtZW51Q2xpY2spPVwib25NZW51Q2xpY2tlZCgpXCIgKHVzZXJPcHRpb25TZWxlY3QpPVwib25Vc2VyT3B0aW9uU2VsZWN0KCRldmVudClcIiAoaGVscE9wdGlvblNlbGVjdCk9XCJvbkhlbHBPcHRpb25TZWxlY3QoJGV2ZW50KVwiPlxyXG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiY29uZmlnLnNob3dTZWFyY2hcIiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogY2VudGVyO1wiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IFsobmdNb2RlbCldPVwic2VhcmNoVGV4dFwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwiU2VhcmNoXCIgY2xhc3M9XCJzZWFyY2gtYm94XCIgKGtleXVwLmVudGVyKT1cIm9uU2VhcmNoKClcIj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9tb2QtaGVhZGVyPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwibGF5b3V0LWNvbnRlbnRcIj5cclxuICAgICAgICA8bW9kLXNpZGUtbWVudSBbY29uZmlnXT1cIm1lbnVDb25maWdcIiAjc2lkZW1lbnU+XHJcbiAgICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgICAgICA8L21vZC1zaWRlLW1lbnU+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbiJdfQ==