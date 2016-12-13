import React from 'react';
import '../../style/_NavMenuComponent.scss';
import classNames from 'classnames';

class FilterNavBarComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            initialData: [
                {
                    Home: ['Home', 'item0'],
                },
                {
                    Projects: ['Projects', 'item1'],
                },
                {
                    Services: ['Services', 'item2'],
                },
                {
                    Contact: ['Contact', 'item3'],
                },
            ],
            activeIndex: 0,
        };
    }

    handleSelect(i) {
        this.setState({
            activeIndex: i,
        });
    }

    render() {
        const activeIndex = this.state.activeIndex;
        const listItems = this.state.initialData.map((item, i) =>
            <a
                href="#"
                key={i.toString()}
                className={classNames(Object.entries(item)[0][1], [{active: activeIndex === i}])}
                onClick={this.handleSelect.bind(this, i)}>{Object.entries(item)[0][0]}
            </a>
        );

        return (
            <section>
                <nav>
                    {listItems}
                </nav>
                <p>
                    You chose <b>
                    {Object.entries(this.state.initialData[this.state.activeIndex])[0][0]}
                </b>
            </p>
            </section>
        );
    }
}

export default FilterNavBarComponent;
