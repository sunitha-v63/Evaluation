import React, { useEffect, useState } from 'react';
import bgimg from "../assets/Image/image3.png";

function Theme() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    const className = 'dark-mode';
    const body = document.body;

    if (darkMode) {
      body.classList.add(className);
      localStorage.setItem('theme', 'dark');
      body.style.backgroundImage = 'none';
    } else {
      body.classList.remove(className);
      localStorage.setItem('theme', 'light');
      body.style.backgroundImage = `url(${bgimg})`;
      body.style.backgroundSize = 'cover';
      body.style.backgroundRepeat = 'no-repeat';
      body.style.backgroundPosition = 'center';
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <div className="text-center my-4">
      <h4>5.Local Storage Theme Switcher</h4>
        <h2>Theme Switcher</h2>
      <button className="btn btn-secondary" onClick={toggleTheme}>
        Switch to {darkMode ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
}

export default Theme;
