import axios from 'axios';
import * as React from 'react';
import './DadJokes.css';

const DadJokes: React.FC = () => {
  const [joke, setJoke] = React.useState<any>();
  const [error, setError] = React.useState<string>();

  const fetchJoke = async () => {
    const fetchConfig = {
      headers: {
        Accept: 'application/json'
      }
    };
    try {
      await axios
        .get('https://icanhazdadjoke.com/', fetchConfig)
        .then((res) => {
          return setJoke(res.data.joke);
        })
        .catch((err) => {
          console.error(err);
          return setError('Server Error, Try again later');
        });
    } catch (error) {
      console.error(error);
    }
    return;
  };

  React.useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className='component-container'>
      <h1 id='project-title'>Dad Jokes</h1>
      <div className='container-dj'>
        {error ? (
          <div className='joke'>{error}</div>
        ) : (
          <div id='joke' className='joke'>
            {joke ? joke : null}
          </div>
        )}
        {error ? (
          <button className='btn-dj' onClick={() => window.location.reload()}>Try Again</button>
        ) : (
          <button
            onClick={async () => await fetchJoke()}
            id='joke-btn'
            className='btn-dj'
          >
            Next Joke
          </button>
        )}
      </div>
    </div>
  );
};

export default DadJokes;
