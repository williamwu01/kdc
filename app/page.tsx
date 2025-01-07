"use client"
// app/page.tsx
import React from 'react'
import Link from 'next/link';

export default function Home() {
  return (
    <div className="home">
      <h1>Welcome to the Home Page</h1>
      <p>This is the first page. Click Next to go to the next page!</p>
      
      <div className="button-container">
        <Link href="/pageTwo">
          <button>Next</button>
        </Link>
      </div>
    </div>
  );
}