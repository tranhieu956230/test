import React, {Component} from "react";

class Todo extends Component {
    render() {
        const {title, completed} = this.props.data;

        return (
            <li
                className={completed ? "completed" : ""}>
                <span onClick={this._handleClickToggle.bind(this)}>{title}</span>
                <span onClick={this._handleClickRemove.bind(this)}
                      className="close">x</span>
            </li>
        );
    }

    _handleClickToggle() {
        const {data} = this.props;

        this.props.onToggle(data._id);
    }

    _handleClickRemove() {
        const {data} = this.props;

        this.props.onRemove(data._id);
    }
}

export default Todo;