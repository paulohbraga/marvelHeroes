import React from 'react';
import App from './App';
import {ApplicationProvider} from './context/ApplicationContext';

const ContextWrapper = () => {
  return (
    <ApplicationProvider>
      <App />
    </ApplicationProvider>
  );
};

export default ContextWrapper;
