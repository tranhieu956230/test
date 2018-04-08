import {getToken} from "./StorageServices";

export const fetchTodos = () => {
    const token = getToken();

    return fetch('https://uetcc-todo-app.herokuapp.com/todos?token=' + token)
        .then(response => {
            return response.json();
        });
};

export const createTodo = (text) => {
    const token = getToken();

    const url = 'https://uetcc-todo-app.herokuapp.com/todos';
    const request = new Request(url, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
        method: 'POST',
        body: JSON.stringify({
            title: text
        })
    });

    return fetch(request)
        .then(response => {
            return response.json();
        });
};

export const deleteTodo = (id) => {
    const url = `https://uetcc-todo-app.herokuapp.com/draft/${id}`;
    const request = new Request(url, {
        method: 'DELETE'
    });

    return fetch(request)
        .then(response => {
            return response.json();
        });
};

export const toggleTodo = (id) => {
    const url = `https://uetcc-todo-app.herokuapp.com/draft/${id}/toggle`;
    const request = new Request(url, {
        method: 'POST'
    });

    return fetch(request)
        .then(response => {
            return response.json();
        });
};

export const register = ({email, password, name}) => {
    const url = `https://uetcc-todo-app.herokuapp.com/register`;
    const request = new Request(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password,
            name,
        })
    });

    return fetch(request)
        .then(response => {
            return response.json();
        });
};

export const login = ({email, password}) => {
    const url = `https://uetcc-todo-app.herokuapp.com/login`;
    const request = new Request(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password,
        })
    });

    return fetch(request)
        .then(response => {
            return response.json();
        });
};