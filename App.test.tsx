import React from 'react';
import renderer from 'react-test-renderer';

import App from './App';
jest.mock('./hooks/useCachedResources', () => jest.fn(() => true))
// jest.mock('./hooks/useColorScheme', () => jest.fn(() => "light"))

describe('<App />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<App />).toJSON() as renderer.ReactTestRendererJSON[];
    console.log(tree)
    expect(tree[0].children?.length).toBe(1);
    expect(tree[1].children).toBe(null);
    expect(tree).toMatchSnapshot();
  });
});