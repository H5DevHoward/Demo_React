import React, {Component} from 'react';
import classNames from 'classnames';

class PersonComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: '',
        };
    }

    handleClick(i) {
        this.setState({
            activeIndex: i,
        });
    }

    handleNextClick(item) {
        if (item !== '' && item) {
            this.props.onToggle(item.toUpperCase(), true);
        }
    }

    render() {
        const data = this.props.data;
        const activeIndex = this.state.activeIndex;
        const wrapperClass = classNames({
            'person-wrapper': true,
            active: this.props.start && !this.props.showNext,
        });
        const btnClass = classNames({
            'btn-next': true,
            active: activeIndex !== '',
        });
        const listItems = data.map((item, i) =>
            <div
                key={item}
                className={classNames('person-item', [{active: activeIndex === i}])}
                onClick={this.handleClick.bind(this, i)}>
                {item.toUpperCase()}
            </div>
        );

        return (
            <div className={wrapperClass}>
                <div className="grid-wrapper">{listItems}</div>
                <div
                    className={btnClass}
                    onClick={this.handleNextClick.bind(this, data[activeIndex])}
                    >NEXT
                </div>
            </div>
        );
    }
}

export default PersonComponent;
