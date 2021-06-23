import React from 'react';

const StatusMessage = ({ winner, current }) => {
  // const message = winner
  // ? `WINNER IS ${winner}`
  // : `NEXT PLAYER IS ${current.isXNext ? 'X' : 'O'}`;

  const noMovesLeft = current.board.every(el => el !== null);

  return (
    <div className="status-message">
      {winner && (
        <>
          winner is{' '}
          <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
            {winner}
          </span>
        </>
      )}
      {!winner && !noMovesLeft && (
        <>
          NEXT PLAYER IS{' '}
          <span className={current.isXNext ? 'text-green' : 'text-orange'}>
            {current.isXNext ? 'X' : 'O'}
          </span>
        </>
      )}
      {!winner && noMovesLeft && (
        <>
          <span className="text-green">X</span>and
          <span className="text-orange">O</span>tied
        </>
      )}
    </div>
  );
};

export default StatusMessage;
