import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-estacionar',
  templateUrl: './estacionar.page.html',
  styleUrls: ['./estacionar.page.scss'],
})
export class EstacionarPage implements OnInit {

  constructor(private router:Router,) { }

  ngOnInit() {
  }
  paginaprincipal(){
    this.router.navigate(['home']);
  }



}
