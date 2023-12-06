import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProyectsComponent } from './pages/proyects/proyects.component';
import { InfoComponent } from './pages/info/info.component';

export const routes: Routes = [
  { path: '', redirectTo: '/jordan', pathMatch: 'full' },
  { path: 'jordan', component: HomeComponent, title: 'Home' },
  { path: "proyects", component: ProyectsComponent, title: "Proyects" },
  {path:"info", component:InfoComponent, title:"Informacion"}
];
