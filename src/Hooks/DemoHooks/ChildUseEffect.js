import React, { useEffect, useState } from 'react'

export const ChildUseEffect = () => {

    const [num, setNum] = useState(1)

    console.log('render child');

    useEffect(() => {
      //Viet cho didUpdate
        console.log('didUpdateChild')
      return () => {
        console.log('willUnMount')
      }
    }, [num])
    

    return (
        <div>
            <textarea></textarea>
            <span><button className='btn btn-success'>Gui</button></span>
        </div>
    )
}
