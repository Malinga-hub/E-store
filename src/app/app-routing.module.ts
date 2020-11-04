import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NavigationComponent} from './navigation/navigation.component'

const routes: Routes = [
  {path: '', pathMatch:'full', 'redirectTo': 'store'},
  {path: 'store', component: NavigationComponent, children: [
    {path: '', pathMatch:'full', redirectTo: 'products'},
    { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) }
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
