export class ModSideMenuConfig {
    public title: string;

    public sections: ModMenuSection[] = [];

    public constructor() {

    }
}

export class ModMenuSection {
    public name: string = "";
    public shortName: string = "";
    public visible: boolean = true;
    public allowedRoles: string[] = [];
    public menuItems: ModMenuItem[] = [];    
}

export class ModMenuItem {
    public text: string;
    public icon: string;
    public route: string;
    public defaultState: string;
    public allowedRoles: string[] = [];
}
