import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganicVegetablesComponent } from './organic-vegetables.component';

describe('OrganicVegetablesComponent', () => {
  let component: OrganicVegetablesComponent;
  let fixture: ComponentFixture<OrganicVegetablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganicVegetablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganicVegetablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
