import React from 'react';
import {shallow, mount} from 'enzyme';

// import unconnected component
import {HotCold} from '../hot-cold';
import {updateGuessedNums, updateGuessCounter, resetGame} from '../../actions';



describe('<HotCold />', () => {

  // beforeAll(() => {
  //   const hcStateProps = {
  //     guessedNums: [2,4,6],
  //     answerNum: 40,
  //     guessCounter: 3
  //   };

  // });

  it('Renders without crashing', () => {
    const dispatch = jest.fn();
    shallow(<HotCold answerNum={20} guessedNums={[]} guessCounter={0} dispatch={dispatch}/>);
  });

  it('renders the app', () => {
    const dispatch = jest.fn();
    const wrapper = shallow(<HotCold answerNum={20} guessedNums={[]} guessCounter={0} dispatch={dispatch}/>);
    expect(wrapper.hasClass('app')).toEqual(true);
  });

  it('dispatches updateGuessedNums from handleFormSubmit', () => {
    const dispatch = jest.fn();
    const wrapper = shallow(<HotCold answerNum={20} guessedNums={[]} guessCounter={0} dispatch={dispatch}/>);
    // ignore any previous calls to dispatch
    dispatch.mockClear();
    const num = 10;
    const instance = wrapper.instance();
    instance.handleFormSubmit(num);
    expect(dispatch).toHaveBeenCalledWith(updateGuessedNums(num));
  });

  it('dispatches updateGuessCounter from handleFormSubmit', () => {
    const dispatch = jest.fn();
    const wrapper = shallow(<HotCold answerNum={20} guessedNums={[]} guessCounter={0} dispatch={dispatch}/>);
    // ignore any previous calls to dispatch
    dispatch.mockClear();
    const num = 10;
    const instance = wrapper.instance();
    instance.handleFormSubmit(num);
    expect(dispatch).toHaveBeenCalledWith(updateGuessCounter(num));
  });

  it('dispatches resetGame from resetGame', () => {
    const dispatch = jest.fn();
    const wrapper = shallow(<HotCold answerNum={20} guessedNums={[]} guessCounter={0} dispatch={dispatch}/>);
    // ignore any previous calls to dispatch
    dispatch.mockClear();
    const instance = wrapper.instance();
    instance.resetGame();
    expect(dispatch).toHaveBeenCalledWith(resetGame());
  });

});