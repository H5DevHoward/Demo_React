import React, {Component} from 'react';
import classNames from 'classnames';

class PersonComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: '',
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleNextClick = this.handleNextClick.bind(this);
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
        const reset = this.props.reset;
        const showCases = [];

        if (item !== '' && item) {
            if (reset) {
                feed.forEach((item, i) => {
                    const fetchPerson = item.gsx$person.$t;
                    const fetchTraitLower = item.gsx$trait.$t.toLowerCase();
                    if (fetchPerson === personItem
                        && traitItems.includes(fetchTraitLower)) {
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
                onClick={() => this.handleClick(i)}>
                {item.toUpperCase()}
            </div>
        );

        return (
            <div className={wrapperClass}>
                <div className="grid-wrapper">{listItems}</div>
                <div
                    className={btnClass}
                    onClick={() => this.handleNextClick(data[activeIndex])}
                    >NEXT
                </div>
            </div>
        );
    }
}

export default PersonComponent;
