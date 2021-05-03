import { Component } from '@angular/core';
import { ModSideMenuConfig } from '../../projects/mod-framework/src/lib/models/mod-side-menu-config.model';

import * as config from '../assets/menu-config.json';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'mod-angular-libraries';

    public menuConfig: ModSideMenuConfig;

    public constructor() {
        this.menuConfig = (config as any).default;
    }

    public onUserOption(option: string) {
        console.log('User Option: ' + option);
    }

    public onHelpOption(option: string) {
        console.log('Help Option: ' + option);
    }

    public onSearch(searchString: string) {
        console.log('Search: ' + searchString);
    }
}
