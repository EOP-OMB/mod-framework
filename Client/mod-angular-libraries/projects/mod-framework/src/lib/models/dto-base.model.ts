import { IDto } from '../interfaces/dto.interface';

export abstract class DtoBase implements IDto {
    id: number = 0;
    createdBy: string;
    createdTime: Date;
    modifiedBy: string;
    modifiedTime: Date;
}
