import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinksView } from './drinks.view';

describe('DrinksView', () => {
  let component: DrinksView;
  let fixture: ComponentFixture<DrinksView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrinksView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrinksView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
