import { Component, OnInit, Input } from '@angular/core';
import { CurrentUserService } from "../../services/current-user.service";

declare var $: any;

@Component({
    selector: 'mod-browser-check',
    templateUrl: './browser-check.component.html',
    styleUrls: ['./browser-check.component.scss']
})

export class BrowserCheckComponent implements OnInit {

    constructor(private currentUserService: CurrentUserService) {
    }

    public browserFail: string;
    public loginSite: string;
    public loginDomain: string;
    public myDomain: string;

    ngOnInit(): void {
        this.currentUserService.browserCheck().then(response => {
            this.browserFail = '';
            return;
        }).catch(error => {
            $("#loginout").css("display", "none");
            this.browserFail = error;
            this.loginSite = this.currentUserService.siteUrl;
            this.loginDomain = this.currentUserService.domain;
            this.myDomain = this.currentUserService.getDomain(window.location.href);
        });

    }

}
