import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    constructor(private slService: ShoppingListService) {}

    private recipes: Recipe[] = [
        new Recipe('A test recipe', 
        'This is a test', 
        'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg'
        ,[
            new Ingredient('Pan', 1),
            new Ingredient('Pollo', 2)
        ])
        
        ,new Recipe('A test recipe', 
        'This is a test', 
        'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg'
        ,[
            new Ingredient('Pan Molde', 1),
            new Ingredient('Lomo', 2)
        ])
      ];

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }
}