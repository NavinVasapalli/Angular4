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

<input type="text"  (keyup)="onKepUp($event)" />
<input type="text"  (keyup.enter)="onKepUp1()" />
<h3>using a template varibale</h3>
<input type="email" #email (keyup)="onKeyUpVal(email)" />

<h3>Two way data binding</h3>

<div (click)='divClicked()'><button class="btn btn-default" [class.active]="isActive" [style.borderColor]="isActive ? 'green' : 'black'" (click)="btnClick($event)"> Save </button></div>
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

  isActive = false;
 title = 'List of courses';
 colSpan = 2;
 value = 0;
 imgURL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgfZeQfcPa39Zodu_eXAUs9xYjmRk5lBry4TWh5nCWiWLf7dka-g';


 onKeyUpVal(email){

  console.log(' using template varilable getting value of the field : ' , email.value );

 }
 onKepUp1(){
   console.log(' on enter using angular event')
 }

 onKepUp($event){

  if($event.keyCode === 13) {

    console.log('Enter is pressed');
  }

 }

 divClicked(){
console.log('div is also clicked');

 }
 btnClick($event){
 $event.stopPropagation();
 
  this.isActive = !this.isActive;
  console.log(this.isActive + " - dom events : " , $event) ;
 }

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