import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../core/services/product/product.service';
import { IProducts } from '../../shared/interfaces/iproducts';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-produts',
  imports: [RouterLink ],
  templateUrl: './produts.component.html',
  styleUrl: './produts.component.css'
})
export class ProdutsComponent implements OnInit {

  private readonly productService = inject(ProductService)
  private router = inject(Router)
  private activatedRoute = inject(ActivatedRoute)

  myProducts : IProducts[] = []

  currentPage= 1;
  limit=30;
  total=0;

  callAllProducts(){
    const skip = (this.currentPage - 1) * this.limit;
    
    this.productService.getProducts(this.limit, skip).subscribe({
      next:(res)=>{
        console.log(res);
        this.myProducts = res.products

        this.total = res.total
        
        
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
    
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params =>{
      this.currentPage = Number(params['page']) || 1;
      this.callAllProducts()
        })
  }

  nextPage(){
    if(this.currentPage * this.limit < this.total){
      this.currentPage++;
      window.scrollTo({ top: 0, behavior: 'smooth' });
      this.router.navigate([],{
        relativeTo:this.activatedRoute,
        queryParams:{page:this.currentPage},
        queryParamsHandling:'merge'
        
      })
    }
  }

  prevPage(){
    if(this.currentPage > 1){
      this.currentPage--;
      window.scrollTo({ top: 0, behavior: 'smooth' });
      this.router.navigate([],{
        relativeTo:this.activatedRoute,
        queryParams:{page:this.currentPage},
        queryParamsHandling:'merge'
      })
    }
  }

  TotalPages(){
    return Math.ceil(this.total / this.limit)
  }

}
