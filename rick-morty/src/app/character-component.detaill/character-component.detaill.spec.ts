import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterComponentDetaill } from './character-component.detaill';

describe('CharacterComponentDetaill', () => {
  let component: CharacterComponentDetaill;
  let fixture: ComponentFixture<CharacterComponentDetaill>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterComponentDetaill]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterComponentDetaill);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
