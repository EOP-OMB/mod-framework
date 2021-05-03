import { BehaviorSubject } from 'rxjs';
import { ModFrameworkConfig } from '../models/mod-framework-config.model';
import * as i0 from "@angular/core";
export declare class LoadingService {
    isLoading: BehaviorSubject<boolean>;
    loadingDelay: number;
    constructor(config: ModFrameworkConfig);
    static ɵfac: i0.ɵɵFactoryDef<LoadingService, never>;
    static ɵprov: i0.ɵɵInjectableDef<LoadingService>;
}
