import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-listing',
  templateUrl: './products-listing.component.html',
  styleUrls: ['./products-listing.component.scss']
})
export class ProductsListingComponent implements OnInit {
  isLoading: boolean = false;
  productList = [{
      title: 'Grapes',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
      price: '$4.99 / kg',
      imageUrl: 'assets/img/fruite-item-5.jpg'
    },
    {
      title: 'Grapes',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
      price: '$4.99 / kg',
      imageUrl: 'assets/img/fruite-item-5.jpg'
    },
    {
      title: 'Raspberries',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
      price: '$4.99 / kg',
      imageUrl: 'assets/img/fruite-item-2.jpg'
    },
    {
      title: 'Apricots',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
      price: '$4.99 / kg',
      imageUrl: 'assets/img/fruite-item-4.jpg'
    },
    {
      title: 'Banana',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
      price: '$4.99 / kg',
      imageUrl: 'assets/img/fruite-item-3.jpg'
    },
    {
      title: 'Orange',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
      price: '$4.99 / kg',
      imageUrl: 'assets/img/fruite-item-1.jpg'
    },
    {
      title: 'Banana',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
      price: '$4.99 / kg',
      imageUrl: 'assets/img/fruite-item-3.jpg'
    },
    {
      title: 'Apricots',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
      price: '$4.99 / kg',
      imageUrl: 'assets/img/fruite-item-4.jpg'
    },
    {
      title: 'Orange1',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
      price: '$4.99 / kg',
      imageUrl: 'assets/img/fruite-item-1.jpg'
    },
  ];

  appendProductList = [{
    title: 'Grapes',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
    price: '$4.99 / kg',
    imageUrl: 'assets/img/fruite-item-5.jpg'
  },
  {
    title: 'Grapes',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
    price: '$4.99 / kg',
    imageUrl: 'assets/img/fruite-item-5.jpg'
  },
  {
    title: 'Raspberries',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
    price: '$4.99 / kg',
    imageUrl: 'assets/img/fruite-item-2.jpg'
  },
  {
    title: 'Apricots',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
    price: '$4.99 / kg',
    imageUrl: 'assets/img/fruite-item-4.jpg'
  },
  {
    title: 'Banana',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
    price: '$4.99 / kg',
    imageUrl: 'assets/img/fruite-item-3.jpg'
  },
  {
    title: 'Orange',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
    price: '$4.99 / kg',
    imageUrl: 'assets/img/fruite-item-1.jpg'
  },
  {
    title: 'Banana',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
    price: '$4.99 / kg',
    imageUrl: 'assets/img/fruite-item-3.jpg'
  },
  {
    title: 'Apricots',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
    price: '$4.99 / kg',
    imageUrl: 'assets/img/fruite-item-4.jpg'
  },
  {
    title: 'Orange2',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
    price: '$4.99 / kg',
    imageUrl: 'assets/img/fruite-item-1.jpg'
  },
  ]
  number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  onScroll= ()=>{
    this.isLoading = true;
    setTimeout(() => {
      if(this.number < 5) {
        this.productList = [...this.productList, ...this.appendProductList];
        this.number++;
        this.isLoading = false;
      }
    }, 100)
    
    
  }

}
