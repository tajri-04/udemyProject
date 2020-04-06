import {NgModule} from "@angular/core";
import {HeaderComponent} from "./header/header.component";
import {HomeComponent} from "./home/home.component";
import {SharedModule} from "../shared/shared.module";
import {AppRoutingModule} from "../app-routing.module";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
import {DataStorageService} from "../shared/data.storage.service";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthService} from "../auth/auth.service";
import {RecipeService} from "../recipes/recipe.service";
import {AuthInterceptor} from "../shared/auth.interceptor";
import {LoggingInterceptor} from "../shared/logging.interceptor";
import {TigresModule} from "../tigres/tigres.module";

@NgModule({
  declarations : [
    HeaderComponent,
    HomeComponent
  ],
  imports : [
    SharedModule,
    AppRoutingModule,
    TigresModule
  ],
  exports : [
    AppRoutingModule,
    HeaderComponent,
  ],
  providers :[
    ShoppingListService,
    RecipeService, DataStorageService,
    AuthService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true}

  ]
})
export class CoreModule {

}
