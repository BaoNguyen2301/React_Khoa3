import React from 'react'
import { useSpring, animated } from 'react-spring'
export default function DemoUseSpring(props) {
    const propsAni = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: {duration: 1000}
    })

    const propsAniNumber = useSpring({
        from: {num: 0, color: 'red'},
        to: {num: 1000, color: 'blue'},
        config: {duration: 2000}
    })

    const propsAniScroll = useSpring({
        from: {scroll: 0},
        to: {scroll: 100},
        config: {duration: 1000}
    })



    return <div>
        <h3>opacity</h3>
        <animated.p style={propsAni}>Hello World</animated.p>  
        <h3>Number</h3>
        <animated.p style={{color: propsAniNumber.color}}>{propsAniNumber.num}</animated.p> 
        <h3>Scroll</h3>
        <animated.p></animated.p>     
    </div>
}
