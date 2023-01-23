import React, { useState, useEffect } from 'react'
import './App.css';
// import Fontawesome from './components/Fontawesome.js'
// import axios from 'axios'

// import {
//   MDBFooter,
//   MDBContainer,
//   MDBCol,
//   MDBRow,
//   MDBIcon,
//   MDBBtn
// } from 'mdb-react-ui-kit';
//--------------------------------------------------------------------\\
//fontawesome imports

import { render } from 'react-dom';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//--------------------------------------------------------------------\\
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

//--------------------------------------------------------------------\\
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// import Box from 'react-bootstrap/Box';


//--------------------------------------------------------------------\\





const App = () => {

  <FontAwesomeIcon icon={faHome} />







  // //-----HOOKS-----\\
  // const [show, setShow] = useState(false);



  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);


  // //----------------\\
  // useEffect(() => {

  // }, [])


  return (
    <>
      <FontAwesomeIcon icon={faHome} />
   




      <div id="home"></div>
      {/* TOP NAVBAR */}
      <Navbar bg="light" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#home">A. Capace</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About Me</Nav.Link>
              <Nav.Link href="#resume">Resume</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* HOME PAGE BACKROUND IMAGE */}
      <Image className="d-block w-100 h-100" src="images/1.png" />


      <view style={{ textAlign: 'center', fontWeight: 'bold' }} >
        <br></br>
        <br></br>
        <h1 style={{ textAlign: 'center', fontWeight: 'bold' }} >Ashley M. Capace</h1>
        <h3>Software Engineer</h3>
        <br></br>
        <br></br>

      </view>

      {/* ABOUT ME */}
      <div id="about"></div>
      <br></br>
      <br></br>

      <h3 style={{ textAlign: 'center', fontWeight: 'bold', textDecorationLine: 'underline' }}>About Me</h3><br />

      <h5 style={{ textAlign: "center" }}>
        <Image style={{ textAlign: "center" }} src="" />
        <p>
          Hi, my name is Ashley Capace and I am from Long Island, New York. My previous background was in health administration and prior to that I worked in Insurance for many years. At my current age of 32 years old, I was inspired to make another career change to become a well-established software engineer.
          Having a passion to learn, great problem-solving skills and looking for a creative outlet, heading into this field felt right. Asided from my current career change some of my hobbies are to read, go to the gym, hiking and taking long cruises in my car.
        </p>
      </h5>








      <div id="resume"></div>
      <br></br>
      <br></br>
      <h3 style={{ textAlign: 'center', fontWeight: 'bold', textDecorationLine: 'underline' }}>Resume</h3><br />
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="2022 - present"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        // icon={<FontAwesomeIcon icon="fa-regular fa-graduation-cap" />}

        >

          <h3 className="vertical-timeline-element-title">Software Engineering Immersive</h3>
          <h4 className="vertical-timeline-element-subtitle">General Assembly</h4>
          <p>
            Front-End Development, Full-Stack Development, Front-End Frameworks, APIs and Full-Stack Development.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="01/2020"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">B.S. Family Nutrition & Exercise Science</h3>
          <h4 className="vertical-timeline-element-subtitle">Queens College</h4>
          <p>
            Creative Direction, User Experience, Visual Design, SEO, Online Marketing
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="05/2013"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">A.A. Liberal Arts and Sciences</h3>
          <h4 className="vertical-timeline-element-subtitle">Suffolk County Community College</h4>
          <p>
            User Experience, Visual Design
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="05/2020 – 05/2022"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
        // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Front Desk Registration</h3>
          <h4 className="vertical-timeline-element-subtitle">NYC Health and Hospitals COVID-19 Testing Site- Far Rockaway, NY</h4>
          <p>
            Register patients in epic software system, etc.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="07/2007 - 03/2020"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
        // icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Claims Assistant/Loss Run Representative</h3>
          <h4 className="vertical-timeline-element-subtitle">Brownyard Group- Bay Shore, NY</h4>
          <p>
            Process individual and broker loss run request’s; prepare monthly reporting for senior management, etc.

          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="12/2023 - present"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
        // icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Internship</h3>
          <h4 className="vertical-timeline-element-subtitle">Blueportal LLC- New York, </h4>
          <p>
            Assisted with project management activities, etc.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="10/2019 - 12/2019"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
        // icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Internship</h3>
          <h4 className="vertical-timeline-element-subtitle">RAF Strength & Fitness- W. Hempstead, NY</h4>
          <p>
            Great Clients, Sign up/registration, etc
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
        // icon={<StarIcon />}
        />
      </VerticalTimeline>


      {/* PROJECTS */}
      <div id="projects"></div>
      <br></br>
      <br></br>
      <br></br>
      <h3 style={{ textAlign: 'center', fontWeight: 'bold', textDecorationLine: 'underline' }}>My Projects</h3><br />
      <br></br>
      <br></br>


      {/* PROJECT FIVE */}

      <Container>
        <Row>
          <Col></Col>
          <Col>
            <Card style={{ textAlign: "center", width: '20rem', height: '33rem' }}>
              <Card.Img variant="top" src="images/4.png" />
              <Card.Body>
                <Card.Title>A.Auto Events App - Solo Project</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <a href="https://aautoevents.netlify.app/">
                  <Button variant="primary">Go somewhere</Button></a>
              </Card.Body>
            </Card>
          </Col>
          <Col></Col>
        </Row>
      </Container>

      <br></br>
      <br></br>
      <br></br>

      {/* PROJECT FOUR */}

      <Container>
        <Row>
          <Col></Col>
          <Col>
            <Card style={{ textAlign: "center", width: '20rem', height: '33rem' }}>
              <Card.Img variant="top" src="images/5.png" />
              <Card.Body>
                <Card.Title>HIMYM Blog - Group Project</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <a href="https://himym-frontend.netlify.app/">
                  <Button variant="primary" >Go somewhere</Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col></Col>
        </Row>
      </Container>

      <br></br>
      <br></br>


      {/* PROJECT THREE */}
      <Container>
        <Row>
          <Col></Col>
          <Col>
            <Card style={{ textAlign: "center", width: '20rem', height: '33rem' }}>
              <Card.Img variant="top" src="https://i.imgur.com/GhjyM7B.png" />
              <Card.Body>
                <Card.Title>Book Tracker App - Group Project</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <a href="https://papaya-mochi-57fe5a.netlify.app/">
                  <Button variant="primary" >Go somewhere</Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col></Col>
        </Row>
      </Container>

      <br></br>
      <br></br>


      {/* PROJECT TWO */}

      <Container>
        <Row>
          <Col></Col>
          <Col>
            <Card style={{ textAlign: "center", width: '20rem', height: '33rem' }}>
              <Card.Img variant="top" src="images/3.png" />
              <Card.Body>
                <Card.Title>Project Car App - Solo Project</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <a href="https://bejewelled-medovik-d33509.netlify.app">
                  <Button variant="primary">Go somewhere</Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col>
          </Col>
        </Row>
      </Container>

      <br></br>
      <br></br>


      {/* PROJECT ONE */}

      <Container>
        <Row>
          <Col></Col>
          <Col>
            <Card style={{ textAlign: "center", width: '20rem', height: '33rem' }}>
              <Card.Img variant="top" src="https://i.imgur.com/EwpujgR.png" />
              <Card.Body>
                <Card.Title>Portfolio - Solo Project</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <a href="https://bejewelled-medovik-d33509.netlify.app/">
                  <Button variant="primary">Go somewhere</Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col></Col>
        </Row>
      </Container>







      {/* FOOTER */}




    </>
  )

}

export default App;










