"use client"
// app/pageTwo/page.tsx
import Link from 'next/link';

export default function PageTwo() {
  return (
    <div className="pageTwo">
      <h1>Welcome to Page 2</h1>
      <p>This is page 2. Click Prev to go back to the Home page, or Next to go to Page 3.</p>
      
      <div className="button-container">
        <Link href="/">
          <button>Prev</button>
        </Link>
        <Link href="/pageThree">
          <button>Next</button>
        </Link>
      </div>
    </div>
  );
}