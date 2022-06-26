const html = document.querySelector('html')
const checkbox = document.querySelector('input[name=onoffswitch]')

const getStyle = (element, style) =>
	window.getComputedStyle(element).getPropertyValue(style)

const initialColors = {
	bg: getStyle(html, '--bg'),
	header: getStyle(html, '--header'),
	contentHeader: getStyle(html, '--content-header'),

	fraseDoDia: getStyle(html, '--frase-dodia'),
	bollfraseInterno: getStyle(html, '--bollfrase-interno'),
	bollfraseExterno: getStyle(html, '--bollfrase-externo'),
	tips: getStyle(html, '--tips'),
	frasedodiaBig: getStyle(html, '--frasedodia-big'),
	text: getStyle(html, '--text'),
	blueModal: getStyle(html, '--blue-modal'),

	balls: getStyle(html, '--balls'),
	botoes: getStyle(html, '--botoes'),
	input: getStyle(html, '--input'),
	tasksText: getStyle(html, '--tasks-text'),
	task: getStyle(html, '--task'),
	tasks: getStyle(html, '--tasks'),
	descricao: getStyle(html, '--descricao'),
	navigate: getStyle(html, '--navigate'),
	red: getStyle(html, '--red'),
	dropdown: getStyle(html, '--dropdown'),

	footer: getStyle(html, '--footer'),
}

const darkMode = {
	bg: '#222222',
	header: '#333333',
	contentHeader: '#226ED8',

	fraseDoDia: '#3D3D3D',
	bollfraseInterno: '#3D3D3D',
	bollfraseExterno: '#515151',
	tips: '#FAFAFA',
	frasedodiaBig: '#3D3D3D',
	text: '#FAFAFA',
	blueModal: '#226ED8',

	balls: '#515151',
	botoes: '#3D3D3D',
	input: '#333333',
	tasksText: '#FAFAFA',
	task: '#333333',
	tasks: '#3d3d3d',
	descricao: '#5C9DFF',
	navigate: '#3D3D3D',
	red: '#FFAFAF',
	dropdown: '#535353',

	footer: '#111111',
}

const transformKey = (key) => '--' + key.replace(/([A-Z])/, '-$1').toLowerCase()

const changeColors = (colors) => {
	Object.keys(colors).map((key) =>
		html.style.setProperty(transformKey(key), colors[key]),
	)
}

checkbox.addEventListener('change', ({ target }) => {
	target.checked ? changeColors(darkMode) : changeColors(initialColors)
})
