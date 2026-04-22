import axios from 'axios';
import React, { useEffect, useState } from 'react'

const APIIntegration = () => {

    const [count, setCount] = useState(0);
    const [toggle, setToggle] = useState(false);


    const fetchProductsAPI = async() => {
        try{
            const response = await axios.get("https://dummyjson.com/products");
            console.log(response);
        }
        catch(err){
            console.log(err);
        }
    }





    useEffect(() => {
        // console.log("My Logical Code....");
        fetchProductsAPI();
    }, [])

  return (
    <>
        <p>My current count is {count}</p>
        <button onClick={() => setCount(count+1)}>ADD</button>

        <button onClick={() => setToggle(!toggle)}>Toggle Btn</button>
    </>
  )
}

export default APIIntegration
