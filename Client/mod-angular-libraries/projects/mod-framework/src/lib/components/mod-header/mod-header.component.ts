import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { ModConfig } from '../../static/mod-config.const';
import { ModFrameworkConfig } from '../../models/mod-framework-config.model';

@Component({
    selector: 'mod-header',
    templateUrl: './mod-header.component.html',
    styleUrls: ['./mod-header.component.scss']
})
export class ModHeaderComponent implements OnInit {

    @Input()
    appName: string;

    @Output()
    menuClick = new EventEmitter<any>();

    @Output()
    userOptionSelect = new EventEmitter<string>();

    @Output()
    helpOptionSelect = new EventEmitter<string>();

    public config: ModFrameworkConfig;

    constructor(@Inject(ModConfig) config: ModFrameworkConfig) {
        this.config = config;
    }

    ngOnInit(): void {
    }

    public onMenuClick(): void {
        this.menuClick.emit();
    }

    public onUserOptionSelect(option: string): void {
        this.userOptionSelect.emit(option);
    }

    public optionSelected(option: string): void {
        this.helpOptionSelect.emit(option);
    }
}
