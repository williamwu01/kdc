"use client"
// app/page2.tsx
import Link from 'next/link';

export default function Page2() {
  return (
    <div className="page2">
      <h1>Welcome to Page 2</h1>
      <p>This is page 2. Click Prev to go back to page 1.</p>
      
      <div className="button-container">
        <Link href="/pageTwo">
          <button>Prev</button>
        </Link>
				{/* <Link href="/page2">
          <button>Next</button>
        </Link> */}
      </div>
    </div>
  );
}