import React from 'react';

export default class Guess extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.numInput.focus();
  }

  // onSubmit:
  // send form input num to props
  // update guess counter
  onSubmit(e) {
    e.preventDefault();
    console.log('onSubmit guess');

    // send input num to props.onSubmit to update guessedNums array
    if(this.props.onSubmit) {
      // must convert to int and pass radix in (10)
      this.props.onSubmit(parseInt(this.numInput.value, 10));
      
      // reset input value
      this.numInput.value = "";
      // focus on input
      this.numInput.focus();
    }
  }



  render() {

    
    return (

      <div className="guess-container">
        <form onSubmit={e => this.onSubmit(e)}>
          <label htmlFor="guess">Guess</label>
          <input
            type="number"
            id="guess"
            name="guess"
            placeholder="Enter your Guess"
            ref={input => this.numInput = input}
          />
          <button type="submit">Guess</button>
        </form>
        <div className="guess-current_guess">Guess #{this.props.guessCounter}</div>
      </div>
    );
  

  }
}