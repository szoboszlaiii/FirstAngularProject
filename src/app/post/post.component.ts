import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../posts/post.model';
import { POSTS } from '../posts/post.storage';
import { PostsComponent } from '../posts/posts.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  model!: Post;

  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activateRoute.snapshot.paramMap.get('id');

    if(id){
      let i = +id-1;
      this.model = POSTS[i];
    }

  }

}
