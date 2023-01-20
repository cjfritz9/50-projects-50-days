import React from 'react';
import * as Router from 'react-router-dom';
import Steps from './components/Steps';

const App: React.FC = () => {
  return (
    <div className='App'>
      <Router.Routes>
        <Router.Route path='/' element={<Steps />} />
      </Router.Routes>
    </div>
  );
};

export default App;
