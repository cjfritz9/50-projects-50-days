import * as React from 'react';
import * as Chakra from '@chakra-ui/react';
import * as RI from 'react-icons/bs';

const OptionPicker: React.FC = () => {
  const [userInput, setUserInput] = React.useState<string>('');

  const submitHandler = () => {
    const textArea = document.getElementById(
      'text-area'
    )! as HTMLTextAreaElement;

    const tagContainer = document.getElementById(
      'tag-container'
    )! as HTMLDivElement;
    const tagEle = tagContainer.firstChild!;
    const tagCopy = tagEle! as HTMLSpanElement;
    const colorSchemes = ['black', 'orange', 'pink', 'red'];
    tagCopy.style.color = `${
      colorSchemes[Math.floor(Math.random() * colorSchemes.length)]
    }`;
    tagCopy.style.boxShadow = `inset 0 0 0px 1 px ${
      colorSchemes[Math.floor(Math.random() * colorSchemes.length)]
    }`;
    tagContainer.replaceChildren(tagCopy);
    console.log(tagEle);
  };

  React.useEffect(() => {
    document.getElementById('text-area')?.focus();
  }, []);

  return (
    <Chakra.Box
      minW='100vw'
      minH='100vh'
      bgColor='white'
      display='flex'
      flexDir='column'
      alignItems='center'
      fontFamily='Poppins'
    >
      <Chakra.Heading
        mt='3rem'
        mb='6rem'
        fontFamily='inherit'
        textAlign='center'
      >
        Random Option Picker
      </Chakra.Heading>
      <Chakra.Box
        display='flex'
        flexDir='column'
        alignItems='center'
        w={['80%', '60%', '40%']}
      >
        <Chakra.Heading
          as='h3'
          fontFamily='inherit'
          size='md'
          textAlign='center'
          alignSelf='flex-start'
        >
          Input Your Options
        </Chakra.Heading>
        <Chakra.Textarea
          id='text-area'
          // onChange={(e: React.ChangeEvent) => setUserInput(e.)}
          mt='1rem'
          placeholder='Seperate, options, with, commas'
        />
        <small style={{ alignSelf: 'flex-end' }}>press enter to submit</small>
        <Chakra.Flex id='tag-container' flexWrap='wrap'>
          <Chakra.Badge
            variant='outline'
            colorScheme='orange'
            m='0.5rem'
            py='0.2rem'
            px='0.6rem'
          >
            Options
          </Chakra.Badge>
          <Chakra.Badge
            variant='outline'
            colorScheme='purple'
            m='0.5rem'
            py='0.2rem'
            px='0.6rem'
          >
            Appear
          </Chakra.Badge>
          <Chakra.Badge
            variant='outline'
            colorScheme='messenger'
            m='0.5rem'
            py='0.2rem'
            px='0.6rem'
          >
            Here
          </Chakra.Badge>
        </Chakra.Flex>
        <Chakra.Button onClick={() => submitHandler()}>Helper</Chakra.Button>
      </Chakra.Box>
    </Chakra.Box>
  );
};

export default OptionPicker;
