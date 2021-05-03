import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModBannerComponent } from './mod-welcome-banner.component';

describe('ModBannerComponent', () => {
  let component: ModBannerComponent;
  let fixture: ComponentFixture<ModBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
