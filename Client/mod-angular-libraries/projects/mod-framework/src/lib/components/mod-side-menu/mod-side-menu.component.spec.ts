import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModSideMenuComponent } from './mod-side-menu.component';

describe('ModSideMenuComponent', () => {
    let component: ModSideMenuComponent;
    let fixture: ComponentFixture<ModSideMenuComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ModSideMenuComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ModSideMenuComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
