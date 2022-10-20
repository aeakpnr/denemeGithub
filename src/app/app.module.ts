import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DenemeComponent } from './deneme/deneme.component';
import { FormSayfasiComponent } from './form-sayfasi/form-sayfasi.component';


@NgModule({
  declarations: [
    AppComponent,
    DenemeComponent,
    FormSayfasiComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
