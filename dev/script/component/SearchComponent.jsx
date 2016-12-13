import React from 'react';
import '../../style/_SearchComponent.scss';

class SearchComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            initialData: [
                {
                    thumb: 'image/thumb01.jpg',
                    copy: 'What You Need To Know About CSS Variables',
                },
                {
                    thumb: 'image/thumb02.jpg',
                    copy: 'Freebie: 4 Great Looking Pricing Tables',
                },
                {
                    thumb: 'image/thumb03.jpg',
                    copy: '20 Interesting JavaScript and CSS Libraries for February 2016',
                },
                {
                    thumb: 'image/thumb04.png',
                    copy: 'Quick Tip: The Easiest Way To Make Responsive Headers',
                },
                {
                    thumb: 'image/thumb05.png',
                    copy: 'Learn SQL In 20 Minutes',
                },
                {
                    thumb: 'image/thumb06.png',
                    copy: 'Creating Your First Desktop App With HTML, JS and Electron',
                },
            ],
        };
    }

    handleChange(e) {
        this.setState({
            value: e.target.value,
        });
    }

    render() {
        const value = this.state.value;
        const listItems = this.state.initialData.map((item, i) => {
            if (item.copy.toUpperCase().includes(value.toUpperCase())) {
                return (
                    <li key={i}>
                        <a href="#">
                            <img src={item.thumb} />
                        </a>
                        <p>{item.copy}</p>
                    </li>
                );
            }

            return '';
        });

        return (
            <section>
                <div className="bar">
                    <input
                        type="text"
                        placeholder="Enter your search terms"
                        value={value}
                        onChange={this.handleChange.bind(this)} />
                </div>
                <ul>{listItems}</ul>
            </section>
        );
    }
}

export default SearchComponent;
