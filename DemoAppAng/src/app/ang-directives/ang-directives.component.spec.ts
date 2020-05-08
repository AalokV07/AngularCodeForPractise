import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngDirectivesComponent } from './ang-directives.component';

describe('AngDirectivesComponent', () => {
  let component: AngDirectivesComponent;
  let fixture: ComponentFixture<AngDirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngDirectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
