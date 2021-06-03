import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isShowing: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  toggle(): void {
    this.isShowing = !this.isShowing;
  }
}
