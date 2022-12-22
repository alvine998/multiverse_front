import Carousel from 'react-bootstrap/Carousel';
import React from 'react'

function Carousels() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://randomwordgenerator.com/img/picture-generator/57e9dd474952a414f1dc8460962e33791c3ad6e04e5074417d2e72d6944cc1_640.jpg"
                    alt="First slide"
                    style={{height:'700px'}}
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://randomwordgenerator.com/img/picture-generator/54e7d64a4b53a914f1dc8460962e33791c3ad6e04e50744172297cdd9444cc_640.jpg"
                    alt="Second slide"
                    style={{height:'700px'}}
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    style={{height:'700px'}}
                    src="https://randomwordgenerator.com/img/picture-generator/50e5dd474a57b10ff3d8992cc12c30771037dbf8525478487c2f79d49e48_640.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Carousels;