import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
 selector: 'courses',
 // template: `
 // <h2>{{ title  + " - " + getTitle() }} </h2>
 // <ul>
 // <li *ngFor="let course of courses">{{course}}</li>
 // </ul>
 // `


 // using interpolation 
//  template:`
// <h4>{{ title}}</h4>
// <img src="{{imgURL}}" style="width:200px;"/>
//  `

// (string interpolation and property binding)
// template : `
// <h4>{{ title}}</h4>
// <img [src] = 'imgURL' style="width:200px;" />
// `
// })

//  using poperty binding (its only one way data binding)
// template : `
// <h4 [textContent]= "title"></h4>
// <img [src] = 'imgURL' style="width:200px;" />
// `

// two data binding using ngmodal
// template : `
// <input type='text' [(ngModel)] ='value'  (change)="ngOnChanges()" /> 
// `

// using attribute binding

template : `

<table class="table">
<tr>
<td [attr.colspan]='colSpan'>First name and Last name</td>
</tr>
<tr>
<td>Vasapalli</td>
<td>Naveen </td>
</tr>

</table>

`




})

export class CoursesComponent {
 title = 'List of courses';
 colSpan = 2;
 value = 0;
 imgURL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgfZeQfcPa39Zodu_eXAUs9xYjmRk5lBry4TWh5nCWiWLf7dka-g';


 ngOnChanges() {

  console.log(this.value);
 }

// courses;

 // constructor(service: CoursesService){
 //  let service = new CoursesService;
 //  this.courses = service.getCourses();
 //  }
  constructor(){

   }


 // getTitle() {
 //  return 'course1'
 // }
}