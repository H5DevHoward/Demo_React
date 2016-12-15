import React, {Component} from 'react';
import classNames from 'classnames';
import 'whatwg-fetch';

class ShowCasesComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showFrame2: props.showFrame2,
            showFrame3: props.showFrame3,
        };

        this.handleClickPerson = this.handleClickPerson.bind(this);
        this.handleClickTraits = this.handleClickTraits.bind(this);
    }

    handleClickPerson() {
        this.props.onToggle(false, true, false, [true, false]);
    }

    handleClickTraits() {
        this.props.onToggle(false, false, true, [false, true]);
    }

    render() {
        const data = this.props.data;
        const wrapperClass = classNames({
            'showCase-wrapper': true,
            active: this.props.show,
        });
        const listItems = data.map(item =>
            <div className="showCase-item" key={item.id.$t}>
                <img src={item.gsx$image.$t} />
            </div>
        );

        return (
            <div className={wrapperClass}>
                <div className="showCase-content">
                    {listItems}
                </div>
                <div className="showCase-btn">
                    <div
                        className="show-person"
                        onClick={this.handleClickPerson}>PERSON</div>
                    <div
                        className="show-traits"
                        onClick={this.handleClickTraits}>TRAITS</div>
                </div>
            </div>
        );
    }
}

export default ShowCasesComponent;
