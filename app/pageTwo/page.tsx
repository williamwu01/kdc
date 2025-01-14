'use client';
// app/pageTwo/page.tsx
import Link from 'next/link';
import CenteredLayout from '../components/CenterContext';

export default function PageTwo() {
	return (
		<CenteredLayout>
			<h1>Welcome to Page 2</h1>
			<p>This is page 2. Click Prev to go back to the Home page, or Next to go to Page 3.</p>

			<div className='flex flex-row gap-4'>
				<Link href='/'>
					<button className='button'>Prev</button>
				</Link>
				<Link href='/pageThree'>
					<button className='button'>Next</button>
				</Link>
			</div>
		</CenteredLayout>
	);
}
