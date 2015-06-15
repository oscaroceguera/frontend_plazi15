var $ = window.jQuery

class MarvelApi {
	constructor (key) {
		// Constructor se llama cuando instanciamos nuestra clase con new MarvelApi()
		this.key = key
		this.baseUrl =  'http://gateway.marvel.com:80/v1/public/'
		// Asignar propiedades this
	}

	findSeries (title) {
		let url = `${this.baseUrl}series?title=${title}&apikey=${this.key}`
		// construimos l aurl que se necesita para obtener datos de los avengers

		// siempre pide dtos a la API de MarvelApi
		if(localStorage[url]){
			let datos = localStorage[url]

			datos = JSON.parse(datos)
			console.log("hola desde el cache")
			return Promise.resolve(datos)

		} else {
			return Promise.resolve($.get(url))
			// hace que la peticion de jquery se vuelva una promesa
			.then ((res) =>{
				let datos = res.data.results[0]
				datos = JSON.stringify(datos)

				localStorage[url] = datos
				// regresamos un a nueva promesa en el 
				// primer resultado alo que nos regresa marvel
				return Promise.resolve(datos)
			})
		}
	}

	getResourceURI (resourceURI) {
		// este metodo es muy similar al de arriba
		//  ¿Podrias crear un metodo interno al que llamen estos dos??
		let url = `${resourceURI}?apikey=${this.key}`
		if(localStorage[url]){
			let datos = localStorage[url]

			datos = JSON.parse(datos)
			console.log("hola desde el cache")
			return Promise.resolve(datos)
		} 

		return Promise.resolve($.get(url))
		.then((res) => {
			let datos =  res.data.results[0]
			datos = JSON.stringify(datos)
			localStorage[url] = datos

			return Promise.resolve(datos)
		})
	}

}


window.MarvelApi = MarvelApi
