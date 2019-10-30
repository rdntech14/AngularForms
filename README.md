Angular Forms
=====

Angular has two types of Forms 

1) Template Driven Forms
2) Reactive Forms

**Form Control & Form Group**

Just as a form control instance gives you control over a single input field, a form group instance tracks the form state of a group of form control instances (for example, a form). Each control in a form group instance is tracked by name when creating the form group.

*Note : 
we need to import FormsModule for template driver forms
we need to import ReactiveFroms for Reactive froms*

**Data Binding with ngForm**

to access the form values, we need to use

1) We need to create form refernce using template reference varilable (#userName) assiging to ngForm. 
Templete reference varialble have "value" property that will have all form control values. 
Here input tag is a form control that user wants to track. 

2) ngModel directive has to be added to form controls that needs to be tracked and must have name property.

```
<form #userForm="ngForm">
<input type="text" name="username" ngModel>
{{ userForm.value | json }}
</form>
```

**Data Binding with Model**
```
<input type="text" name="username" [(ngModel)]="employee.firstname">
```

```
<form #userForm2="ngForm">
  <input type="text" name="username" [(ngModel)]="employee.firstName">
  {{userForm2.value | json }}
  {{employee | json }}
</form>
```

where employee is an instance of Employee class model

**Tracking State and Validitiy**

Video : https://www.youtube.com/watch?v=WyWJwR0FJV0&list=PLC3y8-rFHvwhwL-XH04cHOpJnkgRKykFi&index=7

to get the state of DOM, Angular provides few classes along with properties

![Alt text](/ControlState.png?raw=true "Optional Title")

![Alt text](/ngModelStateClassAndProperty.png?raw=true "Optional Title")

to get reference of DOM element, add template reference variable (example  #trvName)

```
<input type="text" name="username" [(ngModel)]="employee.firstname" #trvName>
{{  trvName.class }}
```
This will show few classes from above list 

In order to get access to the properties, we need to assign ngModel to template refernece variable

```
<input type="text" name="username" [(ngModel)]="employee.firstname" #trvName="ngModel">
{{  trvName.untouched }}
```
this may return true or false

**Steps for Template Driven Form**

1) Add `#myForm="ngForm"` to form tag 
2) Element must have ngModel directive
3) Element must have name properties

```
<input type="text" name="username" ngModel>
```

