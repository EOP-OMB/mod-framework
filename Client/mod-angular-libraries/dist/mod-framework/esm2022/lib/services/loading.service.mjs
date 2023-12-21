//loading.service.ts
import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ModConfig } from '../static/mod-config.const';
import * as i0 from "@angular/core";
import * as i1 from "../models/mod-framework-config.model";
class LoadingService {
    constructor(config) {
        this.isLoading = new BehaviorSubject(false);
        this.loadingDelay = 500;
        this.loadingDelay = config ? config.loadingDelay : 500;
    }
    static { this.ɵfac = function LoadingService_Factory(t) { return new (t || LoadingService)(i0.ɵɵinject(ModConfig)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: LoadingService, factory: LoadingService.ɵfac, providedIn: 'root' }); }
}
export { LoadingService };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoadingService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.ModFrameworkConfig, decorators: [{
                type: Inject,
                args: [ModConfig]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbW9kLWZyYW1ld29yay9zcmMvbGliL3NlcnZpY2VzL2xvYWRpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUV2QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7OztBQUV2RCxNQUdhLGNBQWM7SUFLdkIsWUFBK0IsTUFBMEI7UUFIbEQsY0FBUyxHQUFHLElBQUksZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZDLGlCQUFZLEdBQVcsR0FBRyxDQUFDO1FBRzlCLElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFDM0QsQ0FBQzsrRUFQUSxjQUFjLGNBS0gsU0FBUzt1RUFMcEIsY0FBYyxXQUFkLGNBQWMsbUJBRlgsTUFBTTs7U0FFVCxjQUFjO3VGQUFkLGNBQWM7Y0FIMUIsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCOztzQkFNZ0IsTUFBTTt1QkFBQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiLy9sb2FkaW5nLnNlcnZpY2UudHNcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBNb2RGcmFtZXdvcmtDb25maWcgfSBmcm9tICcuLi9tb2RlbHMvbW9kLWZyYW1ld29yay1jb25maWcubW9kZWwnO1xyXG5pbXBvcnQgeyBNb2RDb25maWcgfSBmcm9tICcuLi9zdGF0aWMvbW9kLWNvbmZpZy5jb25zdCc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIExvYWRpbmdTZXJ2aWNlIHtcclxuXHJcbiAgICBwdWJsaWMgaXNMb2FkaW5nID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XHJcbiAgICBwdWJsaWMgbG9hZGluZ0RlbGF5OiBudW1iZXIgPSA1MDA7XHJcblxyXG4gICAgY29uc3RydWN0b3IoQEluamVjdChNb2RDb25maWcpIGNvbmZpZzogTW9kRnJhbWV3b3JrQ29uZmlnKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nRGVsYXkgPSBjb25maWcgPyBjb25maWcubG9hZGluZ0RlbGF5IDogNTAwO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==