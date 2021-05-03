import { Component, OnInit, OnChanges, Input, SimpleChange, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { ModSideMenuConfig, ModMenuItem, ModMenuSection } from '../../models/mod-side-menu-config.model';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { CurrentUserService } from '../../services/current-user.service';

@Component({
    selector: 'mod-side-menu',
    templateUrl: './mod-side-menu.component.html',
    styleUrls: ['./mod-side-menu.component.scss']
})
export class ModSideMenuComponent implements OnInit, OnChanges {

    public menuOption: string;
    public expanded: boolean = true;
    public opened: boolean = true;

    @Input()
    config: ModSideMenuConfig;

    @ViewChild('mainContent', { static: true }) mainContentElement: ElementRef;
    @ViewChild('sidenav', { static: true }) sidenav: MatSidenav;

    constructor(
        public router: Router,
        private activatedRoute: ActivatedRoute,
        private renderer: Renderer2,
        private userService: CurrentUserService) {
    }

    public ngOnInit() {
    }

    public ngOnChanges(changes: { [propName: string]: SimpleChange }) {
        if (changes['config'] && changes['config'].previousValue != changes['config'].currentValue) {
            this.selectCurrentRoute();
        }
    }

    private selectCurrentRoute(): void {
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
    public navigateTo(urlSegment: string) {
        urlSegment = urlSegment.split('#')[0];
        var url = "";
        if (urlSegment.startsWith('/')) {
            url = urlSegment;
        } else {
            url = this.activatedRoute.snapshot.url.join('/') + '/' + urlSegment;
        }

        // nav to the route, and then set focus on the main content div rather than keep focus
        // on the nav menu itself (users will need to Shift+Tab their way back to nav menu)
        this.router.navigateByUrl(url).then(x => {
            if (this.mainContentElement)
                this.mainContentElement.nativeElement.focus();
        });
    }

    public expandMenu(expanded: boolean = true) {
        this.expanded = expanded;
    }

    public toggleSideNav() {
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

    public get viewableSections(): ModMenuSection[] {
        let sections: ModMenuSection[] = [];

        this.config.sections.forEach(section => {
            if (!section.allowedRoles || this.userService.isInRoles(section.allowedRoles))
                sections.push(section);
        });
        return sections;
    }

    public getViewableMenuItems(section: ModMenuSection): ModMenuItem[] {
        let items: ModMenuItem[] = [];

        section.menuItems.forEach(item => {
            if (!item.allowedRoles || this.userService.isInRoles(item.allowedRoles))
                items.push(item);
        })

        return items;
    }

}
