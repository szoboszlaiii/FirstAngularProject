import { Component, OnInit } from '@angular/core';
import { FavovirteService } from '../favorites/favovirte.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  items = this.favoriteService.getItems();

  DelFromFav(){
    this.favoriteService.DelFromFav();
    window.alert('Eltávolitva');
  }

  constructor(private favoriteService:FavovirteService) { }

  ngOnInit(): void {
  }

}
