import React from 'react'
import XucXac from './XucXac'
import { useSelector, useDispatch } from 'react-redux'


export default function DanhSachXucXac(props) {

  const dispatch = useDispatch();

  const mangXucXac = useSelector(state => state.BaiTapBauCuaReducer.mangXucXac)

  return (
    <div className='d-flex flex-column' style={{ marginTop: 0, marginLeft: 80 }}>
      <div className='bg-white m-auto' style={{ width: 300, height: 300, borderRadius: '50%' }}>
        <div className='row'>
          <div className='col-12 text-center' style={{ marginLeft: 80 }}>
            <XucXac xucXacItem = {mangXucXac[0]}/>
          </div>
          <div className='col-6 text-center' style={{ paddingLeft: 50 }}>
            <XucXac xucXacItem = {mangXucXac[1]}/>
          </div>
          <div className='col-6 text-center' style={{ paddingLeft: 0 }}>
            <XucXac xucXacItem = {mangXucXac[2]}/>
          </div>
        </div>
      </div>
      <button onClick={()=>{
        dispatch({
          type: 'XOC'
        })
      }} className='btn btn-success mt-3' style={{ width: 100, margin: 'auto', fontSize: 30 }}>Xốc</button>
    </div>
  )
}
