import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from './messages.component';
import { MessageService } from '../message.service';

@NgModule({
  exports: [
    MessagesComponent
  ],
  declarations: [
    MessagesComponent
  ],
  providers: [
    MessageService
  ],
  imports: [
    CommonModule
  ],
  entryComponents: [MessagesComponent]
})
export class MessagesModule { }
