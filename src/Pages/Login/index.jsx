import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router";

function Login() {
  localStorage.clear();
  const navigate = useNavigate();

  const login = () => {
    localStorage.setItem("login", true);
    navigate("/home");
  };

  return (
    <>
      <div className="form1">
        <Form>
          <h1 className="mb-4">Login page</h1>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>UserName</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button onClick={login} variant="success" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}

export default Login;
