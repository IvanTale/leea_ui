import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from "@angular/router";
import {LayoutModule} from "./layout/layout.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
	imports: [
		BrowserModule,
		RouterModule.forRoot([]),
		LayoutModule,
	],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
