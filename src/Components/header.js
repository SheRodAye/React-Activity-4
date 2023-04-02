import { Row, Col, Container, Image, Modal, Button} from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/Removal-770.png"

const Header = () => {

const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

    return (
        <>
           <Container fluid className="py-3 px-5 bg-danger" fixed="top">
             <Row>
               <Col>
                <Link to="/"><Image src={Logo} alt="Logo" height={"70px"} width={"70px"} roundedCircle></Image></Link>
               </Col>
               <Col className="d-flex align-items-center">
                <Row className="w-100 d-flex justify-content-end">
                 <Col lg={2} className="d-flex justify-content-center"><Link className=" text-decoration-none btn btn-warning" onClick={handleShow}>Home</Link></Col>
                 <Col lg={2} className="d-flex justify-content-center"><Link className=" text-decoration-none btn btn-warning" to="/cars">Cars</Link></Col>
                 <Col lg={3} className="d-flex justify-content-center"><Link className=" text-decoration-none btn btn-warning" to="/contactUs">Contact Us</Link></Col>
                </Row>
               </Col>
             </Row>
           </Container>

            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Home Page: Poem</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div className="text-center h5">
            Princess just wants a new car.<br />
            I have told her that hers will go far.<br />
            'Oh, it's really not cool<br />
            driving this crap to school.'<br />
            'Do I need that emotional scar? '<br />
            <br />
            'The kids will all laugh at the rust.<br />
            When we race, I'll be left in the dust!<br />
            I will save up some cash<br />
            then we'll make a mad dash<br />
            to the car dealer surely you trust'.<br />
            <br />
            'He will make us a wonderful deal<br />
            and I'm sure you will know how I feel.<br />
            I will love you so much,<br />
            My siblings... I won't touch.<br />
            Just get me behind a new wheel'!<br />
            <br />
            Now she'll be cruisin in style.<br />
            She'll be happy for only awhile.<br />
            There will always be better<br />
            and we'll try hard to get her<br />
            a car that will make princess smile."<br />
            </div>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="warning" onClick={handleClose}>
                Close
            </Button>
            <Link className="text-decoration-none btn btn-warning"  onClick={handleClose} to="/cars">
                Cars
            </Link>
            <Link className="text-decoration-none btn btn-warning"  onClick={handleClose} to="./contactUs">
                Contact Us
            </Link>
            </Modal.Footer>
            </Modal>
        </>
    );
}

export default Header;
