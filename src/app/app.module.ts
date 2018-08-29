import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { FormDocsComponent } from './components/form-docs/form-docs.component';
import { HttpClientModule } from '@angular/common/http';
import { FormDocsV2Component } from './components/form-docs-v2/form-docs-v2.component';
@NgModule({
  declarations: [
    AppComponent,
    FormDocsComponent,
    FormDocsV2Component
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
