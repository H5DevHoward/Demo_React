import {TweenMax} from 'gsap';
import ScrollMagic from 'scrollmagic';
import 'imports?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import 'imports?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';

export const didMount = function() {
    this.controller = new ScrollMagic.Controller();

    this.scene0 = new ScrollMagic.Scene({
        triggerElement: this.show,
        triggerHook: 0,
    })
    .setPin(this.bg, {
        pushFollowers: false,
    })
    // .addIndicators({
    //     name: 'bg',
    // })
    .addTo(this.controller);


    this.scene1 = new ScrollMagic.Scene({
        triggerElement: this.item1,
    })
    .setClassToggle('.bg-warpper', 'pos0')
    // .addIndicators({
    //     name: 'item1',
    // })
    .addTo(this.controller);

    this.scene2 = new ScrollMagic.Scene({
        triggerElement: this.item2,
    })
    .setClassToggle('.bg-warpper', 'pos1')
    // .addIndicators({
    //     name: 'item2',
    // })
    .addTo(this.controller);

    this.scene3 = new ScrollMagic.Scene({
        triggerElement: this.item3,
    })
    .setClassToggle('.bg-warpper', 'pos2')
    // .addIndicators({
    //     name: 'item3',
    // })
    .addTo(this.controller);

    this.scene4 = new ScrollMagic.Scene({
        triggerElement: this.item4,
    })
    .setClassToggle('.bg-warpper', 'pos3')
    // .addIndicators({
    //     name: 'item4',
    // })
    .addTo(this.controller);


    let bgHeight, duration;

    function calcHeight(self) {
        bgHeight = self.bg.clientHeight;
        duration = self.item1.clientHeight + self.item2.clientHeight + self.item3.clientHeight;

        self.scene0.duration(duration);
        self.scene1.triggerHook(bgHeight / window.innerHeight);
        self.scene1.duration(self.item1.clientHeight);
        self.scene2.triggerHook(bgHeight / window.innerHeight);
        self.scene3.triggerHook(bgHeight / window.innerHeight);
        self.scene4.triggerHook(bgHeight / window.innerHeight);
    }

    window.addEventListener('load', () => {
        calcHeight(this);
    });
    window.addEventListener('resize', () => {
        calcHeight(this);
    });
};

export const willUnmount = function() {
    this.controller.destroy();
};
