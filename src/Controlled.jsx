import React, { useState } from 'react'

const Controlled = () => {

    const [count, setCount] = useState(0);

    console.log("My Line of Code....");

    return (
        <>
            <p>{count}</p>

            <button onClick={() => setCount(count + 1)}>ADD</button>
        </>
    )
}

export default Controlled
