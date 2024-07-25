import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealiseHeroComponent } from './realise-hero.component';

describe('RealiseHeroComponent', () => {
  let component: RealiseHeroComponent;
  let fixture: ComponentFixture<RealiseHeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RealiseHeroComponent]
    });
    fixture = TestBed.createComponent(RealiseHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
