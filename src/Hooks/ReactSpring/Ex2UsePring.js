import React from 'react'
import { useSpring, animated } from 'react-spring'

export default function Ex2UsePring() {

    const { color, ...props } = useSpring({
        from: { color: [151, 255, 255], fontSize: '15px' },
        to: { color: [139, 69, 19], fontSize: '50px' },
        config: { duration: 2000 }
    })

    const propsAni = useSpring({
        from: {width: '0%', height: '0%', fontSize: '15px'},
        to: async(next, cancel) => {
            await next ({width: '100%', height: '100%', fontSize: '50px'})
            await next ({width: '50%', height: '50%', fontSize: '25px'})
            await next ({width: '100%', height: '100%', fontSize: '50px'})
        },
        config: {duration: 2000}
    })


    return (
        <div>
            <animated.div style={{
                color: color.interpolate((r, g, b) => { return `rgb(${r},${g},${b})` }),
                fontSize: props.fontSize
            }}>Ex2UsePring</animated.div>
            <hr/>
            <animated.div style={propsAni}>
                <span>Hello World</span>
                <p>Welcome to code</p>
            </animated.div>
        </div>
    )
}
