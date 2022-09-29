import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Tabs,Tab} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Form from './components/Form';
import AddressBook from './components/AddressBook';



function App() {
  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Learn React</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <br/>
    <Container>
    <div className="App ">
      <Tabs
       defaultActiveKey="Contact Form"
      id="app-tab-example"
      className="mb-3">
        <Tab eventKey="Contact Form" title="Contact Form">
          <Form/>
        </Tab>
        <Tab eventKey="Address-list" title="Address Book">
          <AddressBook/>
        </Tab>
      </Tabs>
    </div>
    </Container>
    </>
  );
}

export default App;
