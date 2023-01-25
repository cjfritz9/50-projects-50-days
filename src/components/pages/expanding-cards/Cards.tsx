import * as React from 'react';
import * as Chakra from '@chakra-ui/react';
import * as Router from 'react-router-dom';
import Title from '../../Title';
import Card from './Card';
import { CardList } from './models/CardList';
import './Cards.css';

const Cards: React.FC = () => {
  return (
    <Chakra.Flex className='component-container'>
      <Title
        title='Expanding Cards'
        color='black'
        font='Unbounded'
      />
      <Chakra.Flex flexDir={['column', 'row']} className='container-ec'>
        {CardList.map((card) => {
          return (
            <Card
              key={card.id}
              title={card.title}
              url={card.url}
              active={card.active}
            />
          );
        })}
      </Chakra.Flex>
    </Chakra.Flex>
  );
};

export default Cards;
