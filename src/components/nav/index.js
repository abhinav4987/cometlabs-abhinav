import {useState} from 'react'
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import useDarkTheme from '../../hooks/useDarkTheme';

function Navbar() {

    const [colorTheme, setTheme] = useDarkTheme()
    const [darkMode, setDarkMode] = useState(
        colorTheme === "light" ? true : false
    );

    const toggleDarkMode = (checked) => {
        setTheme(colorTheme);
        setDarkMode(checked);
    };

  
  return (
    <div className='flex flex-row items-center justify-between'>
        <h1 className='text-black dark:text-white m-0 font-bold m-4 text-xl'>MR</h1>
        <div className='m-4'>
          <DarkModeSwitch
              // style={}
              checked={darkMode}
              onChange={toggleDarkMode}
              size={30}
          />

        </div>
    </div>
  )
}

export default Navbar