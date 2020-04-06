
import {NgModule} from "@angular/core";
import {TigresComponent} from "./tigres.component";
import {TigreListComponent} from "./tigre-list/tigre-list.component";
import {SharedModule} from "../shared/shared.module";
import {RecipesRoutingModule} from "../recipes/recipes-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import { TigreDetailComponent } from './tigre-detail/tigre-detail.component';
import {TigresRoutingModule} from "./tigres-routing.module";

@NgModule({
  declarations : [
    TigresComponent,
    TigreListComponent,
    TigreDetailComponent
  ],
  imports : [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    TigresRoutingModule
  ],
  exports : [
    TigresComponent
  ]
})
export class TigresModule{

}
