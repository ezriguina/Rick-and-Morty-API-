import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Capitulo } from './capitulo';

describe('Capitulo', () => {
  let component: Capitulo;
  let fixture: ComponentFixture<Capitulo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Capitulo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Capitulo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
