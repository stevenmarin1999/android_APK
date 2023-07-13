import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-codigoqr',
  templateUrl: './codigoqr.page.html',
  styleUrls: ['./codigoqr.page.scss'],
})
export class CodigoqrPage implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
  }
  paginahome(){
    this.router.navigate(['home']);
  }
}
