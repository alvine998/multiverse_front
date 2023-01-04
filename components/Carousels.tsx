import Carousel from 'react-bootstrap/Carousel';
import React from 'react'
import { landing } from '../assets';

function Carousels() {
    return (
        <Carousel  style={{ zIndex: -999 }}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src='/landing3.png'
                    alt="First slide"
                    style={{ height: '700px' }}
                />
                {/* <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src='/landing3.png'
                    alt="Second slide"
                    style={{ height: '700px' }}
                />

                {/* <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    style={{ height: '700px' }}
                    src='/landing3.png'
                    alt="Third slide"
                />

                {/* <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption> */}
            </Carousel.Item>
        </Carousel>
    );
}

export default Carousels;