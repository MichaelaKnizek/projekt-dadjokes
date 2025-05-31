import { useState } from 'react';
import './style.css';
import { Joke } from '../Joke/Joke';

export const HomePage = () => {
  return (
    <>
      <div className="container">
        <Joke />
      </div>
    </>
  );
};
