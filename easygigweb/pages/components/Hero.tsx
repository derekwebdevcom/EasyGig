import React from 'react';
import styles from '../../styles/Home.module.scss';
import Image from 'next/image';
const Hero = () => {
  return (
    <div
      style={{
        margin: 0,
        width: '100%',
        zIndex: 0,
      }}>
      <Image src="/assets/easygig1scene.jpg" layout="fill"></Image>
    </div>
  );
};

export default Hero;
