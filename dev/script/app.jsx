import React from 'react';
import ReactDOM from 'react-dom';

// function formatName(user) {
//     return `${user.firstName} ${user.lastName}`;
// }

// const user = {
//     firstName: 'Harper',
//     lastName: 'Perez',
// };

// const element = (
//     <h1>Hello, {formatName(user)}!</h1>
// );


// ReactDOM.render(
//     element,
//     document.getElementById('root')
// );

// class Clock extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {date: new Date()};
//     }
//
//     componentDidMount() {
//         this.timerID = setInterval(
//             () => this.tick(),
//             1000
//         );
//     }
//
//     componentWillUnmount() {
//         clearInterval(this.timerID);
//     }
//
//     tick() {
//         this.setState({
//             date: new Date(),
//         });
//     }
//
//     render() {
//         return (
//             <div>
//                 <h1>Hello, world!</h1>
//                 <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//             </div>
//         );
//     }
// }
//
// ReactDOM.render(
//     <Clock />,
//     document.getElementById('root')
// );

// function Welcome(props) {
//     return <h1>Hello, {props.name}</h1>;
// }

// const element = <Welcome name="Sara" />;
// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );


// function Welcome(props) {
//     return <h1>Hello, {props.name}</h1>;
// }
//
// function App() {
//     return (
//         <div>
//             <Welcome name="Sara" />
//             <Welcome name="Cahal" />
//             <Welcome name="Edite" />
//         </div>
//     );
// }
//
// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// );


// class Toggle extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {isToggleOn: true};

//         this.handleClick = this.handleClick.bind(this);
//     }

//     handleClick() {
//         this.setState(preState => ({
//             isToggleOn: !preState.isToggleOn,
//         }));
//     }

//     render() {
//         return (
//             <button onClick={this.handleClick}>
//                 {this.state.isToggleOn ? 'ON' : 'OFF'}
//             </button>
//         );
//     }
// }

// function App() {
//     return (
//         <div>
//             <Toggle />
//             <Toggle />
//             <Toggle />
//         </div>
//     );
// }

// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// );



// class LoginControl extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {isLoggedIn: false};

//         this.handleLoginClick = this.handleLoginClick.bind(this);
//         this.handleLogoutClick = this.handleLogoutClick.bind(this);
//     }

//     handleLoginClick() {
//         this.setState({
//             isLoggedIn: true,
//         });
//     }

//     handleLogoutClick() {
//         this.setState({
//             isLoggedIn: false,
//         });
//     }

//     render() {
//         const isLoggedIn = this.state.isLoggedIn;
//         let button = null;
//         if (isLoggedIn) {
//             button = <LogoutButton onClick={this.handleLogoutClick} />;
//         } else {
//             button = <LoginButton onClick={this.handleLoginClick} />;
//         }

//         return (
//             <div>
//                 <Greeting isLoggedIn={isLoggedIn} />
//                 The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
//                 {button}
//             </div>
//         );
//     }
// }

// function LoginButton(props) {
//     return (
//         <button onClick={props.onClick}>
//             Login
//         </button>
//     );
// }

// function LogoutButton(props) {
//     return (
//         <button onClick={props.onClick}>
//             Logout
//         </button>
//     );
// }

// function Greeting(props) {
//     const isLoggedIn = props.isLoggedIn;
//     if (isLoggedIn) {
//         return <UserGreeting />;
//     }

//     return <GuestGreeting />;
// }

// function UserGreeting(props) {
//     return <h1>Welcome back!</h1>;
// }

// function GuestGreeting(props) {
//     return <h1>Please sign up.</h1>;
// }

// ReactDOM.render(
//     <LoginControl />,
//     document.getElementById('root')
// );


// function NumberList(props) {
//     const numbers = props.numbers;
//     const listItems = numbers.map(number =>
//         <li key={number.toString()}>
//             {number}
//         </li>
//     );
//     return (
//         <ul>{listItems}</ul>
//     );
// }
// const numbers = [1, 2, 3, 4, 5];
// ReactDOM.render(
//     <NumberList numbers={numbers} />,
//     document.getElementById('root')
// );


// class NameForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
//     handleSubmit(e) {
//         alert(`A name was submitted: ${this.input.value}`);
//         e.preventDefault();
//     }
//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     Name:
//                     <input type="text" ref={input => this.input = input} />
//                 </label>
//                 <input type="submit" value="Submit" />
//             </form>
//         );
//     }
// }
// ReactDOM.render(
//     <NameForm />,
//     document.getElementById('root')
// );


// class FlavorForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             value: 'ccc',
//         };

//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleChange(e) {
//         this.setState({
//             value: e.target.value,
//         });
//     }

//     handleSubmit(e) {
//         alert(`The selected was submitted: ${this.state.value}`);
//         e.preventDefault();
//     }

//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     Pick your favorite La Croix flavor:
//                     <select value={this.state.value} onChange={this.handleChange}>
//                         <option value="aaa">aaa</option>
//                         <option value="bbb">bbb</option>
//                         <option value="ccc">ccc</option>
//                         <option value="ddd">ddd</option>
//                     </select>
//                 </label>
//                 <input type="submit" value="Submit" />
//             </form>
//         );
//     }
// }
// ReactDOM.render(
//     <FlavorForm />,
//     document.getElementById('root')
// );



function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>;
    }

    return <p>The water would not boil.</p>;
}
const scaleNames = {
    ce: 'Celsius',
    fa: 'Fahrenheit',
};
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
class Calculator extends React.Component {
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
ReactDOM.render(
    <Calculator />,
    document.getElementById('root')
);
