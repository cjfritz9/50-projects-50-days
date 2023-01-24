import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './components/App';

import { ChakraProvider } from '@chakra-ui/react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Router>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </Router>
);
