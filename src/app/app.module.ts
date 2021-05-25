import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { NewBlogComponent } from './components/blog/new-blog/new-blog.component';
import { PostComponent } from './components/blog/post/post.component';
import { CommentComponent } from './components/blog/comment/comment.component';
import { EditPostComponent } from './components/blog/post/edit-post/edit-post.component';
import { EditCommentComponent } from './components/blog/comment/edit-comment/edit-comment.component';
import { NewPostComponent } from './components/blog/post/new-post/new-post.component';
import { NewCommentComponent } from './components/blog/comment/new-comment/new-comment.component';
import { ShowPostComponent } from './components/blog/post/show-post/show-post.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BlogComponent,
    NewBlogComponent,
    HomeComponent,
    PostComponent,
    CommentComponent,
    EditPostComponent,
    EditCommentComponent,
    NewPostComponent,
    NewCommentComponent,
    ShowPostComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
