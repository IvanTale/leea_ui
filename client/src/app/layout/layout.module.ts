import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { FooterOnlyComponent } from './footer-only/footer-only.component';
import { RouterModule } from "@angular/router";
import { LayoutRoutingModule } from "./layout-routing.module";
import { RecipeService } from "../recipe/recipe.service";
import {LayoutComponent} from "./layout.component";
import {RecipeModule} from "../recipe/recipe.module";

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
	],
	providers: [
		RecipeService,
	]
})
export class LayoutModule { }
