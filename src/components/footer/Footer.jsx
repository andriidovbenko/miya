import { Container, Navbar } from 'react-bootstrap'

function Footer() {
  return (
    <div style={{width: '100%'}}>
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">
                MIYA Store
            </Navbar.Brand>
            </Container>
        </Navbar>
    </div>
  );
}

export default Footer;