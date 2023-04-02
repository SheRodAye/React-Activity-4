import { Carousel } from "react-bootstrap";
import img1 from "../images/R (1).jpg";
import img2 from "../images/R (2).jpg";
import img3 from "../images/R.jpg";
import img4 from "../images/audi-r8-v10-performance.jpg";
import img5 from "../images/audi_r8.jpg";

const Home = () => {
    return (
        <div>
            <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block"
          src={img1}
          alt="First slide"
          height={"755px"}
          width={"100%"}
        />
        <Carousel.Caption>
          <h3>Audi R8 v12 2008</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src={img2}
          alt="Second slide"
          height={"755px"}
          width={"100%"}
        />

        <Carousel.Caption>
          <h3>Audi R8</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src={img3}
          alt="Third slide"
          height={"755px"}
          width={"100%"}
        />

        <Carousel.Caption>
          <h3>Audi R8 v10</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src={img4}
          alt="Third slide"
          height={"755px"}
          width={"100%"}
        />

        <Carousel.Caption>
          <h3>Audi R8</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src={img5}
          alt="Third slide"
          height={"755px"}
          width={"100%"}
        />

        <Carousel.Caption>
          <h3>Audi R8</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
    );
}

export default Home;
