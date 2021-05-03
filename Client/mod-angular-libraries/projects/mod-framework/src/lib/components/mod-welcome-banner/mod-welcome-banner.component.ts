import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'mod-welcome-banner',
    templateUrl: './mod-welcome-banner.component.html',
    styleUrls: ['./mod-welcome-banner.component.scss']
})
export class ModWelcomeBanner implements OnInit {
    @Output()
    onLogin = new EventEmitter<any>();

    @Output()
    onLogout = new EventEmitter<any>();

    constructor() { }

    ngOnInit() {
    }

}
