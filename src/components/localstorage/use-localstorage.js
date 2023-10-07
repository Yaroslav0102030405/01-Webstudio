import { useState } from 'react';
// import { useState } from "react";

const useLocalStorage = (key, defaltValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = localStorage.getItem(key);

      if (value) {
        return JSON.parse(value);
      } else {
        localStorage.setItem(key, JSON.stringify(defaltValue));
        return defaltValue;
      }
    } catch (error) {
      return defaltValue;
    }
  });

  const setValue = newValue => {
    try {
      localStorage.setItem(key, JSON.stringify(newValue));
    } catch (error) {
      console.log(error);
    }
    setStoredValue(newValue);
  };

  return { storedValue, setValue };
};

export default useLocalStorage;
