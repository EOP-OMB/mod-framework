import { OnInit, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ModWelcomeBanner implements OnInit {
    onLogin: EventEmitter<any>;
    onLogout: EventEmitter<any>;
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<ModWelcomeBanner, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ModWelcomeBanner, "mod-welcome-banner", never, {}, { "onLogin": "onLogin"; "onLogout": "onLogout"; }, never, never>;
}
