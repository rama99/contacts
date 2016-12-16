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
// contacts.service.ts
var core_1 = require("@angular/core");
var ContactService = (function () {
    function ContactService() {
        this.contacts = [
            { id: 1, firstname: "FN-1", lastname: "LN-1", mobile: "1234", email: "test@test.com", street: "street 1" },
            { id: 2, firstname: "FN-2", lastname: "LN-2", mobile: "12345", email: "test2@test2.com", street: "street 2" }
        ];
    }
    ContactService.prototype.getContacts = function () {
        return this.contacts;
    };
    ContactService.prototype.getContactByID = function (id) {
        return this.contacts.find(function (contact) {
            return contact.id == id;
        });
    };
    ContactService.prototype.addContact = function (contact) {
        contact.id = this.contacts.length + 1;
        this.contacts.push(contact);
    };
    return ContactService;
}());
ContactService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], ContactService);
exports.ContactService = ContactService;
//# sourceMappingURL=contacts.service.js.map