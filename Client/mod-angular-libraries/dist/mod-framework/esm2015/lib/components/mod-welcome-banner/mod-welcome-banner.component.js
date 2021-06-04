import { Component, Output, EventEmitter } from '@angular/core';
export class ModWelcomeBanner {
    constructor() {
        this.onLogin = new EventEmitter();
        this.onLogout = new EventEmitter();
    }
    ngOnInit() {
    }
}
ModWelcomeBanner.decorators = [
    { type: Component, args: [{
                selector: 'mod-welcome-banner',
                template: "<header class=\"mod-header\" role=\"banner\">\r\n    <div class=\"mod-welcome-banner\">\r\n        <div class=\"welcome-user\">\r\n            <mod-user-display></mod-user-display>\r\n        </div>\r\n    </div>\r\n</header>\r\n",
                styles: [".mod-header{display:flex;flex-direction:column}.mod-welcome-banner{padding-left:10px;padding-right:10px;background-color:#f0f0f0;padding-bottom:0;display:flex;font-family:Source Sans Pro Web,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif}.welcome-user{font-weight:700;font-size:.85em;padding-top:2px;padding-right:5px;flex:1;display:flex;justify-content:flex-end}.loginout-button{vertical-align:middle;width:auto!important;display:inline!important}.loginout-text{align-items:center}"]
            },] }
];
ModWelcomeBanner.ctorParameters = () => [];
ModWelcomeBanner.propDecorators = {
    onLogin: [{ type: Output }],
    onLogout: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kLXdlbGNvbWUtYmFubmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21vZC1mcmFtZXdvcmsvc3JjL2xpYi9jb21wb25lbnRzL21vZC13ZWxjb21lLWJhbm5lci9tb2Qtd2VsY29tZS1iYW5uZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU94RSxNQUFNLE9BQU8sZ0JBQWdCO0lBT3pCO1FBTEEsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFHbEMsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7SUFFbkIsQ0FBQztJQUVqQixRQUFRO0lBQ1IsQ0FBQzs7O1lBZkosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLGlQQUFrRDs7YUFFckQ7Ozs7c0JBRUksTUFBTTt1QkFHTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbW9kLXdlbGNvbWUtYmFubmVyJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbW9kLXdlbGNvbWUtYmFubmVyLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9tb2Qtd2VsY29tZS1iYW5uZXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNb2RXZWxjb21lQmFubmVyIGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBAT3V0cHV0KClcbiAgICBvbkxvZ2luID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgICBAT3V0cHV0KClcclxuICAgIG9uTG9nb3V0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgfVxuXG59XG4iXX0=