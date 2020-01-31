import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CliExerciseComponent } from './cli-exercise/cli-exercise.component';
import { Manual } from './manual/manual';
import { BindingsComponent } from './bindings/bindings.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { Act5ChildComponent } from './act5-child/act5-child.component';
import { Act5ParentComponent } from './act5-parent/act5-parent.component';
import { Act7DataDrivenComponent } from './act7-data-driven/act7-data-driven.component';
import { Act7TemplateDrivenComponent } from './act7-template-driven/act7-template-driven.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { HttpRequestComponent } from './http-request/http-request.component'
import { HttpClientModule } from '@angular/common/http';
import { RegistrationComponent } from './registration/registration.component';
import { RegisteredComponent } from './registered/registered.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './view/view.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

const appRoutes : Routes = [
  {
    path : '', 
    component : HomeComponent
  },
  {
    path : 'view/:id',
    component : ViewComponent
  },
  {
    path : "registration",
    component : RegistrationComponent
  },
  {
    path : 'error',
    component : ErrorComponent
  },
  {
    path : 'pageNotFound',
    redirectTo : 'error'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    CliExerciseComponent,
    Manual,
    BindingsComponent,
    ParentComponent,
    ChildComponent,
    ParentComponent,
    Act5ChildComponent,
    Act5ParentComponent,
    Act7DataDrivenComponent,
    Act7TemplateDrivenComponent,
    ReactiveFormComponent,
    HttpRequestComponent,
    RegistrationComponent,
    RegisteredComponent,
    ErrorComponent,
    HomeComponent,
    ViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    MDBBootstrapModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
