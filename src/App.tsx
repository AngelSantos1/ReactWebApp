import { Nav, Navbar } from 'react-bootstrap';
import { Outlet, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      
        <Navbar>
          <Navbar.Brand as={Link} to="/">BankApp</Navbar.Brand>
          <Nav>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
          </Nav>
        </Navbar>
        <Outlet />      
        
    </div>
    
  );
}

export default App;
