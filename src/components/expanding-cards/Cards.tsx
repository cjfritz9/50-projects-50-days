import React from 'react';
import * as Router from 'react-router-dom';
import Card from './Card';
import { CardList } from './models/CardList';
import './Cards.css';

const Cards: React.FC = () => {
  return (
    <div className='component-container'>
      <h1 id='project-title'>Expanding Cards</h1>
      <div className='container-ec'>
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
      </div>
    </div>
  );
};

export default Cards;
