import React, {Component} from 'react';
import _ from 'lodash';


class FilterWrapperComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navItems: props.dataNav,
            showItems: [
                ...props.dataImg[0],
                ...props.dataImg[1],
                ...props.dataImg[2],
            ],
        };
    }

    handleClick(i, showItems) {
        switch (i) {
            case 0:
                this.setState({
                    showItems: [
                        ...showItems[0],
                        ...showItems[1],
                        ...showItems[2],
                    ],
                });
                break;
            case 1:
                this.setState({
                    showItems: [
                        ...showItems[0],
                    ],
                });
                break;
            case 2:
                this.setState({
                    showItems: [
                        ...showItems[1],
                    ],
                });
                break;
            case 3:
                this.setState({
                    showItems: [
                        ...showItems[2],
                    ],
                });
                break;
            case 4:
                this.setState({
                    showItems: [
                        ...showItems[0],
                        ...showItems[1],
                    ],
                });
                break;
            case 5:
                this.setState({
                    showItems: [
                        ...showItems[1],
                        ...showItems[2],
                    ],
                });
                break;
            case 6:
                this.setState({
                    showItems: [
                        ...showItems[0],
                        ...showItems[2],
                    ],
                });
                break;
            default:
                console.log('default');
        }
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
