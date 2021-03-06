// Frase do dia
function iniciaModalFrase(modalContainerID) {
	const modalContainer = document.getElementById(modalContainerID)
	if (modalContainer) {
		modalContainer.classList.add('mostrar')
		modalContainer.addEventListener('click', (e) => {
			if (
				e.target.id == modalContainerID ||
				e.target.className == 'close' ||
				e.target.id === 'close'
			) {
				modalContainer.classList.remove('mostrar')
			}
		})
	}
}

const containerFraseDoDia = document.querySelector('.containerFraseDoDia')
containerFraseDoDia.addEventListener('click', () =>
	iniciaModalFrase('modal-frase'),
)

// Adicionar nova task
function iniciaModalAdd(modalContainerID) {
	const modalContainer = document.getElementById(modalContainerID)
	const input = document.getElementById('formTitulo')
	if (modalContainer) {
		modalContainer.classList.add('mostrar')
		modalContainer.addEventListener('click', (e) => {
			if (
				e.target.id == modalContainerID ||
				e.target.className == 'close' ||
				e.target.id === 'close'
			) {
				modalContainer.classList.remove('mostrar')
				succesValidation(input)
			}

			if (input.value != '' && e.target.id == 'add-task') {
				modalContainer.classList.remove('mostrar')
				succesValidation(input)
			}
		})
	}
}

const addButton = document.querySelector('.addButton')
addButton.addEventListener('click', () => iniciaModalAdd('modal-add'))

// Descricao
const coll = document.getElementsByClassName('collapsible')
let i

for (i = 0; i < coll.length; i++) {
	coll[i].addEventListener('click', function () {
		this.classList.toggle('active')
		let content = this.nextElementSibling
		if (content.style.display === 'block') {
			content.style.display = 'none'
		} else {
			content.style.display = 'block'
		}
	})
}
