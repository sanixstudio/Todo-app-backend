import React from "react";
import "./App.scss";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { TodoList } from "./components/pages/TodoList";
import { CreateTodo } from "./components/pages/CreateTodo";
import { EditTodo } from "./components/pages/EditTodo";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={TodoList} />
                    <Route path="/todo/add" component={CreateTodo} />
                    <Route path="/todo/edit/:id" component={EditTodo} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
