import React from 'react';
import * as Router from 'react-router-dom';
import Card from './components/Card';
import { Cards } from './models/Cards';

const App: React.FC = () => {
  return (
    <div className='App'>
      <Router.Routes>
        <Router.Route
          path='/'
          element={
            <div className='container'>
              {Cards.map((card) => {
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
          }
        />
      </Router.Routes>
    </div>
  );
};

export default App;
