import React from 'react';
import * as Router from 'react-router-dom';
import Container from './Container';
import Nav from './Nav';

const App: React.FC = () => {
  return (
    <div className='App'>
      <Router.Routes>
        <Router.Route path='/' element={<Container />} />
      </Router.Routes>
      <Nav />
    </div>
  );
};

export default App;
