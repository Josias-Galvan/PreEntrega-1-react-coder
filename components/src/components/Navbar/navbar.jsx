import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "./navbar.css"
import  {BsFillBasket3Fill} from "react-icons/bs"
 import Button from 'react-bootstrap/Button'
 

function NavbarB() {
  return (
    <Navbar className='nav' expand="lg" variant="light" bg="light">
      <Container>
        <div className='Logo'>
      <img src="./src/assets/Logo.png" alt="Logo" />
      </div>
   
      <Button variant="outline-secondary">Home</Button>
      <Button variant="outline-secondary">Productos</Button>
      <Button variant="outline-secondary">Nosotros </Button>
      
        <div className='carrito'>
        < BsFillBasket3Fill className='icon'/>
        <p>4</p>
        </div>
        
      </Container>
      
    </Navbar>
  );
}

export default NavbarB;
