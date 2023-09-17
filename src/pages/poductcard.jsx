import React from 'react'
//import Data from '../myData/Data'
import { useSelector,useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addtocart } from '../rtk/cartslices/cart-slice';
const Productcard = (props) => {
    const cart=useSelector((state)=>state.cart)
    const dispatch=useDispatch()

    const { title, id, image01, price } = props.product;
    return (
        <div>
            <div className="container">
                <div class="card mt-5 align-items-center gap-3" style={{width:"15rem"}}>
                   
                    <img src={image01} class="card-img-top cardimg" style={{width:'160px',height:'160px'}} alt="imges"/>
                   
                        <div class="card-body">
                            <h5 class="card-title">
                                <Link to={`/allfoods/${id}`}>{title}</Link>
                                
                            </h5>
                            <div className="info">
                            <p class="card-text">${price}</p>
                            <Link class="btn btn-primary" onClick={()=>dispatch(addtocart(props.product))}>add to cart</Link>
                            </div>
                            
                        </div>
                </div>
            </div>
            <button className='carty'>
        <Link to='/cart'>check your cart <span style={{color:'black'}}>({cart.length})</span></Link>
        </button>
        </div>
    )
}

export default Productcard;