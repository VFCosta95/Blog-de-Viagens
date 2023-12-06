import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/component/home/home.component';
import { ItemDetailComponent } from './component/item-detail/item-detail.component';
import { CarroselComponent } from './component/carrosel/carrosel.component';

const routes: Routes = [
  { path:'', component: HomeComponent},
  { path:'lista', component: CarroselComponent},
  { path:'lista/:id', component: ItemDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
