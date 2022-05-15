import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SheetTemplateComponent } from './sheet-template.component';

describe('SheetTemplateComponent', () => {
  let component: SheetTemplateComponent;
  let fixture: ComponentFixture<SheetTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SheetTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheetTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
