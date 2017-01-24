import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { BasicMapComponent } from '../basic-map/basic-map.component';
import { GeocodeMapComponent } from '../geocode-map/geocode-map.component';
import { DrawMapComponent } from '../draw-map/draw-map.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'basic-map', component: BasicMapComponent},
  {path: 'geocode-map', component: GeocodeMapComponent},
  {path: 'draw-map', component: DrawMapComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
