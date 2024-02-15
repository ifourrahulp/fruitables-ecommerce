import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
  
})
export class FooterComponent implements OnInit {
  shopMenuList: any[] = [
    "About Us",
    "Contact Us",
    "Privacy Policy",
    "Terms & Condition",
    "Return Policy",
    "FAQs & Help",
  ];

  accountMenuList: any[] = [
    "My Account",
    "Shop details",
    "Shopping Cart",
    "Wishlist",
    "Order History",
    "International Orders",
  ];
 
  constructor() { }

  ngOnInit(): void {
  }

}
