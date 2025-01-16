'use client';
// app/pageTwo/page.tsx
import Link from 'next/link';
import CenteredLayout from '../components/CenterContext';

export default function PageTwo() {
	return (
		<CenteredLayout>
			<h1>Today Marks 6 Months</h1>
			<p>Time flew by, I cant believe it has been finally 6 months!
				<br /> The question is ... 
			</p>

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
