import React from 'react';

const StatusMessage = ({ winner, current }) => {
  // const message = winner
  // ? `WINNER IS ${winner}`
  // : `NEXT PLAYER IS ${current.isXNext ? 'X' : 'O'}`;

  const noMovesLeft = current.board.every(el => el !== null);

  return (
    <h2>
      {winner && `WINNER IS ${winner}`}
      {!winner &&
        !noMovesLeft &&
        `NEXT PLAYER IS ${current.isXNext ? 'X' : 'O'}`}
      {!winner && noMovesLeft && 'X and O tied'}
    </h2>
  );
};

export default StatusMessage;
