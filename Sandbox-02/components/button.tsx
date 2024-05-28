import React from 'react'

type Buttonprops = {
	setCount: React.Dispatch<React.SetStateAction<number>>
}

export default function Button({ setCount }: Buttonprops) {
	setCount(1)
	return <button>Click me</button>
}
