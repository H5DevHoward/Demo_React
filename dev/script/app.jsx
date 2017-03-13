import 'babel-polyfill';
import '../style/style.scss';

import React from 'react';
import ReactDOM from 'react-dom';

// import AwesomeComponent from './component/AwesomeComponent.jsx';
// import CalculatorComponent from './component/CalculatorComponent.jsx';
// import NavMenuComponent from './component/NavMenuComponent.jsx';
// import EditComponent from './component/EditComponent.jsx';
import ShoppingCartComponent from './component/ShoppingCartComponent.jsx';
// import SearchComponent from './component/SearchComponent.jsx';
// import FilterComponent from './component/FilterComponent.jsx';
import Test from './component/Test.jsx';


// import R29HolidayGiftCuratorComponent from './example01';
// import Swiper from './Swiper';
// import ScrollSlider from './ScrollSlider';

ReactDOM.render(
    <div>
        <ShoppingCartComponent />
        <Test />
    </div>,
    document.getElementById('root')
);
