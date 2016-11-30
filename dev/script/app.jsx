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
