import { OnInit } from '@angular/core';
import { LoadingService } from '../../services/loading.service';
export declare class ModLoadingOverlayComponent implements OnInit {
    private loadingService;
    showProgressSpinner: boolean;
    constructor(loadingService: LoadingService);
    ngOnInit(): void;
}
