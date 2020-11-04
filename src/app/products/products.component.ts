import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  /* set values */
  productsList: any = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
  config: any;

  ngOnInit(): void {

    /* init page */
    this.pageConfig()
  }

  /* page config */
  pageConfig(){
    this.config = {
      itemsPerPage: 12,
      currentPage: 1,
      totalItems: this.productsList.count
    };
  }

  /* page changed */
  pageChanged(event){
    this.config.currentPage = event;
  }

}
