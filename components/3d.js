register_section('abiola/3d', () => {})

render_section('abiola/3d', (attributes) => {
	return <div>my 3d sectoi {attributes.text}</div>
})

register_controls('abiola/3d', () => {
   return [
			{
				id: generateId(),
				type: 'input',
				key: 'text',
			},
			{
				id: generateId(),
				type: 'color',
				key: 'color',
			},
		],
})