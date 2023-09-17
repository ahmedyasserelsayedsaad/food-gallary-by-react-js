import React, { useState } from 'react'
import Data from '../myData/Data'
import { Link } from 'react-router-dom'
import '../css/home.css'
import { useRef,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addtocart } from '../rtk/cartslices/cart-slice'





function Allfood() {
const cart =useSelector((state)=>state.cart)
const dispatch=useDispatch();
  const [query,setQuery]=useState('')
  const inpref=useRef(null);
  useEffect(()=>{
    inpref.current.focus();
  },[])
  return (
    <div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-lg-12 mt-5">
            <h3 className='fw-bold '>ALL <span style={{ color: 'orangered', fontSize: '34px' }}>Foods</span></h3>
          </div>
          <div className="row mt-5">
            <input ref={inpref} type='text' className='inp mb-4' 
            placeholder='search by name' 
            style={{ width: '330px',fontWeight:'bold',fontSize:'18px',color:'orangered',border:'4px solid orangered',outline:'none' }}
            onChange={(e)=>setQuery(e.target.value)} />
            <div className="row mb-5 gap-5">
              {
                Data.filter((product)=>product.title.toLowerCase().includes(query))
                .map((product) => (
                  <div className="col-lg-3 col-md-4" key={product.id}>
                    <div class="card mt-5 align-items-center gap-2" style={{ width: "19rem" }}>
                      <img src={product.image01} class="card-img-top cardimg" style={{ width: '160px', height: '160px' }} alt="imges" />
                      <div class="card-body">
                        <h5 class="card-title">
                          <Link to={`/allfoods/${product.id}`}>{product.title}</Link>
                        </h5>
                        <div className="info">
                          <p class="card-text">${product.price}</p>
                          <Link  class="btn btn-primary" onClick={()=>dispatch(addtocart(product))}>Add to cart</Link>
                        </div>

                      </div>
                    </div>
                  </div>

                ))
              }
              {
                Data.filter((product)=>product.title.toLocaleLowerCase().includes(query))
                .map((item) => (
                  <div className="col-lg-3 col-md-4" key={item.id}>
                    <div class="card mt-5 align-items-center gap-2" style={{ width: "19rem" }}>
                      <img src={item.image02} class="card-img-top cardimg" style={{ width: '160px', height: '160px' }} alt="imges" />
                      <div class="card-body">
                        <h5 class="card-title">
                          <Link to={`/allfoods/${item.id}`}>{item.title}</Link>
                        </h5>
                        <div className="info">
                          <p class="card-text">${item.price}</p>
                          <Link  class="btn btn-primary"onClick={()=>dispatch(addtocart(item))}>Add to cart</Link>
                        </div>

                      </div>
                    </div>
                  </div>

                ))
              }
            </div>
          </div>
        </div>
        <button className='carty'>
        <Link to='/cart'>visit your cart <span style={{color:'black'}}>({cart.length})</span></Link>
        </button>
      </div>
      </div>
   
  )
}

export default Allfood