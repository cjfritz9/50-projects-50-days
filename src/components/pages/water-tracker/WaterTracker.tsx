import * as React from 'react';
import * as Chakra from '@chakra-ui/react';
import { FMC_Component } from '../../../utils/animations';
import { IoWaterOutline } from 'react-icons/io5';
import Title from '../../Title';

const WaterTracker: React.FC = () => {
  const prevCountRef = React.useRef(0);
  const [fillPercent, setFillPercent] = React.useState(0);

  const toggleWater = (dropIdx: number) => {
    if (prevCountRef.current === dropIdx + 1) {
      dropIdx--;
    }
    const fillPercentage = ((dropIdx + 1) / 8) * 100;
    setFillPercent(fillPercentage);

    const waterDrops = Array.from(
      document.getElementsByClassName('water-drop')
    );

    prevCountRef.current = 0;
    waterDrops.forEach((drop: any, i) => {
      if (i <= dropIdx) {
        prevCountRef.current++;
        drop.style.fill = 'skyblue';
        drop.firstChild.style.fill = 'skyblue';
      } else {
        drop.style.fill = 'white';
        drop.firstChild.style.fill = 'white';
      }
    });
  };

  React.useEffect(() => {
    const waterDrops = document.getElementsByClassName('water-drop');
    if (waterDrops) {
      Array.from(waterDrops).forEach((waterDrop) => {
        if (waterDrop.firstChild) {
          //@ts-ignore
          waterDrop.firstChild.style.fill = 'white';
          // waterDrop.childNodes.forEach((node) => {
          //   //@ts-ignore
          //   node.setAttribute('id', waterDrop.id.toString());
          // });
        }
      });
    }
  }, []);

  return (
    <Chakra.Box
      fontFamily='Roboto Mono'
      bgColor='lightblue'
      display='flex'
      flexDir='column'
      alignItems='center'
      minH='92vh'
      w='100vw'
      overflow='hidden'
    >
      <Title title='Water Tracker' color='white' shadow='1px 1px 3px gray' />
      <Chakra.Box pos='relative' mb='2rem'>
        <Chakra.Text fontWeight='bold' fontSize='30px' textAlign='center'>
          {fillPercent + '%'}
        </Chakra.Text>
        <Chakra.Box
          bgColor='white'
          border='10px solid #1A202C'
          color='#1A202C'
          borderRadius='0 0 40px 40px'
          h={['16rem', '20rem']}
          w={['8rem', '10rem']}
        >
          <Chakra.Flex
            as={FMC_Component}
            animate={
              fillPercent < 100
                ? {
                    height: ['0%', '0%', 100 - fillPercent + '%']
                  }
                : {
                    height: [
                      100 - fillPercent + '%',
                      100 - fillPercent * 0.995 + '%',
                      100 - fillPercent + '%'
                    ]
                  }
            }
            //@ts-ignore
            transition={{
              duration: 2,
              ease: 'linear'
            }}
            display='flex'
            alignItems='flex-start'
            justifyContent='center'
            fontWeight='bold'
            fontSize='30px'
          ></Chakra.Flex>
          <Chakra.Box
            as={FMC_Component}
            animate={{
              height: ['0%', fillPercent * 0.75 + '%', fillPercent + '%']
            }}
            //@ts-ignore
            transition={{
              duration: 2,
              ease: 'linear'
            }}
            transform='rotate(0.5turn)'
            bgColor='skyblue'
            borderRadius='30px 30px 0 0'
            h={fillPercent + '%'}
          ></Chakra.Box>
        </Chakra.Box>
      </Chakra.Box>
      <Chakra.SimpleGrid columns={[4, 4, 4, 8]}>
        <Chakra.Icon
          id='0'
          cursor='pointer'
          className='water-drop'
          fontSize={['96px', '96px', '144px']}
          as={IoWaterOutline}
          onClick={() => toggleWater(0)}
        />
        <Chakra.Icon
          id='1'
          cursor='pointer'
          className='water-drop'
          fontSize={['96px', '96px', '144px']}
          as={IoWaterOutline}
          onClick={() => toggleWater(1)}
        />
        <Chakra.Icon
          id='2'
          cursor='pointer'
          className='water-drop'
          fontSize={['96px', '96px', '144px']}
          as={IoWaterOutline}
          onClick={() => toggleWater(2)}
        />
        <Chakra.Icon
          id='3'
          cursor='pointer'
          className='water-drop'
          fontSize={['96px', '96px', '144px']}
          as={IoWaterOutline}
          onClick={() => toggleWater(3)}
        />
        <Chakra.Icon
          id='4'
          cursor='pointer'
          className='water-drop'
          fontSize={['96px', '96px', '144px']}
          as={IoWaterOutline}
          onClick={() => toggleWater(4)}
        />
        <Chakra.Icon
          id='5'
          cursor='pointer'
          className='water-drop'
          fontSize={['96px', '96px', '144px']}
          as={IoWaterOutline}
          onClick={() => toggleWater(5)}
        />
        <Chakra.Icon
          id='6'
          cursor='pointer'
          className='water-drop'
          fontSize={['96px', '96px', '144px']}
          as={IoWaterOutline}
          onClick={() => toggleWater(6)}
        />
        <Chakra.Icon
          id='7'
          cursor='pointer'
          className='water-drop'
          fontSize={['96px', '96px', '144px']}
          as={IoWaterOutline}
          onClick={() => toggleWater(7)}
        />
      </Chakra.SimpleGrid>
    </Chakra.Box>
  );
};

export default WaterTracker;
