import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesDiscountComponent } from './features-discount.component';

describe('FeaturesDiscountComponent', () => {
  let component: FeaturesDiscountComponent;
  let fixture: ComponentFixture<FeaturesDiscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturesDiscountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturesDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
