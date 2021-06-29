import React, {useState} from 'react';

const ApplicationContext = React.createContext();

export const ApplicationProvider = ({children}) => {
  const [state, setState] = useState('');

  return (
    <ApplicationContext.Provider
      value={{
        state,
      }}>
      {children}
    </ApplicationContext.Provider>
  );
};

export default ApplicationContext;
