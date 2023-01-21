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
      <div id='joke'>{joke && joke.joke ? joke.joke : null}</div>
    </div>
  );
};

export default DadJokes;
