import React from 'react';
import classNames from 'classnames';
import '../../style/_EditComponent.scss';

class EditComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Edit me.',
            toggle: false,
        };
    }

    handleClick(e) {
        this.setState(prevState => ({
            toggle: !prevState.toggle,
        }));
    }

    componentDidMount() {
        document.addEventListener('click', e => {
            if (e.target !== document.getElementsByClassName('edit')[0]
                && e.target !== document.getElementsByClassName('label')[0]) {
                this.setState({
                    toggle: false,
                });
            }
        });
    }

    handleChange(e) {
        this.setState({
            value: e.target.value,
        });
    }

    render() {
        const value = this.state.value;
        const divClassName = classNames({
            tooltip: true,
            active: this.state.toggle,
        });

        return (
            <section>
                <div className={divClassName}>
                    <input
                        value={value}
                        className="edit"
                        onChange={this.handleChange.bind(this)}>
                    </input>
                </div>
                <p>
                    <span className="label" onClick={this.handleClick.bind(this)}>
                        {value}
                    </span>
                </p>
            </section>
        );
    }
}

export default EditComponent;
