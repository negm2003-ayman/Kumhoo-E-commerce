import { Routes } from '@angular/router';
import { BlankComponent } from './layout/blank/blank.component';
import { AuthComponent } from './layout/auth/auth.component';
import { HomeComponent } from './pages/home/home.component';
import { BrandsComponent } from './pages/brands/brands.component';
import { CartComponent } from './pages/cart/cart.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ProdutsComponent } from './pages/produts/produts.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    {path: '' , redirectTo: 'home' , pathMatch: 'full'},
    {path:'' , component: BlankComponent , title:"blank" , children: [
        {path: 'home' , loadComponent: () => import('./pages/home/home.component').then((c) =>c.HomeComponent) ,title: "home"},
        {path: 'brands' , loadComponent: () => import('./pages/brands/brands.component').then((c) =>c.BrandsComponent) ,title: "brands"},
        {path: 'cart' , loadComponent: () => import('./pages/cart/cart.component').then((c) =>c.CartComponent) ,title: "cart"},
        {path: 'categories/:name' , loadComponent: () => import('./pages/categories/categories.component').then((c) =>c.CategoriesComponent) ,title: "categories"},
        {path: 'products' , loadComponent: () => import('./pages/produts/produts.component').then((c) =>c.ProdutsComponent) ,title: "products"},
        {path: 'about' , loadComponent: () => import('./pages/about/about.component').then((c) =>c.AboutComponent) ,title: "about"},
        {path: 'contact' , loadComponent: () => import('./pages/contact/contact.component').then((c) =>c.ContactComponent) ,title: "contact"},
        {path: 'details/:id' , loadComponent: () => import('./pages/product-details/product-details.component').then((c) =>c.ProductDetailsComponent) ,title: "details"},
    ]},






    {path:'' , component: AuthComponent , title:"auth", children: [
        {path: 'login' , loadComponent: () => import('./pages/login/login.component').then((c) =>c.LoginComponent) ,title: "login"},
        {path: 'register' , loadComponent: () => import('./pages/register/register.component').then((c) =>c.RegisterComponent) ,title: "register"},
        {path: '**' , loadComponent: () => import('./pages/not-found/not-found.component').then((c) =>c.NotFoundComponent) ,title: "not-found"},
    ]}
];
