import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModLoadingOverlayComponent } from './mod-loading-overlay.component';

describe('ModLoadingOverlayComponent', () => {
  let component: ModLoadingOverlayComponent;
  let fixture: ComponentFixture<ModLoadingOverlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModLoadingOverlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModLoadingOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
