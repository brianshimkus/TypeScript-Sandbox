import Button from '@/components/button'

export default function Home() {
	return (
		<main className='min-h-screen flex justify-center items-center'>
			<Button
				backgroundColor='red'
				fontSize={80}
				pillShape={true}
				textColor='purple'
				padding={[5, 10, 20, 25]}
			/>
		</main>
	)
}
