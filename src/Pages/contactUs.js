import { Form, FloatingLabel, Button} from "react-bootstrap";
import { useNavigate } from "react-router";

const ContactUs = () => {

const navigate = useNavigate();

    return (
        <div>
    <div className="contact">
    <div className="contactBox">

    <h1>Fill The Form!</h1>
    <br />
        <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
        >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>

      <FloatingLabel 
      controlId="floatingFullName" 
      label="Full Name"
      className="mb-3"
      >
        <Form.Control type="text" placeholder="Full Name" />
      </FloatingLabel>

      <FloatingLabel 
      controlId="floatingFullName" 
      label="inquiry"
      className="mb-3"
      >
        <Form.Control as="textarea" placeholder="Full Name" style={{ height: "150px", width: "100%"}}/>
      </FloatingLabel>
      <Button variant="primary" type="submit" onClick={ ()=> {
        alert("Thank You for Submiting Form!!!");
        navigate("/");
      }}>
        Submit
      </Button>
      </div>
      </div>
        </div>
    );
}

export default ContactUs;
