import React from 'react'



export default function CountdownLightSwitch() {
    const [theme, setTheme] = React.useState('light');

const toggleTheme = () => {
  setTheme(theme === 'light'? 'dark' : 'light');
  document.body.classList.toggle('dark-theme');
};

  return (
    <div>
        <h1>CountdownLightSwitch</h1>
        <button onClick={toggleTheme}>Toggle Theme</button>
            
    </div>
  )
}

 




