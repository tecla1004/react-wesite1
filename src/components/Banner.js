import { useState, useEffect } from 'react'
import { Col } from "react-bootstrap"
import { Row } from "react-bootstrap"
import { Container } from "react-bootstrap"
// import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from "../assets/img/header-img.svg"

export const Banner = () =>{
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ "Web Developer", "Web Designer", "UI/UX Designer"]
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random()*100)
    const period = 2000; 

    useEffect(()=>{
        let ticker = setInterval(()=>{
        tick();
        }, delta)

        return()=>{clearInterval(ticker)};
    },[text])

    const tick = ()=>{
        let i = loopNum % toRotate.length;
        let fulltText = toRotate[i];
        let updatedText = isDeleting ? fulltText.substring(0, text.length-1) : fulltText.substring(0, text.length+1); 
    
        setText(updatedText)

        if(isDeleting){
            setDelta(preDelta => preDelta /2)
        }

        if(!isDeleting && updatedText === fulltText){
            setIsDeleting(true);
            setDelta(period)
        } else if (isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum +1);
            setDelta(500);

        }
    }

    return(
        <section className="banner" id="home"> 
            <Container>
            <Row calssName="align-items-center">
                <Col xs={12} md={6} xl={7}>
                    <span className="tagline">Welcome to my portfolio</span>
                    <h1>{`Hi I'm webdecoded `}<span className="wrap">{text}</span></h1>
                    <p>Lorem Ipsum  is simply dummy text of the printind and typesettin daldkjf</p>
                    <button onClick={()=> console.log('connect')}>Let's connect</button>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={headerImg} alt="Header Img" />
                </Col>
            </Row>

            </Container>
              
        </section>
    )
}