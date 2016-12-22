import React, {Component} from 'react';
import classNames from 'classnames';
import 'whatwg-fetch';

class TraitComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: props.data.map(item =>
                item.selected
            ),
            traitItems: props.traitItems,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    componentWillReceiveProps() {
        this.setState({
            selected: this.props.data.map(item =>
                item.selected
            ),
        });
    }

    handleChange(i) {
        const selected = this.state.selected;
        const traitItems = [];
        if (!selected[i] && selected.filter(item => item === true).length > 2) return;
        selected[i] = !selected[i];

        selected.forEach((item, i) => {
            if (item) {
                traitItems.push(this.props.data[i].name);
            }
        });

        this.setState({
            selected,
            traitItems,
        });
    }

    handleClick() {
        const personItem = this.props.personItem;
        const traitItems = this.state.traitItems;
        const showCases = [];
        const feed = this.props.feed;

        feed.forEach((item, i) => {
            if (item.gsx$person.$t.toUpperCase() === personItem
                && traitItems.includes(item.gsx$trait.$t.toLowerCase())) {
                showCases.push(item);
            }
        });
        this.props.onToggle(this.state.selected, traitItems, showCases);
    }

    render() {
        const data = this.props.data;
        const selected = this.state.selected.filter(item => item === true);
        const unselectedLength = 3 - selected.length;
        const wrapperClass = classNames({
            'trait-wrapper': true,
            active: this.props.show,
        });
        const btnClass = classNames({
            'btn-see': true,
            active: selected.length === 3,
        });
        const listItems = data.map((item, i) =>
            <li key={item.name}>
                <label>
                    <input
                        type="checkbox"
                        checked={this.state.selected[i]}
                        onChange={() => this.handleChange(i)}
                    />
                    {item.name.toUpperCase()}
                </label>
            </li>
        );

        return (
            <div className={wrapperClass}>
                <p>What is your {this.props.personItem} like?</p>
                <p>Choose {unselectedLength} trait{unselectedLength === 1 ? '' : 's'}</p>
                <ul className="trait-list">{listItems}</ul>
                <div className={btnClass} onClick={this.handleClick}>
                    see gifts
                </div>
            </div>
        );
    }
}

export default TraitComponent;
