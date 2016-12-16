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
var router_1 = require("@angular/router");
var contacts_service_1 = require("./contacts.service");
var ContactDetailComponent = (function () {
    function ContactDetailComponent(service, route, router) {
        var _this = this;
        this.service = service;
        this.route = route;
        this.router = router;
        this.route.params.subscribe(function (params) {
            var id = +params['id'];
            _this.contactDatails = _this.service.getContactByID(id);
        });
    }
    return ContactDetailComponent;
}());
ContactDetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: '',
        template: "\n            <h2><u>Contact Details of Contact ID: {{contactDatails.id}}</u></h2>\n            <h2>Contact ID: {{contactDatails.id}}</h2>\n            <h2>First Name: {{contactDatails.firstname}}</h2>\n            <h2>Last Name: {{contactDatails.lastname}}</h2>\n            <h2>Mobile # : {{contactDatails.mobile}}</h2>\n            <h2>Email : {{contactDatails.email}}</h2>\n            <h2>Street: {{contactDatails.street}}</h2>\n            <a [routerLink]=\"['']\" class=\"btn btn-primary\">Back to Contact List </a>\n          "
    }),
    __metadata("design:paramtypes", [contacts_service_1.ContactService, router_1.ActivatedRoute,
        router_1.Router])
], ContactDetailComponent);
exports.ContactDetailComponent = ContactDetailComponent;
//# sourceMappingURL=contact-detail.component.js.map