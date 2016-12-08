import React from 'react';

const scaleNames = {
    ce: 'Celsius',
    fa: 'Fahrenheit',
};

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>;
    }

    return <p>The water would not boil.</p>;
}
class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.props.onChange(e.target.value);
    }
    render() {
        const value = this.props.value;
        const scale = this.props.scale;

        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input value={value} onChange={this.handleChange} />
            </fieldset>
        );
    }
}

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>;
    }

    return <p>The water would not boil.</p>;
}
function tryConvert(value, convert) {
    const input = parseFloat(value);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;

    return rounded.toString();
}
function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return celsius * 9 / 5 + 32;
}

class CalculatorComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            scale: 'ce',
        };

        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    }
    handleCelsiusChange(value) {
        this.setState({
            scale: 'ce',
            value,
        });
    }
    handleFahrenheitChange(value) {
        this.setState({
            scale: 'fa',
            value,
        });
    }
    render() {
        const scale = this.state.scale;
        const value = this.state.value;
        const celsius = scale === 'fa' ? tryConvert(value, toCelsius) : value;
        const fahrenheit = scale === 'ce' ? tryConvert(value, toFahrenheit) : value;

        return (
            <div>
                <TemperatureInput
                    scale="ce"
                    value={celsius}
                    onChange={this.handleCelsiusChange} />
                <TemperatureInput
                    scale="fa"
                    value={fahrenheit}
                    onChange={this.handleFahrenheitChange} />
                <BoilingVerdict
                    celsius={parseFloat(celsius)} />
            </div>
        );
    }
}

export default CalculatorComponent;
