import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { EmployeeListComponent } from './views/employee/employee-list/employee-list.component';
import { SigninComponent } from './views/signin/signin.component';
import { MainComponent } from './layout/main/main.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';

// Routes
const appRoutes: Routes = [
  { path: '', component: SigninComponent },
  { path: 'secure', component: MainComponent,
    children: [
      { path: '', component: EmployeeListComponent},
      { path: 'employees', component: EmployeeListComponent}
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
