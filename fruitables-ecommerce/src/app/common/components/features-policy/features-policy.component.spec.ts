import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesPolicyComponent } from './features-policy.component';

describe('FeaturesPolicyComponent', () => {
  let component: FeaturesPolicyComponent;
  let fixture: ComponentFixture<FeaturesPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturesPolicyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturesPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
