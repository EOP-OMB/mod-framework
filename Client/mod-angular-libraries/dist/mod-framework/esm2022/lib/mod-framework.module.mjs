import { NgModule, APP_INITIALIZER, SkipSelf, Optional } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
// Configuration
import { ModConfig } from './static/mod-config.const';
// Services
import { LoadingIntercepter } from './services/loading.interceptor';
import { CurrentUserService } from './services/current-user.service';
import { LoadingService } from './services/loading.service';
// Modules
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule, NgIf } from '@angular/common';
// Components
import { ModLayoutComponent } from './components/mod-layout/mod-layout.component';
import { ModHeaderComponent } from './components/mod-header/mod-header.component';
import { ModWelcomeBanner } from './components/mod-welcome-banner/mod-welcome-banner.component';
import { ModSideMenuComponent } from './components/mod-side-menu/mod-side-menu.component';
import { ModProgressSpinnerComponent } from './components/mod-progress-spinner/mod-progress-spinner.component';
import { ModLoadingOverlayComponent } from './components/mod-loading-overlay/mod-loading-overlay.component';
import { ModUserDisplayComponent } from './components/mod-user-display/mod-user-display.component';
import { BrowserCheckComponent } from './components/browser-check/browser-check.component';
import { HttpRequestInterceptor } from './services/http-request.interceptor';
import { RoleGuardService } from './services/role-guard.service';
import { BrowserModule } from '@angular/platform-browser';
import * as i0 from "@angular/core";
export function initiateSingleSignOn(userService) {
    return () => {
        var auth = sessionStorage.getItem("authenticating")?.toString();
        if (auth) {
            return userService.login().then(response => {
                sessionStorage.removeItem("authenticating");
            });
        }
        else {
            userService.redirectLogin();
            let promise = new Promise((resolve, reject) => {
                reject("Authenticating");
            });
            return promise;
        }
    };
}
class ModFrameworkModule {
    static forRoot(config = null) {
        return {
            ngModule: ModFrameworkModule,
            providers: [
                {
                    provide: ModConfig,
                    useValue: config
                },
                CurrentUserService,
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: LoadingIntercepter,
                    multi: true
                },
                LoadingService,
                // see https://weblog.west-wind.com/posts/2019/Apr/07/Creating-a-custom-HttpInterceptor-to-handle-withCredentials
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: HttpRequestInterceptor,
                    multi: true
                },
                {
                    provide: APP_INITIALIZER,
                    useFactory: initiateSingleSignOn,
                    multi: true,
                    deps: [CurrentUserService]
                },
                RoleGuardService,
            ]
        };
    }
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('ModFrameworkModule is already loaded. Import it in the AppModule only');
        }
    }
    static { this.ɵfac = function ModFrameworkModule_Factory(t) { return new (t || ModFrameworkModule)(i0.ɵɵinject(ModFrameworkModule, 12)); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: ModFrameworkModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
            BrowserModule,
            FormsModule,
            ReactiveFormsModule,
            HttpClientModule,
            RouterModule,
            MatIconModule, MatDividerModule, MatListModule, MatSidenavModule, MatToolbarModule, MatMenuModule, MatButtonModule, MatProgressSpinnerModule, MatAutocompleteModule, MatTooltipModule, MatFormFieldModule, MatInputModule, MatSelectModule] }); }
}
export { ModFrameworkModule };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModFrameworkModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    ModWelcomeBanner,
                    ModSideMenuComponent,
                    ModLayoutComponent,
                    ModHeaderComponent,
                    ModProgressSpinnerComponent,
                    ModLoadingOverlayComponent,
                    ModUserDisplayComponent,
                    BrowserCheckComponent,
                ],
                imports: [
                    CommonModule,
                    BrowserModule,
                    NgIf,
                    FormsModule,
                    ReactiveFormsModule,
                    HttpClientModule,
                    RouterModule,
                    MatIconModule, MatDividerModule, MatListModule, MatSidenavModule, MatToolbarModule, MatMenuModule, MatButtonModule, MatProgressSpinnerModule, MatAutocompleteModule, MatTooltipModule, MatFormFieldModule, MatInputModule, MatSelectModule,
                ],
                providers: [],
                exports: [
                    ModHeaderComponent,
                    ModLayoutComponent,
                    ModLoadingOverlayComponent,
                    ModProgressSpinnerComponent,
                    ModSideMenuComponent,
                    ModUserDisplayComponent,
                    ModWelcomeBanner,
                    BrowserCheckComponent,
                ]
            }]
    }], function () { return [{ type: ModFrameworkModule, decorators: [{
                type: Optional
            }, {
                type: SkipSelf
            }] }]; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ModFrameworkModule, { declarations: [ModWelcomeBanner,
        ModSideMenuComponent,
        ModLayoutComponent,
        ModHeaderComponent,
        ModProgressSpinnerComponent,
        ModLoadingOverlayComponent,
        ModUserDisplayComponent,
        BrowserCheckComponent], imports: [CommonModule,
        BrowserModule,
        NgIf,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule,
        MatIconModule, MatDividerModule, MatListModule, MatSidenavModule, MatToolbarModule, MatMenuModule, MatButtonModule, MatProgressSpinnerModule, MatAutocompleteModule, MatTooltipModule, MatFormFieldModule, MatInputModule, MatSelectModule], exports: [ModHeaderComponent,
        ModLayoutComponent,
        ModLoadingOverlayComponent,
        ModProgressSpinnerComponent,
        ModSideMenuComponent,
        ModUserDisplayComponent,
        ModWelcomeBanner,
        BrowserCheckComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kLWZyYW1ld29yay5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9tb2QtZnJhbWV3b3JrL3NyYy9saWIvbW9kLWZyYW1ld29yay5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBdUMsTUFBTSxlQUFlLENBQUM7QUFDbkgsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRTNFLGdCQUFnQjtBQUNoQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFHdEQsV0FBVztBQUNYLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUU1RCxVQUFVO0FBQ1YsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FB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QjtvQkFDcEIsdUJBQXVCO29CQUN2QixnQkFBZ0I7b0JBQ2hCLHFCQUFxQjtpQkFDeEI7YUFDSjs7c0JBa0NnQixRQUFROztzQkFBSSxRQUFROzt3RkFqQ3hCLGtCQUFrQixtQkFoQ3ZCLGdCQUFnQjtRQUNoQixvQkFBb0I7UUFDcEIsa0JBQWtCO1FBQ2xCLGtCQUFrQjtRQUNsQiwyQkFBMkI7UUFDM0IsMEJBQTBCO1FBQzFCLHVCQUF1QjtRQUN2QixxQkFBcUIsYUFHckIsWUFBWTtRQUNaLGFBQWE7UUFDYixJQUFJO1FBQ0osV0FBVztRQUNYLG1CQUFtQjtRQUNuQixnQkFBZ0I7UUFDaEIsWUFBWTtRQUNaLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLEVBQUUsZ0JBQWdCLEVBQUUsYUFBYSxFQUFFLGVBQWUsRUFBRSx3QkFBd0IsRUFBRSxxQkFBcUIsRUFBRSxnQkFBZ0IsRUFBRSxrQkFBa0IsRUFBRSxjQUFjLEVBQUUsZUFBZSxhQUsxTyxrQkFBa0I7UUFDbEIsa0JBQWtCO1FBQ2xCLDBCQUEwQjtRQUMxQiwyQkFBMkI7UUFDM0Isb0JBQW9CO1FBQ3BCLHVCQUF1QjtRQUN2QixnQkFBZ0I7UUFDaEIscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIEFQUF9JTklUSUFMSVpFUiwgU2tpcFNlbGYsIE9wdGlvbmFsLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBIVFRQX0lOVEVSQ0VQVE9SUywgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuXHJcbi8vIENvbmZpZ3VyYXRpb25cclxuaW1wb3J0IHsgTW9kQ29uZmlnIH0gZnJvbSAnLi9zdGF0aWMvbW9kLWNvbmZpZy5jb25zdCc7XHJcbmltcG9ydCB7IE1vZEZyYW1ld29ya0NvbmZpZyB9IGZyb20gJy4vbW9kZWxzL21vZC1mcmFtZXdvcmstY29uZmlnLm1vZGVsJztcclxuXHJcbi8vIFNlcnZpY2VzXHJcbmltcG9ydCB7IExvYWRpbmdJbnRlcmNlcHRlciB9IGZyb20gJy4vc2VydmljZXMvbG9hZGluZy5pbnRlcmNlcHRvcic7XHJcbmltcG9ydCB7IEN1cnJlbnRVc2VyU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvY3VycmVudC11c2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMb2FkaW5nU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvbG9hZGluZy5zZXJ2aWNlJztcclxuXHJcbi8vIE1vZHVsZXNcclxuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xyXG5pbXBvcnQgeyBNYXREaXZpZGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGl2aWRlcic7XHJcbmltcG9ydCB7IE1hdExpc3RNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9saXN0JztcclxuaW1wb3J0IHsgTWF0U2lkZW5hdk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NpZGVuYXYnO1xyXG5pbXBvcnQgeyBNYXRUb29sYmFyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbGJhcic7XHJcbmltcG9ydCB7IE1hdE1lbnVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9tZW51JztcclxuaW1wb3J0IHsgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcclxuaW1wb3J0IHsgTWF0UHJvZ3Jlc3NTcGlubmVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcHJvZ3Jlc3Mtc3Bpbm5lcic7XHJcbmltcG9ydCB7IE1hdEF1dG9jb21wbGV0ZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2F1dG9jb21wbGV0ZSc7XHJcbmltcG9ydCB7IE1hdFRvb2x0aXBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90b29sdGlwJztcclxuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSwgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE1hdEZvcm1GaWVsZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xyXG5pbXBvcnQgeyBNYXRJbnB1dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcclxuaW1wb3J0IHsgTWF0U2VsZWN0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2VsZWN0JztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlLCBOZ0lmIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbi8vIENvbXBvbmVudHNcclxuaW1wb3J0IHsgTW9kTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL21vZC1sYXlvdXQvbW9kLWxheW91dC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNb2RIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbW9kLWhlYWRlci9tb2QtaGVhZGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1vZFdlbGNvbWVCYW5uZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvbW9kLXdlbGNvbWUtYmFubmVyL21vZC13ZWxjb21lLWJhbm5lci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNb2RTaWRlTWVudUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9tb2Qtc2lkZS1tZW51L21vZC1zaWRlLW1lbnUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTW9kUHJvZ3Jlc3NTcGlubmVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL21vZC1wcm9ncmVzcy1zcGlubmVyL21vZC1wcm9ncmVzcy1zcGlubmVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1vZExvYWRpbmdPdmVybGF5Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL21vZC1sb2FkaW5nLW92ZXJsYXkvbW9kLWxvYWRpbmctb3ZlcmxheS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNb2RVc2VyRGlzcGxheUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9tb2QtdXNlci1kaXNwbGF5L21vZC11c2VyLWRpc3BsYXkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQnJvd3NlckNoZWNrQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2Jyb3dzZXItY2hlY2svYnJvd3Nlci1jaGVjay5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBIdHRwUmVxdWVzdEludGVyY2VwdG9yIH0gZnJvbSAnLi9zZXJ2aWNlcy9odHRwLXJlcXVlc3QuaW50ZXJjZXB0b3InO1xyXG5pbXBvcnQgeyBSb2xlR3VhcmRTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9yb2xlLWd1YXJkLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYXRlU2luZ2xlU2lnbk9uKHVzZXJTZXJ2aWNlOiBDdXJyZW50VXNlclNlcnZpY2UpIHtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgdmFyIGF1dGggPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiYXV0aGVudGljYXRpbmdcIik/LnRvU3RyaW5nKCk7XHJcblxyXG4gICAgICAgIGlmIChhdXRoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1c2VyU2VydmljZS5sb2dpbigpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcImF1dGhlbnRpY2F0aW5nXCIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHVzZXJTZXJ2aWNlLnJlZGlyZWN0TG9naW4oKTtcclxuICAgICAgICAgICAgbGV0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoXCJBdXRoZW50aWNhdGluZ1wiKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBNb2RXZWxjb21lQmFubmVyLFxyXG4gICAgICAgIE1vZFNpZGVNZW51Q29tcG9uZW50LFxyXG4gICAgICAgIE1vZExheW91dENvbXBvbmVudCxcclxuICAgICAgICBNb2RIZWFkZXJDb21wb25lbnQsXHJcbiAgICAgICAgTW9kUHJvZ3Jlc3NTcGlubmVyQ29tcG9uZW50LFxyXG4gICAgICAgIE1vZExvYWRpbmdPdmVybGF5Q29tcG9uZW50LFxyXG4gICAgICAgIE1vZFVzZXJEaXNwbGF5Q29tcG9uZW50LFxyXG4gICAgICAgIEJyb3dzZXJDaGVja0NvbXBvbmVudCxcclxuICAgIF0sXHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgICAgIEJyb3dzZXJNb2R1bGUsXHJcbiAgICAgICAgTmdJZixcclxuICAgICAgICBGb3Jtc01vZHVsZSxcclxuICAgICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgICAgIEh0dHBDbGllbnRNb2R1bGUsXHJcbiAgICAgICAgUm91dGVyTW9kdWxlLFxyXG4gICAgICAgIE1hdEljb25Nb2R1bGUsIE1hdERpdmlkZXJNb2R1bGUsIE1hdExpc3RNb2R1bGUsIE1hdFNpZGVuYXZNb2R1bGUsIE1hdFRvb2xiYXJNb2R1bGUsIE1hdE1lbnVNb2R1bGUsIE1hdEJ1dHRvbk1vZHVsZSwgTWF0UHJvZ3Jlc3NTcGlubmVyTW9kdWxlLCBNYXRBdXRvY29tcGxldGVNb2R1bGUsIE1hdFRvb2x0aXBNb2R1bGUsIE1hdEZvcm1GaWVsZE1vZHVsZSwgTWF0SW5wdXRNb2R1bGUsIE1hdFNlbGVjdE1vZHVsZSxcclxuICAgIF0sXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgIF0sXHJcbiAgICBleHBvcnRzOiBbXHJcbiAgICAgICAgTW9kSGVhZGVyQ29tcG9uZW50LFxyXG4gICAgICAgIE1vZExheW91dENvbXBvbmVudCxcclxuICAgICAgICBNb2RMb2FkaW5nT3ZlcmxheUNvbXBvbmVudCxcclxuICAgICAgICBNb2RQcm9ncmVzc1NwaW5uZXJDb21wb25lbnQsXHJcbiAgICAgICAgTW9kU2lkZU1lbnVDb21wb25lbnQsXHJcbiAgICAgICAgTW9kVXNlckRpc3BsYXlDb21wb25lbnQsXHJcbiAgICAgICAgTW9kV2VsY29tZUJhbm5lcixcclxuICAgICAgICBCcm93c2VyQ2hlY2tDb21wb25lbnQsXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNb2RGcmFtZXdvcmtNb2R1bGUge1xyXG4gICAgc3RhdGljIGZvclJvb3QoY29uZmlnOiBNb2RGcmFtZXdvcmtDb25maWcgPSBudWxsKTogTW9kdWxlV2l0aFByb3ZpZGVyczxNb2RGcmFtZXdvcmtNb2R1bGU+IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBuZ01vZHVsZTogTW9kRnJhbWV3b3JrTW9kdWxlLFxyXG4gICAgICAgICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm92aWRlOiBNb2RDb25maWcsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlVmFsdWU6IGNvbmZpZ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIEN1cnJlbnRVc2VyU2VydmljZSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUyxcclxuICAgICAgICAgICAgICAgICAgICB1c2VDbGFzczogTG9hZGluZ0ludGVyY2VwdGVyLFxyXG4gICAgICAgICAgICAgICAgICAgIG11bHRpOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgTG9hZGluZ1NlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICAvLyBzZWUgaHR0cHM6Ly93ZWJsb2cud2VzdC13aW5kLmNvbS9wb3N0cy8yMDE5L0Fwci8wNy9DcmVhdGluZy1hLWN1c3RvbS1IdHRwSW50ZXJjZXB0b3ItdG8taGFuZGxlLXdpdGhDcmVkZW50aWFsc1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZUNsYXNzOiBIdHRwUmVxdWVzdEludGVyY2VwdG9yLFxyXG4gICAgICAgICAgICAgICAgICAgIG11bHRpOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUixcclxuICAgICAgICAgICAgICAgICAgICB1c2VGYWN0b3J5OiBpbml0aWF0ZVNpbmdsZVNpZ25PbixcclxuICAgICAgICAgICAgICAgICAgICBtdWx0aTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBkZXBzOiBbQ3VycmVudFVzZXJTZXJ2aWNlXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIFJvbGVHdWFyZFNlcnZpY2UsXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlOiBNb2RGcmFtZXdvcmtNb2R1bGUpIHtcclxuICAgICAgICBpZiAocGFyZW50TW9kdWxlKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTW9kRnJhbWV3b3JrTW9kdWxlIGlzIGFscmVhZHkgbG9hZGVkLiBJbXBvcnQgaXQgaW4gdGhlIEFwcE1vZHVsZSBvbmx5Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==