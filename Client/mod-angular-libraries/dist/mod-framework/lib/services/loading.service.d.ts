import { BehaviorSubject } from 'rxjs';
import { ModFrameworkConfig } from '../models/mod-framework-config.model';
export declare class LoadingService {
    isLoading: BehaviorSubject<boolean>;
    loadingDelay: number;
    constructor(config: ModFrameworkConfig);
}
