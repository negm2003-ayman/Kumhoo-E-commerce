import { Component, inject, OnInit } from '@angular/core';
import { CategoryService } from '../../core/services/category/category.service';
import { IProducts } from '../../shared/interfaces/iproducts';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-categories',
  imports: [RouterLink],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit {


  private readonly categoryService = inject(CategoryService)
  private readonly activatedRoute = inject(ActivatedRoute)


  myProducts : IProducts[] = []
  categoryName: any;


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe({
      next:(res)=>{
        console.log(res.get('name'));
        this.categoryName = res.get('name')

        this.categoryService.productByCategory(this.categoryName).subscribe({
          next:(res)=>{
            console.log(res);
            this.myProducts = res.products
          },
          error:(err)=>{
            console.log(err);
            
          }
        })
      }
    })
  }
}
