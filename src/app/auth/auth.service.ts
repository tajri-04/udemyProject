
import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/database';
import {Router} from "@angular/router";
import {Injectable} from "@angular/core";


@Injectable()
export class AuthService{
  token : string;

  constructor(private router:Router){}

  signupUser(email:string,password:string){
firebase.auth().createUserWithEmailAndPassword(email,password)
  .catch((error) => {
    console.log(error);
  })
  }

signinUser(email:string,password:string){
firebase.auth().signInWithEmailAndPassword(email,password)
  .then(response => {
    this.router.navigate(["/"])
    firebase.auth().currentUser.getIdToken().then(
      (token:string) => this.token = token)
  })
  .catch(error => console.log(error));
}

logOut(){
  firebase.auth().signOut();
  this.token = null;
}

getToken(){
  firebase.auth().currentUser.getIdToken().then(
    (token:string)=> {
      this.token = token;
    }
  );
  return this.token;
}

isAuthenticated(){
  return this.token !=null;
}

}
