import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FooterOnlyComponent } from "./footer-only/footer-only.component";
import { MainComponent } from "./main/main.component";
import { RecipeListComponent } from "../recipe/recipe-list/recipe-list.component";

const routes: Routes = [
	{
		path: '',
		component: MainComponent,
		children: [
			{
				path: 'recipe',
				component: RecipeListComponent,
				// loadChildren: () => import('../recipe/recipe.module').then((m) => m.RecipeModule),
			},
		],
	},
	// {
	// 	path: '',
	// 	component: FooterOnlyComponent,
	// 	children: [
	// 		{
	// 			// path: 'auth',
	// 			// loadChildren: () => import('../auth/auth.module').then((m) => m.AuthModule),
	// 		},
	// 	],
	// },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class LayoutRoutingModule { }
