import React, {Component} from 'react';
import "../styles/style.css";
import Home from "./Home";
import {Route, Switch} from "react-router-dom";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import NavBar from "./NavBar";
import {getAuth} from "../services/StorageServices";

class App extends Component {
    state = {
        auth: false
    };

    componentDidMount() {
        const auth = getAuth();

        this.setState({
            auth
        });
    }

    render() {
        const {auth} = this.state;

        return (
            <div id="app">
                <NavBar onAuth={this._onChangeAuth.bind(this)} auth={auth}/>

                <Switch>
                    <Route exact path="/" component={() => <Home auth={auth}/>}/>
                    <Route path="/login"
                           component={() => <LoginPage onAuth={this._onChangeAuth.bind(this)} auth={auth}/>}/>
                    <Route path="/register" component={() => <RegisterPage auth={auth}/>}/>
                </Switch>
            </div>
        );
    }

    _onChangeAuth(auth) {
        this.setState({
            auth: auth
        });
    }
}

export default App;
