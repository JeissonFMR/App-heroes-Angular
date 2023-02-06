import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroeTargetaComponent } from './heroe-targeta.component';

describe('HeroeTargetaComponent', () => {
  let component: HeroeTargetaComponent;
  let fixture: ComponentFixture<HeroeTargetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroeTargetaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroeTargetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
