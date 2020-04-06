import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {RecipeService} from "../recipes/recipe.service";
import {Recipe} from "../recipes/recipe.model";

import 'rxjs/Rx';
import {AuthService} from "../auth/auth.service";
import {HttpClient, HttpHeaders, HttpParams, HttpRequest} from "@angular/common/http";

@Injectable()
export class DataStorageService {
  constructor(private httpClient: HttpClient,
              private recipeSerice: RecipeService,
              private authService: AuthService) {
  }

  storeRecipes() {
    const token = this.authService.getToken();
    const headers =new HttpHeaders().set('Authorisation','kdk');
    const params = new HttpParams().set("auth",token);
/*    return this.httpClient.put("https://ng-recipe-book-28e8f.firebaseio.com/recipes.json",
      this.recipeSerice.getRecipes(), {
        observe : "body",
        params : params,
        //headers :headers
      });*/
   const req = new HttpRequest("PUT","https://ng-recipe-book-28e8f.firebaseio.com/recipes.json"
   ,this.recipeSerice.getRecipes(),{reportProgress:true});
   return this.httpClient.request(req);
  }

  getRecipes() {
    const token = this.authService.getToken();
    //this.httpClient.get<Recipe[]>("https://ng-recipe-book-28e8f.firebaseio.com/recipes.json?auth=" + token)
    this.httpClient.get<Recipe[]>("https://ng-recipe-book-28e8f.firebaseio.com/recipes.json", {
      observe: "body",
      responseType: "json"
    })
      .map((recipes) => {
        console.log(recipes);
        for (let recipe of recipes) {
          if (!recipe["ingredients"]) {
            recipe["ingredients"] = []
          }
        }
        return recipes;
      })
      .subscribe((recipes) => {
        this.recipeSerice.setRecipes(recipes);
      });
  }
}
