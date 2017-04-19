# HRM Manager
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 4.0.0.

This project is an angular example with a login screen and a list of employees once logged in. The employees are retrieved from an in-memory database on which several operations can be executed including editing, creating new employees, deleting and searching through the list.

Other features are translations, use of modal dialog, paginator.

## Development server

Make sure you have installed angular/cli version 4.0.0. which is the latest version at the moment of writing this. 
To install the latest version of angular/cli run `npm install -g @angular/cli@latest`. (Don't forget sudo if you are on mac).

Then run `npm install` inside the project directory to download all required npm modules.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

There are two example accounts that can be found in the code @src/app/backend/backend-data.ts

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Directory structure
Directory structure:
```
src
├── app/
│   ├── app.component.html
│   ├── app.component.ts
│   ├── app.module.ts
│   ├── app.routing.module.ts
│   ├── backend
│   │   ├── backend-data.ts
│   ├── layout
│   │   ├── content
│   │   │   ├── content.component.html
│   │   │   ├── content.component.ts
│   │   ├── footer
│   │   │   ├── footer.component.html
│   │   │   ├── footer.component.ts
│   │   ├── header
│   │   │   ├── header.component.html
│   │   │   ├── header.component.ts
│   │   ├── main
│   │   │   ├── main.component.html
│   │   │   ├── main.component.ts
│   │   ├── header
│   │   │   ├── header.component.html
│   │   │   ├── header.component.ts
│   │   ├── sidebar
│   │   │   ├── sidebar.component.html
│   │   │   ├── sidebar.component.ts
│   ├── services
│   │   ├── helper.ts
│   │   ├── employee
│   │   │   ├── employee.model.ts
│   │   │   ├── employee.service.ts
│   │   ├── form
│   │   │   ├── form-validator.ts
│   │   ├── paginator
│   │   │   ├── paginator.service.ts
│   │   ├── translation
│   │   │   ├── lang-en.ts
│   │   │   ├── lang-nl.ts
│   │   │   ├── translate.pipe.ts
│   │   │   ├── translate.service.ts
│   │   │   ├── translations.ts
│   │   ├── user
│   │   │   ├── user.model.ts
│   │   │   ├── user.service.ts
│   ├── views
│   │   ├── content-header
│   │   │   ├── content-header.html
│   │   │   ├── content-header.ts
│   │   ├── employee
│   │   │   ├── create-employee
│   │   │   │   ├── create-employee.component.html
│   │   │   │   ├── create-employee.component.ts
│   │   │   ├── delete-employee
│   │   │   │   ├── delete-employee.component.html
│   │   │   │   ├── delete-employee.component.ts
│   │   │   ├── employee-list
│   │   │   │   ├── employee-list.component.html
│   │   │   │   ├── employee-list.component.ts
│   │   ├── modal-dialog
│   │   │   ├── modal-dialog.html
│   │   │   ├── modal-dialog.ts
│   │   ├── page-not-found
│   │   │   ├── page-not-found.component.html
│   │   │   ├── page-not-found.component.ts
│   │   ├── signin
│   │   │   ├── signing.component.html
│   │   │   ├── signing.component.ts

```

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
