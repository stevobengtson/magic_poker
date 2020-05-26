import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  { path: '', component:  HomeComponent },
  { path: 'users', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  { path: 'table', component: TableComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
