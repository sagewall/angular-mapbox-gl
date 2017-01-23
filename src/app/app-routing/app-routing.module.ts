import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { BasicMapComponent } from '../basic-map/basic-map.component';
import { GeocodeMapComponent } from '../geocode-map/geocode-map.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'basic-map', component: BasicMapComponent},
  {path: 'geocode-map', component: GeocodeMapComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
