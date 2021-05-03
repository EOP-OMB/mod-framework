//loading.service.ts
import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ModFrameworkConfig } from '../models/mod-framework-config.model';
import { ModConfig } from '../static/mod-config.const';

@Injectable({
    providedIn: 'root'
})
export class LoadingService {

    public isLoading = new BehaviorSubject(false);
    public loadingDelay: number = 500;

    constructor(@Inject(ModConfig) config: ModFrameworkConfig) {
        this.loadingDelay = config ? config.loadingDelay : 500;
    }
}
