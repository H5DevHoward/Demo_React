import React, {Component} from 'react';
import _ from 'lodash';

class FilterWrapperComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navItems: props.dataNav,
            showItems: props.dataImg[0],
        };
    }

    handleClick(i, imgs) {
        this.setState({
            showItems: imgs[i],
        });
    }


    render() {
        const showItems = _.shuffle(this.state.showItems);
        const navItems = this.state.navItems.map((item, i) =>
            <span
                className="nav-item"
                key={item}
                onClick={this.handleClick.bind(this, i, this.props.dataImg)}>
                {item}
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
