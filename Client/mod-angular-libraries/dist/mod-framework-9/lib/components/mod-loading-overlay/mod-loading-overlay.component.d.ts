import { OnInit } from '@angular/core';
import { LoadingService } from '../../services/loading.service';
import * as i0 from "@angular/core";
export declare class ModLoadingOverlayComponent implements OnInit {
    private loadingService;
    showProgressSpinner: boolean;
    constructor(loadingService: LoadingService);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<ModLoadingOverlayComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ModLoadingOverlayComponent, "mod-loading-overlay", never, {}, {}, never, never>;
}
