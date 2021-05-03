import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../../services/loading.service';

@Component({
    selector: 'mod-loading-overlay',
    templateUrl: './mod-loading-overlay.component.html',
    styleUrls: ['./mod-loading-overlay.component.scss']
})
export class ModLoadingOverlayComponent implements OnInit {

    public showProgressSpinner: boolean = false;

    constructor(private loadingService: LoadingService) {
        this.loadingService.isLoading.subscribe((isLoading) => {
            if (isLoading) {
                this.showProgressSpinner = true;
            }
            else {
                this.showProgressSpinner = false;
            }
        })
    }
    ngOnInit(): void {
    }

}
