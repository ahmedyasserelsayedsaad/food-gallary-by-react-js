import React from 'react'
import Data from '../myData/Data';
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { Col } from 'react-bootstrap';
import '../css/detiles.css'
import { useDispatch, useSelector } from 'react-redux';
import { addtocart, deletefromcart } from '../rtk/cartslices/cart-slice';

function FoodDet() {
  const cart=useSelector((state)=>state.cart);
  const dispatch=useDispatch()
const proid=useParams()
const productdetiles=Data.filter((pro)=>pro.id==proid.id);
const product=productdetiles[0]
const [previewImg, setPreviewImg] = useState(product.image01);
const [adding,setAdding]=useState('add to cart')
const addingcart=(product)=>{
if(adding==='add to cart'){
  setAdding('remove to cart');
  dispatch(addtocart(product))
}else{
  setAdding('add to cart')
  dispatch(deletefromcart(product))
}
}
  return (
       <div>
      <div className="container">
        <div className="row mt-5 mb-5">
        <Col lg="2" md="2">
              <div className="product__images ">
                <div
                  className="img__item mb-3"
                  onClick={() => setPreviewImg(product.image01)}
                >
                  <img src={product.image01} alt="" className="w-50" />
                </div>
                <div
                  className="img__item mb-3"
                  onClick={() => setPreviewImg(product.image02)}
                >
                  <img src={product.image02} alt="" className="w-50" />
                </div>

                <div
                  className="img__item"
                  onClick={() => setPreviewImg(product.image03)}
                >
                  <img src={product.image03} alt="" className="w-50" />
                </div>
              </div>
            </Col>
       
          <div className="col-lg-4 col-md-4 ">
          <img src={previewImg} alt={product.title} className='w-100'/>
          </div>
          <div className="col-lg-6 ">
            <h2 className='fw-blod' style={{fontWeight:'bold',color:'orangered'}}>{product.title}</h2>
            <hr />
            <h5>{product.category}</h5>
            <h5 style={{fontWeight:'bold',color:'orangered'}}>{product.price}$</h5>
            <p>`{product.desc}`</p>
            <button type="btn" class="det-btn px-5" onClick={()=>addingcart(product)}>{adding}</button>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default FoodDet