# Lazy Loading Modules

In this code example, we worked with the [Tour of Heroes](https://angular.io/guide/http) project, and made the following modifications:

- [ ] Consolidated the dependencies for the `/dashboard` route into a `DashboardModule`
- [ ] Consoidated the dependencies for the `/heroes` route into a `HeroesModule`
- [ ] Converted the `DashboardModule` into a lazy loaded module

## For Next Time...

We will deep dive into the following Libraries / Features of Angular at scale:

- [ ] Change `karma.conf.js` to adhere to customized coverage requirements
- [ ] Angular Service Testing (wrap up with more examples)
- [ ] Angular Component Testing (including template testing)
- [ ] Routing and Navigation
- [ ] Observables & RxJS
- [ ] Dependency Injection
- [ ] Switch code coverage / test suite ~~from Jest + Karma~~ to Jest + Cypress

## For later

- [ ] Using Effects
- [ ] Testing Effects (hello `jasmine-marbles` 🙈!!)

## Future Topics

- [ ] Interceptors
- [ ] Guards
- [ ] Pipes
- [ ] Singleton Services

## Bonus Round...

- Configuring `Markdownlint`
- Configuring `TSLint`
- Fix `tslint` codelyzer "custom rule directory" bug

## References

- **RxJS** Awesome library for handling complexities around dynamic apps &
  their asynchronous (often remote) data: https://www.learnrxjs.io/
  - **NgRx** Framework for building reactive applications
    in Angular (uses RxJS patterns): https://ngrx.io/docs
