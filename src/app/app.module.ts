import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { AddComponent } from './components/add/add.component';
import { ListComponent } from './components/list/list.component';
import { FormComponent } from './components/form/form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BasicHttpInterceptor } from './init/basic-http-interceptor';
import { initializer } from './init/keycloak-init';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuModule } from 'primeng/menu';
import {TableModule} from 'primeng/table';
import {CardModule} from 'primeng/card';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    AddComponent,
    ListComponent,
    FormComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ButtonModule,
    PanelModule,
    InputTextModule,
    ReactiveFormsModule,
    DynamicDialogModule,
    KeycloakAngularModule,
    HttpClientModule,
    TabMenuModule,
    MenuModule,
    TableModule,
    CardModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BasicHttpInterceptor,
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      multi: true,
      deps: [KeycloakService],
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
