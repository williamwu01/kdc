'use client';
// app/pageTwo/page.tsx
import Link from 'next/link';
import CenteredLayout from '../components/CenterContext';
import Image from 'next/image';

export default function PageTwo() {
	return (
		<CenteredLayout>
			<h1 className='text-white'>Today Marks 6 Months</h1>
			<p className='text-white'>Time flew by, I cant believe it has been finally 6 months!
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
			<Image
				src="/dancing.gif"
				alt="Dancing Animation"
				width={200}
				height={200}
				unoptimized
			/>
		</CenteredLayout>
	);
}
