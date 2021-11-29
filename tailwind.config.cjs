module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		container: {
			center: true
		},
		fontFamily: {
			sans: ['Inter', 'sans-serif']
		},
		extend: {}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
