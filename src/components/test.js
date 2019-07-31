import React, { useState, useEffect } from 'react';

function Test() {
    const [sample, setSample] = useState('');
    // useEffect(() => {
    //     async function fetchSample() {
    //         const res = await fetch('/test');
    //         res.json().then(res => console.log(res));
    //     }

    //     fetchSample();
    // }, []);

    return (
        <div>
            <h1>hello</h1>
        </div>
    )
}

export default Test;

