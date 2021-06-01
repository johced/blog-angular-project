import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { stringify } from '@angular/compiler/src/util';

import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { title } from 'process';
import { Observable, Subject } from 'rxjs';
import { Blog } from '../models/Blog';
import { Comment } from '../models/Comment';
import { Post } from '../models/Post';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private blogs = new Subject<Blog[]>();
  blogs$ = this.blogs.asObservable();

  private posts = new Subject<Post[]>();
  posts$ = this.posts.asObservable();

  private comments = new Subject<Comment[]>();
  comments$ = this.comments.asObservable();

  constructor(private router: Router, private http: HttpClient) {}

  // *** POST  ***

  addBlog(title: string, id: number): Observable<Blog> {
    const postData: Blog = { title: title, userId: 1010, id: id, posts: [] };
    return this.http.post<Blog>(
      'https://mi-blogs.azurewebsites.net/api/Blogs',
      postData
    );
  }

  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>(
      'https://mi-blogs.azurewebsites.net/api/Posts',
      post
    );
  }

  addComment(comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(
      'https://mi-blogs.azurewebsites.net/api/Comments',
      comment
    );
  }

  // PUT

  updatePost(post: Post): Observable<Post> {
    // console.log(post);
    const url = `${'https://mi-blogs.azurewebsites.net/api/Posts'}/${post.id}`;
    return this.http.put<Post>(url, post);
  }

  updateBlog(blog: Blog): Observable<Blog> {
    const url = `${'https://mi-blogs.azurewebsites.net/api/Blogs'}/${blog.id}`;
    return this.http.put<Blog>(url, blog);
  }

  // *** GET ***

  getBlogs(): void {
    this.http
      .get<Blog[]>('https://mi-blogs.azurewebsites.net/api/Blogs/user/1010')
      .subscribe((blog: Blog[]) => {
        this.blogs.next(blog);
      });
  }

  getBlog(id: number) {
    return this.http.get<Blog>(
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

  getPost(id: number) {
    return this.http.get<Post>(
      'https://mi-blogs.azurewebsites.net/api/Posts/' + id
    );
  }

  getComments(): void {
    this.http
      .get<Comment[]>('https://mi-blogs.azurewebsites.net/api/Comments/')
      .subscribe((comment) => {
        this.comments.next(comment);
      });
  }

  getComment(id: number) {
    return this.http.get<Comment>(
      'https://mi-blogs.azurewebsites.net/api/Comments/' + id
    );
  }

  // *** DELETE ***

  deleteBlog(blogId: number) {
    this.http
      .delete('https://mi-blogs.azurewebsites.net/api/Blogs/' + blogId)
      .subscribe(() => {
        this.router.navigate(['/new-blog']).then(() => {
          this.getBlogs();
        });
      });
  }

  deletePost(id: number) {
    this.http
      .delete('https://mi-blogs.azurewebsites.net/api/Posts/' + id)
      .subscribe(() => {
        this.getPosts();
      });
  }

  deleteComment(id: number) {
    this.http
      .delete('https://mi-blogs.azurewebsites.net/api/Comments/' + id)
      .subscribe(() => {
        this.getPosts();
      });
  }
}
