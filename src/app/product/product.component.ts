import { Component } from "@angular/core";



@Component({
    selector : "app-product",
    templateUrl : './product.component.html',
    styleUrls : ['./product.component.scss']
})
export class productcomponent{
  productName : string = "Iphone 13 pro";
  productId : number = 1234
}