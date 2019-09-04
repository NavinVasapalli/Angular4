import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { stringify } from '@angular/core/src/util';


@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',

  styles:[
    `
    .glyphicon{
      color:red
    }

    .glyphicon-star{
      background-color:#0000;
    }
    `
  ],
  styleUrls: ['./favorite.component.css'],
  // encapsulation:ViewEncapsulation.None
})
export class FavoriteComponent{
  // aliasing the input
  // @Input('is-fav') isFavorite: boolean;
  // strin:any =  'naveen';
  
// shadow dom

// var el = document.querySelector('favorite');
// var root = el.createShadowRoot();
// root.innerHTML=`
// <style>
// h1{
//   color:red
// }
// </style>
// <h1>hello</h1>
// `





  @Input() isFavorite: boolean;
  // tslint:disable-next-line: no-output-rename


  // alising out up
  // tslint:disable-next-line: no-output-rename
  @Output('change') click = new EventEmitter();

  onClick() {
    this.isFavorite = !this.isFavorite;
   
    // this.strin.length;

    // for(let i:number = 0 ; i < this.strin.length; i++){

    //   console.log("each character : " + this.strin.charAt(i));

    // }


  //   for (let character in this.strin) {  
  //     console.log(this.strin[character])
  // }

  


    // this.change.emit(this.isFavorite);
    this.click.emit({ newValue: this.isFavorite });
  }
}
