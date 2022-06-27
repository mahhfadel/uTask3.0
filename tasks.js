window.addEventListener('load', () => {
	const form = document.querySelector('form')
	const input = document.getElementById('formTitulo')
	const textarea = document.getElementById('formDescricao')
	const listaFazer = document.querySelector('#a-fazer')
	const listaAndamento = document.querySelector('#em-andamento')
	const listaFeito = document.querySelector('#ul-feito')

	form.addEventListener('submit', (e) => {
		e.preventDefault()

		if (input.value) {
			const titulo = input.value
			const descricao = textarea.value

			const liTaskBox = document.createElement('li')
			liTaskBox.classList.add('tasksBox')

			const liTopTasks = document.createElement('div')
			liTopTasks.classList.add('topTasks')
			liTaskBox.appendChild(liTopTasks)

			const liTitulo = document.createElement('p')
			liTitulo.innerHTML = titulo
			liTopTasks.appendChild(liTitulo)

			const liButtonMore = document.createElement('div')
			liButtonMore.classList.add('button_more')
			liTopTasks.appendChild(liButtonMore)

			const btDropdown = document.createElement('div')
			btDropdown.classList.add('dropdown')
			liButtonMore.appendChild(btDropdown)

			const btdropbtn = document.createElement('button')
			btdropbtn.classList.add('dropbtn')
			btDropdown.appendChild(btdropbtn)

			const materialIconMore = document.createElement('span')
			materialIconMore.classList.add('material-icons')
			materialIconMore.id = 'more_vert'
			materialIconMore.innerHTML = 'more_vert'
			btdropbtn.appendChild(materialIconMore)

			const dropdownContent = document.createElement('div')
			dropdownContent.classList.add('dropdown-content')
			btDropdown.appendChild(dropdownContent)

			const buttonDell = document.createElement('button')
			dropdownContent.appendChild(buttonDell)

			const deleteIcon = document.createElement('div')
			deleteIcon.classList.add('deleteIcon')
			buttonDell.appendChild(deleteIcon)

			const materialIconDelete = document.createElement('span')
			materialIconDelete.classList.add('material-icons')
			materialIconDelete.id = 'delete_outline'
			materialIconDelete.innerHTML = 'delete_outline'
			deleteIcon.appendChild(materialIconDelete)

			const divExcluir = document.createElement('div')
			divExcluir.classList.add('excluir')
			divExcluir.innerHTML = 'Excluir'
			buttonDell.appendChild(divExcluir)

			const liBottomTasks = document.createElement('div')
			liBottomTasks.classList.add('bottomTasks')
			liTaskBox.appendChild(liBottomTasks)

			const collapsibleOut = document.createElement('div')
			collapsibleOut.classList.add('collapsibleOut')
			liBottomTasks.appendChild(collapsibleOut)

			const buttoncollapsible = document.createElement('button')
			buttoncollapsible.type = 'button'
			buttoncollapsible.classList.add('collapsible')
			collapsibleOut.appendChild(buttoncollapsible)

			const materialIconDescription = document.createElement('span')
			materialIconDescription.classList.add('material-icons')
			materialIconDescription.id = 'iconDescription'
			buttoncollapsible.appendChild(materialIconDescription)

			const contentDescricao = document.createElement('div')
			contentDescricao.classList.add('contentDescricao')
			// contentDescricao.style.display = 'none'
			collapsibleOut.appendChild(contentDescricao)

			const pDescricao = document.createElement('p')
			pDescricao.innerHTML = descricao
			contentDescricao.appendChild(pDescricao)

			const tasksAction = document.createElement('div')
			tasksAction.classList.add('tasksAction')
			liBottomTasks.appendChild(tasksAction)

			// ICONES -------------------------------------------------------
			const materialIconNext = document.createElement('span')
			materialIconNext.classList.add('material-icons')
			materialIconNext.id = 'navigate_next'
			materialIconNext.innerHTML = 'navigate_next'

			const materialIconBefore = document.createElement('span')
			materialIconBefore.classList.add('material-icons')
			materialIconBefore.id = 'navigate_before'
			materialIconBefore.innerHTML = 'navigate_before'

			const materialIconReplay = document.createElement('span')
			materialIconReplay.classList.add('material-icons')
			materialIconReplay.id = 'replay'
			materialIconReplay.innerHTML = 'replay'

			// AÇOES TASKS ---------------------------------------------------
			const buttonNext = document.createElement('div')
			buttonNext.classList.add('next')
			tasksAction.appendChild(buttonNext)
			buttonNext.appendChild(materialIconNext)

			listaFazer.appendChild(liTaskBox)
			limpar()

			const buttonNextAndamento = document.createElement('div')
			buttonNextAndamento.classList.add('next')
			// buttonNextAndamento.appendChild(materialIconNext)

			const buttonBefore = document.createElement('div')
			buttonBefore.classList.add('before')
			// buttonBefore.appendChild(materialIconBefore)

			const buttonBeforeFeito = document.createElement('div')
			buttonBeforeFeito.classList.add('before')
			// buttonBeforeFeito.appendChild(materialIconBefore)

			const buttonReplay = document.createElement('div')
			buttonReplay.classList.add('next')
			// buttonReplay.appendChild(materialIconReplay)

			// material icons ---------------------------------------------------

			// listaFazer -------------------------------------------------
			buttonNext.addEventListener('click', (e) => {
				const item =
					e.target.parentNode.parentNode.parentNode.parentNode
						.parentNode
				item.removeChild(liTaskBox)
				listaAndamento.appendChild(liTaskBox)

				tasksAction.removeChild(buttonNext)

				tasksAction.appendChild(buttonBefore)
				buttonBefore.appendChild(materialIconBefore)
				tasksAction.appendChild(buttonNextAndamento)
				buttonNextAndamento.appendChild(materialIconNext)
			})
			// listaAndamento ---------------------------------------------
			buttonNextAndamento.addEventListener('click', (e) => {
				const item =
					e.target.parentNode.parentNode.parentNode.parentNode
						.parentNode
				item.removeChild(liTaskBox)
				listaFeito.appendChild(liTaskBox)

				tasksAction.removeChild(buttonBefore)
				tasksAction.removeChild(buttonNextAndamento)

				tasksAction.appendChild(buttonBeforeFeito)
				buttonBeforeFeito.appendChild(materialIconBefore)
				tasksAction.appendChild(buttonReplay)
				buttonReplay.appendChild(materialIconReplay)
			})

			buttonBefore.addEventListener('click', (e) => {
				const item =
					e.target.parentNode.parentNode.parentNode.parentNode
						.parentNode
				item.removeChild(liTaskBox)
				listaFazer.appendChild(liTaskBox)

				tasksAction.removeChild(buttonBefore)
				tasksAction.removeChild(buttonNextAndamento)

				tasksAction.appendChild(buttonNext)
				buttonNext.appendChild(materialIconNext)
			})

			// listaFeito -------------------------------------------------
			buttonBeforeFeito.addEventListener('click', (e) => {
				const item =
					e.target.parentNode.parentNode.parentNode.parentNode
						.parentNode
				item.removeChild(liTaskBox)
				listaAndamento.appendChild(liTaskBox)

				tasksAction.removeChild(buttonBeforeFeito)
				tasksAction.removeChild(buttonReplay)

				tasksAction.appendChild(buttonBefore)
				buttonBefore.appendChild(materialIconBefore)
				tasksAction.appendChild(buttonNextAndamento)
				buttonNextAndamento.appendChild(materialIconNext)
			})

			buttonReplay.addEventListener('click', (e) => {
				const item =
					e.target.parentNode.parentNode.parentNode.parentNode
						.parentNode
				item.removeChild(liTaskBox)
				listaFazer.appendChild(liTaskBox)

				tasksAction.removeChild(buttonBeforeFeito)
				tasksAction.removeChild(buttonReplay)

				tasksAction.appendChild(buttonNext)
				buttonNext.appendChild(materialIconNext)
			})

			// BOTAO DE DELETE
			buttonDell.addEventListener('click', (e) => {
				const item =
					e.target.parentNode.parentNode.parentNode.parentNode
						.parentNode.parentNode.parentNode
				console.log(item)
				item.removeChild(liTaskBox)
			})
		}
	})
})

function limpar() {
	document.getElementById('formTitulo').value = ''
	document.getElementById('formDescricao').value = ''
}
