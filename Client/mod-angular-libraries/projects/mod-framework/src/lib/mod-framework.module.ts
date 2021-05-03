import { NgModule, APP_INITIALIZER, SkipSelf, Optional, ModuleWithProviders, InjectionToken } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

// Configuration
import { ModConfig } from './static/mod-config.const';
import { ModFrameworkConfig } from './models/mod-framework-config.model';

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


export function initiateSingleSignOn(userService: CurrentUserService) {
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
    }
}

@NgModule({
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
    providers: [
    ],
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
})
export class ModFrameworkModule {
    static forRoot(config: ModFrameworkConfig = null): ModuleWithProviders<ModFrameworkModule> {
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
        }
    }

    constructor(@Optional() @SkipSelf() parentModule: ModFrameworkModule) {
        if (parentModule) {
            throw new Error('ModFrameworkModule is already loaded. Import it in the AppModule only');
        }
    }
}
