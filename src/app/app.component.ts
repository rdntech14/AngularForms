import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularForms';

  employee = new Employee("Mark",100);

}

export class Employee{
  constructor(
  firstName:string,
  salary:Number
  ){}
}