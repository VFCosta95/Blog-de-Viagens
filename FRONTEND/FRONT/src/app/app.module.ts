import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './component/menu/menu.component';
import { ImgPrincipalComponent } from './component/img-principal/img-principal.component';
import { ImgSecundariaComponent } from './component/img-secundaria/img-secundaria.component';
import { CarroselComponent } from './component/carrosel/carrosel.component';
import { HomeComponent } from './component/home/home.component';
import { ItemDetailComponent } from './component/item-detail/item-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ImgPrincipalComponent,
    ImgSecundariaComponent,
    CarroselComponent,
    HomeComponent,
    ItemDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
