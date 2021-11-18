import React from 'react';
//Import icons
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';
//Styles
import { About, Description, Image, Hide } from '../styles';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import { fade } from '../animation';
import { UseScroll } from './useScroll';

const ServiceSection = () => {
    const [element, controls] = UseScroll();
    return (
        <Services variants={fade} animate={controls} initial="hidden" ref={element}>
            <Description>git 
                <h2>High <span>quality</span> services</h2>
                <Cards>

                    <Card>
                        <div className="icon">
                            <img src={clock} alt="" />
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>

                    <Card>
                        <div className="icon">
                            <img src={teamwork} alt="" />
                            <h3>Team work</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>

                    <Card>
                        <div className="icon">
                            <img src={diaphragm} alt="" />
                            <h3>Diaphragm</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>

                    <Card>
                        <div className="icon">
                            <img src={money} alt="" />
                            <h3>Afforable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>

                </Cards>
            </Description>
            <Image><img src={home2} alt="" /></Image>
        </Services>
    )
}

//Copy evrything of About
const Services = styled(About)`
    h2 {
        padding: 5rem;
    }
    p {
        width: 70%;
        padding: 2rem 0rem 4rem 0rem;
    }
`;

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Card = styled.div`
    flex-basis: 20rem;
    .icon {
        display: flex;
        align-items: center;
        h3 {
            margin-left: 1rem;
            background: white;
            color: black;
            padding: 1rem;
        }
    }
`;

export default ServiceSection;