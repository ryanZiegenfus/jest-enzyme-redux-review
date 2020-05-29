import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../test/testUtils'
import Jotto from './Jotto';

const setup = (props={}, state=null) => {
    const wrapper = shallow(<Jotto {...props}/>)
    if (state) wrapper.setState(state);
    return wrapper
}

test('renders wihtout error', () => {
    const wrapper = setup()
    const appComponent = findByTestAttr(wrapper, 'component-jotto');
    expect(appComponent.length).toBe(1);
});

