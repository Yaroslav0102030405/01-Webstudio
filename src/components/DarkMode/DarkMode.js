import {useEffect, useState} from 'react';
import { ReactComponent as Sun } from './Sun.svg';
import { ReactComponent as Moon } from './Moon.svg';
import './DarkMode.css';
// import { doc } from "prettier";

const DarkMode = () => {
  // const [theme, setTheme] = useState('light-theme');

  // const toggleTheme = () => {
  //   theme === 'light-theme' ? setTheme('dark-theme') : setTheme('light-theme');
  // };

  // useEffect(() => {
  //   document.body.className = theme;
  // }, [theme]);

  const setDarkMode = () => {
    document.body.className = "dark-theme";
  };

  const setLightMode = () => {
    document.body.className = "light-theme" ;
  };

  const toggleTheme = e => {
    if (e.target.checked) setDarkMode();
    else setLightMode();
  };

  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={toggleTheme}
      />
      <label className="dark_mode_label" for="darkmode-toggle">
        <Sun />
        <Moon />
      </label>
    </div>
  );
};

export default DarkMode;
