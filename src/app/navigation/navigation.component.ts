import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private router: Router) { }
  /* variables */

      /* carousel array */
    carouselList: any = [1,2,3,4]

  ngOnInit(): void {
  }

  /* current route */
  currentRoute(){
    //console.log("current route ==> ",this.router.url.split('/'))
    return this.router.url.split('/')[2];
  }



}
