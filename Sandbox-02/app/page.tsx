'use client'

import Button from '@/components/button'
import { useState } from 'react'

export default function Home() {
	const [count, setCount] = useState(0)
	return (
		<main className='min-h-screen flex justify-center items-center'>
			<Button setCount={setCount} />
		</main>
	)
}
