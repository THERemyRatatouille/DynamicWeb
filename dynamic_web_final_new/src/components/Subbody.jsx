import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Text } from '@react-three/drei'

gsap.registerPlugin(ScrollTrigger);

const Subbody = () => {
 
  return (
    <div className="subbody-container">
      <div >
        <h3 className='subbody-text'>Making Tracks</h3>
        <p style={{fontSize:"25px"}}>Exploring the intricate web of subway lines that connect the heart of New York City.</p>
      </div>
      <div>
        <h3>City that Never Sleeps</h3>
        <p style={{fontSize:"25px"}}>Discover how the MTA keeps the city moving 24/7, ensuring millions reach their destinations.</p>
      </div>
      <div>
        <h3>Iconic Landmarks</h3>
        <p style={{fontSize:"25px"}}>Subway routes that pass by some of NYC's most famous landmarks, blending history with modernity.</p>
      </div>
      <div>
        <h3>Engineering Marvels</h3>
        <p style={{fontSize:"25px"}}>Learn about the engineering feats behind the construction and maintenance of the subway network.</p>
      </div>
    </div>
  );
};

export default Subbody;
