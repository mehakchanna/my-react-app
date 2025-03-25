import React from 'react'



export default function CountdownLightSwitch() {
    const [theme, setTheme] = React.useState('light');

const toggleTheme = () => {
  setTheme(theme === 'light'? 'dark' : 'light');
 
};

  return (
    <div>
        <h1>CountdownLightSwitch</h1>
        <button onClick={toggleTheme}>Toggle Theme</button>
            
    </div>
  )
}
//implement a 30 second countdown timer that updates every second. Display the remaining time in a visually appealing format.


 




