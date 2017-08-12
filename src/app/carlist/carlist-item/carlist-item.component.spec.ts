import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarlistItemComponent } from './carlist-item.component';

describe('CarlistItemComponent', () => {
  let component: CarlistItemComponent;
  let fixture: ComponentFixture<CarlistItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarlistItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarlistItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
