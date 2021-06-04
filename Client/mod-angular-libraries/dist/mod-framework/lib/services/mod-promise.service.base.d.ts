import { HttpClient, HttpParams } from '@angular/common/http';
import { IDto } from '../interfaces/dto.interface';
export declare abstract class ModPromiseServiceBase<T extends IDto> {
    http: HttpClient;
    url: string;
    endpoint: string;
    private TCreator;
    constructor(http: HttpClient, url: string, endpoint: string, TCreator: {
        new (): T;
    });
    save(item: T): Promise<T>;
    getAll(params?: HttpParams): Promise<T[]>;
    create(item: T): Promise<T>;
    get(id: number): Promise<T>;
    update(item: T): Promise<T>;
    delete(id: number): Promise<any>;
    formatResponse(data: T): T;
    handleError(error: Response | any): Promise<any>;
}
