import { ModuleWithProviders } from '@angular/core';
import { ModFrameworkConfig } from './models/mod-framework-config.model';
import { CurrentUserService } from './services/current-user.service';
import * as i0 from "@angular/core";
import * as i1 from "./components/mod-welcome-banner/mod-welcome-banner.component";
import * as i2 from "./components/mod-side-menu/mod-side-menu.component";
import * as i3 from "./components/mod-layout/mod-layout.component";
import * as i4 from "./components/mod-header/mod-header.component";
import * as i5 from "./components/mod-progress-spinner/mod-progress-spinner.component";
import * as i6 from "./components/mod-loading-overlay/mod-loading-overlay.component";
import * as i7 from "./components/mod-user-display/mod-user-display.component";
import * as i8 from "./components/browser-check/browser-check.component";
import * as i9 from "@angular/common";
import * as i10 from "@angular/platform-browser";
import * as i11 from "@angular/forms";
import * as i12 from "@angular/common/http";
import * as i13 from "@angular/router";
import * as i14 from "@angular/material/icon";
import * as i15 from "@angular/material/divider";
import * as i16 from "@angular/material/list";
import * as i17 from "@angular/material/sidenav";
import * as i18 from "@angular/material/toolbar";
import * as i19 from "@angular/material/menu";
import * as i20 from "@angular/material/button";
import * as i21 from "@angular/material/progress-spinner";
import * as i22 from "@angular/material/autocomplete";
import * as i23 from "@angular/material/tooltip";
import * as i24 from "@angular/material/form-field";
import * as i25 from "@angular/material/input";
import * as i26 from "@angular/material/select";
export declare function initiateSingleSignOn(userService: CurrentUserService): () => Promise<unknown>;
export declare class ModFrameworkModule {
    static forRoot(config?: ModFrameworkConfig): ModuleWithProviders<ModFrameworkModule>;
    constructor(parentModule: ModFrameworkModule);
    static ɵfac: i0.ɵɵFactoryDeclaration<ModFrameworkModule, [{ optional: true; skipSelf: true; }]>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<ModFrameworkModule, [typeof i1.ModWelcomeBanner, typeof i2.ModSideMenuComponent, typeof i3.ModLayoutComponent, typeof i4.ModHeaderComponent, typeof i5.ModProgressSpinnerComponent, typeof i6.ModLoadingOverlayComponent, typeof i7.ModUserDisplayComponent, typeof i8.BrowserCheckComponent], [typeof i9.CommonModule, typeof i10.BrowserModule, typeof i9.NgIf, typeof i11.FormsModule, typeof i11.ReactiveFormsModule, typeof i12.HttpClientModule, typeof i13.RouterModule, typeof i14.MatIconModule, typeof i15.MatDividerModule, typeof i16.MatListModule, typeof i17.MatSidenavModule, typeof i18.MatToolbarModule, typeof i19.MatMenuModule, typeof i20.MatButtonModule, typeof i21.MatProgressSpinnerModule, typeof i22.MatAutocompleteModule, typeof i23.MatTooltipModule, typeof i24.MatFormFieldModule, typeof i25.MatInputModule, typeof i26.MatSelectModule], [typeof i4.ModHeaderComponent, typeof i3.ModLayoutComponent, typeof i6.ModLoadingOverlayComponent, typeof i5.ModProgressSpinnerComponent, typeof i2.ModSideMenuComponent, typeof i7.ModUserDisplayComponent, typeof i1.ModWelcomeBanner, typeof i8.BrowserCheckComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<ModFrameworkModule>;
}
//# sourceMappingURL=mod-framework.module.d.ts.map