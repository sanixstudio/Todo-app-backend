import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

export const EditTodo = () => {
    const [newTodo, setNewTodo] = useState("");
    const [currentText, setCurrentText] = useState("");
    const history = useHistory();
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(
                `http://localhost:4000/api/todos/find/${id}`
            );
            setCurrentText(result.data.text);
        };
        fetchData();
    }, [id]);

    const handleChange = (e) => {
        setNewTodo(e.target.value);
    };

    // Handle submit
    const handleSubmit = (e) => {
        e.preventDefault();
        if (newTodo === "") {
            document.querySelector(".alert").style.opacity = 1;
        } else {
            axios.put(`http://localhost:4000/api/todos/update/${id}`, {
                text: newTodo,
                isCompleted: false,
            });
            history.push("/");
            window.location.reload(false);
        }
    };

    // Handle cancel
    const handleCancel = () => {
        history.push("/");
    };

    return (
        <div className="container-fluid">
            <div className="container">
                <div className="row">
                    <div className="col my-5">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <div
                                    className="alert alert-danger"
                                    role="alert"
                                >
                                    Please enter your text before submitting or
                                    click cancel
                                </div>
                                <label>Edit Todo</label>
                                <input
                                    onChange={handleChange}
                                    type="text"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    placeholder={currentText}
                                />
                            </div>
                            <button
                                type="submit"
                                onClick={handleSubmit}
                                className="btn btn-primary"
                            >
                                Submit
                            </button>
                            <button
                                type="submit"
                                onClick={handleCancel}
                                className="btn btn-danger ml-3"
                            >
                                Cancel
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
