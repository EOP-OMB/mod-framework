import { IDto } from '../interfaces/dto.interface';
export declare abstract class DtoBase implements IDto {
    id: number;
    createdBy: string;
    createdTime: Date;
    modifiedBy: string;
    modifiedTime: Date;
}
