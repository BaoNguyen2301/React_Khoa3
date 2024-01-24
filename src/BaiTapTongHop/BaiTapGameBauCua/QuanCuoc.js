import React from 'react'
import { useDispatch } from 'react-redux';
import { useSpring, animated } from 'react-spring';

export default function QuanCuoc(props) {

  const dispatch = useDispatch();

  const [propsPlus,setPlus] = useSpring(()=>({
    from: {scale: .75},
    to: {scale: 1},
    reset: true,
  }))

  const [propsMinus,setMinus] = useSpring(()=>({
    from: {scale: .75},
    to: {scale: 1},
    reset: true,
  }))

  let {quanCuoc} = props;
  return (
    <div className='mt-3 text-center'>
      <img src={quanCuoc.hinhAnh} style={{ width: '200px' }} alt={quanCuoc.hinhAnh}></img>
      <div className='bg-success mt-2 mx-auto pb-2' style={{ borderRadius: '10px', width: '200px' }}>
        <animated.button style={{ border: '2px solid white', transform: propsPlus.scale.interpolate(scale=> `scale(${scale})`) }} onClick={()=>{
          setPlus({
            from: {scale: .75},
            to: {scale:1},
          })
          dispatch({
            type: 'DAT_CUOC_BAU_CUA',
            quanCuoc,
            tangGiam: true
          })
        }} className='btn btn-danger mr-3'>+</animated.button>

        <span style={{ fontSize: 25, color: 'yellow' }}>{quanCuoc.diemCuoc}</span>

        <animated.button style={{ border: '2px solid white', transform: propsMinus.scale.interpolate(scale => `scale(${scale})`) }} onClick={()=>{
          setMinus({
            from: {scale: .75},
            to: {scale: 1}
          })

          dispatch({
            type: 'DAT_CUOC_BAU_CUA',
            quanCuoc,
            tangGiam: false
          })
        }} className='btn btn-danger ml-3' >-</animated.button>
      </div>
    </div>
  )
}
