import React, {Component} from "react";
import PropTypes from "prop-types";
import {Redirect} from "react-router-dom";
import {login} from "../services/APIServices";
import {setToken} from "../services/StorageServices";


class LoginPage extends Component {
    state = {
        email: '',
        password: ''
    };

    render() {
        const {auth} = this.props;

        if (auth) {
            return <Redirect to="/"/>;
        }

        const {email, password} = this.state;

        return (
            <div className="LoginPage">
                <form onSubmit={this._handleOnSubmit.bind(this)}>
                    <input onChange={this._handleChangeInput.bind(this, 'email')} value={email} name="email"
                           type="text"/>
                    <input onChange={this._handleChangeInput.bind(this, 'password')} value={password} name="password"
                           type="password"/>

                    <button>Submit</button>
                </form>
            </div>
        );
    }

    _handleChangeInput(field, e) {
        const {value} = e.target;

        this.setState({
            [field]: value
        });
    }

    _handleOnSubmit(e) {
        e.preventDefault();

        const {email, password} = this.state;

        login({email, password})
            .then(response => {
                const {success, data} = response;
                const {accessToken} = data;

                if (success) {
                    this.props.onAuth(true);

                    setToken(accessToken);
                }
            });

    }

    componentDidMount() {

    }
}

LoginPage.propTypes = {
    any: PropTypes.any
};

export default LoginPage;