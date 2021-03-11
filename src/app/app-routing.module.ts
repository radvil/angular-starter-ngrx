import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'about',
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { title: 'About' }
  },
  {
    path: 'company-list',
    loadChildren: () => import('./company/company-list/company-list.module').then(m => m.CompanyListModule)
  },
  {
    path: 'add-company',
    loadChildren: () => import('./company/company-new/company-new.module').then(m => m.CompanyNewModule)
  },
  {
    path: 'tables',
    loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
