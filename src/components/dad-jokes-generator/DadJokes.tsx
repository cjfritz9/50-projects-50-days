import axios from 'axios';
import * as React from 'react';

const DadJokes: React.FC = () => {
  const [joke, setJoke] = React.useState<any>();

  React.useEffect(() => {
    const fetchJoke = async () => {
      try {
        const result = await axios.get('https://icanhazdadjoke.com/', {
          headers: {
            accept: 'application/json'
          }
        });
        return setJoke(result.data);
      } catch (error) {
        console.log(error);
      }
      return;
    };
    fetchJoke();
  }, []);

  return (
    <div className='component-container'>
      <h1 id='project-title'>Dad Jokes</h1>
      <div className='container-dj'>
        <div id='joke' className='joke'>
          {joke && joke.joke ? joke.joke : null}
        </div>
        <button id='joke-btn' className='btn-dj'>
          Next Joke
        </button>
      </div>
    </div>
  );
};

export default DadJokes;
