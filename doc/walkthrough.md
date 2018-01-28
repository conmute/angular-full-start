# Fully Ready starter step through

## Done

* [x] Create new project `ng new full-start`

## Planned

* [x] Use (Universal starter)[https://github.com/angular/universal-starter.git] project as an example
  * [ ] New Files
    * [ ] `./server.ts` - server script that runs Angular Universal and express-engine stuff
    * [ ] `./prerender.ts` - script that prerenders configured routes for faster server response
    * [ ] `./.angular-cli.json` - Angular CLI configuration for client application and server
    * [ ] `./webpack.server.config.js` - Webpack configuration to build the server bundle
    * [ ] `./static.paths.ts` - List of paths for prerenderer script
    * [ ] `./src/tsconfig.app.json` - typescript config for client app
    * [ ] `./src/tsconfig.server.json` - typescript config for server-universal app
    * [ ] `./src/main.server.ts` - server runner
    * [ ] `./src/app/app.server.module.ts` - server runner
  * [ ] An application source
    * [ ] Lazy module loading
* [ ] Create folder configuration files `./conf`
* [ ] Prepare e2e tests cases
* [ ] Prepare integration tests of multiple modules
* [ ] Prepare unit tests
* [ ] One command for build and run process
* [ ] One command for development process
  * [ ] Client app
  * [ ] Server app
  * [ ] e2e/integration/unit tests on changee