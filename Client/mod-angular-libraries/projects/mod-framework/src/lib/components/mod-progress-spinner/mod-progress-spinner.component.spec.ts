import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModProgressSpinnerComponent } from './mod-progress-spinner.component';

describe('ModProgressSpinnerComponent', () => {
  let component: ModProgressSpinnerComponent;
  let fixture: ComponentFixture<ModProgressSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModProgressSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModProgressSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
