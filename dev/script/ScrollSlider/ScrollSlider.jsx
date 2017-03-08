import React, {Component} from 'react';
import classNames from 'classnames';

import 'swiper/dist/css/swiper.min.css';
import scss from './ScrollSlider.scss';

export default class ScrollSlider extends Component {
    componentDidMount() {
        System.import('./_AnimatedComponentRuntime.jsx').then(runtime => {
            runtime.didMount.call(this);
        });
    }

    componentWillUnmount() {
        System.import('./_AnimatedComponentRuntime.jsx').then(runtime => {
            runtime.willUnmount.call(this);
        });
    }

    render() {
        return (
            <div className="scroll-slider">
                <header></header>

                <div className="wrapper">
                    <div className="part part-scroll">
                        start
                    </div>

                    <div className="part part-slider">

                        <div
                            className="pin-box pos0"
                            ref={ele => {
                                this.pinBox = ele;
                            }}>
                            <div className="swiper-container">
                                <div
                                    className="swiper-wrapper"
                                    ref={ele => {
                                        this.swiperWrapper = ele;
                                    }}>
                                    <div className="swiper-slide">slide 1 Sdd Asdada AAAAwewqeq qweqwe</div>
                                    <div className="swiper-slide">Slide 2</div>
                                    <div className="swiper-slide">Slide 3</div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="part part-scroll">
                        start
                    </div>
                </div>

                <footer></footer>
            </div>
        );
    }
}
