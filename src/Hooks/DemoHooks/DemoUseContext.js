import React, {useContext} from 'react'
import {context} from '../DemoHooks/Context/ContextProvider'

let arrProduct = [
  { id: 1, name: 'iphone', price: 1000},
  { id: 2, name: 'iphoneX', price: 2000},
  { id: 3, name: 'iphoneSE', price: 3000},
]


export default function DemoUseContext() {

  // let cartReducer = useContext(context);
  let {cartReducer} = useContext(context);

  let [cart, dispatch] = cartReducer;
  console.log(cartReducer)
  console.log(cart)

  const addToCart = (itemClick) => {
    const action = {
      type: 'addToCart',
      itemClick
    }
    dispatch(action)
  }

  return (
    <context className='container mt-5'>
      <div className='row'>
        {arrProduct.map((item, index) => {
          return <div className='col-4' key={index}>
            <div className="card text-left">
              <img className="card-img-top" src="holder.js/100px180/" alt='123' />
              <div className="card-body">
                <h4 className="card-title">{item.name}</h4>
                <p className="card-text">{item.price}</p>
                <button onClick={()=>{addToCart(item)}} className='btn btn-success'>Add to cart</button>
              </div>
            </div>
          </div>
        })}
      </div>

      <h3>Gio Hang</h3>
      <table className='table'>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>price</th>
            <th>quantity</th>
            <th>total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => {
            return <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <td>{item.quantity * item.price}</td>
              <td><button className='btn btn-danger'>X</button></td>
            </tr>
          })}
        </tbody>
      </table>
    </context>
  )
}
