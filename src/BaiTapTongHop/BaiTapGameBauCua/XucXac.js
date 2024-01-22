import React from 'react'

export default function XucXac(props) {

  let {xucXacItem} = props;

  return (
    <div>
      <img style={{ width: 50 }} src={xucXacItem.hinhAnh} alt={xucXacItem.hinhAnh}></img>
    </div>
  )
}
