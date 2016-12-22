import React, {Component} from 'react';
import _ from 'lodash';

class FilterWrapperComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nav: props.data,
            show: props.data[0].items,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(imgs) {
        this.setState({
            show: imgs,
        });
    }


    render() {
        const showItems = _.shuffle(this.state.show);
        const navItems = this.state.nav.map((item, i) =>
            <span
                className="nav-item"
                key={item.name}
                onClick={() => this.handleClick(item.items)}>
                {item.name}
            </span>
        );
        const imgItems = showItems.map(item =>
            <img key={item} src={item} />
        );

        return (
            <div>
                <nav className="bar">
                    {navItems}
                </nav>
                <div className="show-item">
                    {imgItems}
                </div>
            </div>
        );
    }
}

export default FilterWrapperComponent;
