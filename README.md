# Getting Started With Schematics

This repository is a basic Schematic implementation that serves as a starting point to create and publish Schematics to npm. Read [Use Angular Schematics to Simplify Your Life](https://developer.okta.com/blog/2019/02/13/angular-schematics) to see how this example was created.

## Getting Started

Clone this application to your local hard drive using Git.

```
git clone https://github.com/oktadeveloper/okta-angular-schematics-example.git schematics-example
cd schematics-example
npm i
```

### Testing

To test locally, install `@angular-devkit/schematics-cli` globally and use the `schematics` command line tool. That tool acts the same as the `generate` command of the Angular CLI, but also has a debug mode.

Check the documentation with
```bash
schematics --help
```

### Unit Testing

`npm run test` will run the unit tests, using Jasmine as a runner and test framework.

### Publishing

To publish, simply do:

```bash
npm run build
npm publish
```

That's it!

## Links

This example uses the following open source libraries:

* [Schematics](https://www.npmjs.com/package/@angular-devkit/schematics)

## Help

Please post any questions as comments on the [blog post](https://developer.okta.com/blog/2019/02/13/angular-schematics), or visit our [Okta Developer Forums](https://devforum.okta.com/).

## License

Apache 2.0, see [LICENSE](LICENSE).
