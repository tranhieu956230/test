import React, {Component} from "react";
import PropTypes from "prop-types";

class Header extends Component {
    state = {
        text: ''
    };

    render() {
        const {text} = this.state;

        return (
            <div className="header">
                <h1>Code Camp's Todo List</h1>

                <form className="create" onSubmit={this.handleOnSubmit.bind(this)}>
                    <input id="inputAdd"
                           onChange={this._handleChangeText.bind(this)}
                           value={text} type="text"
                           placeholder="Title..."/>
                    <button disabled={!text} type="submit" id="buttonAdd">Add</button>
                </form>
            </div>
        );
    }

    _emptyInput() {
        this.setState({
            text: ''
        });
    }

    _handleChangeText(e) {
        const {value} = e.target;

        this.setState({
            text: value
        });
    }

    handleOnSubmit(e) {
        e.preventDefault();

        const {text} = this.state;

        if (!text) {
            return;
        }

        this.props.onCreate(text);
        this._emptyInput();
    }
}

Header.propsTypes = {
    onCreate: PropTypes.func.isRequired
};

export default Header;