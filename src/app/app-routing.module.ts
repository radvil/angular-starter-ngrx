import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'add-company',
    pathMatch: 'full'
  },
  {
    path: 'company-list',
    loadChildren: () => import('./company/company-list/company-list.module').then(m => m.CompanyListModule)
  },
  {
    path: 'add-company',
    loadChildren: () => import('./company/company-new/company-new.module').then(m => m.CompanyNewModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
