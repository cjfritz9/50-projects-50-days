import * as React from 'react';
import * as Chakra from '@chakra-ui/react';
import { randomThemeSelector } from '../../../utils/helpers';
import Title from '../../Title';

const OptionPicker: React.FC = () => {
  const [newTag, setNewTag] = React.useState<HTMLSpanElement | null>(null);
  const firstInputRef = React.useRef(true);
  const tagRef = React.useRef<HTMLSpanElement>();

  const randomSelect = () => {
    const iterations = 30;
    if (!selectRandomTag()) return;

    const interval = setInterval(() => {
      const randomTag = selectRandomTag();
      //@ts-ignore
      highlightTag(randomTag);

      setTimeout(() => {
        //@ts-ignore
        unhighlightTag(randomTag);
      }, 100);
    }, 150);

    setTimeout(() => {
      clearInterval(interval);
      const textArea = document.getElementById(
        'text-area'
      )! as HTMLTextAreaElement;
      textArea.value = '';
      textArea.focus();

      setTimeout(() => {
        let finalChoice = selectRandomTag();
        const tagContainer = document.getElementById(
          'tag-container'
        )! as HTMLDivElement;
        Array.from(
          tagContainer.children as HTMLCollectionOf<HTMLSpanElement>
        ).forEach((tag) => {
          console.log(tag.innerHTML);
          // @ts-ignore
          if (tag.innerHTML != finalChoice.innerHTML) {
            tag.style.opacity = '0%';
            tag.style.transition = 'opacity 0.4s';
          }
        });
        //@ts-ignore
        highlightTag(finalChoice);
        document.getElementById('restart-btn')!.style.display = 'block';
      }, 150);
    }, iterations * 100);
  };

  const selectRandomTag = () => {
    const tags = document.getElementById('tag-container')!
      .children as HTMLCollectionOf<HTMLSpanElement>;

    return tags[Math.floor(Math.random() * tags.length)];
  };

  const highlightTag = (tag: HTMLSpanElement) => {
    tag.style.backgroundColor = tag.style.color;
    tag.style.color = 'white';
  };

  const unhighlightTag = (tag: HTMLSpanElement) => {
    const originalColor = tag.style.backgroundColor;
    tag.style.backgroundColor = 'transparent';
    tag.style.color = originalColor;
  };

  const createTags = (textInput: string) => {
    const tagContainer = document.getElementById(
      'tag-container'
    )! as HTMLDivElement;
    if (!tagRef.current) {
      tagRef.current = tagContainer.firstChild as HTMLSpanElement;
    }
    const tagNode = tagRef.current;
    const textArea = document.getElementById(
      'text-area'
    )! as HTMLTextAreaElement;
    if (textInput.slice(-1) === ',') {
      if (textInput.length - 1 <= 0) return;
      const randomTheme = randomThemeSelector();
      const tagCopy = tagNode.cloneNode() as HTMLSpanElement;
      tagCopy.innerText = textInput.slice(0, textInput.length - 1);
      tagCopy.style.color = randomTheme;
      tagCopy.style.boxShadow = `inset 0 0 0px 1px ${randomTheme}`;
      setNewTag(tagCopy);
      textArea.value = '';
    }
  };

  const handleSubmit = (key: string) => {
    if (key === 'Enter') {
      const textArea = document.getElementById(
        'text-area'
      )! as HTMLTextAreaElement;

      if (textArea.value.length) {
        createTags(textArea.value + ',');
      }
      // let originalTags = 0;
      // const tags = document.getElementById('tag-container')!
      //   .children as HTMLCollectionOf<HTMLSpanElement>;
      // Array.from(tags).forEach((tag) => {
      //   console.log(tag.innerHTML, originalTags);
      //   if (
      //     (tags.length === 3 && tag.textContent === 'Options') ||
      //     'Appear' ||
      //     'Here'
      //   ) {
      //     originalTags++;
      //   }
      //   if (tag.innerHTML === 'Invalid Choices') {
      //     tag.remove();
      //   }
      // });
      // console.log(tags.length);

      // if (tags.length <= 1 || originalTags === 3) {
      //   document.getElementById('tag-container')!.replaceChildren(tags[0]);
      //   const textArea = document.getElementById(
      //     'text-area'
      //   )! as HTMLTextAreaElement;
      //   textArea.disabled = false;
      //   tags[0].innerHTML = 'Invalid Choices';
      //   tags[0].style.boxShadow = 'inset 0 0 0px 1px red';
      //   tags[0].style.color = 'red';
      //   return;
      // }
      setTimeout(() => {
        textArea.disabled = true;
        randomSelect();
      }, 10);
    }
  };

  const restart = () => {
    document.getElementById('tag-container')!.replaceChildren();
    document.getElementById('restart-btn')!.style.display = 'none';
    const textArea = document.getElementById(
      'text-area'
    )! as HTMLTextAreaElement;
    firstInputRef.current = true;
    setNewTag(null);
    textArea.disabled = false;
    textArea.focus();
  };

  React.useEffect(() => {
    document.getElementById('text-area')?.focus();
    if (newTag) {
      if (firstInputRef.current) {
        document.getElementById('tag-container')!.replaceChildren();
        firstInputRef.current = false;
      }
      document.getElementById('tag-container')?.appendChild(newTag!);
      setNewTag(null);
    }
  }, [newTag]);

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
      <Title title='Random Option Picker' color='black' font='Mulish' />
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
          mt='1rem'
          placeholder='Seperate, options, with, commas'
          onKeyDown={(e: React.KeyboardEvent) => handleSubmit(e.code)}
          onChange={(e: React.BaseSyntheticEvent) => createTags(e.target.value)}
        />
        <Chakra.Input display='none' type='submit' />
        <small style={{ alignSelf: 'flex-end' }}>
          press enter to start selection
        </small>
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
        <Chakra.Button
          id='restart-btn'
          colorScheme='green'
          mt='1rem'
          display='none'
          onClick={() => restart()}
        >
          Restart
        </Chakra.Button>
      </Chakra.Box>
    </Chakra.Box>
  );
};

export default OptionPicker;
