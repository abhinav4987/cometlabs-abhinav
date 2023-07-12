import { useState } from 'react';
import './App.css';
import useDarkTheme from './hooks/useDarkTheme';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import {Navbar} from './components';


function App() {

  return (
    <div className="App bg-gray-100 dark:bg-black h-screen">
      <Navbar />
      
    </div>
  );
}

export default App;
