import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogsPage } from './blogs.page';

const routes: Routes = [
  {
    path: '',
    component: BlogsPage
  },
  {
    path: 'myblogs',
    loadChildren: () => import('./myblogs/myblogs.module').then( m => m.MyblogsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogsPageRoutingModule {}
