import Swiper from 'swiper';
import {TweenMax} from 'gsap';
import ScrollMagic from 'scrollmagic';
import 'imports?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';

export const didMount = function() {
    const length = this.swiperWrapper.children.length;
    const step = 1 / length;
    let inPin = false;
    let progress, isDown, targetIndex, target;

    function updateDuration(self) {
        self.scene.duration(length * self.swiperWrapper.children[0].clientHeight);
    }

    function getOffset(el) {
        const box = el.getBoundingClientRect();

        return {
            top: box.top + window.pageYOffset - document.documentElement.clientTop,
            left: box.left + window.pageXOffset - document.documentElement.clientLeft,
        };
    }

    function mouseWheelHandler(self, e) {
        if (self.mySwiper.animating) {
            e.preventDefault();

            return;
        }

        if (inPin) {
            progress = self.scene.progress();
            // const delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
            // if (delta === -1) isDown = true;
            // if (delta === 1) isDown = false;

            const isFF = false || e.detail;
            const scrollLength = isFF ?
                e.detail * 90 : -e.wheelDelta * 0.75;
            isDown = scrollLength > 0;

            if (self.mySwiper.isBeginning && !isDown) {
                return;
            }

            if (self.mySwiper.isEnd && isDown) {
                return;
            }

            targetIndex =
                isDown ? self.mySwiper.activeIndex + 1 : self.mySwiper.activeIndex - 1;

            target =
                getOffset(document.getElementsByClassName('scrollmagic-pin-spacer')[0]).top + self.swiperWrapper.children[0].clientHeight * targetIndex;

            if (isDown && targetIndex === self.mySwiper.slides.length - 1) {
                target = target + self.swiperWrapper.children[0].clientHeight - 118;
            }

            TweenMax.to('html,body', .5, {
                scrollTop: target,
            });
        }
    }

    window.addEventListener('load', () => {
        this.mySwiper = new Swiper('.swiper-container', {
            direction: 'vertical',
            simulateTouch: false,
            speed: 1000,
        });

        window.mySwiper = this.mySwiper;

        this.controller = new ScrollMagic.Controller();
        this.scene = new ScrollMagic.Scene({
            offset: -118,
            triggerElement: '.part-slider',
            triggerHook: 0,
            duration: length * this.swiperWrapper.children[0].clientHeight,
        })
        .on('progress', e => {
            progress = e.progress;
            let i = 0;

            for (; i < length; ++i) {
                if (i * step < progress && progress <= (i + 1) * step) {
                    break;
                }
            }


            if (i === length) i = 0;

            if (this.mySwiper.activeIndex !== i) {
                this.mySwiper.slideTo(i);

                this.pinBox.classList.remove('pos0', 'pos1', 'pos2');
                this.pinBox.classList.add(`pos${i}`);
            }
        })
        .on('enter', () => {
            inPin = true;
        })
        .on('leave', () => {
            inPin = false;
        })
        .setPin('.pin-box', {
            // pushFollowers: false,
        })
        .addTo(this.controller);

        // updateDuration(this);
    });
    window.addEventListener('resize', () => {
        updateDuration(this);
    });
    window.addEventListener('mousewheel', e => {
        mouseWheelHandler(this, e);
    });
    window.addEventListener('DOMMouseScroll', e => {
        mouseWheelHandler(this, e);
    });
};

export const willUnmount = function() {
    this.controller.destroy();
};
