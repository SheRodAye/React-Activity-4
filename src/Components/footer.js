import { Container} from "react-bootstrap";

const Footer = () => {
    return (
        <div>
        <Container fluid className="bg-danger d-flex align-items-center" fixed="bottom">
        <i className="h1">&copy;</i><span className="h5">WD42P || Rod Stephine D. Sarsaba</span>
        </Container>
        </div>
    );
}

export default Footer;
