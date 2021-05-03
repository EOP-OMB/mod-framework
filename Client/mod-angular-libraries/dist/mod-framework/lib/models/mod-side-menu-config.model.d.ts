export declare class ModSideMenuConfig {
    title: string;
    sections: ModMenuSection[];
    constructor();
}
export declare class ModMenuSection {
    name: string;
    shortName: string;
    visible: boolean;
    allowedRoles: string[];
    menuItems: ModMenuItem[];
}
export declare class ModMenuItem {
    text: string;
    icon: string;
    route: string;
    defaultState: string;
    allowedRoles: string[];
}
//# sourceMappingURL=mod-side-menu-config.model.d.ts.map