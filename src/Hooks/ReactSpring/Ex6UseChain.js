import React, {  useState } from 'react'
import { useSpring, useTransition, useChain, animated, useSpringRef } from 'react-spring';

export default function Ex6UseChain() {
    //Tạo 1 useSpring animation	  
    let springRef = useSpringRef();
    let [arrContent, setArrContent] = useState([
        { id: 1, title: 'FrontEndOnline', content: 'cyberlearn' },
        { id: 2, title: 'FrontEndOffline', content: 'cybersoft' },
        { id: 3, title: 'FrontEndTuXa', content: 'cybersoft' }
    ]);
    const propsAnim = useSpring({ opacity: 1, width: '100%', height: '100%', from: { opacity: 0, width: '0%', height: '0%' }, config: { duration: 500 }, ref: springRef })

    //Tạo 1 useTransition
    let transitionRef = useSpringRef();
    const transitions = useTransition(arrContent, {
        from: { transform: 'translate3d(0,-40px,0)' },
        enter: { transform: 'translate3d(0,0px,0)', opacity: 1, width: '100%', height: '100%' },
        leave: { transform: 'translate3d(0,-40px,0)', opacity: 0, width: '100%', height: '0%' },
        config: { duration: 500 },
        ref: transitionRef
    })

    //Kết hợp 2 useSpring
    useChain([springRef, transitionRef], [0, 0.5])
    return <div className="container">
        <animated.div style={propsAnim} >
            {transitions((style, item, index) => {
                return <animated.div key={index} className='bg-dark text-white' style={style}>
                <div className='text-right'>
                    <button onClick={()=>{
                        setArrContent([...arrContent.filter(article => article.id !== item.id)])}} className='btn btn-danger'>X</button>
                </div>
                <h1>{item.title}</h1>
                <p>{item.content}</p>
                </animated.div>
            })}
        </animated.div>
    </div>

}