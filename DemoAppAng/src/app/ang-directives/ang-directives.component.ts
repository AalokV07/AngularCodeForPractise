import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rm-ang-directives',
  templateUrl: './ang-directives.component.html',
  styleUrls: ['./ang-directives.component.scss']
})
export class AngDirectivesComponent implements OnInit {
  show: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
