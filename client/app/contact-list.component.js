"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var contacts_service_1 = require("./contacts.service");
//app.component.ts
var ContactListComponent = (function () {
    function ContactListComponent(service) {
        this.service = service;
        this.contacts = this.service.getContacts();
    }
    ContactListComponent.prototype.onClick = function (fname) {
        //-- TODO logic to send Mail
        //-- Once mail has been sent , display alert
        alert('Mail sent to ' + fname);
    };
    return ContactListComponent;
}());
ContactListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'contact-list',
        template: " \n   \n    <h2 *ngIf=\"contacts.length > 0\"><u>Contacts List</u></h2>\n    <div *ngFor=\"let contact of contacts\">\n     <contact [data]= \"contact\"></contact>\n      <input type=\"button\" value=\"Send Mail\" \n      (click)=\"onClick(contact.firstname)\" class=\"btn btn-primary\">\n      \n<a [routerLink]=\"['/details' , contact.id]\" class=\"btn btn-primary\" >Details..</a>\n\n      <hr>\n   </div>"
    }),
    __metadata("design:paramtypes", [contacts_service_1.ContactService])
], ContactListComponent);
exports.ContactListComponent = ContactListComponent;
//# sourceMappingURL=contact-list.component.js.map