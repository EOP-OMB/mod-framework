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
import * as i10 from "@angular/forms";
import * as i11 from "@angular/common/http";
import * as i12 from "@angular/router";
import * as i13 from "@angular/material/icon";
import * as i14 from "@angular/material/divider";
import * as i15 from "@angular/material/list";
import * as i16 from "@angular/material/sidenav";
import * as i17 from "@angular/material/toolbar";
import * as i18 from "@angular/material/menu";
import * as i19 from "@angular/material/button";
import * as i20 from "@angular/material/progress-spinner";
import * as i21 from "@angular/material/autocomplete";
import * as i22 from "@angular/material/tooltip";
import * as i23 from "@angular/material/form-field";
import * as i24 from "@angular/material/input";
import * as i25 from "@angular/material/select";
export declare function initiateSingleSignOn(userService: CurrentUserService): () => Promise<unknown>;
export declare class ModFrameworkModule {
    static forRoot(config?: ModFrameworkConfig): ModuleWithProviders<ModFrameworkModule>;
    constructor(parentModule: ModFrameworkModule);
    static ɵfac: i0.ɵɵFactoryDef<ModFrameworkModule, [{ optional: true; skipSelf: true; }]>;
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<ModFrameworkModule, [typeof i1.ModWelcomeBanner, typeof i2.ModSideMenuComponent, typeof i3.ModLayoutComponent, typeof i4.ModHeaderComponent, typeof i5.ModProgressSpinnerComponent, typeof i6.ModLoadingOverlayComponent, typeof i7.ModUserDisplayComponent, typeof i8.BrowserCheckComponent], [typeof i9.CommonModule, typeof i10.FormsModule, typeof i10.ReactiveFormsModule, typeof i11.HttpClientModule, typeof i12.RouterModule, typeof i13.MatIconModule, typeof i14.MatDividerModule, typeof i15.MatListModule, typeof i16.MatSidenavModule, typeof i17.MatToolbarModule, typeof i18.MatMenuModule, typeof i19.MatButtonModule, typeof i20.MatProgressSpinnerModule, typeof i21.MatAutocompleteModule, typeof i22.MatTooltipModule, typeof i23.MatFormFieldModule, typeof i24.MatInputModule, typeof i25.MatSelectModule], [typeof i4.ModHeaderComponent, typeof i3.ModLayoutComponent, typeof i6.ModLoadingOverlayComponent, typeof i5.ModProgressSpinnerComponent, typeof i2.ModSideMenuComponent, typeof i7.ModUserDisplayComponent, typeof i1.ModWelcomeBanner, typeof i8.BrowserCheckComponent]>;
    static ɵinj: i0.ɵɵInjectorDef<ModFrameworkModule>;
}
//# sourceMappingURL=mod-framework.module.d.ts.map