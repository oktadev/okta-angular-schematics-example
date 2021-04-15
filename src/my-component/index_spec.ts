import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';
import * as path from 'path';

describe('my-component', () => {
  const schematicRunner = new SchematicTestRunner(
    'schematics',
    path.join(__dirname, './../collection.json'),
  );

  const workspaceOptions: any = { // <1>
    name: 'workspace',
    newProjectRoot: 'projects',
    version: '0.5.0',
  };

  const appOptions: any = { // <2>
    name: 'schematest'
  };

  const schemaOptions: any = { // <3>
    name: 'foo'
  };

  let appTree: UnitTestTree;

  beforeEach(async () => { // <4>
    appTree = await schematicRunner.runExternalSchematicAsync('@schematics/angular', 'workspace', workspaceOptions).toPromise();
    appTree = await schematicRunner.runExternalSchematicAsync('@schematics/angular', 'application', appOptions, appTree).toPromise();
  });

  it('works', (done) => {
    schematicRunner.runSchematicAsync('my-component', schemaOptions, appTree).toPromise().then(tree => {
      const appComponent = tree.readContent('/projects/schematest/src/app/app.component.ts'); // <5>
      expect(appComponent).toContain(`name = '${schemaOptions.name}'`); // <6>
      done();
    }, done.fail);
  });
});