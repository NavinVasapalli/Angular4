import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  // aliasing the input
  // @Input('is-fav') isFavorite: boolean;


  @Input() isFavorite: boolean;
  // tslint:disable-next-line: no-output-rename


  // alising out up
  // tslint:disable-next-line: no-output-rename
  @Output('change') click = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isFavorite = !this.isFavorite;
    // this.change.emit(this.isFavorite);
    this.click.emit({ newValue: this.isFavorite });
  }
}
