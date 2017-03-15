import 'babel-polyfill';
import '../style/style.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';

// import AwesomeComponent from './component/AwesomeComponent.jsx';
// import CalculatorComponent from './component/CalculatorComponent.jsx';
// import NavMenuComponent from './component/NavMenuComponent.jsx';
// import EditComponent from './component/EditComponent.jsx';
// import ShoppingCartComponent from './component/ShoppingCartComponent.jsx';
// import SearchComponent from './component/SearchComponent.jsx';
// import FilterComponent from './component/FilterComponent.jsx';
// import Test from './component/Test.jsx';


import Counter from './redux/counter';
import counter from './redux/counter/reducers';


// import R29HolidayGiftCuratorComponent from './example01';
// import Swiper from './Swiper';
// import ScrollSlider from './ScrollSlider';


const store = createStore(counter);

const render = () => ReactDOM.render(
    <Counter
        value={store.getState()}
        onIncrement={() => store.dispatch({type: 'INCREMENT'})}
        onDecrement={() => store.dispatch({type: 'DECREMENT'})} />,
    document.getElementById('root')
);
render();
store.subscribe(render);
