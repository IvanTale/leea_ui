import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { LayoutRoutingModule } from "./layout-routing.module";
import { MainComponent } from './main/main.component';
import { FooterOnlyComponent } from './footer-only/footer-only.component';
import { RecipeService } from "../recipe/recipe.service";
import { LayoutComponent } from "./layout.component";
import { RecipeModule } from "../recipe/recipe.module";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
	declarations: [
		MainComponent,
		FooterOnlyComponent,
		LayoutComponent
	],
	imports: [
		CommonModule,
		RouterModule,
		LayoutRoutingModule,
		RecipeModule,
		HttpClientModule,
	],
	providers: [
		RecipeService,
	]
})
export class LayoutModule { }
