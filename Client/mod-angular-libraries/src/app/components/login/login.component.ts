import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from '../../../../projects/mod-framework/src/public-api';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    public items: string[] = ['one', 'two', 'three'];
    public selected: string;

    constructor(private userService: CurrentUserService) { }

    ngOnInit(): void {
        
    }

}
