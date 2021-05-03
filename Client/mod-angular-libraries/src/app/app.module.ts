import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModFrameworkModule, ModFrameworkConfig, RoleGuardService } from '../../projects/mod-framework/src/public-api';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { LoginComponent } from './components/login/login.component';

import { HTTP_INTERCEPTORS } from '@angular/common/http';

const config: ModFrameworkConfig = {
    loginSiteUrl: 'https://localhost:44374',
    loadingDelay: 750,
    helpOptions: ["About", "User Manual"],
    profileUrl: 'https://portfolio.staging.omb.gov/portfolio',
    showHelp: true,
    showSearch: true,
    userOptions: ['Settings']
}

const routes: Routes = [
    {
        path: '',
        component: HomeViewComponent,
    },
    {
        path: 'login',
        component: LoginComponent,
    }
];

@NgModule({
    declarations: [
        AppComponent,
        HomeViewComponent,
        LoginComponent,
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        BrowserAnimationsModule,
        ModFrameworkModule.forRoot(config),
        MatIconModule
    ],
    providers: [
        
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
