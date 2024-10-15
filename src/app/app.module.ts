import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateSimpleCreateComponent } from "./Components/templates/template-simple-create/template-simple-create.component";
import { ReactiveFormsModule } from '@angular/forms';
import { BasicFormComponent } from './Components/Molecules/basic-form/basic-form.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TemplateSimpleCreateComponent,
    BasicFormComponent,
    ReactiveFormsModule,
    HttpClientModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
