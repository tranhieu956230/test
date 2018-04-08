import React, {Component} from "react";
import PropTypes from "prop-types";
import {register} from "../services/APIServices";
import {Redirect} from "react-router-dom";

class RegisterPage extends Component {
    state = {
        success: false
    };

    render() {
        const {success} = this.state;

        if (success) {
            return <Redirect to="/login" />
        }

        return (
            <div className="RegisterPage">
                <h1>Register Page</h1>

            </div>
        );
    }

    componentDidMount() {
        const email = "tutv95@gmail.com";
        const password = '123456789';
        const name = "Tu";

        register({email, password, name})
            .then(response => {
                this.setState({
                    success: true
                });
            });
    }
}

RegisterPage.propTypes = {
    any: PropTypes.any
};

export default RegisterPage;