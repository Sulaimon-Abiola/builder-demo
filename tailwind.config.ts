export default {
	content: [
		'./components/**/*.{js,vue,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./app.vue',
		'./error.vue',
	],
	theme: {
		extend: {
			screens: {
				xsmax: '320px',
				xs: '375px',
				smpro: '475px',
				smmax: '560px',
			},
			colors: {
				primary: '#235EE7',
				'light-primary': '#737373',
				text: '#010309',
				'light-background': '#f9fafc',
				background: '#f2f2f2',
				'lightest-gray': '#eeeeee',
				'lighter-gray': '#e6e6e6',
				'light-gray': '#cccccc',
				'mid-gray': '#b2b2b2',
				'dark-gray': '#999999',
				'darkest-gray': '#757575',
				danger: '#cc3333',
				success: '#008A05',
				info: '#085c91',
				warning: '#f5c400',
			},
		},
	},
	plugins: [],
}
