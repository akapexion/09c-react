import React, { useRef, useState } from 'react'

const UnControlled = () => {

    const countRef = useRef(0);
    const [render, setRender] = useState(false);

    const handleCount = () => {
        countRef.current = countRef.current + 1;
        console.log(countRef.current);
        setRender(!render);
    }


    return (
        <>
            <p>{countRef.current}</p>

            <button onClick={handleCount}>ADD</button>
        </>
    )
}

export default UnControlled
