# BlogAngularProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.10.

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# GH PAGES - the way I got it to work
1 - ng add angular-cli-ghpages
It will update the angular.json file. 
2 - add commit and push. 
3 - ng deploy --base-href=your-repo-name
Code will upload into separate branch called gh-pages
4 - go to settings and choose your repo, choose gh pages and root. Wait for a few seconds and there you go. 

* Comment * First page doesn't load until you click on HOME. Don't know why, but now I have to study for big test. :-)
