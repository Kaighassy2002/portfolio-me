import React from "react";
import { Container, Nav, Navbar, ProgressBar } from "react-bootstrap";
import girl from "../assets/images/girl.png";
import shape from "../assets/images/shape.png";
import cv from "../cv.pdf";
import about from "../assets/images/about.avif";
import skill from "../assets/images/skills.webp";

function Home() {
  return (
    <>
      <div>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">Protfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#skill">Skill</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <section id="home">
          <div
            style={{ height: "90vh" }}
            className="d-flex justify-content-between align-items-center"
          >
            <div className="d-flex justify-content-center  flex-column ps-4 ms-3">
              <h1>
                I'm Kaighassy <span className="text-warning fs-5">Suresh</span>
              </h1>
              <p className="">
                This is my official porfolio website to describe all
                <br />
                Details and work experience in Web Development
              </p>
              <button className="btn btn-dark mt-2">
                <a
                  style={{ textDecoration: "none" }}
                  className="text-secondary fs-5"
                  id="download"
                  href={cv}
                  download
                >
                  Download CV
                </a>
              </button>
            </div>
            <div class="home-image">
              <img
                style={{ height: "70vh" }}
                class="shape"
                src={shape}
                alt="no image"
              />
              <img
                style={{ height: "70vh" }}
                class="girl"
                src={girl}
                alt="no image"
              />
            </div>
          </div>
        </section>

        <section id="about" className="text-center mt-5">
          <h2 className="mt-4">About Me</h2>
          <span>Introduction</span>
          <div className="d-flex justify-content-center align-items-center">
            <div className="ms-4">
              <img width={"400px"} src={about} alt="" />
            </div>

            <div class="about-content text-start p-5">
              <p className="fs-5">
                A responsible and orderly individual with a strong commitment to
                learning and contributing positively to any team. Excited to
                apply my skills and dedication to achieve both personal and
                organizational goals.
              </p>
              <div className="container d-flex flex-column">
                <span>
                  {" "}
                  <i className="fa-solid fa-user"></i> Kaighassy Suresh
                </span>

                <span>
                  {" "}
                  <i className="fa-solid fa-phone"></i> 9037194425
                </span>

                <span>
                  {" "}
                  <i className="fa-solid fa-envelope"></i>{" "}
                  kaighassysuresh@gmail.com
                </span>
              </div>
            </div>
          </div>
        </section>

        <section id="skill" className="text-center mt-5 ">
          <h2 className="mt-4">Skills</h2>
          <span>My Skills</span>
          <div className="skill-content">
          <div className="progress-bar p-4" >
            
            <div className="bar">
              <h3>HTML</h3>
              <span>90%</span>
              <div className="base-bar"></div>
              <div className="base-bar html-bar"></div>
            </div>

           
            <div className="bar">
              <h3>CSS</h3>
              <span>92%</span>
              <div className="base-bar"></div>
              <div className="base-bar css-bar"></div>
            </div>

            <div className="bar">
              <h3>Js</h3>
              <span>85%</span>
              <div className="base-bar"></div>
              <div className="base-bar js-bar"></div>
            </div>

            
            <div className="bar">
              <h3>React</h3>
              <span>80%</span>
              <div className="base-bar"></div>
              <div className="base-bar react-bar"></div>
            </div>

            <div className="bar">
              <h3>Node</h3>
              <span>40%</span>
              <div className="base-bar"></div>
              <div className="base-bar node-bar"></div>
            </div>
            <div className="bar">
              <h3>Express</h3>
              <span>50%</span>
              <div className="base-bar"></div>
              <div className="base-bar express-bar"></div>
            </div>
            <div className="bar">
              <h3>MongoDB</h3>
              <span>65%</span>
              <div className="base-bar"></div>
              <div className="base-bar mongodb-bar"></div>
            </div>
          </div>
          <div class="skill-img">
            <img src={skill} alt="no image" />
          </div>
        </div>

          
        </section>

        <section id="contact" className="text-center mt-5 ">
        <h2 className="mt-4">Contact</h2>
          
            <div className="d-flex justify-content-evenly p-5 mt-4">
            <a href="https://www.linkedin.com/in/kaighassy-suresh-1215a5254/" target="_blank" ><i className="fa-brands fa-linkedin-in brand text-dark fs-6"></i></a>
            <a href="https://github.com/Kaighassy2002" target="_blank"><i class="fa-brands fa-github brand text-dark fs-6"></i></a>
            <a href="" target="_blank"><i class="fa-brands fa-instagram brand text-dark fs-6"></i></a>
            <a href="mailto:kaighassysuresh@gmail.com" target="_blank"><i class="fa-solid fa-envelope brand text-dark fs-6"></i></a>
            </div>
            <p>&copy;My portfolio , All Reserved to &reg; Kaighassy Suresh</p>
        </section>
      </div>
    </>
  );
}

export default Home;
