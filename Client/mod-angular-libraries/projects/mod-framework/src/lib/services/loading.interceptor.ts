// loader.interceptors.ts
import { Inject, Injectable } from '@angular/core';
import { HttpErrorResponse, HttpResponse, HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoadingService } from './loading.service';
import { ModConfig } from '../static/mod-config.const';
import { ModFrameworkConfig } from '../../public-api';

@Injectable({
    providedIn: 'root'
})
export class LoadingIntercepter implements HttpInterceptor {
    private requests: HttpRequest<any>[] = [];

    private urlsToSkip: string[] = ['frameworkapi/maxpicker/search'];

    constructor(private loadingService: LoadingService, @Inject(ModConfig) config: ModFrameworkConfig) {
        for (let x of config.urlsToSkip)
            this.urlsToSkip.push(x);
    }

    removeRequest(req: HttpRequest<any>) {
        const i = this.requests.indexOf(req);
        if (i >= 0) {
            this.requests.splice(i, 1);
        }
        this.loadingService.isLoading.next(this.requests.length > 0);
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.skipThisRequest(req)) {
            return next.handle(req);
        } else {
            this.requests.push(req);
            setTimeout(() => {
                if (this.requests.length > 0)
                    this.loadingService.isLoading.next(true);
            }, this.loadingService.loadingDelay);
            
            return Observable.create(observer => {
                const subscription = next.handle(req)
                    .subscribe(
                        event => {
                            if (event instanceof HttpResponse) {
                                this.removeRequest(req);
                                observer.next(event);
                            }
                        },
                        err => {
                            this.removeRequest(req);
                            observer.error(err);
                        },
                        () => {
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

    private skipThisRequest(req: HttpRequest<any>): boolean {
        var matched = false;
        for (let url of this.urlsToSkip) {
            matched = req.url.match(url) != null;
            if (matched) break;
        }
        return matched;
    }
}
