/*
Создать компонент TodoList, который позволяет добавлять элементы в список через текстовое поле ввода. Список должен обновляться при добавлении новогой записи.
*/

import { useState } from "react";

function TodoList() {


    const [inputText, setinputText] = useState();
    const [arr, setArr] = useState([]);

    function clickHandler() {
        if (!inputText.trim()) {
            return;
        }
        setArr([...arr, inputText]);
        setinputText("");
    }

    return (
        <>
            <label htmlFor="input">Введите текст: </label>
            <input
                onChange={(event) => setinputText(event.target.value)}
                type="text"
                id="input"
                value={inputText}
            ></input>
            <button onClick={clickHandler}>Click to add</button>
            <ul>
                {arr.map((item) => (
                    <li key={arr.indexOf(item)}>{item}</li>
                ))}
            </ul>
        </>
    );
}

export default TodoList;