import { Component, OnInit } from '@angular/core';
import {TigreModel} from "../tigre.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-tigre-list',
  templateUrl: './tigre-list.component.html',
  styleUrls: ['./tigre-list.component.css']
})
export class TigreListComponent implements OnInit {

  tigres : TigreModel[];

  constructor(private router : Router , private  route :ActivatedRoute) { }

  ngOnInit() {

    this.tigres = [
      new TigreModel("assets/images/t1.jpg"), new TigreModel("assets/images/t2.jpg"),
      new TigreModel("assets/images/t3.jpg"), new TigreModel("assets/images/t4.jpg"),
      new TigreModel("assets/images/t5.jpg"), new TigreModel("assets/images/t6.jpg"),
      new TigreModel("assets/images/t7.jpg"), new TigreModel("assets/images/t8.jpg"),
      new TigreModel("assets/images/t9.jpg"), new TigreModel("assets/images/t10.jpg"),
      new TigreModel("assets/images/t11.jpg"),new TigreModel("assets/images/t12.jpg"),
    ]
  }

  onDetailTigre(tigre : TigreModel){
    /*this.tigres.find(t => t.imagePath === tigre.imagePath);*/
      this.router.navigate(["tigres"],{relativeTo : this.route});
      console.log("tigre selected",tigre.imagePath);
  }

}
