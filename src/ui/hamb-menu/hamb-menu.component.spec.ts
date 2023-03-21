import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HambMenuComponent } from './hamb-menu.component';

describe('HambMenuComponent', () => {
  let component: HambMenuComponent;
  let fixture: ComponentFixture<HambMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HambMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HambMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
