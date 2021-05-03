import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { CurrentUserService } from '../../services/current-user.service';
import { ModConfig } from '../../static/mod-config.const';
import { ModFrameworkConfig } from '../../models/mod-framework-config.model';

@Component({
    selector: 'mod-user-display',
    templateUrl: './mod-user-display.component.html',
    styleUrls: ['./mod-user-display.component.scss']
})
export class ModUserDisplayComponent implements OnInit {

    @Input()
    showUser: boolean = false;

    @Output()
    selectOption = new EventEmitter<string>();


    public config: ModFrameworkConfig;

    constructor(private userService: CurrentUserService, @Inject(ModConfig) config: ModFrameworkConfig) {
        this.config = config;
        this.config.userOptions.push('User Profile');
    }

    ngOnInit() {
        
    }

    get user() {
        return this.userService.user;
    }

    public optionSelected(option: string) {
        if (option == "User Profile") {
            window.open(this.config.profileUrl, '_blank')
        }
        else {
            this.selectOption.emit(option);
        }
    }
}
