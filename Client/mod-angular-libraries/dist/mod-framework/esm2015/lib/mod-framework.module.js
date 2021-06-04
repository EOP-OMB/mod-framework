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
export function initiateSingleSignOn(userService) {
    return () => {
        var _a;
        var auth = (_a = sessionStorage.getItem("authenticating")) === null || _a === void 0 ? void 0 : _a.toString();
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
ModFrameworkModule.decorators = [
    { type: NgModule, args: [{
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
            },] }
];
ModFrameworkModule.ctorParameters = () => [
    { type: ModFrameworkModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kLWZyYW1ld29yay5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9tb2QtZnJhbWV3b3JrL3NyYy9saWIvbW9kLWZyYW1ld29yay5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBdUMsTUFBTSxlQUFlLENBQUM7QUFDbkgsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRTNFLGdCQUFnQjtBQUNoQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFHdEQsV0FBVztBQUNYLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUU1RCxVQUFVO0FBQ1YsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FB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LElBQUk7b0JBQ1gsSUFBSSxFQUFFLENBQUMsa0JBQWtCLENBQUM7aUJBQzdCO2dCQUNELGdCQUFnQjthQUNuQjtTQUNKLENBQUE7SUFDTCxDQUFDOzs7WUEvREosUUFBUSxTQUFDO2dCQUNOLFlBQVksRUFBRTtvQkFDVixnQkFBZ0I7b0JBQ2hCLG9CQUFvQjtvQkFDcEIsa0JBQWtCO29CQUNsQixrQkFBa0I7b0JBQ2xCLDJCQUEyQjtvQkFDM0IsMEJBQTBCO29CQUMxQix1QkFBdUI7b0JBQ3ZCLHFCQUFxQjtpQkFDeEI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNMLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxtQkFBbUI7b0JBQ25CLGdCQUFnQjtvQkFDaEIsWUFBWTtvQkFDWixhQUFhLEVBQUUsZ0JBQWdCLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixFQUFFLGdCQUFnQixFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUUsd0JBQXdCLEVBQUUscUJBQXFCLEVBQUUsZ0JBQWdCLEVBQUUsa0JBQWtCLEVBQUUsY0FBYyxFQUFFLGVBQWU7aUJBQzdPO2dCQUNELFNBQVMsRUFBRSxFQUNWO2dCQUNELE9BQU8sRUFBRTtvQkFDTCxrQkFBa0I7b0JBQ2xCLGtCQUFrQjtvQkFDbEIsMEJBQTBCO29CQUMxQiwyQkFBMkI7b0JBQzNCLG9CQUFvQjtvQkFDcEIsdUJBQXVCO29CQUN2QixnQkFBZ0I7b0JBQ2hCLHFCQUFxQjtpQkFDeEI7YUFDSjs7O1lBa0NxRCxrQkFBa0IsdUJBQXZELFFBQVEsWUFBSSxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIEFQUF9JTklUSUFMSVpFUiwgU2tpcFNlbGYsIE9wdGlvbmFsLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgSFRUUF9JTlRFUkNFUFRPUlMsIEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcblxyXG4vLyBDb25maWd1cmF0aW9uXHJcbmltcG9ydCB7IE1vZENvbmZpZyB9IGZyb20gJy4vc3RhdGljL21vZC1jb25maWcuY29uc3QnO1xuaW1wb3J0IHsgTW9kRnJhbWV3b3JrQ29uZmlnIH0gZnJvbSAnLi9tb2RlbHMvbW9kLWZyYW1ld29yay1jb25maWcubW9kZWwnO1xyXG5cclxuLy8gU2VydmljZXNcclxuaW1wb3J0IHsgTG9hZGluZ0ludGVyY2VwdGVyIH0gZnJvbSAnLi9zZXJ2aWNlcy9sb2FkaW5nLmludGVyY2VwdG9yJztcclxuaW1wb3J0IHsgQ3VycmVudFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9jdXJyZW50LXVzZXIuc2VydmljZSc7XG5pbXBvcnQgeyBMb2FkaW5nU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvbG9hZGluZy5zZXJ2aWNlJztcblxuLy8gTW9kdWxlc1xyXG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQgeyBNYXREaXZpZGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGl2aWRlcic7XG5pbXBvcnQgeyBNYXRMaXN0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbGlzdCc7XG5pbXBvcnQgeyBNYXRTaWRlbmF2TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2lkZW5hdic7XG5pbXBvcnQgeyBNYXRUb29sYmFyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbGJhcic7XHJcbmltcG9ydCB7IE1hdE1lbnVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9tZW51JztcbmltcG9ydCB7IE1hdEJ1dHRvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQgeyBNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wcm9ncmVzcy1zcGlubmVyJztcbmltcG9ydCB7IE1hdEF1dG9jb21wbGV0ZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2F1dG9jb21wbGV0ZSc7XG5pbXBvcnQgeyBNYXRUb29sdGlwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbHRpcCc7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlLCBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgTWF0Rm9ybUZpZWxkTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XHJcbmltcG9ydCB7IE1hdElucHV0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xyXG5pbXBvcnQgeyBNYXRTZWxlY3RNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zZWxlY3QnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgeyBNb2RMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbW9kLWxheW91dC9tb2QtbGF5b3V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNb2RIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbW9kLWhlYWRlci9tb2QtaGVhZGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1vZFdlbGNvbWVCYW5uZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvbW9kLXdlbGNvbWUtYmFubmVyL21vZC13ZWxjb21lLWJhbm5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTW9kU2lkZU1lbnVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbW9kLXNpZGUtbWVudS9tb2Qtc2lkZS1tZW51LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNb2RQcm9ncmVzc1NwaW5uZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbW9kLXByb2dyZXNzLXNwaW5uZXIvbW9kLXByb2dyZXNzLXNwaW5uZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE1vZExvYWRpbmdPdmVybGF5Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL21vZC1sb2FkaW5nLW92ZXJsYXkvbW9kLWxvYWRpbmctb3ZlcmxheS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTW9kVXNlckRpc3BsYXlDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbW9kLXVzZXItZGlzcGxheS9tb2QtdXNlci1kaXNwbGF5LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEJyb3dzZXJDaGVja0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9icm93c2VyLWNoZWNrL2Jyb3dzZXItY2hlY2suY29tcG9uZW50JztcbmltcG9ydCB7IEh0dHBSZXF1ZXN0SW50ZXJjZXB0b3IgfSBmcm9tICcuL3NlcnZpY2VzL2h0dHAtcmVxdWVzdC5pbnRlcmNlcHRvcic7XHJcbmltcG9ydCB7IFJvbGVHdWFyZFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3JvbGUtZ3VhcmQuc2VydmljZSc7XHJcblxyXG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWF0ZVNpbmdsZVNpZ25Pbih1c2VyU2VydmljZTogQ3VycmVudFVzZXJTZXJ2aWNlKSB7XG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICB2YXIgYXV0aCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJhdXRoZW50aWNhdGluZ1wiKT8udG9TdHJpbmcoKTtcclxuXHJcbiAgICAgICAgaWYgKGF1dGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVzZXJTZXJ2aWNlLmxvZ2luKCkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFwiYXV0aGVudGljYXRpbmdcIik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdXNlclNlcnZpY2UucmVkaXJlY3RMb2dpbigpO1xyXG4gICAgICAgICAgICBsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChcIkF1dGhlbnRpY2F0aW5nXCIpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBNb2RXZWxjb21lQmFubmVyLFxuICAgICAgICBNb2RTaWRlTWVudUNvbXBvbmVudCxcbiAgICAgICAgTW9kTGF5b3V0Q29tcG9uZW50LFxuICAgICAgICBNb2RIZWFkZXJDb21wb25lbnQsXG4gICAgICAgIE1vZFByb2dyZXNzU3Bpbm5lckNvbXBvbmVudCxcbiAgICAgICAgTW9kTG9hZGluZ092ZXJsYXlDb21wb25lbnQsXG4gICAgICAgIE1vZFVzZXJEaXNwbGF5Q29tcG9uZW50LFxuICAgICAgICBCcm93c2VyQ2hlY2tDb21wb25lbnQsXG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgRm9ybXNNb2R1bGUsXHJcbiAgICAgICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICAgICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICAgICAgUm91dGVyTW9kdWxlLFxuICAgICAgICBNYXRJY29uTW9kdWxlLCBNYXREaXZpZGVyTW9kdWxlLCBNYXRMaXN0TW9kdWxlLCBNYXRTaWRlbmF2TW9kdWxlLCBNYXRUb29sYmFyTW9kdWxlLCBNYXRNZW51TW9kdWxlLCBNYXRCdXR0b25Nb2R1bGUsIE1hdFByb2dyZXNzU3Bpbm5lck1vZHVsZSwgTWF0QXV0b2NvbXBsZXRlTW9kdWxlLCBNYXRUb29sdGlwTW9kdWxlLCBNYXRGb3JtRmllbGRNb2R1bGUsIE1hdElucHV0TW9kdWxlLCBNYXRTZWxlY3RNb2R1bGUsXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgTW9kSGVhZGVyQ29tcG9uZW50LFxuICAgICAgICBNb2RMYXlvdXRDb21wb25lbnQsXG4gICAgICAgIE1vZExvYWRpbmdPdmVybGF5Q29tcG9uZW50LFxuICAgICAgICBNb2RQcm9ncmVzc1NwaW5uZXJDb21wb25lbnQsXG4gICAgICAgIE1vZFNpZGVNZW51Q29tcG9uZW50LFxuICAgICAgICBNb2RVc2VyRGlzcGxheUNvbXBvbmVudCxcbiAgICAgICAgTW9kV2VsY29tZUJhbm5lcixcbiAgICAgICAgQnJvd3NlckNoZWNrQ29tcG9uZW50LFxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgTW9kRnJhbWV3b3JrTW9kdWxlIHtcbiAgICBzdGF0aWMgZm9yUm9vdChjb25maWc6IE1vZEZyYW1ld29ya0NvbmZpZyA9IG51bGwpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPE1vZEZyYW1ld29ya01vZHVsZT4ge1xuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBuZ01vZHVsZTogTW9kRnJhbWV3b3JrTW9kdWxlLFxyXG4gICAgICAgICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm92aWRlOiBNb2RDb25maWcsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlVmFsdWU6IGNvbmZpZ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIEN1cnJlbnRVc2VyU2VydmljZSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZUNsYXNzOiBMb2FkaW5nSW50ZXJjZXB0ZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgbXVsdGk6IHRydWVcclxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgTG9hZGluZ1NlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICAvLyBzZWUgaHR0cHM6Ly93ZWJsb2cud2VzdC13aW5kLmNvbS9wb3N0cy8yMDE5L0Fwci8wNy9DcmVhdGluZy1hLWN1c3RvbS1IdHRwSW50ZXJjZXB0b3ItdG8taGFuZGxlLXdpdGhDcmVkZW50aWFsc1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZUNsYXNzOiBIdHRwUmVxdWVzdEludGVyY2VwdG9yLFxyXG4gICAgICAgICAgICAgICAgICAgIG11bHRpOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUixcclxuICAgICAgICAgICAgICAgICAgICB1c2VGYWN0b3J5OiBpbml0aWF0ZVNpbmdsZVNpZ25PbixcclxuICAgICAgICAgICAgICAgICAgICBtdWx0aTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBkZXBzOiBbQ3VycmVudFVzZXJTZXJ2aWNlXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIFJvbGVHdWFyZFNlcnZpY2UsXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9XHJcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwYXJlbnRNb2R1bGU6IE1vZEZyYW1ld29ya01vZHVsZSkge1xuICAgICAgICBpZiAocGFyZW50TW9kdWxlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01vZEZyYW1ld29ya01vZHVsZSBpcyBhbHJlYWR5IGxvYWRlZC4gSW1wb3J0IGl0IGluIHRoZSBBcHBNb2R1bGUgb25seScpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19