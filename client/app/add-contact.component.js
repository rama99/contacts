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
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var AddContactComponent = (function () {
    function AddContactComponent(formbuilder, service, router) {
        this.formbuilder = formbuilder;
        this.service = service;
        this.router = router;
        this.fg = this.formbuilder.group({
            "id": ["0"],
            "firstname": ["", forms_1.Validators.compose([forms_1.Validators.required])],
            "lastname": ["", forms_1.Validators.compose([forms_1.Validators.required])],
            "email": ["", forms_1.Validators.compose([forms_1.Validators.required])],
            "mobile": ["", forms_1.Validators.compose([forms_1.Validators.required])],
            "street": ["", forms_1.Validators.compose([forms_1.Validators.required])],
        });
    }
    AddContactComponent.prototype.addContact = function () {
        if (this.fg.invalid) {
            this.error = "Please enter Values for all fields";
        }
        else {
            this.service.addContact(this.fg.value);
            this.router.navigate(['']);
        }
    };
    return AddContactComponent;
}());
AddContactComponent = __decorate([
    core_1.Component({
        selector: 'add-contact',
        template: "\n&nbsp;<br>\n<h4 class=\"bg-danger\">{{error}}</h4>\n<form [formGroup]=\"fg\" (submit)=\"addContact()\">\n    <input type=\"text\" formControlName=\"firstname\" placeholder=\"First Name\" class=\"form-control\"><br>\n    <input type=\"text\" formControlName=\"lastname\" placeholder=\"Last Name\" class=\"form-control\"><br>\n    <input type=\"text\" formControlName=\"email\" placeholder=\"Email\" class=\"form-control\"><br>\n    <input type=\"text\" formControlName=\"mobile\" placeholder=\"Mobile #\" class=\"form-control\"><br>\n    <input type=\"text\" formControlName=\"street\" placeholder=\"Street\" class=\"form-control\"><br>\n    <input type=\"submit\" value=\"Add Contact\" class=\"btn btn-primary\">\n</form>\n"
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        contacts_service_1.ContactService,
        router_1.Router])
], AddContactComponent);
exports.AddContactComponent = AddContactComponent;
//# sourceMappingURL=add-contact.component.js.map