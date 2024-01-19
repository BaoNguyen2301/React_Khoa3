import React, {useState, useMemo} from 'react'
import ChildUseMemo from './ChildUseMemo';

export default function DemoHookUseMemo(props) {

    const [like, setLike] = useState(1)
    const cart = [
        {id: 1, name: 'iphone', price: 1000},
        {id: 2, name: 'iphoneX', price: 2000},
        {id: 3, name: 'iphoneSE', price: 3000},
    ];

    const cartMemo = useMemo(()=> cart, []);

    return (
        <div>
            <div className="card text-left">
                <img className="card-img-top" src="holder.js/100x180/" alt = "12" />
                <div className="card-body">
                    <h4 className="card-title">Title</h4>
                    <p style={{ color: 'red' }} className="card-text">Like: ({like}) <i class="fa fa-thumbs-up"></i></p>
                    <button onClick={() => {
                        setLike(like + 1)
                    }} className='btn btn-primary'>Like</button>
                </div>
                <ChildUseMemo cart= {cartMemo}/>
            </div>
        </div>
    )
}
