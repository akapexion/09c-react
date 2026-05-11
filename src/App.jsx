import React, { createContext, useContext } from 'react'
import APIIntegration from './APIIntegration'
import Data1 from './Data1';
import ThemeSwitcher from './ThemeSwitcher';
import { themeContext, ThemeProvider } from './ThemeContext';
// import Controlled from './Controlled';
import UnControlled from './UnControlled';
// import A from './A'


export const yasirData = createContext();


// const ThemedApp = () => {

//   const { theme } = useContext(themeContext);

//   return (
//     <>
//       <div className={` ${theme == "light" ? "" : "bg-black text-white"}`}>

//         <ThemeSwitcher />

//       </div>
//     </>
//   )
// }

const App = () => {
  return (
    // <ThemeProvider>
    <UnControlled />
    // </ThemeProvider>
  )
}

export default App
