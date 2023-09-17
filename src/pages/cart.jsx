import React from 'react'
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { clearcart, deletefromcart } from '../rtk/cartslices/cart-slice';
function Cart() {
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch();
  const totalprice = cart.reduce((acc, product) => {
    acc += product.price * product.quntity;
    return acc;
  }, 0)
  return (
    <div>
      <div className="container">
        <div className="row mt-5 mb-5">
          <div className="col-lg-12">
            <h4 className='text-center fw-bold'>welcome to your<span style={{ color: 'orangered', paddingLeft: '10px' }}>cart</span></h4>
          </div>
          <hr />
          <button className='fs-5 p-2 fw-600' style={{
            backgroundColor: 'orangered',
            borderRadius: '10px', outline: 'none', color: 'white', border: '3px solid white',
            width: '200px'
          }} onClick={() => dispatch(clearcart())}> clear cart</button>
        </div>
        <div className="col-lg-12 mb-4">
          <h4 className='text-capitalize'>total price : <span style={{color:'gray'}}>{totalprice.toFixed(2)}$</span>  </h4>
        </div>
        <div className="row">
          <div className="col-lg-12 mb-5">
            <Table className="mb-5" striped bordered hover>
              <thead>
                <tr>
                  <th>id</th>
                  <th>title</th>
                  <th>image</th>
                  <th>price</th>
                  <th>quntity</th>
                  <th>actions</th>
                </tr>
              </thead>
              <tbody>

                {
                  cart.map((product) => {
                    return (
                      <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.title}</td>
                        <td><img src={product.image01} alt={product.title} style={{ width: '100px', height: '100px' }} /></td>
                        <td>{product.price}</td>
                        <td>{product.quntity}</td>
                        <td>{product.category}</td>
                        <td><button className='btn btn-danger' onClick={() => dispatch(deletefromcart(product))}>delete</button></td>
                      </tr>
                    )
                  })
                }

              </tbody>
            </Table>
          </div>


        </div>
      </div>
    </div>

  )
}

export default Cart