import React from 'react'
import Slider from 'react-slick';
import ava01 from '../images/ava-1.jpg'
import ava02 from '../images/ava-2.jpg'
import ava03 from '../images/ava-3.jpg'
import comunications from '../images/network.png';
import '../css/slider.css'
import Carousel from 'react-bootstrap/Carousel';
import { Image } from 'react-bootstrap';


export const Testmotional = () => {


    return (
        <div className="container">
            <div className="row">
                <h4 className='fs-3 mt-5 fw-bold text-capitalize' style={{color:'orangered'}}>testmotional</h4>
            </div>
            <div className="row mt-5">
                <div className="col-lg-6 col-md-12 mt-5 slider">
                    <Carousel className='caro'>
                        <Carousel.Item>
                            <Image src={ava01} text="First slide" />
                            <Carousel.Caption className='caro-body'>
                                <h3 className='heading'> ahmed <span style={{color:'black'}}>yasser</span></h3>
                                <p className='text'>  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
                                    atque, quam minus totam maiores laborum! Impedit consectetur illum
                                    aliquid odit. Odit dolore ipsum quod debitis nostrum necessitatibus
                                    quis dolorem quas!"</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image src={ava02} text="Second slide" />
                            <Carousel.Caption className='caro-body'>
                                <h3 className='heading pt-5'>rehab <span style={{color:'black'}}>ahmed</span></h3>
                                <p className='text'>  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
                                    atque, quam minus totam maiores laborum! Impedit consectetur illum
                                    aliquid odit. Odit dolore ipsum quod debitis nostrum necessitatibus
                                    quis dolorem quas!"</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image src={ava03} text="Third slide" />
                            <Carousel.Caption className='caro-body'>
                                <h3 className='heading'>seliem <span style={{color:'black'}}>ahmed</span></h3>
                                <p className='text'>
                                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
                                    atque, quam minus totam maiores laborum! Impedit consectetur illum
                                    aliquid odit. Odit dolore ipsum quod debitis nostrum necessitatibus
                                    quis dolorem quas!"
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className="col-lg-6">
                    <img src={comunications} alt="comunication" srcset="" className='w-100' />
                </div>
            </div>
        </div>
    )
}
export default Testmotional;