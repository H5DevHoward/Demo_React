import React, {Component} from 'react';
import classNames from 'classnames';
import 'whatwg-fetch';

class TraitComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: [...props.data].map(item =>
                item.selected
            ),
            traitItems: props.traitItems,
            seeBtnEnable: false,
        };
    }

    handleChange(i) {
        const selected = this.state.selected;
        const traitItems = [];
        if (!selected[i] && selected.filter(item => item === true).length > 2) return;
        selected[i] = !selected[i];
        if (selected.filter(item => item === true).length === 3) {
            this.setState({
                seeBtnEnable: true,
            });
        } else {
            this.setState({
                seeBtnEnable: false,
            });
        }

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
            if (item.gsx$person.$t === personItem
                && traitItems.includes(item.gsx$trait.$t.toLowerCase())) {
                showCases.push(item);
            }
        });
        this.props.onToggle(this.state.selected, traitItems, showCases, false, true);
    }

    render() {
        // console.log(this.state.selected);
        const wrapperClass = classNames({
            'trait-wrapper': true,
            active: this.props.show,
        });
        const btnClass = classNames({
            'btn-see': true,
            active: this.state.seeBtnEnable,
        });
        const data = this.props.data;
        const unselected = 3 - this.state.selected.filter(item => item === true).length;
        const listItems = data.map((item, i) =>
            <li key={item.name}>
                <label>
                    <input
                        type="checkbox"
                        checked={this.state.selected[i]}
                        onChange={this.handleChange.bind(this, i)} />
                    {item.name.toUpperCase()}
                </label>
            </li>
        );

        return (
            <div className={wrapperClass}>
                <p>What is your {this.props.personItem} like?</p>
                <p>Choose {unselected} trait{unselected === 1 ? '' : 's'}</p>
                <ul className="trait-list">{listItems}</ul>
                <div className={btnClass} onClick={this.handleClick.bind(this)}>
                    see gifts
                </div>
            </div>
        );
    }
}

export default TraitComponent;
