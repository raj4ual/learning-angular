# Myapp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.25.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



Typescript
----------
  - open source
  - google
  - Angular application are built using typescript
  - superset of Javascript
  - types - number, boolean, Array, string, null, undefined.......


  test.ts --- transpiler(tsc)(compiler options, tsconfig.json) ---> test.js --- runtime enviroment(browser, node)


  drawbacks:
    - dynamically typed 
    - functions
        - no parameter restriction
    - Array
      - no restriction on type of elements for a given array

Front end Frameworks 
- Angular(Google), React(Facebook), Vue ...

    ANGULAR
    --------
    - Front end framework
    - SPA (Single Page Application)
    - Google
    - component based


angularjs v1- library
angular v2 - ANGULAR 2, 3 .... 10

  8.3.25


Angular Architecture/building bock

- Modules
- Component
    - template
    - logic
- services
- directives
- Guards, Routing, Pipes


install Angular CLI
--------------------
npm i -g @angular/cli@8.3.25

Project creation
--------------------
ng new myapp

ng serve -o

build a project
---------------
ng build --prod

dist/app  ---> deployed on to a prod server like nginx, apache, tomcat



Project structure
---------------------
e2e - protractor, jasmine
unit - karma, jasmine

src --> modules ---> component
    --> asset --. resources like images
    --> index.html -- Starting page
    --> main.ts - used for bootstrapping angular app
    --> styles.css -- global styles

angular.json ---> project configuration

package.json
tsconfig.json --> compiler config for ts files

AppModule --> AppComponent
                  - html   
                  - css
                  - ts
                  - spec.ts


ng generate component header
            module
            service
            guard
            class
            ....


-- Data binding
-- form handling
-- modules
-- Http request
-- services and dependency injection
-- Guards and pipes
-- Lifecycle methods
-- Component interaction
-- Smart and Dumb components


3 assignments --> Google keep
  Step1
  Step2 
  Step3
   

Angular Material
---------------
ng add @angular/material@8.2.3


Data Binding
--------------

Interpolation - From class to the template  {{ }}
propertybinding - From class to template    []
eventbinding  - From the template to the class  ()
two way binding - data flows both ways     [()]
  - ngModel - FormsModule    [(ngModel)]=variablename


Template reference variables  - #variablename


Directives
-----------
structural directives - add or remove from dom
  ngIf, ngSwitch, ngFor

attribute directives
  - changing the appearance and behaviour of an element
  - NgModel, NgClass, NgStyle

Component
  directive with a Template


Next:
  directives
  Services & dependency injection
  REST Call through HttpClientModule / Observable

1st Angular Assignment.


Recap
------
Typescript

Angular CLI commands
  - ng new
  - ng serve 
  - ng generate ------
  - ng build --prod  (dist)

Angular Architecture
  - Modules
  - Components
      - Template
  - Service
  - pipes
  - directives
  - routing, Guards

Project Structure
  - main.ts
  - angular.json
  - styles.css
  - package.json
  - app.module.ts - configuring the module
  - tsconfig.json

Lifecycle hooks
  - ngOnInit -- once per component
  - ngOnChanges -- every time there is a change in input to a component
  - ngOnDestroy --

Angular Material

Data Binding
  - interpolation
  - property binding
  - event binding
  - two way binding

Template Reference variables

Directive
  - attribute directive 
    NgModel

Agenda: 
  - Structural Directives
  - Services & DI
  - HttpClientModule


Services
    - application logic
    - interaction with external sources - like REST Calls to APIS
    - Share data

  - Classes

Dependency Injection Framework
  - hierarchical


HttpClientModule -->  REST calls to APIS


RxJS - Reactive extension for Javascript
Observable - supports async access

Running mock Server --- JSON server 
PS C:\Users\RajeevRanjan\Documents\FSD\2\learning-angular> json-server --watch .\server\contacts.json

Next Session
form- template driven and Reactive form, Routing
-------------------------------------------------


Recap
-----
Structural Directives - ngIf, ngFor, ngSwitch
Services and Dependency Injection
Send request to Rest API using HTTPClientModule 
Observables

Agenda
-------

Form Handling
  - inputs from user
  - Validation of Inputs
  - visual feedback
  - error messages

Forms
  - Template(html) Driven Form
    - controlled by the template( most of the logic)
    - Simple Scenarios
    - ngForm and ngModel
    - FormsModule


  - Reactive Forms (Model driven forms)
    - controlled by the class file( most of the logic)
    - complex scenarios - cross validation, dynamic fields
      - FormGroup and FormControl
      - ReactiveFormsModule

  Tracking the state and validity
  -------------------------------
  touched and untouched
  pristine and dirty
  valid and invalid

to convert the form data into json angular Pipes can be used to transform the value fields to change cases and other types
    {{testForm.value | json}}


Next session:   Routing, Authentication using JWT Tokens, store it in browser(session storage), Guards



Smart and Dumb Components

Smart (Container) Components 
    - logic, DI for service...

Dumb Components(presentation component) 
 - UI, binding, validation ....
 - Reusable
 
Component Interaction
---------------------

schematics


routes - Parameter, queryparameters

Login
 queryparam - username

Dashboard 

ActivatedRoute



Passing information from one to another components

- Routing parameter
- Input() Output()  (Parent and Child)
- Service and Subject



- Create a New Module and Add its separate routing
- Child routes and its router outlets
- Schematics
- Route Parameter and Activated Route
- Interceptors

next Session
 : Component Interaction
            - Parent - child
                - using @Input and property binding (parent to child)
                - event binding and @output (child to parent)
            - Unrelated Components
                - sevice class
                - Behaviour subject
            
            
  Behavior Subject
       
       Delete
       Edit Functionality
       
       

























