import React from 'react'
import { useSprings, animated } from 'react-spring';

export default function Ex3UseSpring() {

    const arrOpacity = [
        { opacity: 0.1, color: 'red', content: 'one', num: 100 },
        { opacity: 0.25, color: 'blue', content: 'two', num: 200 },
        { opacity: 0.5, color: 'green', content: 'three', num: 300 },
        { opacity: 0.75, color: 'purple', content: 'four', num: 400 },
        { opacity: 1, color: 'pink', content: 'five', num: 500 }
    ];

    const propsAniUseSPrings = useSprings(arrOpacity.length, arrOpacity.map((item) => {
        return {
            from: { opacity: 0, color: 'black', content: '', num: 0 },
            to: { opacity: item.opacity, color: item.color, content: item.content, num: item.num },
            config: { duration: 2000 }
        }
    }))

    let renderAni = (props) =>{
        let resultAni = [];
        for( let key in props){
            if(key === 'content' || key === "num"){
                resultAni.push(
                    <animated.div style={props}>
                        {props[key]}
                    </animated.div>
                )
            }
        }
        return resultAni;
    }

    return (
        <div>
            {propsAniUseSPrings.map((props, index) => {
                return <div key={index}>
                    {renderAni(props)}
                </div>
            })}
        </div>
    )
}
