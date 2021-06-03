import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';
import { EditBlogComponent } from './components/blog/edit-blog/edit-blog.component';
import { NewBlogComponent } from './components/blog/new-blog/new-blog.component';
import { EditPostComponent } from './components/blog/post/edit-post/edit-post.component';
import { PostComponent } from './components/blog/post/post.component';
import { ShowPostComponent } from './components/blog/post/show-post/show-post.component';
import { HomeComponent } from './components/home/home.component';

// :title är namnet på bloggen
const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'blog/:id/:title/:id',
    pathMatch: 'full',
    component: ShowPostComponent,
  },
  {
    path: 'blog/:id/:title/:id/edit/:id',
    pathMatch: 'full',
    component: EditPostComponent,
  },
  {
    path: 'blog/:id/:title/edit/:id',
    pathMatch: 'full',
    component: EditBlogComponent,
  },
  { path: 'blog/:id/:title', pathMatch: 'full', component: BlogComponent },
  { path: 'new-blog', component: NewBlogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
