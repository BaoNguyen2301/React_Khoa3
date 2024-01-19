import React, { useState, useCallback } from 'react'
import ChildUseCallBack from './ChildUseCallBack';


export const DemoHookUseCallBack = (props) => {

  const[like, setLike] = useState(1);

  const renderNotify = () => {
    return `Ban da tha ${like} <i class="fa fa-thumbs-up"></i>`
  }

  const callBackRenderNotidy = useCallback(renderNotify,[like])

  return (
    <div>
      <div className="card text-left">
        <img className="card-img-top" src="holder.js/100x180/" alt="1223" />
        <div className="card-body">
          <h4 className="card-title">Title</h4>
          <p style={{ color: 'red' }} className="card-text">Like: ({like}) <i class="fa fa-thumbs-up"></i></p>
          <button onClick={() => {
            setLike(like + 1)
          }} className='btn btn-primary'>Like</button>
          <small>{renderNotify()}</small>
        </div>
      </div>
      <ChildUseCallBack renderNotify= {callBackRenderNotidy}/>
    </div>
  )
}
