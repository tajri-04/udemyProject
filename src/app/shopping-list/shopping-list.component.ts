import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingredient} from "../shared/Ingredient.model";
import {ShoppingListService} from "./shopping-list.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit , OnDestroy {
ingredients : Ingredient[];
private subscription : Subscription;
  constructor(private shoppingListService : ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.subscription = this.shoppingListService.ingredientsChanged.subscribe((ingridients : Ingredient[])=> {
      this.ingredients = ingridients;
    })
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  onEditItem(index:number){
this.shoppingListService.stratedEditing.next(index);
  }


}
