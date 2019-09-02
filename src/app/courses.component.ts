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

  template: `

<div class="container">

<input type="text"  (keyup)="onKepUp($event)" />
<input type="text"  (keyup.enter)="onKepUp1()" />

<h3> Using a Template Varibale </h3>
============================================================ <br>
<input type="email" #email (keyup)="onKeyUpVal(email)" />

<h3>Two way data binding</h3>
============================================================
<div (click)='divClicked()'>
<button class="btn btn-default" [class.active]="isActive" [style.borderColor]="isActive ? 'green' : 'black'" (click)="btnClick($event)"> Save </button>
</div>

<h3>Pipes</h3>
============================================================
<ul>
<li>{{courseobj.title | uppercase}}</li>
<li>{{courseobj.rating | number :'1.2-2'}}</li>
<li>{{courseobj.students | number}}</li>
<li>{{courseobj.price | currency:'INR':true}}</li>
<li>{{courseobj.releaseDate | date:short}}</li>
</ul>
 <h3> Custom Pipes</h3>
 ==========================================================
<p>
{{ text | summary:10 }}
</p>




<h3> Using tables </h3>
============================================================
<table class="table table-bordered">
<tr>
<td [attr.colspan]='colSpan'>First name and Last name</td>
</tr>
<tr>
<td>Vasapalli</td>
<td>Naveen </td>
</tr>
</table>
</div>
`
})

export class CoursesComponent {
text =" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ";
  isActive = false;
  title = 'List of courses';
  colSpan = 2;
  value = 0;
  imgURL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgfZeQfcPa39Zodu_eXAUs9xYjmRk5lBry4TWh5nCWiWLf7dka-g';


  onKeyUpVal(email) {

    console.log(' using template varilable getting value of the field : ', email.value);

  }
  onKepUp1() {
    console.log(' on enter using angular event')
  }

  onKepUp($event) {

    if ($event.keyCode === 13) {

      console.log('Enter is pressed');
    }

  }

  divClicked() {
    console.log('div is also clicked');

  }
  btnClick($event) {
    $event.stopPropagation();

    this.isActive = !this.isActive;
    console.log(this.isActive + " - dom events : ", $event);
  }

  ngOnChanges() {

    console.log(this.value);
  }

  // courses;

  // constructor(service: CoursesService){
  //  let service = new CoursesService;
  //  this.courses = service.getCourses();
  //  }
  constructor() {

  }

  courseobj = {

    title: "the complete angular copurse",
    rating: 4.9745,
    students: 30123,
    price: 190.95,
    releaseDate: new Date(2016, 3, 1)

  }

  // getTitle() {
  //  return 'course1'
  // }
}