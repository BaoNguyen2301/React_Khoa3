import React from 'react'
import './XucXacItem.css'
import DiemCuoc from './DiemCuoc'
import DanhSachCuoc from './DanhSachCuoc'
import DanhSachXucXac from './DanhSachXucXac'

export default function BaiTapGameBauCua(props) {
    return (
        <div id='BaiTapGameBauCua'>
            <div className='container'>
                <DiemCuoc />
                <div className='row'>
                    <div className='col-8'>
                        <DanhSachCuoc />
                    </div>
                    <div className='col-4'>
                        <DanhSachXucXac />
                    </div>
                </div>
            </div>
        </div>
    )
}

