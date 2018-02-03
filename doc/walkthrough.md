# Fully Ready starter step through

## Done

1. [x] Create new project `ng new full-start`
1. [x] Use [Universal starter](https://github.com/angular/universal-starter.git) project as an example
   1. [x] An application source
      1. [x] Routes and Navigation
      1. [x] Lazy module loading
   1. [x] Process build and configuration files
      1. [x] `./src/app/app.server.module.ts` - server runner
      1. [x] `./src/tsconfig.server.json` - typescript config for server-universal app
      1. [x] `./.angular-cli.json` - Angular CLI configuration for client application and server
      1. [x] `./src/main.server.ts` - server runner
      1. [x] `./webpack.server.config.js` - Webpack configuration to build server.ts and prerender.ts files
      1. [x] `./server.ts` - server script that runs Angular Universal and express-engine stuff
      1. [x] `./prerender.ts` - script that prerenders configured routes for faster server response
      1. [x] `./static.paths.ts` - List of paths for prerenderer script

## Planned

* [ ] Create folder configuration files `./conf`
* [ ] Prepare e2e tests cases
* [ ] Prepare integration tests of multiple modules
* [ ] Prepare unit tests
* [ ] One command for build and run process
* [ ] One command for development process
  * [ ] Client app
  * [ ] Server app
  * [ ] e2e/integration/unit tests on changee
