import React from 'react';
import {shallow, mount} from 'enzyme';

import Feedback from '../feedback';

describe('<Feedback />', () => {

  const answerNum = 20;
  const currentGuess = 2;


  it('Renders without crashing', () => {
    shallow(<Feedback answerNum={answerNum} currentGuess={currentGuess} />);
  });

  it('Renders the feedback container initially', () => {
    const wrapper = shallow(<Feedback answerNum={answerNum} currentGuess={currentGuess} />);
    expect(wrapper.hasClass('feedback-container')).toEqual(true);
  });

  it('should display default feedback message', () => {
    const wrapper = shallow(<Feedback answerNum={answerNum} />);
    expect(wrapper.find('.feedback-text').text()).toEqual('Make your guess!');
  });

  it('should display "Cold" if currentGuess is within upper cold range', () => {
    const wrapper = shallow(<Feedback answerNum={answerNum} currentGuess={40} />);
    expect(wrapper.find('.feedback-text').text()).toEqual('Cold');
  });

  it('should display "Cold" if currentGuess is within lower cold range', () => {
    const wrapper = shallow(<Feedback answerNum={answerNum} currentGuess={1} />);
    expect(wrapper.find('.feedback-text').text()).toEqual('Cold');
  });

  it('should display "Hot" if currentGuess is within upper hot range', () => {
    const wrapper = shallow(<Feedback answerNum={answerNum} currentGuess={34} />);
    expect(wrapper.find('.feedback-text').text()).toEqual('Hot');
  });

  it('should display "Hot" if currentGuess is within lower hot range', () => {
    const wrapper = shallow(<Feedback answerNum={answerNum} currentGuess={6} />);
    expect(wrapper.find('.feedback-text').text()).toEqual('Hot');
  });
});