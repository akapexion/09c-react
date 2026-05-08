import { MoonStar, Sun } from 'lucide-react'
import React, { useContext } from 'react'
import { themeContext } from './ThemeContext';

const ThemeSwitcher = () => {

    const { theme, setTheme } = useContext(themeContext);

    const handleTheme = () => {
    if(theme == "light"){
        setTheme("dark");
    }
    else {
        setTheme("light");
    }
    }

  return (
    <>  
        {theme == "dark" ?
        <Sun onClick={handleTheme} />
        :
        <MoonStar onClick={handleTheme} />
        }
    </>
  )
}

export default ThemeSwitcher
