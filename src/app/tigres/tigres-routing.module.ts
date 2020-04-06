
import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {TigreDetailComponent} from "./tigre-detail/tigre-detail.component";

  const tigresRoute : Routes = [
  {path : ":id",component : TigreDetailComponent}
]

@NgModule({
  imports : [RouterModule.forChild(tigresRoute)],
  exports : [RouterModule]

})
export class TigresRoutingModule{

}



