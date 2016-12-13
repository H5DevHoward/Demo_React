import React, {Component} from 'react';
import classNames from 'classnames';

class TraitComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: [...props.data].map(item =>
                item.selected
            ),
            traitItems: props.traitItems,
        };
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

    render() {
        const wrapperClass = classNames({
            'trait-wrapper': true,
            active: this.props.personItem !== '' && this.props.personItem,
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
            </div>
        );
    }
}

export default TraitComponent;
