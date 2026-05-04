import React from 'react'
import APIIntegration from './APIIntegration'
// import A from './A'

const App = () => {

  const obj = {
    id : 1,
    emp_name : "Hassan",
    emp_designation : "Software Engineer"
  }



  return (
    <div>
      <APIIntegration/>

      {/* <A myData = {obj}/> */}




    </div>
  )
}

export default App
