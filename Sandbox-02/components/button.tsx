type Color = 'red' | 'blue' | 'green' | 'purple' | 'yellow'

type Buttonprops = {
	backgroundColor: Color
	textColor: Color
	fontSize: number
	pillShape?: boolean
	padding: [number, number, number, number]
}

export default function Button({
	backgroundColor,
	fontSize,
	pillShape,
	textColor,
	padding,
}: Buttonprops) {
	return <button className='bg-blue-500 rounded-md px-4 py-2'>Click Me</button>
}
