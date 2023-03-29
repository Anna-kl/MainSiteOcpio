import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryselectComponent } from './countryselect.component';

describe('CountryselectComponent', () => {
  let component: CountryselectComponent;
  let fixture: ComponentFixture<CountryselectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryselectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
