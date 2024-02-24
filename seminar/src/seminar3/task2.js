
/*
Компонент Counter, который отображает число и две кнопки: одна увеличивает, другая уменьшае на единицу.
Использовать хук useState.
*/
import { useState } from 'react';

function Counter() {

    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        setCount(count - 1);
    }

    return (
        <>
            <h2>{count}<button onClick={increment}>+</button><button onClick={decrement} >-</button></h2>
        </>
    );
}

export default Counter;
