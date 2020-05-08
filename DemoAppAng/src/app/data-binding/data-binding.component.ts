import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rm-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {
  fullName: string = "ALOK VERMA";
  age: number = 29;

  name: string = 'Robert Junior';

  isDisabled: boolean = true;
  isDisab: boolean = false;  
  constructor() { }

  ngOnInit(): void {
    
  }

  myFunction(event){
    console.log('Event binding is triggered!!');
  }

}
