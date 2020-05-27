import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import { findByTestAttr } from '../test/testUtils'
import Jotto from './Jotto';

Enzyme.configure({adapter: new EnzymeAdapter()});

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
