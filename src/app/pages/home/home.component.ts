import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../core/services/product/product.service';
import { IProducts } from '../../shared/interfaces/iproducts';
import { CarouselModule } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-home',
  imports: [RouterLink , CarouselModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  private readonly productService = inject(ProductService)

  fourProduct : IProducts[] = []
  otherProduct : IProducts[] = []

   popularOptions: any = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }


   arrivalOptions: any = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

    ngOnInit(): void {
      this.sortProduct()
    }


    sortProduct(){
      this.productService.sortProduct().subscribe({
        next:(res)=>{
          console.log(res);

          res.products = res.products.sort(() => Math.random() - 0.5);
          this.fourProduct = res.products.slice(0, 8);
          this.otherProduct = res.products.slice(8, 16);
        },
        error:(err)=>{
          console.log(err);
          
        }
      })
    }
}
