import React from 'react'
import Navbar from '../../Components/Navbar/Index'
import { useDispatch, useSelector } from "react-redux";
import { clearAll, removeProduct } from "../../Redux/Slice/favourites";
import './Index.css'
import { ImBin } from 'react-icons/im';
import { TiCancel } from 'react-icons/ti';

function Index() {
const {products}= useSelector((state)=>state.favourites)
const dispatch = useDispatch();
  return (
    <>
    <Navbar/>
    {
      <div className='homeBody'>
        {products.length>0 && 
        <button className='allBtn' onClick={()=>dispatch(clearAll())}>Delete All <span><TiCancel/></span></button>
        
        }
        {
          products.length==0 &&
          <h1 style={{color:'black'}}>No items yet...</h1>
        }
        

{<div className='card__container'>
    {products.map((product)=>{
      return(
        <div className='card'>
          <div className='card__img'>
            <img className='cardImg' src={`${product.image}`} alt="" />
          </div>
          <div className='card__name'><b>{'Name:'}</b> {product.name}</div>
          <div className='card__price'><b>{'Price:'}</b> {product.current_price} {'$'}  </div>
          <button className='dltBtn' onClick={()=>dispatch(removeProduct(product.id))}>Delete <ImBin/> </button>
        </div>
      )
    })}
      </div>}
      </div>
    }
    
    
    </>
  )
}

export default Index