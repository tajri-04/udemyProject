import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/Ingredient.model";
import {Injectable} from "@angular/core";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
import {BehaviorSubject} from "rxjs/BehaviorSubject";


@Injectable()
export class RecipeService {

  recipesChanged = new BehaviorSubject<Recipe[]>([]);

  private recipes: Recipe[] = [
    new Recipe("A test", "this a test",
      "https://cookieandkate.com/images/2017/03/strawberry-salsa-recipe.jpg",
      [
        new Ingredient("Meat", 4),
        new Ingredient("fries", 14),

      ]),
    new Recipe("A test 2", "this a test",
      "https://cookieandkate.com/images/2017/03/strawberry-salsa-recipe.jpg"
      , [
        new Ingredient("Meat", 4),
        new Ingredient("fries", 14),
      ])
  ];

  constructor(private slService: ShoppingListService) {
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice())
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngridientsToShoppingList(ingredients) {
    this.slService.addIngredients(ingredients);
  }


}
