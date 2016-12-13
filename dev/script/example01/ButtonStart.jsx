import React, {Component} from 'react';
import classNames from 'classnames';

class ButtonStart extends Component {
    handleClick() {
        this.props.onToggle(true);
    }

    render() {
        const wrapperClass = classNames({
            'btn-start': true,
            active: this.props.start,
        });

        return (
            <div className={wrapperClass} onClick={this.handleClick.bind(this)}>
                click to start
            </div>
        );
    }
}

export default ButtonStart;
