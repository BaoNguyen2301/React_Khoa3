import React, { useState } from 'react';

export const DemoHookUseState = () => {

    const [state, setState] = useState({ like: 0 })

    return (
        <div>
            <div className="card text-left">
                <img className="card-img-top" src="holder.js/100x180/" alt />
                <div className="card-body">
                    <h4 className="card-title">Title</h4>
                    <p style={{ color: 'red' }} className="card-text">Like: ({state.like}) <i class="fa fa-thumbs-up"></i></p>
                    <button onClick={() => {
                        setState({ like: state.like + 1 })
                    }} className='btn btn-primary'>Like</button>
                </div>
            </div>
        </div>
    )
}
