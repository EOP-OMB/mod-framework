import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoadingService } from './loading.service';
import { ModFrameworkConfig } from '../../public-api';
import * as i0 from "@angular/core";
export declare class LoadingIntercepter implements HttpInterceptor {
    private loadingService;
    private requests;
    private urlsToSkip;
    constructor(loadingService: LoadingService, config: ModFrameworkConfig);
    removeRequest(req: HttpRequest<any>): void;
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    private skipThisRequest;
    static ɵfac: i0.ɵɵFactoryDef<LoadingIntercepter, never>;
    static ɵprov: i0.ɵɵInjectableDef<LoadingIntercepter>;
}
