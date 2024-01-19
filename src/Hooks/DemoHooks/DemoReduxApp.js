import React, {useState} from 'react';
import { connect, useSelector, useDispatch } from 'react-redux'
import { addCommentAction } from '../../Redux/Actions/FakeBookAction';
export default function DemoReduxApp(props) {

    let comments = useSelector(state => state.FakeBookReducer.comment);

    //lay thong tin ng dung nhap vao
    let [userComment, setUserComment] = useState({
        name: '',
        content: '',
        avatar: ''
    })

    let dispatch = useDispatch();

    const handleChange = (e) => {
        let {value, name} = e.target;
        setUserComment({
            ...userComment,
            [name]: value
        })
    }
    // submit thong tin ng dung len reducer
    const handleComment = (e) => {
        e.preventDefault();

        let usComment = {...userComment, avatar: `https://i.pravatar.cc/50?u=${userComment.name}` }

       

        dispatch(addCommentAction(usComment))
    }

    return (
        <div className='container'>
            <h3>Fakebook App!</h3>
            <div className="card text-left">
                <div className='card-header'>
                    {comments.map((comment, index) => {
                        return <div className='row' key={index}>
                        <div className='col-1'>
                            <img src={comment.avatar} alt={comment.avatar}></img>
                        </div>
                        <div className='col-11 pl-0'>
                            <h6 className='text-danger mt-0'>{comment.name}</h6>
                            <p>{comment.content}</p>
                        </div>
                    </div>
                    })}
                    
                </div>
                <form className="card-body" onSubmit={handleComment}>
                    <div className='form-group'>
                        <h4 className="card-title">Name</h4>
                        <input className='form-control' name='name' onChange={handleChange}></input>
                    </div>
                    <div className='form-group'>
                        <h4 className="card-title">content</h4>
                        <input className='form-control' name='content' onChange={handleChange}></input>
                    </div>
                    <div className='form-group'>
                        <button className='btn btn-success'>Send</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

