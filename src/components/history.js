import React from 'react';

export default function History(props) {

  const guessedNums = props.guessedNums.map((num, index) =>
    <li key={index} className="history-element">{num}</li>
  );

  return(
    <div className="history-container">
      <ul>
        {guessedNums}
      </ul>
    </div>
  );
}