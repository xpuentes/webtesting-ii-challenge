import React from 'react';

const Dashboard = props => {
  return (
    <div>
      <button onClick={props.strikeCount}>Strike</button> &nbsp; | &nbsp;
      <button onClick={props.ballCount}>Ball</button> &nbsp; | &nbsp;
      <button onClick={props.foulCount}>Foul</button> &nbsp; | &nbsp;
      <button onClick={props.hitCount}>Hit</button>
    </div>
  );
}

export default Dashboard;
