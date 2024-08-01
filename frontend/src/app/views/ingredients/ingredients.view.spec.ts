import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientsView } from './ingredients.view';

describe('IngredientsView', () => {
  let component: IngredientsView;
  let fixture: ComponentFixture<IngredientsView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IngredientsView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngredientsView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
