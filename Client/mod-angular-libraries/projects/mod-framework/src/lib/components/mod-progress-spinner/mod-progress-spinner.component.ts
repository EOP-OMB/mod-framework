import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'mod-progress-spinner',
    templateUrl: './mod-progress-spinner.component.html',
    styleUrls: ['./mod-progress-spinner.component.scss']
})
export class ModProgressSpinnerComponent implements OnInit {

    @Input() value: number = 100;
    @Input() diameter: number = 100;
    @Input() mode: string = "indeterminate";
    @Input() strokeWidth: number = 10;
    @Input() overlay: boolean = false;
    @Input() color: string = "primary";

    constructor() { }

    ngOnInit(): void {
    }

}
