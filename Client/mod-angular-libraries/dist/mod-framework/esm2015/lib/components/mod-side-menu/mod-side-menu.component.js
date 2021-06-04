import { Component, Input, ViewChild, Renderer2 } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CurrentUserService } from '../../services/current-user.service';
export class ModSideMenuComponent {
    constructor(router, activatedRoute, renderer, userService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.renderer = renderer;
        this.userService = userService;
        this.expanded = true;
        this.opened = true;
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        if (changes['config'] && changes['config'].previousValue != changes['config'].currentValue) {
            this.selectCurrentRoute();
        }
    }
    selectCurrentRoute() {
        var urls = this.router.url.split('/');
        for (let section of this.config.sections) {
            for (let item of section.menuItems) {
                if (urls[urls.length - 1].toString() == item.route) {
                    this.menuOption = item.text;
                    break;
                }
            }
        }
    }
    // Used by menu item keyup.enter handler to provide keyboard navigation
    navigateTo(urlSegment) {
        urlSegment = urlSegment.split('#')[0];
        var url = "";
        if (urlSegment.startsWith('/')) {
            url = urlSegment;
        }
        else {
            url = this.activatedRoute.snapshot.url.join('/') + '/' + urlSegment;
        }
        // nav to the route, and then set focus on the main content div rather than keep focus
        // on the nav menu itself (users will need to Shift+Tab their way back to nav menu)
        this.router.navigateByUrl(url).then(x => {
            if (this.mainContentElement)
                this.mainContentElement.nativeElement.focus();
        });
    }
    expandMenu(expanded = true) {
        this.expanded = expanded;
    }
    toggleSideNav() {
        //this.sidenav.toggle();
        var opening = !this.opened;
        if (opening) {
            this.opened = !this.opened;
            this.sidenav.toggle();
        }
        else {
            this.sidenav.toggle().then(() => {
                this.opened = !this.opened;
            });
        }
    }
    get viewableSections() {
        let sections = [];
        this.config.sections.forEach(section => {
            if (!section.allowedRoles || this.userService.isInRoles(section.allowedRoles))
                sections.push(section);
        });
        return sections;
    }
    getViewableMenuItems(section) {
        let items = [];
        section.menuItems.forEach(item => {
            if (!item.allowedRoles || this.userService.isInRoles(item.allowedRoles))
                items.push(item);
        });
        return items;
    }
}
ModSideMenuComponent.decorators = [
    { type: Component, args: [{
                selector: 'mod-side-menu',
                template: "<mat-sidenav-container class=\"mod-side-menu-container\">\r\n    <mat-sidenav #sidenav mode=\"side\" opened role=\"navigation\" id=\"navigation-menu\" [ngClass]=\"{'mod-side-menu' : true, 'collapsed' : (!expanded && opened)}\">\r\n        <h1 mat-subheader>\r\n            {{ expanded ? config.title : \"\" }}\r\n            <mat-icon *ngIf=\"expanded\" class=\"menu-close\" (click)=\"expandMenu(!this.expanded)\">\r\n                keyboard_arrow_left\r\n            </mat-icon>\r\n            <mat-icon *ngIf=\"!expanded\" class=\"menu-open\" (click)=\"expandMenu(!this.expanded)\">\r\n                keyboard_arrow_right\r\n            </mat-icon>\r\n        </h1>\r\n\r\n        <div *ngFor=\"let section of viewableSections\">\r\n            <h1 mat-subheader>\r\n                {{ expanded ? section.name : \"\" }}\r\n            </h1>\r\n            <mat-nav-list>\r\n                <mat-list-item *ngFor=\"let item of getViewableMenuItems(section)\"\r\n                               [routerLink]=\"item.route\"\r\n                               routerLinkActive=\"active\"\r\n                               [routerLinkActiveOptions]=\"{exact: true}\"\r\n                               (keyup.enter)=\"navigateTo(item.route)\">\r\n                    <mat-icon mat-list-icon [matTooltip]=\"item.text\">{{item.icon}}</mat-icon>\r\n                    {{ expanded ? item.text : \"\"}}\r\n                </mat-list-item>\r\n            </mat-nav-list>\r\n        </div>\r\n    </mat-sidenav>\r\n    <mat-sidenav-content [ngClass]=\"{'mod-side-menu-content' : true, 'collapsed' : (!expanded && opened)}\" role=\"main\" #mainContent tabindex=\"0\">\r\n        <ng-content></ng-content>\r\n    </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n",
                styles: ["#main-content:focus{border:1px solid #5b9acf}.menu-close{position:absolute;right:0;cursor:pointer}.menu-open{text-align:center;width:100%;cursor:pointer}.mod-side-menu{display:flex;align-items:flex-start;justify-content:left;width:250px;transition:width .25s}.mod-side-menu.collapsed{width:76px!important;transition:width .25s}.mod-side-menu-container{display:flex;height:100%}.mod-side-menu-content{transition:margin-left .25s;width:100%;overflow:auto;display:flex;align-items:stretch;outline:none!important}.mod-side-menu-content.collapsed{margin-left:76px!important;transition:margin-left .25s}h2{overflow:hidden;white-space:nowrap;text-overflow:clip}.mat-subheader{font-size:14px;line-height:20px;max-height:56px;color:#888;padding:12px 12px 12px 20px!important;margin-bottom:0!important;margin-top:0!important;border-left:5px solid #bbb;margin-left:-5px}.mat-subheader .mat-icon{padding-left:4px;margin-right:16px}.mat-expansion-panel{box-shadow:none;margin:0}.mat-expansion-indicator{line-height:0!important}mat-expansion-panel-header[aria-disabled=true]{color:#000;color:initial}.mat-expansion-panel-header{height:56px!important;max-height:56px!important;border-left:5px solid #bbb}.mat-expansion-panel-header-title{max-height:24px}.mat-expansion-panel.active>.mat-expansion-panel-header{border-color:#5b9acf}.mat-expansion-panel-header-title>.mat-icon{margin-right:16px}.mat-expansion-panel.mat-expanded{background-color:#eee}::ng-deep .mat-expansion-panel-body{padding:0!important}::ng-deep .mat-drawer-container{display:flex;align-items:stretch}.mat-list-icon{padding-right:16px!important;font-size:22px!important}.mat-list-item{font-size:15px!important;border-left:5px solid #bbb;margin-left:-5px;height:56px!important;max-height:56px!important;line-height:22.5px!important;width:auto!important}.mat-list-item:focus{border:1px solid #5b9acf}.mat-list-item-content{padding:0 24px!important}.mat-list-item.active{border-color:#5b9acf;background-color:#d1d1d1}.mat-list-base{padding-top:0}"]
            },] }
];
ModSideMenuComponent.ctorParameters = () => [
    { type: Router },
    { type: ActivatedRoute },
    { type: Renderer2 },
    { type: CurrentUserService }
];
ModSideMenuComponent.propDecorators = {
    config: [{ type: Input }],
    mainContentElement: [{ type: ViewChild, args: ['mainContent', { static: true },] }],
    sidenav: [{ type: ViewChild, args: ['sidenav', { static: true },] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kLXNpZGUtbWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tb2QtZnJhbWV3b3JrL3NyYy9saWIvY29tcG9uZW50cy9tb2Qtc2lkZS1tZW51L21vZC1zaWRlLW1lbnUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLEtBQUssRUFBNEIsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVwSCxPQUFPLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXpELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBT3pFLE1BQU0sT0FBTyxvQkFBb0I7SUFZN0IsWUFDVyxNQUFjLEVBQ2IsY0FBOEIsRUFDOUIsUUFBbUIsRUFDbkIsV0FBK0I7UUFIaEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNiLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLGdCQUFXLEdBQVgsV0FBVyxDQUFvQjtRQWJwQyxhQUFRLEdBQVksSUFBSSxDQUFDO1FBQ3pCLFdBQU0sR0FBWSxJQUFJLENBQUM7SUFhOUIsQ0FBQztJQUVNLFFBQVE7SUFDZixDQUFDO0lBRU0sV0FBVyxDQUFDLE9BQTZDO1FBQzVELElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksRUFBRTtZQUN4RixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztTQUM3QjtJQUNMLENBQUM7SUFFTyxrQkFBa0I7UUFDdEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFD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Qzs7O1lBdkdKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsdXVEQUE2Qzs7YUFFaEQ7OztZQVJRLE1BQU07WUFBRSxjQUFjO1lBRm9ELFNBQVM7WUFJbkYsa0JBQWtCOzs7cUJBYXRCLEtBQUs7aUNBR0wsU0FBUyxTQUFDLGFBQWEsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7c0JBQ3pDLFNBQVMsU0FBQyxTQUFTLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uQ2hhbmdlcywgSW5wdXQsIFNpbXBsZUNoYW5nZSwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1vZFNpZGVNZW51Q29uZmlnLCBNb2RNZW51SXRlbSwgTW9kTWVudVNlY3Rpb24gfSBmcm9tICcuLi8uLi9tb2RlbHMvbW9kLXNpZGUtbWVudS1jb25maWcubW9kZWwnO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgTWF0U2lkZW5hdiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NpZGVuYXYnO1xyXG5pbXBvcnQgeyBDdXJyZW50VXNlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jdXJyZW50LXVzZXIuc2VydmljZSc7XHJcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdtb2Qtc2lkZS1tZW51JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbW9kLXNpZGUtbWVudS5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vbW9kLXNpZGUtbWVudS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE1vZFNpZGVNZW51Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuXG4gICAgcHVibGljIG1lbnVPcHRpb246IHN0cmluZztcbiAgICBwdWJsaWMgZXhwYW5kZWQ6IGJvb2xlYW4gPSB0cnVlO1xuICAgIHB1YmxpYyBvcGVuZWQ6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgQElucHV0KClcbiAgICBjb25maWc6IE1vZFNpZGVNZW51Q29uZmlnO1xuXG4gICAgQFZpZXdDaGlsZCgnbWFpbkNvbnRlbnQnLCB7IHN0YXRpYzogdHJ1ZSB9KSBtYWluQ29udGVudEVsZW1lbnQ6IEVsZW1lbnRSZWY7XG4gICAgQFZpZXdDaGlsZCgnc2lkZW5hdicsIHsgc3RhdGljOiB0cnVlIH0pIHNpZGVuYXY6IE1hdFNpZGVuYXY7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIHJvdXRlcjogUm91dGVyLFxuICAgICAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOiBDdXJyZW50VXNlclNlcnZpY2UpIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgfVxuXG4gICAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHsgW3Byb3BOYW1lOiBzdHJpbmddOiBTaW1wbGVDaGFuZ2UgfSkge1xuICAgICAgICBpZiAoY2hhbmdlc1snY29uZmlnJ10gJiYgY2hhbmdlc1snY29uZmlnJ10ucHJldmlvdXNWYWx1ZSAhPSBjaGFuZ2VzWydjb25maWcnXS5jdXJyZW50VmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0Q3VycmVudFJvdXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHNlbGVjdEN1cnJlbnRSb3V0ZSgpOiB2b2lkIHtcbiAgICAgICAgdmFyIHVybHMgPSB0aGlzLnJvdXRlci51cmwuc3BsaXQoJy8nKTtcblxuICAgICAgICBmb3IgKGxldCBzZWN0aW9uIG9mIHRoaXMuY29uZmlnLnNlY3Rpb25zKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpdGVtIG9mIHNlY3Rpb24ubWVudUl0ZW1zKSB7XG4gICAgICAgICAgICAgICAgaWYgKHVybHNbdXJscy5sZW5ndGggLSAxXS50b1N0cmluZygpID09IGl0ZW0ucm91dGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZW51T3B0aW9uID0gaXRlbS50ZXh0O1xuXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFVzZWQgYnkgbWVudSBpdGVtIGtleXVwLmVudGVyIGhhbmRsZXIgdG8gcHJvdmlkZSBrZXlib2FyZCBuYXZpZ2F0aW9uXG4gICAgcHVibGljIG5hdmlnYXRlVG8odXJsU2VnbWVudDogc3RyaW5nKSB7XG4gICAgICAgIHVybFNlZ21lbnQgPSB1cmxTZWdtZW50LnNwbGl0KCcjJylbMF07XG4gICAgICAgIHZhciB1cmwgPSBcIlwiO1xuICAgICAgICBpZiAodXJsU2VnbWVudC5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgIHVybCA9IHVybFNlZ21lbnQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB1cmwgPSB0aGlzLmFjdGl2YXRlZFJvdXRlLnNuYXBzaG90LnVybC5qb2luKCcvJykgKyAnLycgKyB1cmxTZWdtZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbmF2IHRvIHRoZSByb3V0ZSwgYW5kIHRoZW4gc2V0IGZvY3VzIG9uIHRoZSBtYWluIGNvbnRlbnQgZGl2IHJhdGhlciB0aGFuIGtlZXAgZm9jdXNcbiAgICAgICAgLy8gb24gdGhlIG5hdiBtZW51IGl0c2VsZiAodXNlcnMgd2lsbCBuZWVkIHRvIFNoaWZ0K1RhYiB0aGVpciB3YXkgYmFjayB0byBuYXYgbWVudSlcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCh1cmwpLnRoZW4oeCA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5tYWluQ29udGVudEVsZW1lbnQpXG4gICAgICAgICAgICAgICAgdGhpcy5tYWluQ29udGVudEVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZXhwYW5kTWVudShleHBhbmRlZDogYm9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgdGhpcy5leHBhbmRlZCA9IGV4cGFuZGVkO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b2dnbGVTaWRlTmF2KCkge1xuICAgICAgICAvL3RoaXMuc2lkZW5hdi50b2dnbGUoKTtcbiAgICAgICAgdmFyIG9wZW5pbmcgPSAhdGhpcy5vcGVuZWQ7XG5cbiAgICAgICAgaWYgKG9wZW5pbmcpIHtcbiAgICAgICAgICAgIHRoaXMub3BlbmVkID0gIXRoaXMub3BlbmVkO1xuICAgICAgICAgICAgdGhpcy5zaWRlbmF2LnRvZ2dsZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zaWRlbmF2LnRvZ2dsZSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuZWQgPSAhdGhpcy5vcGVuZWQ7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgdmlld2FibGVTZWN0aW9ucygpOiBNb2RNZW51U2VjdGlvbltdIHtcbiAgICAgICAgbGV0IHNlY3Rpb25zOiBNb2RNZW51U2VjdGlvbltdID0gW107XHJcblxyXG4gICAgICAgIHRoaXMuY29uZmlnLnNlY3Rpb25zLmZvckVhY2goc2VjdGlvbiA9PiB7XHJcbiAgICAgICAgICAgIGlmICghc2VjdGlvbi5hbGxvd2VkUm9sZXMgfHwgdGhpcy51c2VyU2VydmljZS5pc0luUm9sZXMoc2VjdGlvbi5hbGxvd2VkUm9sZXMpKVxyXG4gICAgICAgICAgICAgICAgc2VjdGlvbnMucHVzaChzZWN0aW9uKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gc2VjdGlvbnM7XHJcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Vmlld2FibGVNZW51SXRlbXMoc2VjdGlvbjogTW9kTWVudVNlY3Rpb24pOiBNb2RNZW51SXRlbVtdIHtcbiAgICAgICAgbGV0IGl0ZW1zOiBNb2RNZW51SXRlbVtdID0gW107XHJcblxyXG4gICAgICAgIHNlY3Rpb24ubWVudUl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghaXRlbS5hbGxvd2VkUm9sZXMgfHwgdGhpcy51c2VyU2VydmljZS5pc0luUm9sZXMoaXRlbS5hbGxvd2VkUm9sZXMpKVxyXG4gICAgICAgICAgICAgICAgaXRlbXMucHVzaChpdGVtKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICByZXR1cm4gaXRlbXM7XHJcbiAgICB9XG5cbn1cbiJdfQ==