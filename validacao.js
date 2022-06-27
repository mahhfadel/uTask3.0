const form = document.getElementById('form')
const formTitulo = document.getElementById('formTitulo')

form.addEventListener('submit', (e) => {
	e.preventDefault()

	checkInputs()
})

function checkInputs() {
	const formTituloValue = formTitulo.value.trim()

	if (formTituloValue === '') {
		setErrorFor(formTitulo)
	} else {
		succesValidation(formTitulo)
	}
}

function setErrorFor(input) {
	const formControl = input.parentElement

	formControl.className = 'form-control error'
}

function succesValidation(input) {
	const formControl = input.parentElement

	formControl.className = 'form-control'
}
