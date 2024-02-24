
/*
Создать компонент Counter, который отображает кнопку и число.
Число увеличивается на 1 каждый раз, когда пользователь нажимает на кнопку.
*/

import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0); // useState - (хук определения состояния компонента) - специальная переменная (объединяющая в себе переменную и функцию), в которую можно аргументом передать значение/объект для первого элемента count (начальное состояние), который можно использовать в функции setCount для изменения.  

    return (
        <div>
            <button onClick={() => setCount(count + 1) }>Counter</button>
            <p>{count}</p>
        </div>
    )
}

export default Counter;