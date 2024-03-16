export const generateId = () => {
	// Generates a random 6-character alphanumeric string
	const alphanumeric = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
	let id = ''
	for (let i = 0; i < 6; i++) {
		id += alphanumeric.charAt(Math.floor(Math.random() * alphanumeric.length))
	}
	return id
}

export const deepCopy = (item) => JSON.parse(JSON.stringify(item))

export const getSectionIndex = (sections, id) => sections.findIndex((section) => section.id == id)

export const blocks = {
	one: {
		controls: {
			content: {
				id: generateId(),
				title: 'Content',
				controls: [
					{ id: generateId(), type: 'input', key: 'title' },
					{ id: generateId(), type: 'input', key: 'button' },
					{ id: generateId(), type: 'image', key: 'image' },
				],
			},
		},
		defaultValue() {
			return {
				id: generateId(),
				type: 'one',
				content: {
					title: 'This is a sample title',
					button: 'Get Started',
					image: 'https://placehold.co/600x400/EEE/31343C',
				},
			}
		},
		Render() {},
	},
	two: {
		controls: {
			content: {
				id: generateId(),
				title: 'Content',
				controls: [
					{ id: generateId(), type: 'input', key: 'title' },
					{ id: generateId(), type: 'image', key: 'image' },
					{ id: generateId(), type: 'input', key: 'subtitle' },
					{ id: generateId(), type: 'textarea', key: 'description' },
				],
			},
		},
		defaultValue() {
			return {
				id: generateId(),
				type: 'two',
				content: {
					title: 'This is a sample title',
					subtitle: 'Sample subtitle',
					description: 'This is a sample description',
					image: 'https://placehold.co/600x400/EEE/31343C',
				},
			}
		},
		Render() {},
	},
	text: {
		controls: [
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
		defaultValue() {
			return {
				id: generateId(),
				text: 'This is a sample title',
				color: '#000000',
			}
		},
	},
}
