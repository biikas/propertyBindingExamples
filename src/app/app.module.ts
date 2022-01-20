import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Component1Component } from './component1/component1.component';
import { IndisplayComponent } from './indisplay/indisplay.component';
// import { InOutComponent } from './in-out/in-out.component';

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    IndisplayComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
