import { useEffect, useState } from 'react';
import './style.css';
import { Joke } from '../Joke/Joke';

export const HomePage = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('http://localhost:4000/api/jokes');
      const jsonData = await response.json();

      // console.log(jsonData.data);

      setJokes(jsonData.data);
    };
    getData();
  }, []);

  return (
    <>
      <div className="container">
        {jokes.map((joke) => {
          return (
            <Joke
              key={joke.id}
              userAvatar={joke.avatar}
              username={joke.name}
              text={joke.text}
              likes={joke.likes}
              dislikes={joke.dislikes}
            />
          );
        })}
      </div>
    </>
  );
};
