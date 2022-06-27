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
	.catch((error) => {
		pFrase = document.getElementsByClassName('apiFrase')
		data =
			'A sabedoria é um paradoxo. O Homem que mais sabe é aquele que mais reconhece a vastidão da sua ignorância.'
		pFrase[1].innerHTML = data
		pFrase[0].innerHTML = data
	})

function decision(size, body, frase) {
	if (size > 777) {
		frase[0].innerHTML = body.data
	} else {
		frase[1].innerHTML = body.data
	}
}
