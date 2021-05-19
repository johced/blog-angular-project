import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { Blog } from '../models/Blog';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private blogs = new Subject<Blog[]>();
  blogs$ = this.blogs.asObservable();

  constructor(private router: Router, private http: HttpClient) {}

  createAndStoreBlog(title: string, id: number): Observable<Blog> {
    const postData: Blog = { title: title, userId: 1010, id: id };
    return this.http.post<Blog>(
      'https://mi-blogs.azurewebsites.net/api/Blogs',
      postData
    );
  }

  getBlogs(): void {
    this.http
      .get<Blog[]>('https://mi-blogs.azurewebsites.net/api/Blogs/user/1010')
      .subscribe((blog: Blog[]) => {
        this.blogs.next(blog);
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
