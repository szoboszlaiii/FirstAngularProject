import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageScrollService } from 'ngx-page-scroll-core';
import { Post } from './post.model';
import { POSTS } from './post.storage';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

    model!: Array<Post>;
    
  constructor(private router: Router, private pageScroolServ: PageScrollService, @Inject(DOCUMENT) private document: any) {}

  active = 1;
  onScroll(event: HTMLElement, i: number) {
    this.pageScroolServ.scroll({
      scrollTarget: event,
      document: this.document
    });

    this.active = i;
  }

  ngOnInit(): void {
    this.model = POSTS;
    
  }
  public onClick(post: Post): void{
    this.router.navigate(['/post/', post.id]);

  }
}
