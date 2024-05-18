export default function Button({
	backgroundColor,
	fontSize,
	pillShape,
}: {
	backgroundColor: string
	fontSize: number
	pillShape: boolean
}) {
	return <button className='bg-blue-500 rounded-md px-4 py-2'>Click Me</button>
}
