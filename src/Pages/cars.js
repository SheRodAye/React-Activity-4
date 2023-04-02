import { Card } from "react-bootstrap";
import imgCars from "../images/audi-r8-philippines-2018-5ab1edb6dc965.webp";

const Cars = () => {
    return (
        <div>
        <Card className="bg-dark text-white">
      <Card.Img src={imgCars} alt="Audi R8" height={"755px"}/>
      <Card.ImgOverlay>
        <Card.Title><h1>Audi R8 2023</h1></Card.Title>
        <Card.Text><p className="cardText">
        Make yourself feel like Ironman, everyday. Introduced back in 2007, the goal of the R8 was to prove to the world that Audi can compete against the Italians but making it a practical supercar for everyday use. Of note, it can take two-passengers in full comfort alongside a golf-bag size luggage.  Up front shows the famous four-ring badge matched with Audi's singleframe design image while the side shows those sexy-looking sideblades that became a design element for the R8 to show its distinctive character. The 2nd generation R8 also sports an all LED headlamps and a tail indicators to die for. Step inside a practical supercar and you'll be greeted with a high-gloss black and aluminium accents, bucket seats with heating, and other kit that will remind you that a supercar can be as civilised as any other saloon.  Powered by an amazing 5.2L V10 engine, the all-new R8 can produce up to 610 hp and 560 Nm of torque. It has a maximum speed of a whopping 330 km/h, and can go from 0-100 km/h in just 3.2 seconds. It's then mated to a 7-speed S tronic dual clutch transmission.
        </p>
        </Card.Text>
        <Card.Text>View Audi R8 2023 interior, exterior & road test images</Card.Text>
      </Card.ImgOverlay>
    </Card>
        </div>
    );
}

export default Cars;
