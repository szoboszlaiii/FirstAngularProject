import { Injectable } from '@angular/core';
import { Post } from '../posts/post.model';

@Injectable({
  providedIn: 'root'
})
export class FavovirteService {
  items: Post[] = [];

  addtoFav(product: Post) {
    this.items.push(product); 
  }

  DelFromFav(){
    this.items.pop();
  }

  getItems(){
    return this.items;
  }

  constructor() { }
}
