import { Component, OnInit } from '@angular/core';
import  customerDataList  from './customer-data-list.json';

@Component({
  selector: 'rm-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  public details: any = customerDataList;

  constructor() { }

  ngOnInit(): void {
  }

}
