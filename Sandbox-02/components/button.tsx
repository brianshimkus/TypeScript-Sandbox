type Buttonprops = {
	style: React.CSSProperties
}

export default function Button({ style }: Buttonprops) {
	return <button style={style}>Click Me</button>
}
