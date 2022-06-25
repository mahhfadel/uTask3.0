let balls = document.querySelector('.balls')
let quant = document.querySelectorAll('.slides .secoes')
let atual = 0
let section = document.getElementById('atual')
let next = document.getElementById('next')
let before = document.getElementById('before')

for (let i = 0; i < quant.length; i++) {
	let div = document.createElement('div')
	div.id = i
	balls.appendChild(div)
}
document.getElementById('0').classList.add('divAtual')

let pos = document.querySelectorAll('.balls div')

for (let i = 0; i < pos.length; i++) {
	pos[i].addEventListener('click', () => {
		atual = pos[i].id
		slide()
	})
}

before.addEventListener('click', () => {
	atual--
	slide()
})

next.addEventListener('click', () => {
	atual++
	slide()
})

function slide() {
	let w = window.innerWidth
	w = w + 5

	if (atual >= quant.length) {
		atual = 0
	} else if (atual < 0) {
		atual = quant.length - 1
	}
	document.querySelector('.divAtual').classList.remove('divAtual')
	section.style.marginLeft = -w * atual + 'px'
	document.getElementById(atual).classList.add('divAtual')
}
