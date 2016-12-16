import { Component } from '@angular/core';
import { Contact } from './Contact';
import { ContactService } from './contacts.service';
//app.component.ts
@Component({
  moduleId: module.id,
  selector: 'contact-list',
  template: ` 
   
    <h2 *ngIf="contacts.length > 0"><u>Contacts List</u></h2>
    <div *ngFor="let contact of contacts">
     <contact [data]= "contact"></contact>
      <input type="button" value="Send Mail" 
      (click)="onClick(contact.firstname)" class="btn btn-primary">
      
<a [routerLink]="['/details' , contact.id]" class="btn btn-primary" >Details..</a>

      <hr>
   </div>`})

export class ContactListComponent {

  constructor(private service:ContactService) {}
  contacts:Array<Contact> = this.service.getContacts();

onClick(fname:string) {
  //-- TODO logic to send Mail
  //-- Once mail has been sent , display alert
  alert('Mail sent to ' + fname);
}
}


