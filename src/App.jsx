import React, { createContext } from 'react'
import APIIntegration from './APIIntegration'
import Data1 from './Data1';
// import A from './A'


export const yasirData = createContext();


const App = () => {

  // const obj = {
  //   id: 1,
  //   emp_name: "Yasir",
  //   emp_designation: "Web Engineer"
  // }

  const myName = "Ali";



  return (
    <div>
      <yasirData.Provider value={{ myName }}>
        <Data1 />
      </yasirData.Provider>
    </div>
  )
}

export default App
