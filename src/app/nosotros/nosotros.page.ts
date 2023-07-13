import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.page.html',
  styleUrls: ['./nosotros.page.scss'],
})
export class NosotrosPage implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
  }

  paginahome(){
    this.router.navigate(['home']);
  }
}
