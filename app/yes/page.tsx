"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Confetti from 'react-confetti';
import CenteredLayout from '../components/CenterContext';
import Image from 'next/image';

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
        <h1 className='text-white'>YEAAAA CELEBRATION ❤️</h1>
				<p className='text-white'>Next Chapter: Switzerland & guinea pig farm</p>
				<Link href="/">
        <button className="button">Back Home</button>
      </Link>
			<Image
				src="/hearts.webp"
				alt="Dancing Animation"
				width={200}
				height={200}
				unoptimized
			/>
      </CenteredLayout>
    </>
  );
}