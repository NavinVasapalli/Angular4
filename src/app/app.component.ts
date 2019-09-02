import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  post= {
    title: 'Title',
    isFavorite: true
  };

  onFavoriteChange(eventArgs : {newValue : boolean}) { 
    // console.log('just a boolean object onchanged' , isFavorite);
    console.log('javascript object' , eventArgs);
  }


}
