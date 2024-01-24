import React, { Fragment } from 'react'
import { useSpring, animated } from 'react-spring';

export default function XucXac(props) {

  let { xucXacItem } = props;

  const [style, set] = useSpring(() => ({
    from: { xyz: [0, 0, 0] },
    to: { xyz: [360, 360, 360] },
    config: { duration: 300 },
    reset: true
  }))

  set({
    from: { xyz: [0, 0, 0] },
    to: { xyz: [360, 360, 360] }
  })

  return (
    <Fragment>
      <div className='scene ml-5'>
        <animated.div className='cube' style={{ transform: style.xyz.interpolate((x, y, z) => `translateZ(-25px) rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`) }}>
          <div className='ml-3 cube__face front'>
            <img style={{ width: '100%' }} src={xucXacItem.hinhAnh} alt={xucXacItem.hinhAnh}></img>
          </div>
          <div className='ml-3 cube__face right'>
            <img style={{ width: '100%' }} src='./img/GameBauCua/bau.png' alt={xucXacItem.hinhAnh}></img>
          </div>
          <div className='ml-3 cube__face back'>
            <img style={{ width: '100%' }} src='./img/GameBauCua/nai.png' alt={xucXacItem.hinhAnh}></img>
          </div>
          <div className='ml-3 cube__face left'>
            <img style={{ width: '100%' }} src='./img/GameBauCua/tom.png' alt={xucXacItem.hinhAnh}></img>
          </div>
          <div className='ml-3 cube__face top'>
            <img style={{ width: '100%' }} src='./img/GameBauCua/ca.png' alt={xucXacItem.hinhAnh}></img>
          </div>
          <div className='ml-3 cube__face bottom'>
            <img style={{ width: '100%' }} src='./img/GameBauCua/cua.png' alt={xucXacItem.hinhAnh}></img>
          </div>
        </animated.div>
      </div>
    </Fragment>

  )
}
