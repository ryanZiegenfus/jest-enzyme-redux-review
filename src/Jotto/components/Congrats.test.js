import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import { findByTestAttr } from '../../test/testUtils'
import Congrats from './Congrats'

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props={}, state=null) => {
    const wrapper = shallow(<Congrats {...props}/>)
    if (state) wrapper.setState(state);
    return wrapper
}

test('renders wihtout error', () => {
    const wrapper = setup()
    const appComponent = findByTestAttr(wrapper, 'component-congrats');
    expect(appComponent.length).toBe(1);
});

test('renders no text when `success` prop is false', () => {
    const wrapper = setup({ success: false });
    const component = findByTestAttr(wrapper, 'component-congrats')
    expect(component.text()).toBe('')
});

test('renders non-empty congrats message when `success` prop is true', () => {
    const wrapper = setup({ setup: true });
    const message = findByTestAttr(wrapper, 'congrats-message');
    expect(message.text().length).not.toBe(0)
});