import React, {Component} from 'react';
import FilterWrapperComponent from './FilterWrapperComponent.jsx';

import '../../style/_FilterComponent.scss';

const initialData = [
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
];

class FilterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nav: [
                {
                    name: '所有分类',
                    items: [
                        ...initialData[0],
                        ...initialData[1],
                        ...initialData[2],
                    ],
                },
                {
                    name: '分类A',
                    items: [
                        ...initialData[0],
                    ],
                },
                {
                    name: '分类B',
                    items: [
                        ...initialData[1],
                    ],
                },
                {
                    name: '分类C',
                    items: [
                        ...initialData[2],
                    ],
                },
                {
                    name: '分类A+B',
                    items: [
                        ...initialData[0],
                        ...initialData[1],
                    ],
                },
                {
                    name: '分类B+C',
                    items: [
                        ...initialData[1],
                        ...initialData[2],
                    ],
                },
                {
                    name: '分类A+C',
                    items: [
                        ...initialData[0],
                        ...initialData[2],
                    ],
                },
            ],
        };
    }

    render() {
        return (
            <section>
                <FilterWrapperComponent data={this.state.nav} />
            </section>
        );
    }
}

export default FilterComponent;
