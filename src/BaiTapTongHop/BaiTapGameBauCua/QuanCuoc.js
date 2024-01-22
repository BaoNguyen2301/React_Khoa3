import React from 'react'

export default function QuanCuoc(props) {
  let {quanCuoc} = props;
  return (
    <div className='mt-3 text-center'>
      <img src={quanCuoc.hinhAnh} style={{ width: '200px' }} alt={quanCuoc.hinhAnh}></img>
      <div className='bg-success mt-2 mx-auto pb-2' style={{ borderRadius: '10px', width: '200px' }}>
        <button className='btn btn-danger mr-3' style={{ border: '2px solid white' }}>+</button>
        <span style={{ fontSize: 25, color: 'yellow' }}>{quanCuoc.diemCuoc}</span>
        <button className='btn btn-danger ml-3' style={{ border: '2px solid white' }}>-</button>
      </div>
    </div>
  )
}
