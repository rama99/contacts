import { Component } from '@angular/core';

import { ActivatedRoute ,
         Router } from '@angular/router';

import { ContactService } from './contacts.service';
import { Contact } from './Contact';

@Component({
moduleId:module.id,
selector:'',
template: `
            <h2><u>Contact Details of Contact ID: {{contactDatails.id}}</u></h2>
            <h2>Contact ID: {{contactDatails.id}}</h2>
            <h2>First Name: {{contactDatails.firstname}}</h2>
            <h2>Last Name: {{contactDatails.lastname}}</h2>
            <h2>Mobile # : {{contactDatails.mobile}}</h2>
            <h2>Email : {{contactDatails.email}}</h2>
            <h2>Street: {{contactDatails.street}}</h2>
            <a [routerLink]="['']" class="btn btn-primary">Back to Contact List </a>
          `
})

export class ContactDetailComponent {
    contactDatails:Contact;
    constructor(private service:ContactService, private route:ActivatedRoute ,
                 private router:Router ) {
        this.route.params.subscribe((params) => {
            let id = +params['id'];
            this.contactDatails = this.service.getContactByID(id);
        })
    }
}

