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
        const feed = this.props.feed;
        const personItem = this.props.personItem;
        const traitItems = this.props.traitItems;
        const showCases = [];

        if (item !== '' && item) {
            if (this.props.reset) {
                feed.forEach((item, i) => {
                    if (item.gsx$person.$t === personItem
                        && traitItems.includes(item.gsx$trait.$t.toLowerCase())) {
                        showCases.push(item);
                    }
                });
                this.props.onToggle(item.toUpperCase(), showCases, false, false, true);
            } else {
                this.props.onToggle(item.toUpperCase(), this.props.feed, false, true, false);
            }
        }
    }

    render() {
        const data = this.props.data;
        const activeIndex = this.state.activeIndex;
        const wrapperClass = classNames({
            'person-wrapper': true,
            active: this.props.show,
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
