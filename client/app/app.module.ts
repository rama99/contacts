//  app.module.ts
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component'; 
import { ContactListComponent } from './contact-list.component'; 
import { ContactComponent } from './contact.component';  
import { ContactDetailComponent } from './contact-detail.component';
import { AddContactComponent } from './add-contact.component';
import { ContactService } from './contacts.service';

import { RouterModule } from '@angular/router';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';
@NgModule({
  imports:      [ BrowserModule , 
                  RouterModule.forRoot([
                    {path:'' , component:ContactListComponent},
                    {path:'details/:id' , component:ContactDetailComponent},
                    {path:'add' , component:AddContactComponent}
                  ]),
                  ReactiveFormsModule ,
                  FormsModule  ],
  declarations: [ AppComponent , ContactComponent , ContactListComponent ,
                  ContactDetailComponent , AddContactComponent ],
  bootstrap:    [ AppComponent ] , 
  providers: [{provide:ContactService , useClass:ContactService}]
})
export class AppModule { }


