import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import One from '../images/HeaderImg.jpeg';
import Two from '../images/Forest.jpeg';
import Three from '../images/Ocean.jpeg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function CarouselHome() {
    return(
        <Row>
        <Col>
        </Col>
        <Col>
        <Carousel fade> 
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={One}
            alt="Rose Quartz"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Two}
            alt="Obsidian"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100" 
            src={Three}
            alt="Amythist"
          />
        </Carousel.Item>
      </Carousel>
      </Col>
      <Col>
        </Col>
   </Row>
   
  
    );
};
