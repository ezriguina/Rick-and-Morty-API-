import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapituloDetaill } from './capitulo-detaill';

describe('CapituloDetaill', () => {
  let component: CapituloDetaill;
  let fixture: ComponentFixture<CapituloDetaill>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CapituloDetaill]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapituloDetaill);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
