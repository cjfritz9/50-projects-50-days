import axios from 'axios';
import * as React from 'react';
import * as Chakra from '@chakra-ui/react';
import './DadJokes.css';
import Title from '../../Title';

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
    <Chakra.Flex className='component-container' bgColor='gray.200'>
      <Title title='Dad Jokes' color='black' font='Mulish' />

      <Chakra.Flex
        alignItems='center'
        flexDir='column'
        className='container-dj'
      >
        {error || joke || <Chakra.Spinner />}
        <Chakra.Button
          _hover={{ opacity: '0.9' }}
          _active={{ bgColor: 'purple.400', transform: 'scale(0.98)' }}
          bgColor='purple.500'
          color='white'
          mt='2rem'
          w='20rem'
          onClick={error ? () => window.location.reload() : () => fetchJoke()}
        >
          {error ? 'Try Again' : 'Next Joke'}
        </Chakra.Button>
      </Chakra.Flex>
    </Chakra.Flex>
  );
};

export default DadJokes;
