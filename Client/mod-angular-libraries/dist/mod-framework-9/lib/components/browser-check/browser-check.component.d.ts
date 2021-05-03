import { OnInit } from '@angular/core';
import { CurrentUserService } from "../../services/current-user.service";
import * as i0 from "@angular/core";
export declare class BrowserCheckComponent implements OnInit {
    private currentUserService;
    constructor(currentUserService: CurrentUserService);
    browserFail: string;
    loginSite: string;
    loginDomain: string;
    myDomain: string;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<BrowserCheckComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<BrowserCheckComponent, "mod-browser-check", never, {}, {}, never, never>;
}
