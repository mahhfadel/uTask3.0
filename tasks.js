window.addEventListener('load', () => {
	const form = document.querySelector('form')
	const input = document.querySelector('input')
	const textarea = document.querySelector('textarea')
	const listaFazer = document.querySelector('#a-fazer')
	const listaAndamento = document.querySelector('#em-andamento')
	const listaFeito = document.querySelector('#ul-feito')

	form.addEventListener('submit', (e) => {
		e.preventDefault()

		if (input.value) {
			console.log('entrou')
			const titulo = input.value
			const descricao = textarea.value

			const liTaskBox = document.createElement('li')
			liTaskBox.classList.add('tasksBox')

			const liTopTasks = document.createElement('div')
			liTopTasks.classList.add('topTasks')
			liTaskBox.appendChild(liTopTasks)

			const liTitulo = document.createElement('p')
			liTitulo.innerHTML = titulo
			console.log(titulo)
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
			buttoncollapsible.classList.add('collapsible')
			buttoncollapsible.type = 'button'
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

			const buttonLeft = document.createElement('div')
			// buttonLeft.classList.add('')
			tasksAction.appendChild(buttonLeft)

			const materialIconLeft = document.createElement('span')
			materialIconLeft.classList.add('material-icons')
			// materialIconLeft.id = ''
			// materialIconLeft.innerHTML = ''
			buttonLeft.appendChild(materialIconLeft)

			const buttonRight = document.createElement('div')
			buttonRight.classList.add('next')
			tasksAction.appendChild(buttonRight)

			const materialIconRight = document.createElement('span')
			materialIconRight.classList.add('material-icons')
			materialIconRight.id = 'navigate_next'
			materialIconRight.innerHTML = 'navigate_next'
			buttonRight.appendChild(materialIconRight)

			listaFazer.appendChild(liTaskBox)
		}
	})
})
