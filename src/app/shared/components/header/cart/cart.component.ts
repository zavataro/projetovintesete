import { Component } from '@angular/core';
import { CommonSvgIconsComponent } from '../../common-svg-icons/common-svg-icons.component';
import { FeatherIconsComponent } from '../../feather-icons/feather-icons.component';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-cart',
    imports: [CommonSvgIconsComponent, FeatherIconsComponent, RouterModule],
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})

export class CartComponent {

  public isCart: boolean = false;

  public cartData = [
    {
      id:0,
      image: 'assets/images/other-images/cart-img2.jpg',
      title: 'Beauty cosmetic',
      counter: 1,
    },
    {
      id:1,
      image: 'assets/images/other-images/cart-img-1.jpg',
      title: 'Simple shoes',
      counter: 1,
    },
  ]

  public increment(item: number) {
    this.cartData[item].counter += 1;
  }

  public decrement(item: number) {
    if (this.cartData[item].counter > 1) {
      this.cartData[item].counter -= 1
    }
  }

}
