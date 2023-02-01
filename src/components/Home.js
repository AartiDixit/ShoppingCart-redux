import React from 'react'
import  "./home.css"
import { useDispatch } from 'react-redux';
import {addProductToCart} from '../actions/cartActions';


export default function Home({data}) {
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
      console.log(product);
        dispatch(addProductToCart(product));
      };    
    
  return (
    <div>
        <h2 className='App'>All Items</h2>
      <div className="items">
      {data.map((data)=>{
            return (<div className="itembox">
                <div className="image"><img className='img' src={data.images[0]} /></div>
                <div className="title">Title :{data.title.substring(1, 10)}</div>
                <div className="price"> Price :$ {data.price}</div>
                <button className='button'  onClick={()=>handleAddToCart(data)}>Add To Cart</button>
            </div> )     
      })
      }
    </div>
    </div>
  )
}