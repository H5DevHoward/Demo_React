import React from 'react';
import '../../style/_NavMenuComponent.scss';
import classNames from 'classnames';

// const items = [
//     'Home',
//     'Projects',
//     'Services',
//     'Contact',
// ];
// class NavMenuComponent extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             activeIndex: 0,
//         };
//     }
//
//     handleSelect(i) {
//         this.setState({
//             activeIndex: i,
//         });
//     }
//
//     render() {
//         const activeIndex = this.state.activeIndex;
//         const listItems = items.map((item, i) =>
//             <a
//                 href="#"
//                 key={i.toString()}
//                 className={activeIndex === i ? 'active' : ''}
//                 onClick={this.handleSelect.bind(this, i)}>{item}
//             </a>
//         );
//
//         return (
//             <section>
//                 <nav>
//                     {listItems}
//                 </nav>
//                 <p>You chose <b>{items[this.state.activeIndex]}</b></p>
//             </section>
//         );
//     }
// }


const items = [
    ['Home', 'item0'],
    ['Projects', 'item1'],
    ['Services', 'item2'],
    ['Contact', 'item3'],
];
class NavMenuComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
        const listItems = items.map((item, i) =>
            <a
                href="#"
                key={i.toString()}
                className={classNames(item, [{active: activeIndex === i}])}
                onClick={this.handleSelect.bind(this, i)}>{item[0]}
            </a>
        );

        return (
            <section>
                <nav>
                    {listItems}
                </nav>
                <p>You chose <b>{items[this.state.activeIndex][0]}</b></p>
            </section>
        );
    }
}

export default NavMenuComponent;
