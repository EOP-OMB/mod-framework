import { OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ModProgressSpinnerComponent implements OnInit {
    value: number;
    diameter: number;
    mode: string;
    strokeWidth: number;
    overlay: boolean;
    color: string;
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<ModProgressSpinnerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ModProgressSpinnerComponent, "mod-progress-spinner", never, { "value": "value"; "diameter": "diameter"; "mode": "mode"; "strokeWidth": "strokeWidth"; "overlay": "overlay"; "color": "color"; }, {}, never, never>;
}
