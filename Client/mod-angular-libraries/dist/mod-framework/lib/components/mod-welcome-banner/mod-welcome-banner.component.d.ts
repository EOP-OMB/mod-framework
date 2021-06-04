import { OnInit, EventEmitter } from '@angular/core';
export declare class ModWelcomeBanner implements OnInit {
    onLogin: EventEmitter<any>;
    onLogout: EventEmitter<any>;
    constructor();
    ngOnInit(): void;
}
