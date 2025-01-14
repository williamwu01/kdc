"use client"
// app/page.tsx
import React from 'react'
import Link from 'next/link';
import CenteredLayout from './components/CenterContext';

export default function Home() {
  return (
    <CenteredLayout>
      <h1>Hi Kelly</h1>
      <p>Welcome to this website all about you</p>
      
			<Link href="/pageTwo">
        <button className="button">Next</button>
      </Link>
    </CenteredLayout>
  );
}