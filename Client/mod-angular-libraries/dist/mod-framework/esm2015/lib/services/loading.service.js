//loading.service.ts
import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ModFrameworkConfig } from '../models/mod-framework-config.model';
import { ModConfig } from '../static/mod-config.const';
import * as i0 from "@angular/core";
import * as i1 from "../static/mod-config.const";
export class LoadingService {
    constructor(config) {
        this.isLoading = new BehaviorSubject(false);
        this.loadingDelay = 500;
        this.loadingDelay = config ? config.loadingDelay : 500;
    }
}
LoadingService.ɵprov = i0.ɵɵdefineInjectable({ factory: function LoadingService_Factory() { return new LoadingService(i0.ɵɵinject(i1.ModConfig)); }, token: LoadingService, providedIn: "root" });
LoadingService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
LoadingService.ctorParameters = () => [
    { type: ModFrameworkConfig, decorators: [{ type: Inject, args: [ModConfig,] }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbW9kLWZyYW1ld29yay9zcmMvbGliL3NlcnZpY2VzL2xvYWRpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN2QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7OztBQUt2RCxNQUFNLE9BQU8sY0FBYztJQUt2QixZQUErQixNQUEwQjtRQUhsRCxjQUFTLEdBQUcsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkMsaUJBQVksR0FBVyxHQUFHLENBQUM7UUFHOUIsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUMzRCxDQUFDOzs7O1lBVkosVUFBVSxTQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCOzs7WUFMUSxrQkFBa0IsdUJBV1YsTUFBTSxTQUFDLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2xvYWRpbmcuc2VydmljZS50c1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IE1vZEZyYW1ld29ya0NvbmZpZyB9IGZyb20gJy4uL21vZGVscy9tb2QtZnJhbWV3b3JrLWNvbmZpZy5tb2RlbCc7XHJcbmltcG9ydCB7IE1vZENvbmZpZyB9IGZyb20gJy4uL3N0YXRpYy9tb2QtY29uZmlnLmNvbnN0JztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICAgIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9hZGluZ1NlcnZpY2Uge1xyXG5cclxuICAgIHB1YmxpYyBpc0xvYWRpbmcgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcclxuICAgIHB1YmxpYyBsb2FkaW5nRGVsYXk6IG51bWJlciA9IDUwMDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihASW5qZWN0KE1vZENvbmZpZykgY29uZmlnOiBNb2RGcmFtZXdvcmtDb25maWcpIHtcclxuICAgICAgICB0aGlzLmxvYWRpbmdEZWxheSA9IGNvbmZpZyA/IGNvbmZpZy5sb2FkaW5nRGVsYXkgOiA1MDA7XHJcbiAgICB9XHJcbn1cclxuIl19