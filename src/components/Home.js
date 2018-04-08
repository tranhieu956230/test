import React, {Component} from 'react';
import "../styles/style.css";
import Header from "./Header";
import TodoList from "./TodoList";
import {createTodo, deleteTodo, fetchTodos, toggleTodo} from "../services/APIServices";
import {Redirect} from "react-router-dom";

class Home extends Component {
    state = {
        todos: []
    };

    componentDidMount() {
        const {auth} = this.props;

        if (!auth) {
            return;
        }

        this.fetchListTodos();
    }

    fetchListTodos() {
        fetchTodos().then(object => {
            const {data, success} = object;

            if (success) {
                this.setState({
                    todos: data
                });
            }
        }).catch(error => {
            console.log(error);
        });
    }

    render() {
        const {todos} = this.state;
        const {auth} = this.props;

        if (!auth) {
            return <Redirect to="/login"/>;
        }

        return (
            <div className="TodoApp">
                <Header onCreate={this.handleOnCreate.bind(this)}/>
                <TodoList todos={todos}
                          onToggle={this.handleToggle.bind(this)}
                          onDeleteTodo={this.handleDelete.bind(this)}/>
            </div>
        );
    }

    handleToggle(id) {
        toggleTodo(id)
            .then(() => {
                this.fetchListTodos();
            });
    }

    handleDelete(id) {
        deleteTodo(id)
            .then(() => {
                this.fetchListTodos();
            });

    }

    handleOnCreate(text) {
        createTodo(text)
            .then(() => {
                this.fetchListTodos();
            });
    }
}

export default Home;
