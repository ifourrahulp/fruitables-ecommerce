import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-related-products',
  templateUrl: './related-products.component.html',
  styleUrls: ['./related-products.component.scss']
})
export class RelatedProductsComponent implements OnInit {

  relatedProductList: any[] = [
    {
      title: 'Parsely',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
      price: '$4.99 / kg',
      imageUrl: 'assets/img/vegetable-item-6.jpg'
    },
    {
      title: 'Parsely',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
      price: '$4.99 / kg',
      imageUrl: 'assets/img/vegetable-item-1.jpg'
    },
    {
      title: 'Banana',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
      price: '$7.99 / kg',
      imageUrl: 'assets/img/vegetable-item-3.jpg'
    },
    {
      title: 'Bell Papper',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
      price: '$7.99 / kg',
      imageUrl: 'assets/img/vegetable-item-4.jpg'
    },
    {
      title: 'Bell Papper',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
      price: '$7.99 / kg',
      imageUrl: 'assets/img/vegetable-item-4.jpg'
    },
    {
      title: 'Potatoes',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
      price: '$7.99 / kg',
      imageUrl: 'assets/img/vegetable-item-5.jpg'
    },
    {
      title: 'Parsely',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
      price: '$7.99 / kg',
      imageUrl: 'assets/img/vegetable-item-6.jpg'
    },
    {
      title: 'Potatoes',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
      price: '$7.99 / kg',
      imageUrl: 'assets/img/vegetable-item-5.jpg'
    },
    {
      title: 'Parsely',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
      price: '$7.99 / kg',
      imageUrl: 'assets/img/vegetable-item-6.jpg'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
