// loader.interceptors.ts
import { Inject, Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ModConfig } from '../static/mod-config.const';
import * as i0 from "@angular/core";
import * as i1 from "./loading.service";
import * as i2 from "../../public-api";
class LoadingIntercepter {
    constructor(loadingService, config) {
        this.loadingService = loadingService;
        this.requests = [];
        this.urlsToSkip = ['frameworkapi/maxpicker/search'];
        for (let x of config.urlsToSkip)
            this.urlsToSkip.push(x);
    }
    removeRequest(req) {
        const i = this.requests.indexOf(req);
        if (i >= 0) {
            this.requests.splice(i, 1);
        }
        this.loadingService.isLoading.next(this.requests.length > 0);
    }
    intercept(req, next) {
        if (this.skipThisRequest(req)) {
            return next.handle(req);
        }
        else {
            this.requests.push(req);
            setTimeout(() => {
                if (this.requests.length > 0)
                    this.loadingService.isLoading.next(true);
            }, this.loadingService.loadingDelay);
            return Observable.create(observer => {
                const subscription = next.handle(req)
                    .subscribe(event => {
                    if (event instanceof HttpResponse) {
                        this.removeRequest(req);
                        observer.next(event);
                    }
                }, err => {
                    this.removeRequest(req);
                    observer.error(err);
                }, () => {
                    this.removeRequest(req);
                    observer.complete();
                });
                // remove request from queue when cancelled
                return () => {
                    this.removeRequest(req);
                    subscription.unsubscribe();
                };
            });
        }
    }
    skipThisRequest(req) {
        var matched = false;
        for (let url of this.urlsToSkip) {
            matched = req.url.match(url) != null;
            if (matched)
                break;
        }
        return matched;
    }
    static { this.ɵfac = function LoadingIntercepter_Factory(t) { return new (t || LoadingIntercepter)(i0.ɵɵinject(i1.LoadingService), i0.ɵɵinject(ModConfig)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: LoadingIntercepter, factory: LoadingIntercepter.ɵfac, providedIn: 'root' }); }
}
export { LoadingIntercepter };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoadingIntercepter, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.LoadingService }, { type: i2.ModFrameworkConfig, decorators: [{
                type: Inject,
                args: [ModConfig]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21vZC1mcmFtZXdvcmsvc3JjL2xpYi9zZXJ2aWNlcy9sb2FkaW5nLmludGVyY2VwdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlCQUF5QjtBQUN6QixPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQXFCLFlBQVksRUFBd0QsTUFBTSxzQkFBc0IsQ0FBQztBQUM3SCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWxDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7OztBQUd2RCxNQUdhLGtCQUFrQjtJQUszQixZQUFvQixjQUE4QixFQUFxQixNQUEwQjtRQUE3RSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFKMUMsYUFBUSxHQUF1QixFQUFFLENBQUM7UUFFbEMsZUFBVSxHQUFhLENBQUMsK0JBQStCLENBQUMsQ0FBQztRQUc3RCxLQUFLLElBQUksQ0FBQyxJQUFJLE1BQU0sQ0FBQyxVQUFVO1lBQzNCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxhQUFhLENBQUMsR0FBcUI7UUFDL0IsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ1IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQzlCO1FBQ0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFRCxTQUFTLENBQUMsR0FBcUIsRUFBRSxJQUFpQjtRQUM5QyxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDM0IsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzNCO2FBQU07WUFDSCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN4QixVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUNaLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQztvQkFDeEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2pELENBQUMsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBRXJDLE9BQU8sVUFBVSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDaEMsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7cUJBQ2hDLFNBQVMsQ0FDTixLQUFLLENBQUMsRUFBRTtvQkFDSixJQUFJLEtBQUssWUFBWSxZQUFZLEVBQUU7d0JBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ3hCLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7cUJBQ3hCO2dCQUNMLENBQUMsRUFDRCxHQUFHLENBQUMsRUFBRTtvQkFDRixJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUN4QixRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN4QixDQUFDLEVBQ0QsR0FBRyxFQUFFO29CQUNELElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3hCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDeEIsQ0FBQyxDQUFDLENBQUM7Z0JBQ1gsMkNBQTJDO2dCQUMzQyxPQUFPLEdBQUcsRUFBRTtvQkFDUixJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUN4QixZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQy9CLENBQUMsQ0FBQztZQUNOLENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDO0lBRU8sZUFBZSxDQUFDLEdBQXFCO1FBQ3pDLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNwQixLQUFLLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDN0IsT0FBTyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQztZQUNyQyxJQUFJLE9BQU87Z0JBQUUsTUFBTTtTQUN0QjtRQUNELE9BQU8sT0FBTyxDQUFDO0lBQ25CLENBQUM7bUZBN0RRLGtCQUFrQiw4Q0FLaUMsU0FBUzt1RUFMNUQsa0JBQWtCLFdBQWxCLGtCQUFrQixtQkFGZixNQUFNOztTQUVULGtCQUFrQjt1RkFBbEIsa0JBQWtCO2NBSDlCLFVBQVU7ZUFBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQjs7c0JBTXdELE1BQU07dUJBQUMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGxvYWRlci5pbnRlcmNlcHRvcnMudHNcclxuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBFcnJvclJlc3BvbnNlLCBIdHRwUmVzcG9uc2UsIEh0dHBSZXF1ZXN0LCBIdHRwSGFuZGxlciwgSHR0cEV2ZW50LCBIdHRwSW50ZXJjZXB0b3IgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgTG9hZGluZ1NlcnZpY2UgfSBmcm9tICcuL2xvYWRpbmcuc2VydmljZSc7XHJcbmltcG9ydCB7IE1vZENvbmZpZyB9IGZyb20gJy4uL3N0YXRpYy9tb2QtY29uZmlnLmNvbnN0JztcclxuaW1wb3J0IHsgTW9kRnJhbWV3b3JrQ29uZmlnIH0gZnJvbSAnLi4vLi4vcHVibGljLWFwaSc7XHJcblxuQEluamVjdGFibGUoe1xyXG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2FkaW5nSW50ZXJjZXB0ZXIgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xuICAgIHByaXZhdGUgcmVxdWVzdHM6IEh0dHBSZXF1ZXN0PGFueT5bXSA9IFtdO1xyXG5cclxuICAgIHByaXZhdGUgdXJsc1RvU2tpcDogc3RyaW5nW10gPSBbJ2ZyYW1ld29ya2FwaS9tYXhwaWNrZXIvc2VhcmNoJ107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBsb2FkaW5nU2VydmljZTogTG9hZGluZ1NlcnZpY2UsIEBJbmplY3QoTW9kQ29uZmlnKSBjb25maWc6IE1vZEZyYW1ld29ya0NvbmZpZykge1xyXG4gICAgICAgIGZvciAobGV0IHggb2YgY29uZmlnLnVybHNUb1NraXApXHJcbiAgICAgICAgICAgIHRoaXMudXJsc1RvU2tpcC5wdXNoKHgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZVJlcXVlc3QocmVxOiBIdHRwUmVxdWVzdDxhbnk+KSB7XHJcbiAgICAgICAgY29uc3QgaSA9IHRoaXMucmVxdWVzdHMuaW5kZXhPZihyZXEpO1xyXG4gICAgICAgIGlmIChpID49IDApIHtcclxuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0cy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubG9hZGluZ1NlcnZpY2UuaXNMb2FkaW5nLm5leHQodGhpcy5yZXF1ZXN0cy5sZW5ndGggPiAwKTtcclxuICAgIH1cclxuXHJcbiAgICBpbnRlcmNlcHQocmVxOiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcclxuICAgICAgICBpZiAodGhpcy5za2lwVGhpc1JlcXVlc3QocmVxKSkge1xuICAgICAgICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlcXVlc3RzLnB1c2gocmVxKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlcXVlc3RzLmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nU2VydmljZS5pc0xvYWRpbmcubmV4dCh0cnVlKTtcbiAgICAgICAgICAgIH0sIHRoaXMubG9hZGluZ1NlcnZpY2UubG9hZGluZ0RlbGF5KTtcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUob2JzZXJ2ZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3Vic2NyaXB0aW9uID0gbmV4dC5oYW5kbGUocmVxKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudCBpbnN0YW5jZW9mIEh0dHBSZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlUmVxdWVzdChyZXEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQoZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVSZXF1ZXN0KHJlcSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5lcnJvcihlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZVJlcXVlc3QocmVxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgLy8gcmVtb3ZlIHJlcXVlc3QgZnJvbSBxdWV1ZSB3aGVuIGNhbmNlbGxlZFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZVJlcXVlc3QocmVxKTtcclxuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XHJcbiAgICB9XG5cbiAgICBwcml2YXRlIHNraXBUaGlzUmVxdWVzdChyZXE6IEh0dHBSZXF1ZXN0PGFueT4pOiBib29sZWFuIHtcbiAgICAgICAgdmFyIG1hdGNoZWQgPSBmYWxzZTtcbiAgICAgICAgZm9yIChsZXQgdXJsIG9mIHRoaXMudXJsc1RvU2tpcCkge1xuICAgICAgICAgICAgbWF0Y2hlZCA9IHJlcS51cmwubWF0Y2godXJsKSAhPSBudWxsO1xuICAgICAgICAgICAgaWYgKG1hdGNoZWQpIGJyZWFrO1xyXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1hdGNoZWQ7XHJcbiAgICB9XHJcbn1cclxuIl19