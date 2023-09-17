import React from 'react'
import logo from '../images/res-logo.png'
import { Link } from 'react-router-dom'
import '../css/footer.css'





function Footer() {
  return (
    <div className='footer'>
      <div className='container'>
        <div className="row">
          <div className="col-lg-3 col-md-6 logo">
            <img src={logo} alt='logo' />
            <h4 className='heading'>AYS resturtant</h4>
            <p className='text'>   we are a tech store that you can find all you want from out store by one click ,
              we create (ays) store in 2022 and we have many products that you and every one need in most time,
              in his day and we have more than you need.</p>
          </div>
          <div className="col-lg-3 col-md-6">
            <h3 className='heading-2'>quick links</h3>
            <div className="linkss">
            <Link to='/'>home</Link>
            <Link to='/contact'>contact</Link>
            <Link to='/allfood'>ourfoods</Link>
            <Link to='/cart'>cart</Link>
            <Link to='/login'>login</Link>
            </div>
           
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className='heading-2'>login now</h4>

            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label" style={{fontSize:'17px',fontWeight:'600'}}>Email address</label>
              <input type="email" className="form-control fw-blod" id="exampleInputEmail1" aria-describedby="emailHelp"style={{border:'none',backgroundColor:'gray'}}  />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label" style={{fontSize:'17px',fontWeight:'600'}}>Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" style={{border:'none',backgroundColor:'grey'}} />
            </div>

            <button type="submit" className="btn btn-outline-primary px-5">login</button>
          </div>
          <div className="col-lg-3 col-md-6">
            <h3 className='heading-2'>information</h3>
            <h5 className='heading'>delivery :(<span style={{fontFamily:'cursive',color:'black',fontSize:'17px'}}>suterday-tuseday</span>)</h5>
            <h6>11:00am to 12:00am</h6>
            <h5 className='heading'>delivery:(<span  style={{fontFamily:'cursive',color:'black',fontSize:'17px'}}>wensday-thursday</span>)</h5>
            <h6>2:00pm to 12:00am</h6>
            <h5 className='heading'>delivery: (<span  style={{fontFamily:'cursive',color:'black',fontSize:'17px'}}>friday</span>)</h5>
            <h6 >offline</h6>
          </div>
        </div>
        <div className="row">
          <h4 className='end'>copy right: Ahmed yasser saad</h4>
        </div>
      </div>
    </div>
  )
}

export default Footer