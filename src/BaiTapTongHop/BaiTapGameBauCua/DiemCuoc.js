import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function DiemCuoc(props) {

  const dispatch = useDispatch()

  const tongDiem = useSelector(state => state.BaiTapBauCuaReducer.tongDiem);

  return (
    <div>
      <h3 style={{fontFamily: 'Pony', color: 'green'}} className='text-center display-4'>BÀI TẬP GAME BẦU CUA</h3>
      <div className='text-center mt-5'>
        <span style={{fontSize: '20px', borderRadius: '5%'}} className='p-3 text-white bg-danger'>Tiền thưởng: <span className='text-warning'>{tongDiem.toLocaleString()}$</span></span>
      </div>
      <div className='text-center mt-5'>
        <button onClick={()=>{
          dispatch({
            type: 'CHOI_LAI'
          })
        }} style={{fontSize: '20px', borderRadius: '5%', border: 'none'}} className='p-2 text-white bg-success'>Chơi lại</button>
      </div>
    </div>
  )
}
