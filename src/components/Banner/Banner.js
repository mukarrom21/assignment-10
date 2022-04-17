import React from "react";
import { Carousel, Container } from "react-bootstrap";
import banner from "../../Images/TutorBanner.jpg";

const Banner = () => {
  return (
    <div className="">
      <Carousel>
        <Carousel.Item>
          <img
            height={500}
            className="d-block vw-100"
            src='https://img.freepik.com/free-photo/front-view-children-playing-together-kindergarten_23-2148633303.jpg?t=st=1650190986~exp=1650191586~hmac=814ed955e8500c1e9075f91b0a7c9a514fd6c5a1bd0dd1b08e0394f33ac82ac0&w=900'
            alt="First slide"
          />
          <Carousel.Caption style={{background: '#ffffffb7', borderRadius:'25px'}} className="text-success">
            <h1 className=" ">Professional Tutor</h1>
            <h1>for Your Children</h1>
            <p>Rem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ad minim veniam, quis nostrud</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            height={500}
            className="d-block vw-100"
            src={banner}
            alt="Second slide"
          />

          <Carousel.Caption style={{background: '#ffffffb7', borderRadius:'25px'}} className="text-success">
            <h1>Professional Tutor</h1>
            <h1>for Your Children</h1>
            <p>Rem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ad minim veniam, quis nostrud</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            height={500}
            className="d-block vw-100"
            src='https://img.freepik.com/free-photo/side-view-child-learning-from-tutor-home_23-2148524520.jpg?t=st=1650191711~exp=1650192311~hmac=c06eb11b88c077c002827928a622c885734ba5a8eb7c2593c3b0ea0553f29ce1&w=900'
            alt="Third slide"
          />

          <Carousel.Caption style={{background: '#ffffffb7', borderRadius:'25px'}} className="text-success">
            <h1>Professional Tutor</h1>
            <h1>for Your Children</h1>
            <p>Rem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ad minim veniam, quis nostrud</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
