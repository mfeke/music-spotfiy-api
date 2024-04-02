import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartedComponent } from './components/started/started.component';
import { HomeComponent } from './components/home/home.component';
import { ArtistComponent } from './components/artist/artist.component';

const routes: Routes = [
  { path: '', redirectTo: '/started', pathMatch: 'full' },
  {path:"started", component:StartedComponent},
  {path:"home", component:HomeComponent},
  {path:"artist/:id", component:ArtistComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
