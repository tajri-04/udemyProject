import { Component, OnInit } from '@angular/core';
import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/database';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  loadedDeature = 'recipe';
  onNavigate(feature:string){
    this.loadedDeature = feature;
  }
  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyCeJMa54BWddLugpP76PQiVmuorII9olq0",
      authDomain: "ng-recipe-book-28e8f.firebaseapp.com"
    });
  }
}
