type Color = 'red' | 'blue' | 'green' | 'purple' | 'yellow'

type Buttonprops = {
	backgroundColor: Color
	textColor: Color
	fontSize: number
	pillShape: boolean
}

export default function Button({
	backgroundColor,
	fontSize,
	pillShape,
}: Buttonprops) {
	return <button className='bg-blue-500 rounded-md px-4 py-2'>Click Me</button>
}
