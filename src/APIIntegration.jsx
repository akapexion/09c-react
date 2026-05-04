import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const APIIntegration = () => {

  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      console.log(response.data.products);
      setData(response.data.products);
    }
    catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);


  return (
    <>
      <div className='grid grid-cols-3 place-items-center'>
        {data.map((c) => (
          <div className='border border-gray-300 shadow-md p-3 w-[300px]'>
            <div className="banner">
              <img src={c.thumbnail} alt="" />
            </div>
            <div className="content">
              <span>{c.title}</span>
              <span>{c.description}</span>

              <div className="btn">
              <Link className='bg-blue-600 text-white px-20 py-3'>Explore</Link>
              </div>

            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default APIIntegration
