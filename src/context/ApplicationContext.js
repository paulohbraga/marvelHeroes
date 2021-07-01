import React, {useState, useCallback} from 'react';
import axios from 'axios';
import {generateAPIUrlWithHash} from '../assets/utils/generateAPIUrlWithHash';

const ApplicationContext = React.createContext();

export const ApplicationProvider = ({children}) => {
  const [heroes, setHeroes] = useState([]);
  const [offset, setOffset] = useState(0);
  const [isLoading, setisLoading] = useState(false);

  const getHeroes = useCallback(async () => {
    setisLoading(true);
    const url = generateAPIUrlWithHash();
    try {
      const response = await axios.get(url + `&limit=10&offset=${offset}`);
      const data = response.data.data;
      setHeroes(data.results);
    } catch (error) {
      console.log(error);
    } finally {
      setisLoading(false);
    }
  }, [offset]);

  const SearchHero = useCallback(async text => {
    setisLoading(true);
    const url = generateAPIUrlWithHash();
    try {
      const response = await axios.get(url + `&name=${text}`);
      const data = response.data.data;
      setHeroes(data.results);
    } catch (error) {
      console.log(error);
    } finally {
      setisLoading(false);
    }
  }, []);

  return (
    <ApplicationContext.Provider
      value={{
        getHeroes,
        heroes,
        offset,
        setOffset,
        isLoading,
        SearchHero,
      }}>
      {children}
    </ApplicationContext.Provider>
  );
};

export default ApplicationContext;
