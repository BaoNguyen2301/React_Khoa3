import React from 'react'
import XucXac from './XucXac'
import { useSelector } from 'react-redux'

export default function DanhSachXucXac() {

  const mangXucXac = useSelector(state => state.BaiTapBauCuaReducer.mangXucXac)

  return (
    <div className='d-flex flex-column' style={{ marginTop: 70 }}>
      <div className='bg-white m-auto' style={{ width: 300, height: 300, borderRadius: '50%' }}>
        <div className='row'>
          <div className='col-12 text-center' style={{ marginTop: 75 }}>
            <XucXac xucXacItem = {mangXucXac[0]}/>
          </div>
          <div className='col-6 mt-5' style={{ paddingLeft: 85 }}>
            <XucXac xucXacItem = {mangXucXac[1]}/>
          </div>
          <div className='col-6 mt-5' style={{ paddingLeft: 30 }}>
            <XucXac xucXacItem = {mangXucXac[2]}/>
          </div>
        </div>
      </div>
      <button className='btn btn-success mt-3' style={{ width: 100, margin: 'auto', fontSize: 30 }}>Xốc</button>
    </div>
  )
}
