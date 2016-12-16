// contacts.service.ts
import { Injectable } from '@angular/core';
import { Contact } from './contact';

@Injectable()
export class ContactService {
contacts:Array<Contact> = [
  {id: 1,firstname: "FN-1",lastname:"LN-1",mobile:"1234" , email:"test@test.com" , street:"street 1"},
  {id: 2,firstname: "FN-2",lastname: "LN-2", mobile:"12345" , email:"test2@test2.com" , street: "street 2"}                        
];

getContacts():Array<Contact> {
    return this.contacts;
}

getContactByID(id:number):Contact {
  return this.contacts.find( (contact:Contact) => {
      return contact.id == id;
  })
}

addContact(contact:Contact) {
  contact.id = this.contacts.length + 1;
  this.contacts.push(contact);
}

}


