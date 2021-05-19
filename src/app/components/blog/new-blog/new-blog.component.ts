import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { Blog } from 'src/app/models/Blog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-blog',
  templateUrl: './new-blog.component.html',
  styleUrls: ['./new-blog.component.css'],
})
export class NewBlogComponent implements OnInit {
  constructor(private router: Router, private service: BlogService) {}

  ngOnInit(): void {}

  onNewBlog(postData: Blog) {
    this.service
      .createAndStoreBlog(postData.title, postData.id)
      .subscribe((responseData) => {
        this.router.navigate(['/blog', responseData.id, responseData.title]);
      });
  }
}
