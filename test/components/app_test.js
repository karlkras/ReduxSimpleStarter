import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

// Use 'describe' to group together similar tests.
describe('App Component', () => {

  // use 'it' to test a single attribute of a target.
  it('it shows the correct text', () => {


      const component = renderComponent(App);

      // Use 'expect' to make an assertion about a target.
      expect(component).to.contain('React simple starter');

  });



});
