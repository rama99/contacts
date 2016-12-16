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
//  app.module.ts
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var contact_list_component_1 = require("./contact-list.component");
var contact_component_1 = require("./contact.component");
var contact_detail_component_1 = require("./contact-detail.component");
var add_contact_component_1 = require("./add-contact.component");
var contacts_service_1 = require("./contacts.service");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            router_1.RouterModule.forRoot([
                { path: '', component: contact_list_component_1.ContactListComponent },
                { path: 'details/:id', component: contact_detail_component_1.ContactDetailComponent },
                { path: 'add', component: add_contact_component_1.AddContactComponent }
            ]),
            forms_1.ReactiveFormsModule,
            forms_1.FormsModule],
        declarations: [app_component_1.AppComponent, contact_component_1.ContactComponent, contact_list_component_1.ContactListComponent,
            contact_detail_component_1.ContactDetailComponent, add_contact_component_1.AddContactComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [{ provide: contacts_service_1.ContactService, useClass: contacts_service_1.ContactService }]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map