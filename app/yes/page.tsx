"use client";
import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import CenteredLayout from '../components/CenterContext';
import PlayfulButton from '../components/PlayfulButton';

export default function Yes() {
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0
  });

  useEffect(() => {
    // Set dimensions only on client side
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    });

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {dimensions.width > 0 && dimensions.height > 0 && (
        <Confetti
          width={dimensions.width}
          height={dimensions.height}
          recycle={true}
        />
      )}
      <CenteredLayout>
        <h1>Kelly</h1>
        <p>Will You Go Out With Me?</p>
        <PlayfulButton />
      </CenteredLayout>
    </>
  );
}