"use client"
// app/page.tsx
import React from 'react'
import Link from 'next/link';
import CenteredLayout from './components/CenterContext';
import Image from 'next/image';

export default function Home() {
  return (
    <CenteredLayout>
      <h1 className='text-white'>Hi Kelly</h1>
      <p className='text-white'>Welcome to this website all about you</p>
      
			<Link href="/pageTwo">
        <button className="button">Next</button>
      </Link>
			<Image
				src="/newpost.gif"
				alt="Dancing Animation"
				width={200}
				height={200}
				unoptimized
			/>
    </CenteredLayout>
		
  );
}