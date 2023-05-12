import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, scan } from 'rxjs/operators';
import { AppService } from './app.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public postId: number = 1;
  public posts: Array<{}> = [];
  constructor(private appServ: AppService) {}

  ngOnInit() {
    this.getPost(this.postId);
  }

  getPost(postId) {
    this.appServ.getPost(postId).subscribe((data) => {
      this.posts.push(data);
      this.postId++;
    });
  }
  getNextBatch() {
    this.getPost(this.postId);
  }
}
