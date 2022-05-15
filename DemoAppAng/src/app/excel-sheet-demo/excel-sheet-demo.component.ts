import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import * as xlsx from 'xlsx';

@Component({
  selector: 'app-excel-sheet-demo',
  templateUrl: './excel-sheet-demo.component.html',
  styleUrls: ['./excel-sheet-demo.component.scss']
})
export class ExcelSheetDemoComponent implements OnInit {
  @ViewChild('epltable', { static: false }) epltable: ElementRef;
  public searchText: string; 

  selectedVal : any = "Select";
  status_values: any = ["In Progress", "Completed", "Closed", "others"];

  enableEdit = false;
  enableEditIndex = null;
  textBoxDisabled = true;
  isShowVal = false;
  showhidepregnant: boolean;
  display_1 = true;
  display_2 = true;
  display_3 = true;
  display_4 = true;
  clubs = [
    {
      position: 1,
      name: "Liverpool",
      played: 20,
      won: 19,
      drawn: 399,
      lost: 500,
      points: 580
    },
    {
      position: 2,
      name: "Leicester _City",
      played: 21,
      won: 14,
      drawn: 3,
      lost: 4,
      points: 45
    },
    {
      position: 3,
      name: "Manchester City",
      played: 21,
      won: 14,
      drawn: 2,
      lost: 5,
      points: 44
    },
    {
      position: 4,
      name: "Chelsea",
      played: 21,
      won: 11,
      drawn: 3,
      lost: 7,
      points: 36
    },
    {
      position: 5,
      name: "Manchester United",
      played: 21,
      won: 8,
      drawn: 7,
      lost: 6,
      points: 31
    }
  ];

  PreProcessType = [
    {
      id: '1',
      displayVal: 'Typist',
      dbVal: 'type-1'
    },
    {
      id: '2',
      displayVal: 'Doctor',
      dbVal: 'type-2'
    },
    {
      id: '3',
      displayVal: 'Engineer',
      dbVal: 'type-3'
    },
    {
      id: '4',
      displayVal: 'Professor',
      dbVal: 'type-4'
    }
  ];

  links : any[]= ["link1.com"];

  mailText:string = "";
  selectedDevice = 'Select';

  marked = false;
  theCheckbox = false;
  isShown = false;
  selectedProcessVal;

  constructor() { }

  onChangeProcess(newValue){
    console.log(newValue);
    this.selectedDevice = newValue;
  }

  toggleVisibility(e){
    this.marked= e.target.checked;
    if(this.theCheckbox){
      this.showhidepregnant = true;
    } else {
      this.showhidepregnant = false;
    }   
  }
  
  onOptionsSelected(val){
    console.log("the selected value is " + val);
    if((val == 'Completed') || (val == 'others')){
      this.isShowVal = true;
      this.theCheckbox = false;
    }
    else if((val != 'Completed') || (val != 'others')) {
      this.isShowVal = false;
      this.showhidepregnant = false;
    }
  }

  toggle(){
    this.textBoxDisabled = !this.textBoxDisabled;
  }

  mailMe(){
    this.mailText = "mailto:abc@abc.com+?subject=files&body="+this.links; // add the links to body
    window.location.href = this.mailText;
  }

  ngOnInit() { }

  exportToExcel() {
    const ws: xlsx.WorkSheet =
      xlsx.utils.table_to_sheet(this.epltable.nativeElement);
    const wb: xlsx.WorkBook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, 'Sheet1');
    xlsx.writeFile(wb, 'epltable.xlsx');
  }

  enableEditMethod(e, i) {
    this.enableEdit = true;
    this.enableEditIndex = i;
    console.log(i, e);
  }

  // updateSearchModel(value) {
  //   this.searchText = value;    
  // }

  onClickDb(clickedID) {
    // console.log(clickedID);
    var indexBtnID = clickedID.replace(/[^+-^/d]/g,'');
    console.log(indexBtnID);
    
    if (indexBtnID === '1') {
      alert('111');
      this.display_1 = false;
    } else if (indexBtnID === '2') {
      alert('222');
      this.display_2 = false;
    } else if (indexBtnID === '3') {
      alert('333');
      this.display_3 = false;
    } else if (indexBtnID === '4') {
      alert('444');
      this.display_4 = false;
    }
  }
}