import React from 'react';
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import renderer from 'react-test-renderer';

import Button from '../index';

/* global test:true expect:true */
test('Button renders correctly', () => {
  const component = renderer.create(
    <Button>React simple starter kit</Button>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
