import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModUserDisplayComponent } from './mod-user-display.component';

describe('ModUserDisplayComponent', () => {
  let component: ModUserDisplayComponent;
  let fixture: ComponentFixture<ModUserDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModUserDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModUserDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
