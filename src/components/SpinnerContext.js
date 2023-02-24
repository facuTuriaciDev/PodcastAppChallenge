import React from 'react';

const SpinnerContext = React.createContext({
  isLoading: false,
  setLanguage: () => {}
});

export default SpinnerContext;