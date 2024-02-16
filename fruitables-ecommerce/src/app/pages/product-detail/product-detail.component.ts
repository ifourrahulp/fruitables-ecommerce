import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  productDetail = {
    imageUrl: 'assets/img/single-item.jpg',
    title: 'Brocoli',
    catgrory: 'Vegetables',
    amount: '3,35 $',
    rating: '',
    description: "The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words ett. usp endisse ultricies nisi vel quam suscipit. Sabertooth peacock flounder; chain pickerel hatchetfish, pencilfish snailfish"
  }
  constructor() { }

  ngOnInit(): void {
  }

} 
