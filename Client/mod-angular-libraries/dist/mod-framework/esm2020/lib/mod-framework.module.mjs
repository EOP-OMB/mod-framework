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
import { CommonModule } from '@angular/common';
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
export class ModFrameworkModule {
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('ModFrameworkModule is already loaded. Import it in the AppModule only');
        }
    }
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
}
ModFrameworkModule.??fac = function ModFrameworkModule_Factory(t) { return new (t || ModFrameworkModule)(i0.????inject(ModFrameworkModule, 12)); };
ModFrameworkModule.??mod = /*@__PURE__*/ i0.????defineNgModule({ type: ModFrameworkModule });
ModFrameworkModule.??inj = /*@__PURE__*/ i0.????defineInjector({ providers: [], imports: [[
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            HttpClientModule,
            RouterModule,
            MatIconModule, MatDividerModule, MatListModule, MatSidenavModule, MatToolbarModule, MatMenuModule, MatButtonModule, MatProgressSpinnerModule, MatAutocompleteModule, MatTooltipModule, MatFormFieldModule, MatInputModule, MatSelectModule,
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.??setClassMetadata(ModFrameworkModule, [{
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
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.????setNgModuleScope(ModFrameworkModule, { declarations: [ModWelcomeBanner,
        ModSideMenuComponent,
        ModLayoutComponent,
        ModHeaderComponent,
        ModProgressSpinnerComponent,
        ModLoadingOverlayComponent,
        ModUserDisplayComponent,
        BrowserCheckComponent], imports: [CommonModule,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kLWZyYW1ld29yay5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9tb2QtZnJhbWV3b3JrL3NyYy9saWIvbW9kLWZyYW1ld29yay5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBdUMsTUFBTSxlQUFlLENBQUM7QUFDbkgsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRTNFLGdCQUFnQjtBQUNoQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFHdEQsV0FBVztBQUNYLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUU1RCxVQUFVO0FBQ1YsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FB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Q0FrQ3FELGtCQUFrQjtzQkFBdkQsUUFBUTs7c0JBQUksUUFBUTs7d0ZBakN4QixrQkFBa0IsbUJBOUJ2QixnQkFBZ0I7UUFDaEIsb0JBQW9CO1FBQ3BCLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIsMkJBQTJCO1FBQzNCLDBCQUEwQjtRQUMxQix1QkFBdUI7UUFDdkIscUJBQXFCLGFBR3JCLFlBQVk7UUFDWixXQUFXO1FBQ1gsbUJBQW1CO1FBQ25CLGdCQUFnQjtRQUNoQixZQUFZO1FBQ1osYUFBYSxFQUFFLGdCQUFnQixFQUFFLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRSxnQkFBZ0IsRUFBRSxhQUFhLEVBQUUsZUFBZSxFQUFFLHdCQUF3QixFQUFFLHFCQUFxQixFQUFFLGdCQUFnQixFQUFFLGtCQUFrQixFQUFFLGNBQWMsRUFBRSxlQUFlLGFBSzFPLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIsMEJBQTBCO1FBQzFCLDJCQUEyQjtRQUMzQixvQkFBb0I7UUFDcEIsdUJBQXVCO1FBQ3ZCLGdCQUFnQjtRQUNoQixxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgQVBQX0lOSVRJQUxJWkVSLCBTa2lwU2VsZiwgT3B0aW9uYWwsIE1vZHVsZVdpdGhQcm92aWRlcnMsIEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBIVFRQX0lOVEVSQ0VQVE9SUywgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuXHJcbi8vIENvbmZpZ3VyYXRpb25cclxuaW1wb3J0IHsgTW9kQ29uZmlnIH0gZnJvbSAnLi9zdGF0aWMvbW9kLWNvbmZpZy5jb25zdCc7XG5pbXBvcnQgeyBNb2RGcmFtZXdvcmtDb25maWcgfSBmcm9tICcuL21vZGVscy9tb2QtZnJhbWV3b3JrLWNvbmZpZy5tb2RlbCc7XHJcblxyXG4vLyBTZXJ2aWNlc1xyXG5pbXBvcnQgeyBMb2FkaW5nSW50ZXJjZXB0ZXIgfSBmcm9tICcuL3NlcnZpY2VzL2xvYWRpbmcuaW50ZXJjZXB0b3InO1xyXG5pbXBvcnQgeyBDdXJyZW50VXNlclNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2N1cnJlbnQtdXNlci5zZXJ2aWNlJztcbmltcG9ydCB7IExvYWRpbmdTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9sb2FkaW5nLnNlcnZpY2UnO1xuXG4vLyBNb2R1bGVzXHJcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7IE1hdERpdmlkZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaXZpZGVyJztcbmltcG9ydCB7IE1hdExpc3RNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9saXN0JztcbmltcG9ydCB7IE1hdFNpZGVuYXZNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zaWRlbmF2JztcbmltcG9ydCB7IE1hdFRvb2xiYXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90b29sYmFyJztcclxuaW1wb3J0IHsgTWF0TWVudU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL21lbnUnO1xuaW1wb3J0IHsgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7IE1hdFByb2dyZXNzU3Bpbm5lck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Byb2dyZXNzLXNwaW5uZXInO1xuaW1wb3J0IHsgTWF0QXV0b2NvbXBsZXRlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlJztcbmltcG9ydCB7IE1hdFRvb2x0aXBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90b29sdGlwJztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUsIEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBNYXRGb3JtRmllbGRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcclxuaW1wb3J0IHsgTWF0SW5wdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XHJcbmltcG9ydCB7IE1hdFNlbGVjdE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NlbGVjdCc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCB7IE1vZExheW91dENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9tb2QtbGF5b3V0L21vZC1sYXlvdXQuY29tcG9uZW50JztcbmltcG9ydCB7IE1vZEhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9tb2QtaGVhZGVyL21vZC1oZWFkZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTW9kV2VsY29tZUJhbm5lciB9IGZyb20gJy4vY29tcG9uZW50cy9tb2Qtd2VsY29tZS1iYW5uZXIvbW9kLXdlbGNvbWUtYmFubmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNb2RTaWRlTWVudUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9tb2Qtc2lkZS1tZW51L21vZC1zaWRlLW1lbnUuY29tcG9uZW50JztcbmltcG9ydCB7IE1vZFByb2dyZXNzU3Bpbm5lckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9tb2QtcHJvZ3Jlc3Mtc3Bpbm5lci9tb2QtcHJvZ3Jlc3Mtc3Bpbm5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTW9kTG9hZGluZ092ZXJsYXlDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbW9kLWxvYWRpbmctb3ZlcmxheS9tb2QtbG9hZGluZy1vdmVybGF5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNb2RVc2VyRGlzcGxheUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9tb2QtdXNlci1kaXNwbGF5L21vZC11c2VyLWRpc3BsYXkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQnJvd3NlckNoZWNrQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2Jyb3dzZXItY2hlY2svYnJvd3Nlci1jaGVjay5jb21wb25lbnQnO1xuaW1wb3J0IHsgSHR0cFJlcXVlc3RJbnRlcmNlcHRvciB9IGZyb20gJy4vc2VydmljZXMvaHR0cC1yZXF1ZXN0LmludGVyY2VwdG9yJztcclxuaW1wb3J0IHsgUm9sZUd1YXJkU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvcm9sZS1ndWFyZC5zZXJ2aWNlJztcclxuXHJcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYXRlU2luZ2xlU2lnbk9uKHVzZXJTZXJ2aWNlOiBDdXJyZW50VXNlclNlcnZpY2UpIHtcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgIHZhciBhdXRoID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImF1dGhlbnRpY2F0aW5nXCIpPy50b1N0cmluZygpO1xyXG5cclxuICAgICAgICBpZiAoYXV0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdXNlclNlcnZpY2UubG9naW4oKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oXCJhdXRoZW50aWNhdGluZ1wiKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB1c2VyU2VydmljZS5yZWRpcmVjdExvZ2luKCk7XHJcbiAgICAgICAgICAgIGxldCBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KFwiQXV0aGVudGljYXRpbmdcIik7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHByb21pc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIE1vZFdlbGNvbWVCYW5uZXIsXG4gICAgICAgIE1vZFNpZGVNZW51Q29tcG9uZW50LFxuICAgICAgICBNb2RMYXlvdXRDb21wb25lbnQsXG4gICAgICAgIE1vZEhlYWRlckNvbXBvbmVudCxcbiAgICAgICAgTW9kUHJvZ3Jlc3NTcGlubmVyQ29tcG9uZW50LFxuICAgICAgICBNb2RMb2FkaW5nT3ZlcmxheUNvbXBvbmVudCxcbiAgICAgICAgTW9kVXNlckRpc3BsYXlDb21wb25lbnQsXG4gICAgICAgIEJyb3dzZXJDaGVja0NvbXBvbmVudCxcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBGb3Jtc01vZHVsZSxcclxuICAgICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgICAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgICAgICBSb3V0ZXJNb2R1bGUsXG4gICAgICAgIE1hdEljb25Nb2R1bGUsIE1hdERpdmlkZXJNb2R1bGUsIE1hdExpc3RNb2R1bGUsIE1hdFNpZGVuYXZNb2R1bGUsIE1hdFRvb2xiYXJNb2R1bGUsIE1hdE1lbnVNb2R1bGUsIE1hdEJ1dHRvbk1vZHVsZSwgTWF0UHJvZ3Jlc3NTcGlubmVyTW9kdWxlLCBNYXRBdXRvY29tcGxldGVNb2R1bGUsIE1hdFRvb2x0aXBNb2R1bGUsIE1hdEZvcm1GaWVsZE1vZHVsZSwgTWF0SW5wdXRNb2R1bGUsIE1hdFNlbGVjdE1vZHVsZSxcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBNb2RIZWFkZXJDb21wb25lbnQsXG4gICAgICAgIE1vZExheW91dENvbXBvbmVudCxcbiAgICAgICAgTW9kTG9hZGluZ092ZXJsYXlDb21wb25lbnQsXG4gICAgICAgIE1vZFByb2dyZXNzU3Bpbm5lckNvbXBvbmVudCxcbiAgICAgICAgTW9kU2lkZU1lbnVDb21wb25lbnQsXG4gICAgICAgIE1vZFVzZXJEaXNwbGF5Q29tcG9uZW50LFxuICAgICAgICBNb2RXZWxjb21lQmFubmVyLFxuICAgICAgICBCcm93c2VyQ2hlY2tDb21wb25lbnQsXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBNb2RGcmFtZXdvcmtNb2R1bGUge1xuICAgIHN0YXRpYyBmb3JSb290KGNvbmZpZzogTW9kRnJhbWV3b3JrQ29uZmlnID0gbnVsbCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8TW9kRnJhbWV3b3JrTW9kdWxlPiB7XG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG5nTW9kdWxlOiBNb2RGcmFtZXdvcmtNb2R1bGUsXHJcbiAgICAgICAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3ZpZGU6IE1vZENvbmZpZyxcclxuICAgICAgICAgICAgICAgICAgICB1c2VWYWx1ZTogY29uZmlnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgQ3VycmVudFVzZXJTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlQ2xhc3M6IExvYWRpbmdJbnRlcmNlcHRlcixcclxuICAgICAgICAgICAgICAgICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBMb2FkaW5nU2VydmljZSxcclxuICAgICAgICAgICAgICAgIC8vIHNlZSBodHRwczovL3dlYmxvZy53ZXN0LXdpbmQuY29tL3Bvc3RzLzIwMTkvQXByLzA3L0NyZWF0aW5nLWEtY3VzdG9tLUh0dHBJbnRlcmNlcHRvci10by1oYW5kbGUtd2l0aENyZWRlbnRpYWxzXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlQ2xhc3M6IEh0dHBSZXF1ZXN0SW50ZXJjZXB0b3IsXHJcbiAgICAgICAgICAgICAgICAgICAgbXVsdGk6IHRydWVcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvdmlkZTogQVBQX0lOSVRJQUxJWkVSLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZUZhY3Rvcnk6IGluaXRpYXRlU2luZ2xlU2lnbk9uLFxyXG4gICAgICAgICAgICAgICAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlcHM6IFtDdXJyZW50VXNlclNlcnZpY2VdXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgUm9sZUd1YXJkU2VydmljZSxcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHBhcmVudE1vZHVsZTogTW9kRnJhbWV3b3JrTW9kdWxlKSB7XG4gICAgICAgIGlmIChwYXJlbnRNb2R1bGUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTW9kRnJhbWV3b3JrTW9kdWxlIGlzIGFscmVhZHkgbG9hZGVkLiBJbXBvcnQgaXQgaW4gdGhlIEFwcE1vZHVsZSBvbmx5Jyk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=