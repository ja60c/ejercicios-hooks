import React, { useState, useEffect } from 'react';

function useCounter(initial) {
    const [count, setCount] = useState(initial);

    const incrementar = () => setCount(count+1)

    const decrementar = () => setCount(count-1)

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    }, [count])

    return {count, incrementar, decrementar}

}

export default useCounter;