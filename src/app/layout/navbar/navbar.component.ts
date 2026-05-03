import { routes } from './../../app.routes';
import { CategoryService } from './../../core/services/category/category.service';
import { Component, inject } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { FlowbiteService } from '../../core/services/flowbite/flowbite.service';
import {  Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink , RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
    constructor(private flowbiteService: FlowbiteService) {
      
    }

    categoriesList:any[] = [] 

    private readonly categoryService = inject(CategoryService)
    private readonly router=inject(Router)
    isMenuOpen = false;

    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }

    closeMenu() {
      this.isMenuOpen = false;
    }


    productCategory(category:any):void{
      this.router.navigate(['/categories',category])
    }

    categoryList(){
      this.categoryService.categoryList().subscribe({
        next:(res)=>{
          console.log(res);
          this.categoriesList = res
        },
        error:(err)=>{
          console.log(err);
          
        }
      })
    }

  ngOnInit(): void {
    this.flowBite()
    this.categoryList()
  }

  


  flowBite(){
        this.flowbiteService.loadFlowbite((flowbite) => {
      initFlowbite();
    });
  }



    signOut(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}
