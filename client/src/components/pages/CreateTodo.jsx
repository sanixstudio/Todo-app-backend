import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

export const CreateTodo = () => {
    const [newTodo, setNewTodo] = useState("");
    const history = useHistory();

    const handleChange = (e) => {
        setNewTodo(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (newTodo === "") {
            showAlert();
            setTimeout(() => {
                hideAlert();
            }, 7000);
        } else {
            try {
                await axios.post("http://localhost:4000/api/todos/add", {
                    text: newTodo,
                    isCompleted: false,
                });
                history.push("/");
            } catch (err) {
                console.log(err.message);
            }
        }
    };

    const showAlert = () => {
        document.querySelector(".alert").style.opacity = 1;
    };

    const hideAlert = () => {
        if ((document.querySelector(".alert").style.opacity = 1)) {
            document.querySelector(".alert").style.opacity = 0;
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
                                <label htmlFor="exampleInputPassword1">
                                    New Todo
                                </label>
                                <input
                                    onChange={handleChange}
                                    type="text"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                    placeholder="Enter your text here..."
                                />
                            </div>
                            <button
                                type="submit"
                                onClick={handleSubmit}
                                className="btn btn-primary"
                            >
                                Add New
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
