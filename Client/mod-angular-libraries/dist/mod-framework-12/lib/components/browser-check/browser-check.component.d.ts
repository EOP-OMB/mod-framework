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
    static ɵfac: i0.ɵɵFactoryDeclaration<BrowserCheckComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BrowserCheckComponent, "mod-browser-check", never, {}, {}, never, never>;
}
//# sourceMappingURL=browser-check.component.d.ts.map