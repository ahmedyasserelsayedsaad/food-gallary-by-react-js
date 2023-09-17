import React, { useEffect, useState } from 'react'
import { ListGroupItem, ListGroup } from 'react-bootstrap'
import Util from '../component/util'
import '../css/home.css'
import hero from '../images/hero.png'
import { Link } from 'react-router-dom'
import cate1 from '../images/category-01.png'
import cate2 from '../images/category-02.png'
import cate3 from '../images/category-03.png'
import cate4 from '../images/category-04.png'
import ser1 from '../images/service-01.png'
import ser2 from '../images/service-02.png'
import ser3 from '../images/service-03.png'
import popular1 from '../images/hamburger.png'
import popular2 from '../images/pizza.png';
import popular3 from '../images/bread.png'
import Data from '../myData/Data'
import Productcard from './poductcard'
import whyus from '../images/location.png'
import Testmotional from '../component/testmotional'
import { useSelector } from 'react-redux'

const cate = [
  {
    title: 'fast food',
    imge: cate1
  },
  {
    title: 'pizza',
    imge: cate2
  },
  {
    title: 'ASian food',
    imge: cate3
  },
  {
    title: 'row meat',
    imge: cate4
  },
]

const serv = [{
  image: ser1,
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui magni delectus tenetur autem, sint veritatis!'
},
{
  image: ser2,
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui magni delectus tenetur autem, sint veritatis!'
},
{
  image: ser3,
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui magni delectus tenetur autem, sint veritatis!'
},]

 


function Home() {
  const cart=useSelector((state)=>state.cart)
  const [alldata, setAllData] = useState(Data)
  const[hotpizza,setHotPizza]=useState([]);
  useEffect(()=>{
    const filterdPizza=Data.filter((product)=>product.category==='Pizza');
    const SlicePizza=filterdPizza.slice(0,4);
    setHotPizza(SlicePizza);
  },[])

  const DoFilter = (category) => {
    if (category === 'all') {
      setAllData(Data)
    } else {
      const result = Data.filter((curelm) => {
        return (
          curelm.category === category
        )
      })
      setAllData(result);
    }

  }

  return (
    <Util>
      <div className='home'>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="hero-content">
                <h5 className="mb-3">Easy way to make an order</h5>
                <h1 className="mb-4 hero-title">
                  <span>HUNGRY?</span> Just wait <br /> food at
                  <span> your door</span>
                </h1>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                  magni delectus tenetur autem, sint veritatis!
                </p>

                <div className="hero-btns d-flex align-items-center gap-5 mt-4">
                  <button className="order-btn d-flex align-items-center justify-content-between">
                    Order now
                  </button>

                  <button className="all-foods-btn">
                    < Link to="/allfoods">See all foods</Link>
                  </button>
                </div>

                <div className=" hero-service  d-flex align-items-center gap-5 mt-5 ">
                  <p className=" d-flex align-items-center gap-2 ">
                    No shipping charge
                  </p>

                  <p className=" d-flex align-items-center gap-2 ">
                    100% secure checkout
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="home-logo">
                <img src={hero} alt="hero" />
              </div>
            </div>
          </div>
          <div className="row">
            {
              cate.map((item, index) => {
                return (
                  <div className="col-lg-3 col-md-6" key={index}>
                    <div className="cte">
                      <img src={item.imge} alt="cate" />
                      <h6 className='cate-title'>{item.title}</h6>
                    </div>
                  </div>
                )
              })
            }

          </div>
          <div className="row ">
            <div className="col-md-12 service">
              <div className='service'>
                <h4>What we service ?</h4>
                <h2>Just sit back at home and we will <span>take care</span></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui magni delectus tenetur autem, sint veritatis!</p>
              </div>

            </div>
            {
              serv.map((sere, index) => {
                return (
                  <div className="col-lg-4 justify-content-center d-flex align-items-center" key={index}>
                    <div className='ser-card  align-items-center px-5'>
                      <img src={sere.image} alt="service" srcset="" style={{ width: '120px', height: '120px' }} />
                      <p className='fs-6'>{sere.text}</p>
                    </div>
                  </div>
                )
              })
            }

          </div>
          <div className="row feats">
            <div className="col-lg-12 text-center mt-5">
              <h3 style={{ fontWeight: '700', textTransform: 'capitalize' }}>popular food</h3>
            </div>
            <div className=" mybtn col-lg-12 col-md-12 d-flex justify-content-center gap-4 mt-4">
              <button className='d-flex align-items-center gap-2 ' onClick={() => setAllData(Data)}>all</button>
              <button className='d-flex align-items-center gap-2' onClick={() => DoFilter('Burger')}>
                <img src={popular1} alt="popular" srcset="" />
                <span>burger</span>
              </button>
              <button className='d-flex align-items-center gap-2' onClick={() => DoFilter('Pizza')} > <img src={popular2} alt="popular" srcset="" /><span>pizza</span></button>
              <button className='d-flex align-items-center gap-2' onClick={() => DoFilter('Bread')}> <img src={popular3} alt="popular" srcset="" /><span>bread</span></button>
            </div>
          </div>
          <div className="row feats">
            {
              alldata.map((product) => {
                return (
                  <div className="col-lg-3 col-md-4 col-sm-6 gap-3">
                    <Productcard product={product} />
                  </div>
                )
              })
            }
          </div>
          <div className="row" >
            <h4 className='text-center pt-5 text-capitalize'>Why <span style={{ color: 'orangered', }}>AYS resturtant ..?</span></h4>
            <div className="col-lg-6">
              <img src={whyus} alt='why us' className='w-100' />
            </div>
            <div className="col-lg-6">
              <h4 className='text-center pt-5 text-capitalize'>Why <span style={{ color: 'orangered', }}>AYS</span></h4>
              <p className="res-desc fs-6 py-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorum, minus. Tempora reprehenderit a corporis velit,
                laboriosam vitae ullam, repellat illo sequi odio esse iste
                fugiat dolor, optio incidunt eligendi deleniti!
              </p>
              <ListGroup className="mt-2">
                <ListGroupItem className="border-0 ps-2">
                  <p className=" choose__us-title d-flex align-items-center gap-2 ">
                    <i class="ri-checkbox-circle-line"></i> Fresh and tasty
                    foods
                  </p>
                  <p className="choose__us-desc">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quia, voluptatibus.
                  </p>
                </ListGroupItem>

                <ListGroupItem className="border-0 ps-2">
                  <p className="choose__us-title d-flex align-items-center gap-2 ">
                    <i class="ri-checkbox-circle-line"></i> Quality support
                  </p>
                  <p className="choose__us-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Qui, earum.
                  </p>
                </ListGroupItem>

                <ListGroupItem className="border-0 ps-2">
                  <p className="choose__us-title d-flex align-items-center gap-2 ">
                    <i class="ri-checkbox-circle-line"></i>Order from any
                    location{" "}
                  </p>
                  <p className="choose__us-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Qui, earum.
                  </p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </div>
          <div className="row bg-light mb-4">
            <h3 className='text-center mt-5 fw-bold '>Hot <span style={{color:'orangered'}}>Pizza</span></h3>
          {
            hotpizza.map((product)=>
              (
                <div className="col-lg-3" key={product.id}>
                  <Productcard product={product} />
                </div>
              )
            )
          }
          </div>
          <div className="row">
            <Testmotional />
          </div>
        </div>
        <button className='carty'>
        <Link to='/cart'>check your cart <span style={{color:'black'}}>({cart.length})</span></Link>
        </button>
      </div>
    </Util>
  )
}

export default Home;