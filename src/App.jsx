import { useEffect, useState } from 'react';
import './App.scss';
import { Navbar } from './components';

const App = () => {

  // Start theme Dark mode 
  const current_theme = localStorage.getItem('current_theme');
  const [theme, setTheme] = useState(current_theme ? current_theme : 'light');
    
  useEffect(() => {
     if (theme === 'dark') {
       document.body.classList.add('dark');
     } else {
       document.body.classList.remove('dark');
    }
    
      localStorage.setItem('current_theme', theme);
  }, [theme]);


  // End theme Dark mode 

  return (
    <div className={`app`}>
      <Navbar theme={theme} setTheme={setTheme}/>
    </div>
  )
}

export default App