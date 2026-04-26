import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService } from '../../core/services/product/product.service';
import { IProducts } from '../../shared/interfaces/iproducts';
import { Details } from '../../shared/interfaces/details';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  imports: [RouterLink, CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {


  private readonly activatedRoute = inject(ActivatedRoute)
  private readonly productService = inject(ProductService)

  prodId:any;

  prodData : Details = {} as Details

  selectedImage: string = '';
  


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe({
      next:(res)=>{
        console.log(res.get('id'));
        this.prodId = res.get('id')

        this.productService.singleProduct(this.prodId).subscribe({
          next:(res)=>{
            console.log(res);

            this.prodData = res
            window.scrollTo(0, 0);
            this.selectedImage = this.prodData.images[0];
            
          },
          error:(err)=>{
            console.log(err);
          }
        })
        
      }
    })
    
  }


}
