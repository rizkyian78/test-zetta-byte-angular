import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './components/components.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TransfereService } from './data.service';

@NgModule({
  declarations: [AppComponent, ModalComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MaterialModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
