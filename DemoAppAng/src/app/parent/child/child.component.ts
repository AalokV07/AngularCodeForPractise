import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'rm-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() childMessage: string; // from parent to child through @Input() decorator

  public message:string = "Child Message passing through View Child decorator!!/output Message Also";  // from child to parent through View Child decorator

  public outputMessage: string;

  @Output() messageEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  sendMessage(){
    this.messageEvent.emit(this.message);
  }

}
