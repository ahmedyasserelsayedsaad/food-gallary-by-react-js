import React from 'react'
import contact from '../images/contact.avif'
import '../css/contact.css'
import { Link } from 'react-router-dom'
function Contact() {
  return (
    <div>
      <div className="container">
        <div className="row">
         <div className="col-lg-12 mt-5  ">
         <h3 className='text-center text-capitalize fw-bold'>contact <span style={{color:'orangered'}}>us</span></h3>
         <hr />
         </div>
        </div>
        <div className="row mt-5 mb-5">
          <div className="col-lg-6 col-md-6 d-flex justify-content-center align-items-center">
           <img src={contact} alt="contact us" style={{width:'600px',height:'600px'}} />
          </div>
          <div className="col-lg-6 col-md-6">
          <form >
              <div class="mb-3">
                <label for="exampleForm" class="form-label "style={{ color: 'orangered', fontWeight:'500',fontSize:'24px' }}>your name</label>
                <input type="email" class="form-control" id="exampleForm" placeholder="ahmed yasser" 
                style={{outline:'none',borderBottom:'3px solid orangered'}} />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"style={{ color: 'orangered', fontWeight:'500',fontSize:'24px' }}>Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"
                style={{outline:'none',borderBottom:'3px solid orangered'}} />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label"style={{ color: 'orangered', fontWeight:'500',fontSize:'24px' }}>your message box</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"
                style={{outline:'none',borderBottom:'3px solid orangered'}}></textarea>
              </div>
              
              <button type="submit" class="con-btn px-5">send message </button>
            </form>
            <h6 className='mylink mt-4'>please, login first to see your message <span style={{color:'orangered'}}>
             <Link to='/login'> login </Link> </span>
              </h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact