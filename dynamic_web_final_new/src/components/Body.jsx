import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Text } from '@react-three/drei'
import styled from "styled-components";

import { Canvas } from "@react-three/fiber";


gsap.registerPlugin(ScrollTrigger);

const Section = styled.section`
font-family: "SF Pro Display", SF Pro Icons, Helvetica Neue, Helvetica, Arial,
  sans-serif;
font-weight: bold;
letter-spacing: -0.01em;
line-height: 1.2;
font-size: 50px; /* Adjust the font size as needed */
color: #333; /* Adjust the color to match the desired MTA color */
margin: 50px
`
const MainTitle = styled.h1`


background: linear-gradient(90deg, #ff8a00, #e01d64);
  -webkit-background-clip: text;
  color: transparent;


`

const Body = () => {
  useEffect(() => {
   // gsap.set('.metric', { y: 50, opacity: 0 });

   gsap.from('.metric', {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
      trigger: '.metrics-container',
      start: 'top 70%',
    },
    });
  }, []);

  return (
   
    <Section>
      <MainTitle>MTA Milestones</MainTitle>
      <div className="metric">
        <p>
          <span className="metric-label">Annual Ridership:</span> 1.7 billion
        </p>
      </div>
      <div className="metric">
        <p>
          <span className="metric-label">Number of Subway Stations:</span> 472
        </p>
      </div>
      <div className="metric">
        <p>
          <span className="metric-label">Total Subway Lines:</span> 27
        </p>
      </div>
      <div className="metric">
        <p>
          <span className="metric-label">Daily Train Trips:</span> 8,000
        </p>
      </div>
    </Section>
    
  );
};

export default Body;
