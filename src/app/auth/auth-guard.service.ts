import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {AuthService} from "./auth.service";


@Injectable()
export class AuthGuardService implements CanActivate{


  constructor(private authSevice : AuthService){}
  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
    return this.authSevice.isAuthenticated();
  }
}
