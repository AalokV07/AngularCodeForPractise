import { Component, OnInit } from '@angular/core';
import  employeeDataList  from './employee-data-list.json';


@Component({
  selector: 'rm-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  public details: any = employeeDataList;

  constructor() { }

  ngOnInit(): void {
    //console.log(this.details);
  }

}