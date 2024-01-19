import React, { useEffect, useState } from 'react'
import { ChildUseEffect } from './ChildUseEffect';

export const DemoHookUseEffect = () => {

    const[number,setNumber] = useState(1);

    const [love, setLove] = useState(1);

    // // ham chay sau khi render thay cho didmount va didupdate trong moi truong hop
    // useEffect(()=>{
    //     console.log('test')
    // })

    //Cach viet thay the cho componentDidMount
    useEffect(()=>{
        console.log('didmount')
    },[])
    //Cach viet thay the cho componentDidUpdate
    useEffect(()=>{
        console.log('didUpdate')
    },[number])//number la gia tri thay doi sau khi render thi UseEffect nay se chay


    console.log('render')

    return (
        <div>
             <div className="card text-left">
                <img className="card-img-top" src="holder.js/100x180/" alt="123" />
                <div className="card-body">
                    <h4 className="card-title">Title</h4>
                    <p style={{ color: 'red' }} className="card-text">Like: ({number}) <i class="fa fa-thumbs-up"></i></p>
                    <button onClick={() => {
                        setNumber(number + 1)
                    }} className='btn btn-primary'>Like</button>
                    <br></br>
                    <button onClick={() => {
                        setLove(love + 1)
                    }} className='btn btn-primary'>Love</button>
                </div>
            </div>
            {love === 1 ? <ChildUseEffect/> : ''}
        </div>
    )
}
