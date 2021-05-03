import { Component, ViewChild, Input, Output, EventEmitter, Inject } from '@angular/core';
import { ModConfig } from '../../static/mod-config.const';
import * as i0 from "@angular/core";
import * as i1 from "../../models/mod-framework-config.model";
import * as i2 from "../mod-loading-overlay/mod-loading-overlay.component";
import * as i3 from "../mod-header/mod-header.component";
import * as i4 from "@angular/common";
import * as i5 from "../mod-side-menu/mod-side-menu.component";
import * as i6 from "@angular/material/input";
import * as i7 from "@angular/forms";
const _c0 = ["sidemenu"];
function ModLayoutComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵelementStart(1, "input", 8);
    i0.ɵɵlistener("ngModelChange", function ModLayoutComponent_div_4_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.searchText = $event; })("keyup.enter", function ModLayoutComponent_div_4_Template_input_keyup_enter_1_listener() { i0.ɵɵrestoreView(_r3); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.onSearch(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r0.searchText);
} }
const _c1 = ["*"];
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
ModLayoutComponent.ɵfac = function ModLayoutComponent_Factory(t) { return new (t || ModLayoutComponent)(i0.ɵɵdirectiveInject(ModConfig)); };
ModLayoutComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ModLayoutComponent, selectors: [["mod-layout"]], viewQuery: function ModLayoutComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵstaticViewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.sideMenu = _t.first);
    } }, inputs: { appName: "appName", menuConfig: "menuConfig" }, outputs: { userOptionSelect: "userOptionSelect", helpOptionSelect: "helpOptionSelect", search: "search" }, ngContentSelectors: _c1, decls: 9, vars: 3, consts: [[1, "mod-layout-container"], [1, "layout-header"], [3, "appName", "menuClick", "userOptionSelect", "helpOptionSelect"], ["style", "display: flex; justify-content: center;", 4, "ngIf"], [1, "layout-content"], [3, "config"], ["sidemenu", ""], [2, "display", "flex", "justify-content", "center"], ["matInput", "", "placeholder", "Search", 1, "search-box", 3, "ngModel", "ngModelChange", "keyup.enter"]], template: function ModLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelement(0, "mod-loading-overlay");
        i0.ɵɵelementStart(1, "div", 0);
        i0.ɵɵelementStart(2, "div", 1);
        i0.ɵɵelementStart(3, "mod-header", 2);
        i0.ɵɵlistener("menuClick", function ModLayoutComponent_Template_mod_header_menuClick_3_listener() { return ctx.onMenuClicked(); })("userOptionSelect", function ModLayoutComponent_Template_mod_header_userOptionSelect_3_listener($event) { return ctx.onUserOptionSelect($event); })("helpOptionSelect", function ModLayoutComponent_Template_mod_header_helpOptionSelect_3_listener($event) { return ctx.onHelpOptionSelect($event); });
        i0.ɵɵtemplate(4, ModLayoutComponent_div_4_Template, 2, 1, "div", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div", 4);
        i0.ɵɵelementStart(6, "mod-side-menu", 5, 6);
        i0.ɵɵprojection(8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("appName", ctx.appName);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.config.showSearch);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("config", ctx.menuConfig);
    } }, directives: [i2.ModLoadingOverlayComponent, i3.ModHeaderComponent, i4.NgIf, i5.ModSideMenuComponent, i6.MatInput, i7.DefaultValueAccessor, i7.NgControlStatus, i7.NgModel], styles: [".mod-layout-container[_ngcontent-%COMP%]{display:flex;flex-flow:column;height:100%}.layout-header[_ngcontent-%COMP%]{flex:0}.layout-content[_ngcontent-%COMP%]{flex:1;overflow:auto}.search-box[_ngcontent-%COMP%]{background-color:#fff;border:none;border-radius:16px;box-shadow:none;color:#000;font-size:14px;margin-left:15px;margin-right:15px;min-height:32px;padding-left:15px;padding-right:15px;padding-top:0;width:50%}.search-box[_ngcontent-%COMP%]:focus{outline:none}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ModLayoutComponent, [{
        type: Component,
        args: [{
                selector: 'mod-layout',
                templateUrl: './mod-layout.component.html',
                styleUrls: ['./mod-layout.component.scss']
            }]
    }], function () { return [{ type: i1.ModFrameworkConfig, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kLWxheW91dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tb2QtZnJhbWV3b3JrL3NyYy9saWIvY29tcG9uZW50cy9tb2QtbGF5b3V0L21vZC1sYXlvdXQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbW9kLWZyYW1ld29yay9zcmMvbGliL2NvbXBvbmVudHMvbW9kLWxheW91dC9tb2QtbGF5b3V0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUlsRyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sK0JBQStCLENBQUM7Ozs7Ozs7Ozs7OztJQ0U5Qyw4QkFDSTtJQUFBLGdDQUNKO0lBRFcsa05BQXdCLGtMQUFBO0lBQS9CLGlCQUNKO0lBQUEsaUJBQU07OztJQURLLGVBQXdCO0lBQXhCLDJDQUF3Qjs7O0FESS9DLE1BQU0sT0FBTyxrQkFBa0I7SUF1QjNCLFlBQStCLE1BQTBCO1FBWnpELHFCQUFnQixHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFHOUMscUJBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUc5QyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQU9oQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN6QixDQUFDO0lBRUQsUUFBUTtJQUNSLENBQUM7SUFFTSxhQUFhO1FBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVNLGtCQUFrQixDQUFDLE1BQWM7UUFDcEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRU0sa0JBQWtCLENBQUMsTUFBYztRQUNwQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFTSxRQUFRO1FBQ1gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO0lBQ3pCLENBQUM7O29GQTdDUSxrQkFBa0IsdUJBdUJQLFNBQVM7dURBdkJwQixrQkFBa0I7Ozs7Ozs7UUNYL0Isc0NBQTJDO1FBQzNDLDhCQUNJO1FBQUEsOEJBQ0k7UUFFQSxxQ0FDSTtRQUQ0QiwyR0FBYSxtQkFBZSxJQUFDLGtIQUFxQiw4QkFBMEIsSUFBL0Msa0hBQXFFLDhCQUEwQixJQUEvRjtRQUN6RCxtRUFDSTtRQUVSLGlCQUFhO1FBQ2pCLGlCQUFNO1FBQ04sOEJBQ0k7UUFBQSwyQ0FDSTtRQUFBLGtCQUFZO1FBQ2hCLGlCQUFnQjtRQUNwQixpQkFBTTtRQUNWLGlCQUFNOztRQVhjLGVBQW1CO1FBQW5CLHFDQUFtQjtRQUN0QixlQUF5QjtRQUF6Qiw0Q0FBeUI7UUFNbkIsZUFBcUI7UUFBckIsdUNBQXFCOztrREREL0Isa0JBQWtCO2NBTDlCLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsV0FBVyxFQUFFLDZCQUE2QjtnQkFDMUMsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7YUFDN0M7O3NCQXdCZ0IsTUFBTTt1QkFBQyxTQUFTOztrQkFyQjVCLFNBQVM7bUJBQUMsVUFBVSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7a0JBRXRDLEtBQUs7O2tCQUdMLEtBQUs7O2tCQUdMLE1BQU07O2tCQUdOLE1BQU07O2tCQUdOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTW9kU2lkZU1lbnVDb21wb25lbnQgfSBmcm9tICcuLi9tb2Qtc2lkZS1tZW51L21vZC1zaWRlLW1lbnUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTW9kU2lkZU1lbnVDb25maWcgfSBmcm9tICcuLi8uLi9tb2RlbHMvbW9kLXNpZGUtbWVudS1jb25maWcubW9kZWwnO1xyXG5pbXBvcnQgeyBNb2RGcmFtZXdvcmtDb25maWcgfSBmcm9tICcuLi8uLi9tb2RlbHMvbW9kLWZyYW1ld29yay1jb25maWcubW9kZWwnO1xyXG5pbXBvcnQgeyBNb2RDb25maWcgfSBmcm9tICcuLi8uLi9zdGF0aWMvbW9kLWNvbmZpZy5jb25zdCc7XHJcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdtb2QtbGF5b3V0JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbW9kLWxheW91dC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vbW9kLWxheW91dC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE1vZExheW91dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBAVmlld0NoaWxkKCdzaWRlbWVudScsIHsgc3RhdGljOiB0cnVlIH0pIHNpZGVNZW51OiBNb2RTaWRlTWVudUNvbXBvbmVudDtcblxuICAgIEBJbnB1dCgpXG4gICAgYXBwTmFtZTogc3RyaW5nO1xuXG4gICAgQElucHV0KClcbiAgICBtZW51Q29uZmlnOiBNb2RTaWRlTWVudUNvbmZpZztcblxuICAgIEBPdXRwdXQoKVxuICAgIHVzZXJPcHRpb25TZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICAgIEBPdXRwdXQoKVxuICAgIGhlbHBPcHRpb25TZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICAgIEBPdXRwdXQoKVxuICAgIHNlYXJjaCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gICAgcHVibGljIHNlYXJjaFRleHQ6IHN0cmluZztcblxuICAgIHB1YmxpYyBjb25maWc6IE1vZEZyYW1ld29ya0NvbmZpZztcblxuICAgIGNvbnN0cnVjdG9yKEBJbmplY3QoTW9kQ29uZmlnKSBjb25maWc6IE1vZEZyYW1ld29ya0NvbmZpZykge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25NZW51Q2xpY2tlZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zaWRlTWVudS50b2dnbGVTaWRlTmF2KCk7XHJcbiAgICB9XG5cbiAgICBwdWJsaWMgb25Vc2VyT3B0aW9uU2VsZWN0KG9wdGlvbjogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMudXNlck9wdGlvblNlbGVjdC5lbWl0KG9wdGlvbik7XHJcbiAgICB9XG5cbiAgICBwdWJsaWMgb25IZWxwT3B0aW9uU2VsZWN0KG9wdGlvbjogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaGVscE9wdGlvblNlbGVjdC5lbWl0KG9wdGlvbik7XHJcbiAgICB9XG5cbiAgICBwdWJsaWMgb25TZWFyY2goKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2VhcmNoLmVtaXQodGhpcy5zZWFyY2hUZXh0KTtcclxuICAgICAgICB0aGlzLnNlYXJjaFRleHQgPSAnJztcclxuICAgIH1cbn1cbiIsIjxtb2QtbG9hZGluZy1vdmVybGF5PjwvbW9kLWxvYWRpbmctb3ZlcmxheT5cclxuPGRpdiBjbGFzcz1cIm1vZC1sYXlvdXQtY29udGFpbmVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwibGF5b3V0LWhlYWRlclwiPlxyXG4gICAgICAgIDwhLS08bW9kLXdlbGNvbWUtYmFubmVyPlxyXG4gICAgICAgIDwvbW9kLXdlbGNvbWUtYmFubmVyPi0tPlxyXG4gICAgICAgIDxtb2QtaGVhZGVyIFthcHBOYW1lXT1cImFwcE5hbWVcIiAobWVudUNsaWNrKT1cIm9uTWVudUNsaWNrZWQoKVwiICh1c2VyT3B0aW9uU2VsZWN0KT1cIm9uVXNlck9wdGlvblNlbGVjdCgkZXZlbnQpXCIgKGhlbHBPcHRpb25TZWxlY3QpPVwib25IZWxwT3B0aW9uU2VsZWN0KCRldmVudClcIj5cclxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cImNvbmZpZy5zaG93U2VhcmNoXCIgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBbKG5nTW9kZWwpXT1cInNlYXJjaFRleHRcIiBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiIGNsYXNzPVwic2VhcmNoLWJveFwiIChrZXl1cC5lbnRlcik9XCJvblNlYXJjaCgpXCI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbW9kLWhlYWRlcj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImxheW91dC1jb250ZW50XCI+XHJcbiAgICAgICAgPG1vZC1zaWRlLW1lbnUgW2NvbmZpZ109XCJtZW51Q29uZmlnXCIgI3NpZGVtZW51PlxyXG4gICAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICAgICAgPC9tb2Qtc2lkZS1tZW51PlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG4iXX0=