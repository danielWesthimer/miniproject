import React from "react";
import { useState, useEffect } from 'react'


let user = JSON.parse(localStorage.getItem("user"))
let userId
user ? userId = user.id : userId = 0



function Todos() {
    async function GetTodos() {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
        const dataJson = await res.json()
        setTodos(dataJson)
    }
    const [todos, setTodos] = useState([]);


    useEffect(() => {
        GetTodos();
        return () => { }
    }, []);
    useEffect(() => {
        console.log(todos);
        return () => { }
    }, [todos]);
    const handleChange = (id) => {
        setTodos(todos1 => {
            todos1[id].completed = todos1[id].completed ? false : true
            console.log(todos1);
            return JSON.parse(JSON.stringify(todos1))
        });
    };

    const onOptionChangeHandler = (event) => {
        switch (event.target.value) {
            case "1":
                console.log("000");
                setTodos(todos1 => {
                    todos1.sort((x, y) => x.completed - y.completed)
                    return JSON.parse(JSON.stringify(todos1))
                }
                );
                break;
            case "2":
                setTodos(todos1 => {
                    todos1.sort((x, y) => Math.random() - 0.5)
                    return JSON.parse(JSON.stringify(todos1))
                }
                );
                break;
            case "3":
                setTodos(todos1 => {
                    todos1.sort((a, b) => a.title.localeCompare(b.title))
                    return JSON.parse(JSON.stringify(todos1))
                }
                );
                break;
            case "4":
                setTodos(todos1 => {
                    todos1.sort((a, b) => a.id - b.id)
                    return JSON.parse(JSON.stringify(todos1))
                }
                );
                break;
            // case "3":
            //     setTodos(todos1 => 
            //     { todos1.sort((x,y)=> (x.completed === y.completed)? 0 : x? -1 : 1) 
            //         return todos1
            //     }


            //    );
            //     break;

            default:
                break;
        }
        console.log("User Selected Value - ", event.target.value)
    }

    return (<div>
        <select id={"select"}onChange={onOptionChangeHandler}>
            <option className="select" value="0">סדר לפי</option>
            <option className="select" value="1">ביצוע</option>
            <option className="select" value="2">אקראי</option>
            <option className="select" value="3">אלפביתי</option>
            <option className="select" value="4">סדרתי</option>
        </select>

        <table>
            <tr>
                <th>Checked</th>
                <th>Todo</th>

            </tr>

            {todos.map(
                (element, idx) => <tr key={element.id}>
                    <td> <input type="checkbox"
                        defaultChecked={todos[idx].completed}
                        onclick={() => handleChange(idx)} />
                    </td>
                    <td> <label >{element.title}</label></td>
                </tr>)}
        </table>
    </div>);
}

export default Todos;