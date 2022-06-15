import { Component, OnInit } from '@angular/core';
import {Pages} from "../../shared/interfaces";

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss']
})
export class SideNavigationComponent implements OnInit {
 pages:Pages[]=[
   {
     label:'Producto',
     value:'producto',
     icon:'list'
   } , {
     label:'Compras',
     value:'compra',
     icon:'storefront'
   }  ,{
     label:'Carrito',
     value:'carrito',
     icon:'shopping_cart_checkout'
   }
 ]
  constructor() { }

  ngOnInit(): void {
  }

}
