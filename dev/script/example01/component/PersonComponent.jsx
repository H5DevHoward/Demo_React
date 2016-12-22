import React, {Component} from 'react';
import classNames from 'classnames';
import _ from 'lodash';


function getRandomArrayElements(arr, count) {
    const shuffled = arr.slice(0);
    let i = arr.length;
    const min = i - count;
    let temp, index;
    while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }

    return shuffled.slice(min);
}


class PersonComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: _.findIndex(props.data, {selected: true}),
            personItem: props.personItem,
        };
    }

    componentWillReceiveProps() {
        this.setState({
            activeIndex: _.findIndex(this.props.data, {selected: true}),
        });
    }

    handleClick(i) {
        this.setState({
            activeIndex: i,
            personItem: this.props.data[i].name.toUpperCase(),
        });
    }

    handleNextClick(index) {
        const feed = this.props.feed;
        const resetPerson = this.props.reset || index === 5;

        const dataTrait = this.props.dataTrait;
        const traits = dataTrait.map(item =>
            item.name.toLowerCase()
        );

        const random = _.random(4);
        const personItem =
            index !== 5 ? this.state.personItem : this.props.data[random].name.toUpperCase();
        const traitItems =
            index !== 5 ? this.props.traitItems : getRandomArrayElements(traits, 3);
        const showCases = [];
        feed.forEach((item, i) => {
            const fetchPersonUpper = item.gsx$person.$t.toUpperCase();
            const fetchTraitLower = item.gsx$trait.$t.toLowerCase();
            if (fetchPersonUpper === personItem
                && traitItems.includes(fetchTraitLower)) {
                showCases.push(item);
            }
        });

        if (personItem !== '' && personItem) {
            const selectedIndex = index !== 5 ? index : random;
            this.props.onToggle(selectedIndex, personItem, showCases, resetPerson, traitItems);
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
            active: activeIndex !== -1,
        });
        const listItems = data.map((item, i) =>
            <div
                key={item.name}
                className={classNames('person-item', [{active: activeIndex === i}])}
                onClick={() => this.handleClick(i)}>
                {item.name.toUpperCase()}
            </div>
        );

        return (
            <div className={wrapperClass}>
                <div className="grid-wrapper">{listItems}</div>
                <div
                    className={btnClass}
                    onClick={() => this.handleNextClick(activeIndex)}
                    >NEXT
                </div>
            </div>
        );
    }
}

export default PersonComponent;
