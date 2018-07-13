import { shallow } from 'enzyme';
import * as React from 'react';

import { HelloWorld } from './HelloWorld';

it('Renders our hello world', () => {
    const result = shallow(<HelloWorld />).contains(<div>Hello World</div>);
    expect(result).toBeTruthy();
})