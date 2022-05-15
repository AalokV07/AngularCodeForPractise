import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from './child/child.component';

import { MessageService } from './../services/message.service';

@Component({
  selector: 'rm-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  public parentMessage: string = "Hello, I am your parent Component!!"; // from parent to child through @Input() decorator

  @ViewChild(ChildComponent) child;
  public message: string; // from child to parent through View Child decorator

  public outputMessage: string = "message passing from child to parent thorugh Output";

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
  }

  // from child to parent through View Child decorator
  // ngAfterViewInit(){
  //   this.message = this.child.message;
  // }

  getData($event) {
    this.outputMessage = $event;
  }

  sendMessage(): void {
    // send message to subscribers via observable subject
    this.messageService.sendMessage('Message from Home Component to App Component!');
  }

  clearMessage(): void {
    // clear message
    this.messageService.clearMessage();
  }
}
