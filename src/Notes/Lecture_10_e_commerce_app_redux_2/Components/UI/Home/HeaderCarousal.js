import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

export default function HeaderCarousal() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.shopify.com/s/files/1/0579/7924/0580/files/Home_Page_Banner_Generic_20.08_Comp.png?v=1661755438&width=1500"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5 className='text-white'>First slide label</h5>
          <p className='text-white'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.shopify.com/s/files/1/0579/7924/0580/files/Home_Page_Banner_Generic_20.08_Comp.png?v=1661755438&width=1500"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5 className='text-white'>Second slide label</h5>
          <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.shopify.com/s/files/1/0579/7924/0580/files/Home_Page_Banner_Generic_20.08_Comp.png?v=1661755438&width=1500"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5 className='text-white'>Third slide label</h5>
          <p className='text-white'>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}
