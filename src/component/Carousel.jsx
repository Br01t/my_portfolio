import Carousel from "react-bootstrap/Carousel";
import cv from "../img/cv.png";
import landing from "../img/landing-page.png";
import game from "../img/game.png";
import memory from "../img/memory.png";
import portfolio from "../img/portfolio.png";

function DarkVariantExample() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <a href="https://mdbootstrap.com/" target="_blank">
          <img
            className="d-block w-30"
            src={cv}
            alt="mountain png mountainpng"
          />
        </a>
        <Carousel.Caption>
          <h5>
            <mark>Online Curriculum Vitae</mark>
          </h5>
          <p>
            <mark>Online CV, made using HTML and CSS.</mark>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <a href="https://br01t.github.io/product-launch//" target="_blank">
          <img
            className="d-block w-30"
            src={landing}
            height="400"
            alt="mountain png mountainpng"
          />
        </a>
        <Carousel.Caption>
          <h5>
            <mark>Product Launch Landing Page</mark>
          </h5>
          <p>
            <mark>
              A simple product launch landing page, made using Sass and
              Bootstrap.
            </mark>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <a href="https://br01t.github.io/snakes/" target="_blank">
          <img
            className="d-block w-30"
            src={game}
            height="400"
            alt="mountain png mountainpng"
          />
        </a>
        <Carousel.Caption>
          <h5>
            <mark>CheckSnake Game</mark>
          </h5>
          <p>
            <mark>A JavaScript reproduction of the famous game.</mark>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <a href="https://br01t.github.io/memory//" target="_blank">
          <img
            className="d-block w-30"
            src={memory}
            height="400"
            alt="mountain png mountainpng"
          />
        </a>
        <Carousel.Caption>
          <h5>
            <mark>Memory Game</mark>
          </h5>
          <p>
            <mark>Memory game made mostly with JavaScript.</mark>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <a href="https://br01t.github.io/portfolio-template/" target="_blank">
          <img
            className="d-block w-30"
            src={portfolio}
            height="400"
            alt="mountain png mountainpng"
          />
        </a>
        <Carousel.Caption>
          <h5>
            <mark>Online Portfolio template</mark>
          </h5>
          <p>
            <mark>
              A classic template for a web developer's portfolio, made with
              different Front-End frameworks.
            </mark>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;
