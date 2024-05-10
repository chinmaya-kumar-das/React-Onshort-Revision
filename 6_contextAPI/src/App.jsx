import React, { useContext } from 'react';
import { AppContext } from './contexts/MyContext';

const App = () => {
  const { celebrity } = useContext(AppContext);

  return (
    <div>
      <h1>Celebrities</h1>
      <ul>
        {celebrity.map((celeb, index) => (
          <li key={index}>{celeb.name}{celeb.age}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
