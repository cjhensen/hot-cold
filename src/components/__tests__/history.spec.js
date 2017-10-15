import React from 'react';
import {shallow, mount} from 'enzyme';

import History from '../history';

describe('<History />', () => {
  const guessedNums = [1,2,3,4,5];

  it('Renders without crashing', () => {
    shallow(<History guessedNums={guessedNums} />);
  });

  it('Renders the history container initially', () => {
    const wrapper = shallow(<History guessedNums={guessedNums} />);
    expect(wrapper.hasClass('history-container')).toEqual(true);
  });

  it('should display a list element for each guessedNum', () => {
    const wrapper = shallow(<History guessedNums={guessedNums} />);
    expect(wrapper.find('.history-element').length).toBe(5);
  });
});