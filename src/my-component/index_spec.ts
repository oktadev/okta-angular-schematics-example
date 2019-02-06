import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';
import * as path from 'path';

describe('my-component', () => {

  const collectionPath = path.join(__dirname, '../collection.json');
  const schematicRunner = new SchematicTestRunner(
    'schematics',
    path.join(__dirname, './../collection.json'),
  );

  const workspaceOptions: any = {
    name: 'workspace',
    newProjectRoot: 'projects',
    version: '0.5.0',
  };

  const appOptions: any = {
    name: 'schematest'
  };

  const schemaOptions: any = {
    name: 'foo'
  };

  let appTree: UnitTestTree;

  beforeEach(() => {
    appTree = schematicRunner.runExternalSchematic('@schematics/angular', 'workspace', workspaceOptions);
    appTree = schematicRunner.runExternalSchematic('@schematics/angular', 'application', appOptions, appTree);
  });

  it('works', () => {
    const runner = new SchematicTestRunner('schematics', collectionPath);
    runner.runSchematicAsync('my-component', schemaOptions, appTree).toPromise().then(tree => {
      const appComponent = tree.readContent('/projects/schematest/src/app/app.component.ts');
      expect(appComponent).toContain(`name = '${schemaOptions.name}'`);
    });
  });
});
