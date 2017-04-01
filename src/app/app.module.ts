import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { EmployeeData } from './backend/employee-data';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { EmployeeListComponent } from './views/employee-list/employee-list.component';
import { ContentHeaderComponent } from './views/content-header/content-header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SigninComponent } from './auth/signin/signin.component';
import { ContentComponent } from './layout/content/content.component';
import { MainComponent } from './layout/main/main.component';
import { CreateEmployeeComponent } from './views/create-employee/create-employee.component';
import { DeleteEmployeeComponent } from './views/delete-employee/delete-employee.component';
import {ModalDialogComponent} from './views/modal-dialog/modal-dialog.component';
import { DetailEmployeeComponent } from './views/detail-employee/detail-employee.component';
import {ModalService} from './services/modal/modal.service';


const appRoutes: Routes = [
  { path: '', component: EmployeeListComponent },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'create', component: CreateEmployeeComponent },
  { path: 'delete', component: DeleteEmployeeComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    EmployeeListComponent,
    ContentHeaderComponent,
    FooterComponent,
    SigninComponent,
    ContentComponent,
    MainComponent,
    CreateEmployeeComponent,
    DeleteEmployeeComponent,
    ModalDialogComponent,
    DetailEmployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(EmployeeData),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
