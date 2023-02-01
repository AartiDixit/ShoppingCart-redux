import React from 'react'
import { useSelector } from 'react-redux';
import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart,resetCart } from '../actions/cartActions';
import Home from './Home';


function Cart() {
    const[total,setTotal]=useState(0);
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
  
    const sum = cart.reduce((accumulatur, current) => {
      return accumulatur + current.price;
    }, 0);
  
    function handleRemoveFromCart(id){
      console.log(id);
      dispatch(removeFromCart(id));
    }
    function handlerCheckout(){
      // console.log(id);
     
      dispatch(resetCart());
      alert("Do You want to remove products from cart ?")
    }
    
    
    return (
      <div>
        
  
          <h2 className='App'>My Cart</h2>
          <div className="mainbox">
          {cart.length==0?<p>No item in cart</p>:null}
        <div className="items">
        {cart.map((data)=>{
              return (<div className="itembox">
                  <div className="image"><img className='img' src={data.images[0]} /></div>
                  <div className="title">Title :{data.title.substring(1, 10)}</div>
                  <div className="price"> Price :$ {data.price}</div>
                  <button className='button'  onClick={()=>handleRemoveFromCart(data.id)}>Remove from Cart</button>
              </div> )     
        })
        }
        </div>
       
        <div className="sidebox">
        <h3 className='head'>checkout list</h3>
        <ol>
        {cart.map((data)=>{
         
              return (
                
         
            <li>{data.title}: <span className='prices'>{data.price}</span></li>
            )
        })
      }
          </ol>
          
          <hr />
          <h5>total:   <span className='total'>{sum}</span></h5> 
          
          <button  className='check-btn' onClick={handlerCheckout}>Click To Checkout</button>
        </div>
        
      </div>
      </div>
    )
  }
  
  export default Cart
  