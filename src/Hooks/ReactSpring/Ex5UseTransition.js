import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring';

export default function Ex5UseTransition() {
    const [arrItem, setArrItem] = useState([
        { id: 1, title: 'name', content: 'one' },
        { id: 2, title: 'number', content: 'two' },
        { id: 3, title: 'last name', content: 'three' }
    ])

    const [article, setArticle] = useState({ id: '', title: '', content: '' })

    const propsUseTransition = useTransition(arrItem, {
        from: { transform: 'translate3d(0, -40px, 0)' },
        enter: { transform: 'translate3d(0, 0px, 0)' },
        leave: { transform: 'translate3d(0, -40px, 0)' },
    })

    const renderItem = () => {
        return propsUseTransition((style, item, index) => {
            return <animated.div key={index} className='bg-dark text-white' style={style}>
                <div className='text-right'>
                    <button onClick={()=>{deleteItem(item.id)}} className='btn btn-danger'>X</button>
                </div>
                <h1>{item.title}</h1>
                <p>{item.content}</p>
            </animated.div>
        })
    }

    const deleteItem = (id) => {
        setArrItem([...arrItem.filter(item => item.id !== id) ])
    }

    const handleChange = (e) => {
        let { value, name } = e.target;
        setArticle({
            ...article,
            [name]: value
        })
    }

    const handleSubmit = () => {
        let item = { ...article, id: Date.now() }
        setArrItem([...arrItem, item])
    }
    
    

    return (
        <div className='container'>
            {renderItem()}
            <div className='form-group'>
                <h3>Title</h3>
                <input className='form-control' name='title' onChange={handleChange} />
                <h3>Content</h3>
                <input className='form-control' name='content' onChange={handleChange} />
                <button onClick={handleSubmit} className='btn btn-success mt-2'>Add article</button>
            </div>
        </div>
    )
}
