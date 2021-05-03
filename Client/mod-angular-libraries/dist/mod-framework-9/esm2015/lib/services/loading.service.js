//loading.service.ts
import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ModConfig } from '../static/mod-config.const';
import * as i0 from "@angular/core";
import * as i1 from "../models/mod-framework-config.model";
export class LoadingService {
    constructor(config) {
        this.isLoading = new BehaviorSubject(false);
        this.loadingDelay = 500;
        this.loadingDelay = config ? config.loadingDelay : 500;
    }
}
LoadingService.ɵfac = function LoadingService_Factory(t) { return new (t || LoadingService)(i0.ɵɵinject(ModConfig)); };
LoadingService.ɵprov = i0.ɵɵdefineInjectable({ token: LoadingService, factory: LoadingService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LoadingService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.ModFrameworkConfig, decorators: [{
                type: Inject,
                args: [ModConfig]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbW9kLWZyYW1ld29yay9zcmMvbGliL3NlcnZpY2VzL2xvYWRpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUV2QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7OztBQUt2RCxNQUFNLE9BQU8sY0FBYztJQUt2QixZQUErQixNQUEwQjtRQUhsRCxjQUFTLEdBQUcsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkMsaUJBQVksR0FBVyxHQUFHLENBQUM7UUFHOUIsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUMzRCxDQUFDOzs0RUFQUSxjQUFjLGNBS0gsU0FBUztzREFMcEIsY0FBYyxXQUFkLGNBQWMsbUJBRlgsTUFBTTtrREFFVCxjQUFjO2NBSDFCLFVBQVU7ZUFBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQjs7c0JBTWdCLE1BQU07dUJBQUMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbIi8vbG9hZGluZy5zZXJ2aWNlLnRzXHJcbmltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgTW9kRnJhbWV3b3JrQ29uZmlnIH0gZnJvbSAnLi4vbW9kZWxzL21vZC1mcmFtZXdvcmstY29uZmlnLm1vZGVsJztcclxuaW1wb3J0IHsgTW9kQ29uZmlnIH0gZnJvbSAnLi4vc3RhdGljL21vZC1jb25maWcuY29uc3QnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2FkaW5nU2VydmljZSB7XHJcblxyXG4gICAgcHVibGljIGlzTG9hZGluZyA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xyXG4gICAgcHVibGljIGxvYWRpbmdEZWxheTogbnVtYmVyID0gNTAwO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKEBJbmplY3QoTW9kQ29uZmlnKSBjb25maWc6IE1vZEZyYW1ld29ya0NvbmZpZykge1xyXG4gICAgICAgIHRoaXMubG9hZGluZ0RlbGF5ID0gY29uZmlnID8gY29uZmlnLmxvYWRpbmdEZWxheSA6IDUwMDtcclxuICAgIH1cclxufVxyXG4iXX0=