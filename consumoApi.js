fetch(
	'https://cors-anywhere.herokuapp.com/https://positive-vibes-api.herokuapp.com/quotes/random',
)
	.then((resposta) => {
		return resposta.json()
	})
	.then((corpo) => {
		const pFrase = document.getElementsByClassName('apiFrase')
		let w = window.innerWidth
		decision(w, corpo, pFrase)
		window.onresize = function () {
			w = document.body.clientWidth
			decision(w, corpo, pFrase)
		}
	})

function decision(size, body, frase) {
	if (size > 777) {
		frase[0].innerHTML = body.data
	} else {
		frase[1].innerHTML = body.data
	}
}
