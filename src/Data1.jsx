import React, { useContext } from 'react'
import { yasirData } from './App'

const Data1 = () => {

    const { myName } = useContext(yasirData);


    return (
        <>
            <div>
                
                <p>Data1</p>


                <p> {myName}  </p>
                
                </div>
        </>
    )
}

export default Data1
