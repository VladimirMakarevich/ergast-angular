# Ergast Angular Application

This project used Angular version 11.0.3. 
If you already have an older version of angular installed, you can update as follows:
1) run `npm uninstall -g angular-cli`
2) run `npm install -g @angular/cli@latest`

In order to check which version of node to use, you can use the following resource:
https://gist.github.com/LayZeeDK/c822cc812f75bb07b7c55d07ba2719b3

## Run project server

Run `ng serve` for a dev server or `ng serve --prod` for a prod server. Navigate to `http://localhost:4200/`.

## Environments

To change the baseUrl of the API - use `environment's.ts` configs.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests.

## Description

When developing this application, I adhered to the approach of stupid components, division of responsibility between modules. An additional middleware `sandbox.ts` (in fact, this is the same intermediate service, just for convenience it is called differently) was introduced to work with services and components, which helps in reducing coupling in applications and helps with state management (in cases where we do not need to pull such libraries as NgRx or Akita into the application).

The project structure is as follows:
1) @core - constants, API services, models, interceptors, guards, bus.
2) @ergast - scss, shared components, animations, pipes, directives and etc.
3) app - layout applications, modules (pages), sandboxes (intermediate services).

NOTES:
In the models you can see unnecessary fields that are not used, I decided to keep them as this practically does not affect the performance of the application in any way (for this it is necessary that the backend does not send fields that are not used in the contract), but it helps add changes more quickly in case if new requirements are added.
You can also pay attention to the fact that some fields in the models begin with a capital letter, this is due to the fact that the backend sends json in this form.

## Backend API

http://ergast.com/mrd/

## Further help

If you have any questions, don't hesitate to contact me by `email` or `skype`. (email: `makarevich.dev@outlook.com` / skype: `vova.zhigalov`)

## Updates

12.07.2020 -- `Develop and Release` branches have been created to work with `GitLab flow`. Tests for services have been added to the `Develop branch` and, also styles have been refactored.
