import * as React from 'react';
import * as Chakra from '@chakra-ui/react';
import * as RI from 'react-icons/fa';
import * as FM from 'framer-motion';
import Title from '../../Title';

const IncrementalCounter: React.FC = () => {
  const percentageRef = React.useRef(0);
  const followerRef = React.useRef({
    twitter: 0,
    youtube: 0,
    tiktok: 0
  });
  const [twitterFollowers, setTwitterFollowers] = React.useState<any>(0);
  const [youtubeSubscribers, setYoutubeSubscribers] = React.useState<any>(0);
  const [tiktokFollowers, setTiktokFollowers] = React.useState<any>(0);
  const [incrementFinished, setIncrementFinished] = React.useState(false);

  const incrementCounter = () => {
    const _twitterFollowers = 11697;
    const _ytSubscribers = 26372;
    const _tiktokFollowers = 922308;
    const timer = setTimeout(incrementCounter, 1);

    percentageRef.current += 0.25;

    if (percentageRef.current < 100) {
      followerRef.current.twitter = Math.ceil(
        _twitterFollowers / 400 + followerRef.current.twitter
      );
      setTwitterFollowers(followerRef.current.twitter);

      followerRef.current.youtube = Math.ceil(
        _ytSubscribers / 400 + followerRef.current.youtube
      );
      setYoutubeSubscribers(followerRef.current.youtube);

      followerRef.current.tiktok = Math.ceil(
        _tiktokFollowers / 400 + followerRef.current.tiktok
      );
      setTiktokFollowers(followerRef.current.tiktok);
    } else {
      setTwitterFollowers(_twitterFollowers);
      setYoutubeSubscribers(_ytSubscribers);
      setTiktokFollowers(_tiktokFollowers);
      setIncrementFinished(true);
      clearTimeout(timer);
    }
  };

  React.useEffect(() => {
    incrementCounter();
  }, []);

  return (
    <Chakra.Box
      fontFamily='Roboto Mono'
      bgColor='lightgray'
      display='flex'
      flexDir='column'
      alignItems='center'
      minH='92vh'
      w='100vw'
      overflow='hidden'
    >
      <Title title='Social Media Stats' font='Sofia Sans' />
      <Chakra.Flex flexDir={['column', 'column', 'column', 'row']} mt='5rem'>
        <Chakra.Flex
          flexDir='column'
          alignItems='center'
          mx='5.5rem'
          my='2rem'
          px='2rem'
        >
          <Chakra.Icon as={RI.FaTwitter} fontSize='144px' />
          <Chakra.Text fontWeight={incrementFinished ? 'bold' : 'auto'} fontSize='42px' my='1rem'>
            {twitterFollowers.toLocaleString()}
          </Chakra.Text>
          <Chakra.Text textAlign='center'>Twitter Followers</Chakra.Text>
        </Chakra.Flex>
        <Chakra.Flex
          flexDir='column'
          alignItems='center'
          mx='5.5rem'
          my='2rem'
          px='2rem'
        >
          <Chakra.Icon as={RI.FaYoutube} fontSize='144px' />
          <Chakra.Text fontWeight={incrementFinished ? 'bold' : 'auto'} fontSize='42px' my='1rem'>
            {youtubeSubscribers.toLocaleString()}
          </Chakra.Text>
          <Chakra.Text textAlign='center'>Youtube Subscribers</Chakra.Text>
        </Chakra.Flex>
        <Chakra.Flex
          flexDir='column'
          alignItems='center'
          mx='5.5rem'
          my='2rem'
          px='2rem'
        >
          <Chakra.Icon as={RI.FaTiktok} fontSize='144px' />
          <Chakra.Text fontWeight={incrementFinished ? 'bold' : 'auto'} fontSize='42px' my='1rem'>
            {tiktokFollowers.toLocaleString()}
          </Chakra.Text>
          <Chakra.Text textAlign='center'>Tiktok Followers</Chakra.Text>
        </Chakra.Flex>
      </Chakra.Flex>
    </Chakra.Box>
  );
};

export default IncrementalCounter;
