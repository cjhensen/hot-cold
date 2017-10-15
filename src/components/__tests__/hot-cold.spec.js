import React from 'react';
import {shallow, mount} from 'enzyme';

import HotCold from '../hot-cold';



describe('<HotCold />', () => {
  it('Renders without crashing', () => {
    shallow(<HotCold />);
  });

  it('renders the app', () => {
    const wrapper = shallow(<HotCold />);
    expect(wrapper.hasClass('app')).toEqual(true);
  });

  it('can add numbers to the guessedNums array in the state', () => {
    const wrapper = shallow(<HotCold />);
    const instance = wrapper.instance();
    instance.updateGuessedNums(2);
    expect(wrapper.state('guessedNums').length).toEqual(1);
  });

  it('can update the guessCounter value in the state', () => {
    const wrapper = shallow(<HotCold />);
    const instance = wrapper.instance();
    instance.updateGuessCounter();
    instance.updateGuessCounter();
    instance.updateGuessCounter();
    expect(wrapper.state('guessCounter')).toEqual(3);
  });

  it('can reset the state on button click', () => {
    const wrapper = shallow(<HotCold />);
    const instance = wrapper.instance();
    const initialAnswerNum = wrapper.state('answerNum');
    instance.updateGuessedNums(2);
    instance.updateGuessedNums(4);
    instance.updateGuessedNums(6);
    instance.updateGuessCounter();
    instance.updateGuessCounter();
    instance.updateGuessCounter();

    wrapper.find('.newGame').simulate('click');
    expect(wrapper.state('guessCounter')).toEqual(0);
    expect(wrapper.state('guessedNums').length).toEqual(0);
    expect(wrapper.state('answerNum')).not.toEqual(initialAnswerNum);
  });
});