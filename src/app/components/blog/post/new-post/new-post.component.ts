import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Blog } from 'src/app/models/Blog';
import { Post } from 'src/app/models/Post';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css'],
})
export class NewPostComponent implements OnInit {
  @ViewChild('f') postForm: NgForm;
  blogs: Blog[] = [];
  blogId: number = 0;
  blog: Blog;

  constructor(private route: ActivatedRoute, private service: BlogService) {}

  ngOnInit(): void {
    // Hämtar id för bloggen vi är på
    this.route.paramMap.subscribe((params) => {
      this.blogId = parseInt(params.get('id'));
    });

    // Hämtar bloggen vi är på, för att kunna pusha post till den.
    this.service.getBlog(this.blogId).subscribe((data) => {
      this.blog = data;
    });
  }

  onNewPost(postData: Post) {
    let newpost = new Post(
      postData.title,
      postData.content,
      new Date(),
      this.blogId,
      0
    );
    this.service.addPost(newpost).subscribe((poster) => {
      this.service.getBlog(this.blogId).subscribe((data) => {
        this.blog = data;
        // console.log(poster);
        // console.log(this.blog);
        this.service.getPosts();
      });
    });
    this.postForm.reset();
  }
}
