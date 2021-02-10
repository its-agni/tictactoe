import React from 'react'

export const StatusMessage = ({winner, current}) => {
  // const message = winner 
  // ? `Winner is ${winner}`
  // : `Next player is ${current.isXNext ? "X": "O"}`;
  const noMovesLeft = current.board.every((el)=> el !== null);
  return (
    <h2>{ winner && `Winner is ${winner}`}
    {!winner && `Next player is ${current.isXNext ? "X": "O"}`}
    {!winner && noMovesLeft && 'X and O tied'}</h2>
  );
}
