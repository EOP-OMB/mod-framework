import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserCheckComponent } from './browser-check.component';

describe('BrowserCheckComponent', () => {
  let component: BrowserCheckComponent;
  let fixture: ComponentFixture<BrowserCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowserCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowserCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
