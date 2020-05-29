import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../../test/testUtils'
import Congrats from './Congrats'

const defaultProps = { success: false }

const setup = (props={}, state=null) => {
    const setupProps = {...defaultProps, ...props}
    const wrapper = shallow(<Congrats {...setupProps}/>)
    if (state) wrapper.setState(state);
    return wrapper
}

test('renders wihtout error', () => {
    const wrapper = setup({ success: false })
    const appComponent = findByTestAttr(wrapper, 'component-congrats');
    expect(appComponent.length).toBe(1);
});

test('renders no text when `success` prop is false', () => {
    const wrapper = setup({ success: false });
    const component = findByTestAttr(wrapper, 'component-congrats')
    expect(component.text()).toBe('')
});

test('renders non-empty congrats message when `success` prop is true', () => {
    const wrapper = setup({ success: true });
    const message = findByTestAttr(wrapper, 'congrats-message');
    expect(message.text().length).not.toBe(0)
});

test('does not throw warning with expected props', () => {
    const expectedProps = { success: false };
    checkProps(Congrats, expectedProps);
})