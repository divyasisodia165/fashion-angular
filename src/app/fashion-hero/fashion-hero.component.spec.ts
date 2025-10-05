import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionHero } from './fashion-hero';

describe('FashionHero', () => {
  let component: FashionHero;
  let fixture: ComponentFixture<FashionHero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FashionHero]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FashionHero);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
