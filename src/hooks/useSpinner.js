import { useState, useContext, useEffect } from 'react';
import SpinnerContext from '../components/SpinnerContext';

const useSpinner = () => {
  const { setLoading } = useContext(SpinnerContext);
  const [loading, setLoadingState] = useState(false);

  useEffect(() => {
    setLoading(loading);
  }, [loading, setLoading]);

  return [loading, setLoadingState];
};

export default useSpinner;