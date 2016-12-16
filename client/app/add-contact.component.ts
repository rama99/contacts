import { Component } from '@angular/core';
import { ContactService } from './contacts.service';
import { Contact } from './Contact';

import { FormBuilder ,FormGroup , Validators } from '@angular/forms';
import { Router }  from '@angular/router';
@Component({
selector:'add-contact',
template:`
&nbsp;<br>
<h4 class="bg-danger">{{error}}</h4>
<form [formGroup]="fg" (submit)="addContact()">
    <input type="text" formControlName="firstname" placeholder="First Name" class="form-control"><br>
    <input type="text" formControlName="lastname" placeholder="Last Name" class="form-control"><br>
    <input type="text" formControlName="email" placeholder="Email" class="form-control"><br>
    <input type="text" formControlName="mobile" placeholder="Mobile #" class="form-control"><br>
    <input type="text" formControlName="street" placeholder="Street" class="form-control"><br>
    <input type="submit" value="Add Contact" class="btn btn-primary">
</form>
`})

export class AddContactComponent {
fg:FormGroup;
error:string;

constructor( private formbuilder:FormBuilder ,
             private service:ContactService ,
             private router:Router ) {
this.fg =   this.formbuilder.group({
        "id":["0"],
        "firstname":["",Validators.compose([Validators.required])],
        "lastname":["",Validators.compose([Validators.required])],
        "email":["",Validators.compose([Validators.required])],
        "mobile":["",Validators.compose([Validators.required])],
        "street":["",Validators.compose([Validators.required])],
    })
}

addContact() {

    if(this.fg.invalid) {
        this.error = "Please enter Values for all fields";
    }
    else {
        this.service.addContact(this.fg.value);
        this.router.navigate(['']);
    }
}

}