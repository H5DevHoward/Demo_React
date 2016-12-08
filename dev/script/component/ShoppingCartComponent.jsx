import React from 'react';
import classNames from 'classnames';
import '../../style/_ShoppingCartComponent.scss';

const items = [
    {
        name: 'Web Development',
        price: '$300.00',
        toggle: true,
    },
    {
        name: 'Design',
        price: '$400.00',
        toggle: false,
    },
    {
        name: 'Integration',
        price: '$250.00',
        toggle: false,
    },
    {
        name: 'Training',
        price: '$220.00',
        toggle: false,
    },
];

class ShoppingCartComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectItems: items.map(item => item.toggle),
        };
    }

    commodityToggle(i, selected) {
        const selectItems = this.state.selectItems;

        selectItems[i] = !selected;
        this.setState({
            selectItems,
        });
    }

    render() {
        let sum = 0;

        this.state.selectItems.forEach((item, i) => {
            if (item) {
                sum += parseFloat(items[i].price.slice(1, -1));
            }
        });

        return (
            <section>
                <h1>Services</h1>
                <ul>{items.map((item, i) =>
                    <Commodity
                        key={i}
                        dataId={i}
                        name={item.name}
                        price={item.price}
                        selected={this.state.selectItems[i]}
                        onToggle={this.commodityToggle.bind(this, i, this.state.selectItems[i])} />
                    )}</ul>
                <div className="total">
                    Total: <span>{`$${sum}.00`}</span>
                </div>
            </section>
        );
    }
}

class Commodity extends React.Component {
    handleClick() {
        this.props.onToggle(this.props.dataId, !this.props.selected);
    }

    render() {
        return (
            <li
                className={classNames({active: this.props.selected})}
                onClick={this.handleClick.bind(this)}>
                {this.props.name}
                <span>
                    {this.props.price}
                </span>
            </li>
        );
    }
}

export default ShoppingCartComponent;
