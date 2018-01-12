import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:               '',
    loadChildren:       'app/home/home.module#HomeModule'
  },
  { 
    path:               'itens', 
    loadChildren:       'app/item/item.module#ItemModule',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


