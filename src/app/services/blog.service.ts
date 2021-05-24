import { HttpClient } from '@angular/common/http';

import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { Blog } from '../models/Blog';
import { Post } from '../models/Post';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private blogs = new Subject<Blog[]>();
  blogs$ = this.blogs.asObservable();

  private posts = new Subject<Post[]>();
  posts$ = this.posts.asObservable();

  constructor(private router: Router, private http: HttpClient) {}

  addBlog(title: string, id: number): Observable<Blog> {
    const postData: Blog = { title: title, userId: 1010, id: id, posts: [] };
    return this.http.post<Blog>(
      'https://mi-blogs.azurewebsites.net/api/Blogs',
      postData
    );
  }

  addPost(post): Observable<Post> {
    return this.http.post<Post>(
      'https://mi-blogs.azurewebsites.net/api/Posts',
      post
    );
  }

  getBlogs(): void {
    this.http
      .get<Blog[]>('https://mi-blogs.azurewebsites.net/api/Blogs/user/1010')
      .subscribe((blog: Blog[]) => {
        this.blogs.next(blog);
      });
  }

  getBlog(id: number) {
    return this.http.get<Blog[]>(
      'https://mi-blogs.azurewebsites.net/api/Blogs/' + id
    );
  }

  getPosts(): void {
    this.http
      .get<Post[]>('https://mi-blogs.azurewebsites.net/api/Posts')
      .subscribe((post: Post[]) => {
        this.posts.next(post);
      });
  }

  deleteBlog(blogId: number) {
    this.http
      .delete('https://mi-blogs.azurewebsites.net/api/Blogs/' + blogId)
      .subscribe(() => {
        this.router.navigate(['/new-blog']).then(() => {
          this.getBlogs();
        });
      });
  }
}
