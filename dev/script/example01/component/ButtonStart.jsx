import React, {Component} from 'react';
import classNames from 'classnames';

export default class ButtonStart extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.onToggle(false, true);
    }

    render() {
        const wrapperClass = classNames({
            'btn-start': true,
            active: this.props.show,
        });

        return (
            <div className={wrapperClass} onClick={this.handleClick}>
                click to start
            </div>
        );
    }
}
