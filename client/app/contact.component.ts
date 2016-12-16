import { Component , Input } from '@angular/core';
import { Contact } from './Contact';
@Component({
selector:'contact',
template: ` <h2>Contact ID: {{data.id}}</h2>
            <h2>First Name: {{data.firstname}}</h2>
            <h2>Last Name: {{data.lastname}}</h2>
            <h2>Street: {{data.street}}</h2>
         `
})
export class ContactComponent {
@Input()
data:Contact;
}



