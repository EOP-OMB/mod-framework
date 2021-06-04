import { OnInit } from '@angular/core';
import { CurrentUserService } from "../../services/current-user.service";
export declare class BrowserCheckComponent implements OnInit {
    private currentUserService;
    constructor(currentUserService: CurrentUserService);
    browserFail: string;
    loginSite: string;
    loginDomain: string;
    myDomain: string;
    ngOnInit(): void;
}
