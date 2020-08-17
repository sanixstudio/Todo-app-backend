import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="container-fluid bg-dark">
            <div className="container">
                <nav className="navbar navbar-dark bg-dark">
                    <Link className="navbar-brand" to="/">
                        TODO APP
                    </Link>
                    <ul className="navbar-nav">
                        <li className="nav-item add-btn btn btn-success">
                            <Link
                                className="nav-link add-new-btn"
                                to="/todo/add"
                            >
                                Add New{" "}
                                <i className="fa fa-plus text-white"></i>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
