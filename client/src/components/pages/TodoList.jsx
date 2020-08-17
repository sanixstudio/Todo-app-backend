import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const TodoList = () => {
    const [todos, setTodos] = useState([]);

    // check if isCompleted or not
    const handleCheck = async (e) => {
        let check;
        if (e.target.checked) {
            check = true;
        } else {
            check = false;
        }
        console.log(check);
        try {
            axios.put(`http://localhost:4000/api/todos/update/${e.target.id}`, {
                text: e.target.attributes.data.value,
                isCompleted: check,
            });
            window.location.reload(false);
        } catch (err) {
            console.log(err.message);
        }
    };

    // delete todo item
    const handleDelete = (e) => {
        try {
            axios.delete(
                `http://localhost:4000/api/todos/delete/${e.target.id}`
            );
            window.location.reload(false);
        } catch (err) {
            console.log(err.message);
        }
    };

    // fetch all todos
    useEffect(() => {
        const fetchTodos = async () => {
            const todos = await axios.get(
                "http://localhost:4000/api/todos/all"
            );
            setTodos(todos.data);
        };
        fetchTodos();
    }, []);

    console.log(todos);

    return (
        <div className="container-fluid">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <ul className="list-group my-5">
                            {todos.map((todo) => (
                                <li
                                    className="list-group-item todo-bg"
                                    key={todo._id}
                                >
                                    <input
                                        type="checkbox"
                                        className="mr-4 large-check-box"
                                        checked={todo.isCompleted}
                                        onChange={handleCheck}
                                        id={todo._id}
                                        data={todo.text}
                                    />
                                    <span
                                        className={
                                            todo.isCompleted ? "checked" : ""
                                        }
                                    >
                                        {todo.text}
                                    </span>

                                    <i
                                        className="fa controls fa-trash float-right text-danger"
                                        id={todo._id}
                                        onClick={handleDelete}
                                    ></i>

                                    <Link to={`/todo/edit/${todo._id}`}>
                                        <i className="fa controls fa-edit float-right mr-3 text-secondary"></i>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
