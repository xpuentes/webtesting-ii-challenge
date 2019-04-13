import React from 'react';

const Display = props => {

  return (
    <div>
      <span>Balls: {props.balls}</span> &nbsp; | &nbsp;
      <span>Strikes: {props.strikes}</span>
    </div>
  );
}

export default Display;
