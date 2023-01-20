import axios from 'axios';
import * as React from 'react';
// import * as Router from 'react-router-dom';

interface API_Response {
  data: {
    id: string;
    joke: string;
    status: number;
  };
}

const App: React.FC = () => {
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
    <div className='App'>
      <div id='joke'>{joke && joke.joke ? joke.joke : null}</div>
    </div>
  );
};

export default App;
