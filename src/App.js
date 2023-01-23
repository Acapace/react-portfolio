import React, { useState, useEffect } from 'react'
import './App.css';
// import Fontawesome from './components/Fontawesome.js'
// import axios from 'axios'

//--------------------------------------------------------------------\\
//fontawesome imports

import { render } from 'react-dom';
import { faGraduationCap, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faPython } from "@fortawesome/free-brands-svg-icons";
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
import Modal from 'react-bootstrap/Modal';
// import Box from 'react-bootstrap/Box';


//--------------------------------------------------------------------\\





const App = () => {

  //========= Hooks ==========================
  const [showModal, setShowModal] = useState(false);

  //============================================
  //Modal
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  //========= UseEffect ===================
  useEffect(() => {

  }, [])


  return (
    <>

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
              <NavDropdown title="Contact" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.3" onClick={handleShow}>Email</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="https://github.com/Acapace">
                  GitHub
                </NavDropdown.Item>
                <NavDropdown.Item href="https://www.linkedin.com/in/ashley-capace-9a1ba5255/">
                  LinkedIn
                </NavDropdown.Item>
                <NavDropdown.Item href="https://i.imgur.com/gn94WJ5.jpg">
                  Resume - Image
                </NavDropdown.Item>
              </NavDropdown>
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
        <p>
          Hi, my name is Ashley Capace and I am from Long Island, New York. My previous background was in health administration and prior to that I worked in Insurance for many years. At my current age of 32 years old, I was inspired to make another career change to become a well-established software engineer.
          Having a passion to learn, great problem-solving skills and looking for a creative outlet, heading into this field felt right. Asided from my current career change some of my hobbies are to read, go to the gym, hiking and taking long cruises in my car.
        </p>
      </h5>




      {/* RESUME/TIMELINE */}

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
          icon={<FontAwesomeIcon icon={faGraduationCap} />}
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
          icon={<FontAwesomeIcon icon={faGraduationCap} />}
        >
          <h3 className="vertical-timeline-element-title">B.S. Family Nutrition & Exercise Science</h3>
          <h4 className="vertical-timeline-element-subtitle">Queens College</h4>
          <p>
            The nutrition and exercise physiology degree focuses on the effects of nutrition and exercise on human health.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="05/2013"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<FontAwesomeIcon icon={faGraduationCap} />}
        >
          <h3 className="vertical-timeline-element-title">A.A. Liberal Arts and Sciences</h3>
          <h4 className="vertical-timeline-element-subtitle">Suffolk County Community College</h4>
          <p>
            A liberal arts and sciences education is rooted in the interdisciplinary study and application of the natural sciences, social sciences, arts, and humanities.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="05/2020 – 05/2022"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<FontAwesomeIcon icon={faBriefcase} />}
        >
          <h3 className="vertical-timeline-element-title">Front Desk Registration</h3>
          <h4 className="vertical-timeline-element-subtitle">NYC Health and Hospitals COVID-19 Testing Site- Far Rockaway, NY</h4>
          <p>
            Greet patients and coordinate necessary appointmentsRegister patients in epic software system
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="07/2007 - 03/2020"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<FontAwesomeIcon icon={faBriefcase} />}
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
          icon={<FontAwesomeIcon icon={faBriefcase} />}
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
          icon={<FontAwesomeIcon icon={faBriefcase} />}
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
            <Card style={{ textAlign: "center", width: '20rem', height: '34rem' }}>
              <Card.Img variant="top" src="images/4.png" />
              <Card.Body>
                <Card.Title>A.Auto Events App</Card.Title>
                <Card.Text>
                  React | Django | Python | Bootstrap | Sass
                  <p>Solo Project</p>
                  <p>I created this app for car enthusiasts. A blog that will alow the user to express their experience of the attended Auto Show.</p>
                </Card.Text>
                <a href="https://aautoevents.netlify.app/">
                  <Button variant="primary">Website</Button></a>
                <a href="https://github.com/Acapace/CarEvents-Frontend">
                  <Button variant="primary">Code</Button></a>

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
            <Card style={{ textAlign: "center", width: '20rem', height: '32rem' }}>
              <Card.Img variant="top" src="images/5.png" />
              <Card.Body>
                <Card.Title>HIMYM Blog</Card.Title>
                <Card.Text>
                  <p>React | Django | Python | MUI </p>
                  <p>Group Project</p>
                  <p>We created a Full Stack app for show fans of "How I Met Your Mother".
                    This Blog allows users to view Episode and Actor information.</p>
                </Card.Text>
                <a href="https://himym-frontend.netlify.app/">
                  <Button variant="primary" >Website</Button></a>
                <a href="https://github.com/Acapace/HIMYM-Frontend">
                  <Button variant="primary" >Code</Button></a>
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
            <Card style={{ textAlign: "center", width: '20rem', height: '30rem' }}>
              <Card.Img variant="top" src="https://i.imgur.com/GhjyM7B.png" />
              <Card.Body>
                <Card.Title>Book Tracker App</Card.Title>
                <Card.Text>
                  <p>React | Express | MongoDB | Node</p>
                  <p>Group Project</p>
                  <p>We created this app to keep track of the books with have read and excited for the ones pending.</p>
                </Card.Text>
                <a href="https://papaya-mochi-57fe5a.netlify.app/">
                  <Button variant="primary" >Website</Button></a>
                <a href="https://github.com/Acapace/Book-tracker-frontend">
                  <Button variant="primary" >Code</Button></a>
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
            <Card style={{ textAlign: "center", width: '20rem', height: '3rem' }}>
              <Card.Img variant="top" src="images/3.png" />
              <Card.Body>
                <Card.Title>Project Car App</Card.Title>
                <Card.Text>
                  <p>Express | JavaScript | Bootstrap</p>
                  <p>Solo Project</p>
                  <p> I created this app to keep track of your ProjectCar. Allowing a car enthusiast to project manage their build and share the finished car.</p>
                </Card.Text>
                <a href="https://bejewelled-medovik-d33509.netlify.app">
                  <Button variant="primary">Website</Button>
                </a>
                <a href="https://github.com/Acapace/Project-Car-App">
                  <Button variant="primary">Code</Button>
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
            <Card style={{ textAlign: "center", width: '20rem', height: '29rem' }}>
              <Card.Img variant="top" src="https://i.imgur.com/EwpujgR.png" />
              <Card.Body>
                <Card.Title>Portfolio</Card.Title>
                <Card.Text>
                  <p>HTML | CSS | Javascript</p>
                  <p>Solo Project</p>
                  <p>My very first portfolio project.</p>
                  <p>I created this app for an introduction and to share my new creative ways.</p>
                </Card.Text>
                <a href="https://bejewelled-medovik-d33509.netlify.app/">
                  <Button variant="primary">Website</Button>
                </a>
                <a href="https://github.com/Acapace/Portfolio">
                  <Button variant="primary">Code</Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col></Col>
        </Row>
      </Container>

      {/* MODAL FOR CONTACT INFORMATION */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>To: Acapace622@gmail.com</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <p>Contact Information:</p>
            <input type="text" placeholder='Name'></input><br /><br />
            <input type="text" placeholder='Email'></input><br /><br />
            <textarea cols="30" rows="5" placeholder='Message'></textarea>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>






      {/* FOOTER */}




    </>
  )

}

export default App;










