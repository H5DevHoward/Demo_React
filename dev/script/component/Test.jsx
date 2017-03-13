import React from 'react';

class App1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: props.data,
        };
    }

    counter() {
        this.setState((prevState, props) => {
            return {counter: prevState.counter + 1};
        });
        this.props.counter(this.props.data + 1);
    }

    render() {
        return (
            <button onClick={this.counter.bind(this)}>
                {this.state.counter}
            </button>
        );
    }
}


export default class Test extends React.Component {
    constructor() {
        super();
        this.state = {
            total: 0,
            counter1: 0,
            counter2: 0,
        };
    }

    handleCounter1(value) {
        this.setState({
            counter1: value,
        });
    }

    handleCounter2(value) {
        this.setState({
            counter2: value,
        });
    }

    render() {
        this.state.total = this.state.counter1 + this.state.counter2;

        return (
            <div>
                <p>
                    {this.state.total}
                </p>

                <App1
                    counter={this.handleCounter1.bind(this)}
                    data={this.state.counter1} />
                <App1
                    counter={this.handleCounter2.bind(this)}
                    data={this.state.counter2} />
            </div>
        );
    }
}
