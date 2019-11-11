import React, {useEffect, useState, useRef} from 'react';
import {TweenMax, Power3} from "gsap";
import './styles.scss'

const UnderstandAnimation = () => {

    const [expand, setExpand] = useState(false);

    const handleExpand = (e) => {
            TweenMax.to(e.target, .8, { scale: 1.3, ease: Power3.easeOut});
            setExpand(true);
    }

    const handleShrink = (e) => {
        TweenMax.to(e.target, .8, {scale: 1, ease: Power3.easeOut});
        setExpand(false);
    }

    let circleWrap = useRef(null);
    let circleYellow = useRef(null);
    let circleRed = useRef(null);
    let circleBlue = useRef(null);

    useEffect(() => {
        TweenMax.to(circleWrap , 0, {css: { visibility :'visible'}});
        TweenMax.staggerFrom([circleYellow, circleBlue, circleRed], .8, {opacity: 0, x: 40, ease: Power3.easeOut}, .2)
        // TweenMax.from(circleYellow, .8, {opacity: 0, x: 40, ease: Power3.easeOut});
        // TweenMax.from(circleBlue, .8, {opacity: 0, x: 40, ease: Power3.easeOut, delay: .2});
        // TweenMax.from(circleRed, .8, {opacity: 0, x:40, ease: Power3.easeOut, delay: .4});
    }, [])

    return (
        <div className="circle-wrapper" ref={el => circleWrap = el}>
            <div className="circle circle--yellow" onClick={!expand ? handleExpand : handleShrink} ref={el => circleYellow = el}></div>
            <div className="circle circle--blue" onClick={!expand ? handleExpand : handleShrink} ref={el => circleBlue = el}></div>
            <div className="circle circle--red" onClick={!expand ? handleExpand : handleShrink} ref={el => circleRed = el}></div>
        </div>
    )
}

export default UnderstandAnimation;
