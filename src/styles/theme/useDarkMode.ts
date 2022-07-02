import { useEffect, useState } from 'react';
import { lightTheme } from './colorsLight';
import { darkTheme } from './colorsDark';

export const useDarkMode = () => {
  const [themeMode, setThemeMode] = useState('light');
  // const [mountedComponent, setMountedComponent] = useState(false)

  const setMode = (mode: string) => {
    window.localStorage.setItem('themeMode', mode);
    setThemeMode(mode);
  };

  const themeToggle = () => {
    themeMode === 'light' ? setMode('dark') : setMode('light');
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('themeMode');
    localTheme && setThemeMode(localTheme);
    // setMountedComponent(true)
  }, []);

  const theme = themeMode === 'light' ? lightTheme : darkTheme;
  return { themeMode, theme, themeToggle, setMode };
};

export const getThemeModeStyles = () => {
  const localTheme = window.localStorage.getItem('themeMode');
  if (localTheme) {
    return localTheme === 'light' ? lightTheme : darkTheme;
  } else {
    return lightTheme;
  }
};

export const getThemeMode = () => {
  const localTheme = window.localStorage.getItem('themeMode');
  return localTheme || 'light';
};
