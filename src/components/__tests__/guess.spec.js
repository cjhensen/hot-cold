import React from 'react';
import {shallow, mount} from 'enzyme';

import Guess from '../guess';

describe('<Guess />', () => {
  it('Renders without crashing', () => {
    shallow(<Guess />);
  });

  it('Renders the guess container initially', () => {
    const wrapper = shallow(<Guess />);
    expect(wrapper.hasClass('guess-container')).toEqual(true);
  });

  it('should fire the onSubmit callback when the form is submitted', () => {
    const callback = jest.fn();
    const wrapper = mount(<Guess onSubmit={callback} />);
    const value = 12;
    wrapper.find('input[type="number"]').instance().value = value;
    wrapper.find('form').simulate('submit');
    expect(callback).toHaveBeenCalledWith(value);
  });

  it('should not fire the onSubmit callback when the form is submitted', () => {
    const callback = jest.fn();
    const wrapper = mount(<Guess onSubmit={callback} />);
    wrapper.find('form').simulate('submit');
    expect(callback).not.toHaveBeenCalled();
  });
});