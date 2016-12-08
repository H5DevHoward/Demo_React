import React, {Component} from 'react';
import FilterWrapperComponent from './FilterWrapperComponent.jsx';

import '../../style/_FilterComponent.scss';


class FilterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgItems: [
                [
                    'image/red01.jpg',
                    'image/red02.jpg',
                    'image/red03.jpg',
                    'image/red04.jpg',
                    'image/red05.jpg',
                    'image/red06.jpg',
                    'image/red07.jpg',
                ],
                [
                    'image/green01.jpg',
                    'image/green02.jpg',
                    'image/green03.jpg',
                    'image/green04.jpg',
                    'image/green05.jpg',
                    'image/green06.jpg',
                    'image/green07.jpg',
                    'image/green08.jpg',
                    'image/green09.jpg',
                ],
                [
                    'image/blue01.jpg',
                    'image/blue02.jpg',
                    'image/blue03.jpg',
                    'image/blue04.jpg',
                    'image/blue05.jpg',
                    'image/blue06.jpg',
                    'image/blue07.jpg',
                    'image/blue08.jpg',
                    'image/blue09.jpg',
                    'image/blue10.jpg',
                    'image/blue11.jpg',
                ],
            ],
            navItems: ['所有分类', '分类A', '分类B', '分类C', '分类A+B', '分类B+C', '分类A+C'],
        };
    }

    render() {
        return (
            <section>
                <FilterWrapperComponent
                    dataNav={this.state.navItems}
                    dataImg={this.state.imgItems}
                />
            </section>
        );
    }
}

export default FilterComponent;
