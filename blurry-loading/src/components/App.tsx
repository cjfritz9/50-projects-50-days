import React from 'react';
import * as Router from 'react-router-dom';
import Background from './Background';
import LoadingText from './LoadingText';

const App: React.FC = () => {
  return (
    <div className='App'>
      <Router.Routes>
        <Router.Route path='/' element={<Background />} />
      </Router.Routes>
    </div>
  );
};

export default App;
