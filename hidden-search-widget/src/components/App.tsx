import React from 'react';
import * as Router from 'react-router-dom';
import Search from './Search';

const App: React.FC = () => {
  return (
    <div className='App'>
      <Router.Routes>
        <Router.Route path='/' element={<Search />} />
      </Router.Routes>
    </div>
  );
};

export default App;
