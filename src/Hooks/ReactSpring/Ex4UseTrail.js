import React, { useState } from 'react';
import { useTrail, animated } from 'react-spring';


const items = ['Lorem', 'ipsum', 'dolor', 'sit'];


export default function Ex4UseTrail() {

  const [open, setOpen] = useState(true);

  const trail = useTrail(items.length, {// useTrail thi chay tung item, UseSprings thi chay dong loat
      config: { mass: 5, tension: 2000, friction: 200 },
      opacity: open ? 1 : 0,
      x: open ? 0 : 20,
      height: open ? 110 : 0,
      from: { opacity: 0, x: 20, height: 0 },
  })

  return (
    <div>
      <button onClick={() => { setOpen(!open) }} className='btn btn-primary'>Click</button>
      {trail.map((propsUseSpring, index) => {
        return <animated.h1 key={index} style={propsUseSpring}>
          {items[index]}
        </animated.h1>
      })}
    </div>
  )
}
