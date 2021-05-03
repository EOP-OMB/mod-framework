import { HttpClient, HttpParams } from '@angular/common/http';
import { IDto } from '../interfaces/dto.interface';
import { Logging } from '../static/logging.static';

export abstract class ModPromiseServiceBase<T extends IDto> {
    constructor(
        public http: HttpClient,
        public url: string,
        public endpoint: string,
        private TCreator: { new(): T; }) {

        this.url = (url.endsWith('/') ? url.slice(0, -1) : url) + '/api';
    }

    public save(item: T): Promise<T> {
        if (item.id <= 0)
            return this.create(item);
        else
            return this.update(item);
    }

    public getAll(params?: HttpParams): Promise<T[]> {
        var url = `${this.url}/${this.endpoint}`;

        return this.http
            .get<T[]>(url, {params})
            .toPromise()
            .then(response => {
                var data: T[] = [];

                response.forEach(x => {
                    var obj = this.formatResponse(x);
                    data.push(obj);
                });

                return data;
            })
            .catch(this.handleError);
    }

    public create(item: T): Promise<T> {
        var url = `${this.url}/${this.endpoint}`;

        return this.http.post<T>(url, item)
            .toPromise()
            .then(response => {
                var obj = this.formatResponse(response);
                return obj;
            })
            .catch(this.handleError);
    }

    public get(id: number): Promise<T> {
        var url = `${this.url}/${this.endpoint}/${id}`;

        return this.http.get<T>(url)
            .toPromise()
            .then(response => {
                var obj = this.formatResponse(response);
                return obj;
            })
            .catch(this.handleError);
    }

    public update(item: T): Promise<T> {
        var url = `${this.url}/${this.endpoint}/${item.id}`;

        return this.http.put<T>(url, item)
            .toPromise()
            .then(response => {
                var obj = this.formatResponse(response);
                return obj;
            })
            .catch(this.handleError);
    }

    public delete(id: number): Promise<any> {
        return this.http.delete(`${this.url}/${this.endpoint}/${id}`).toPromise();
    }

    // Override to fully instantiate child objects.  Be sure to call super.formatResponse first to instantiate the parent object.
    formatResponse(data: T): T {
        return Object.assign(new this.TCreator(), data);
    }

    handleError(error: Response | any): Promise<any> {
        Logging.log(error);
        return Promise.reject(error.message || error);
    }
}
