import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModLayoutComponent } from './mod-layout.component';

describe('ModLayoutComponent', () => {
  let component: ModLayoutComponent;
  let fixture: ComponentFixture<ModLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
