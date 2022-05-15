import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcelSheetDemoComponent } from './excel-sheet-demo.component';

describe('ExcelSheetDemoComponent', () => {
  let component: ExcelSheetDemoComponent;
  let fixture: ComponentFixture<ExcelSheetDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcelSheetDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcelSheetDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
