import { Circle } from 'rc-progress';
import React from 'react';
import './About.css';
const Skills = () => {
    return (
        <div className='pro'>
             <svg width="0" height="0">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#DF8908" />
            <stop offset="100%" stopColor="#B415FF" />
          </linearGradient>
        </defs>
      </svg>
            <Circle value={70}
             percent={50} strokeWidth={4} 
             strokeColor="url(#gradient)"
            trailColor="#D3D3D3"
            trailWidth={4}
            gapDegree={0}
            gapPosition="top"
             /> 
 

        </div>
    );
};

export default Skills;