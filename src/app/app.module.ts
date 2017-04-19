// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';
import { AppRoutingModule } from './app.routing.module';

// Components
import { AppComponent } from './app.component';
import { BackendData } from './backend/backend-data';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { EmployeeListComponent } from './views/employee/employee-list/employee-list.component';
import { ContentHeaderComponent } from './views/content-header/content-header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SigninComponent } from './views/signin/signin.component';
import { ContentComponent } from './layout/content/content.component';
import { MainComponent } from './layout/main/main.component';
import { CreateEmployeeComponent } from './views/employee/create-employee/create-employee.component';
import { DeleteEmployeeComponent } from './views/employee/delete-employee/delete-employee.component';
import { ModalDialogComponent } from './views/modal-dialog/modal-dialog.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';

// Services and Pipes
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import {TRANSLATION_PROVIDERS} from './services/translation/translations';
import { TranslatePipe } from './services/translation/translate.pipe';
import { TranslateService } from './services/translation/translate.service';
import { ModalService } from './services/modal/modal.service';;


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
    TranslatePipe,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(BackendData),
    AppRoutingModule
  ],
  providers: [ModalService, TRANSLATION_PROVIDERS, TranslateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
