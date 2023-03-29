import React from 'react'
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard'
import colorSharp2 from "../assets/img/color-sharp2.png"
import projImg1 from "../assets/img/project-img1.png"
import projImg2 from "../assets/img/project-img2.png"
import projImg3 from "../assets/img/project-img3.png"

export const Projects= () =>{

    const projects = [
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg1,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg2,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg3,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg1,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg2,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg3,
        },
      ];
  return (
   <section>
    <Container>
        <Row>
            <Col>
                <h2>Projects</h2>
                <p>Lorm ipsum sdlkfjasldfinasdjfasldfiusd flksdjflaisdjfalsdjfalsdkjf</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav variant="pills" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link eventKey="first">Tab one</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="second">Tab two</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="third">
                        Tab three
                        </Nav.Link>
                    </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <Row>
                                {
                                    projects.map((project, index)=>{
                                        return (
                                           <ProjectCard key={index} {...project} />
                                        )
                                    })
                                }
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">Lorm Ipsum</Tab.Pane>
                        <Tab.Pane eventKey="third">Lorm Ipsum</Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
            </Col>
        </Row>
    </Container>
    <img className='background-image-right' src={colorSharp2} />
   </section>
  )
}