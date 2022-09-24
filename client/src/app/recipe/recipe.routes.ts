import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeItemComponent } from "./recipe-item/recipe-item.component";

export const routes = [
	{
		path: '',
		children: [
			{ path: '', component: RecipeListComponent },
			{ path: 'item/:id', component: RecipeItemComponent },
		],
	},
];
