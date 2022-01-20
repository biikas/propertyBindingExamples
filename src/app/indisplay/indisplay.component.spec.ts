import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndisplayComponent } from './indisplay.component';

describe('IndisplayComponent', () => {
  let component: IndisplayComponent;
  let fixture: ComponentFixture<IndisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
