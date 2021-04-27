import React from 'react';
import styles from '../../styles/Home.module.scss';
import Image from 'next/image';
const Hero = () => {
  return (
    <div
      style={{
        marginTop: 189,
        marginLeft: 0,
        zIndex: 0,
      }}>
      <img src="/assets/easygig1scene.jpg" height="500px" width="100%" />
      <form>
        <input placeholder={'Enter your Email'} style={{zIndex: 1}} />
        <input
          placeholder={'Enter your password'}
          style={{zIndex: 1, marginBottom: 100}}
        />
      </form>
    </div>
  );
};

export default Hero;
