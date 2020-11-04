import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor() { }

  /* values */
  isVisible: boolean = false

  ngOnInit(): void {
  }

  /* show modal */


  /* close modal */
  closeModal(){
    this.isVisible = false
  }

}
