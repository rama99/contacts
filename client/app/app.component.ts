// app.component.ts
import { Component  } from '@angular/core';

@Component({
moduleId: module.id,    
selector:'my-app',
template:`

<div class="container">
<div class="btn-group btn-group-justified" role="group" aria-label="...">
<div class="btn-group" role="group">
<a [routerLink]="['']" class="btn btn-primary">Contacts</a>
</div>
<div class="btn-group" role="group">
<a [routerLink]="['add']" class="btn btn-primary">Add Contact</a>
</div>
</div>

 <router-outlet></router-outlet>
</div>
`
})

export class AppComponent { }

