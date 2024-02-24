
/*
Создать компонент TextInput, который содержит текстовое поле ввода и отображает введённый текст под ним в реальном времени.  
*/

import { useState } from "react";

function TextInput() {
    
    const [char, setChar] = useState(); // useState() - (хук определения состояния компонента) - специальная переменная (объединяющая в себе переменную и функцию), в которую можно аргументом передать значение/объект для первого элемента/переменной char (начальное состояние), который используется в функции setChar для изменения.

    function getChar(elem) {
        setChar(elem.target.value); // свойством target.value получаем введенное значение и передаем в функцию изменения состояния.
    }

    return (
        <>
            <input
                value={char}
                onChange={getChar}
                // onChange={(el) => setChar(el.target.value)}
            />
            <h1>{char}</h1>
        </>
    )
}

export default TextInput;