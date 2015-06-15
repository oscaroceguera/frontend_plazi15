var $ = window.jQuery;
var MarvelApi = window.MarvelApi;

var key = 'a971e828c065fdbdd0fa57b919638c38'
var api = new MarvelApi(key)

api.findSeries('avengers')
	.then((serie) => {
		let serieImage = `url(${serie.thumbnail.path}.${serie.thumbnail.extension})`
		$('.Layout').css('background-image', serieImage)

		var characters = serie.characters.items;
		var promises = []
		for(let character of characters){
			let promise = api.getResourceURI(character.resourceURI)
			promises.push(promise)
		}
		return Promise.all(promises)
	})
	.then((characters) => {
		return characters.filter((character) => !!character.thumbnail)
	})
	.then((characters) => {
		// ir por las carta
		$('.Card').each((i,item) =>{
			let character = characters[i]
			let $this = $(item)
			// obtenemos las imagen
			let $image = $this.find('.Card-image')
			// obtenemos la descripcion
			let $description = $this.find('.Card-description')
			// obtenemos card name
			let $name = $this.find('.Card-name')

			$image.attr('src', `${character.thumbnail.path}.${character.thumbnail.extension}`)
			$name.text(character.name)
			$description.text(character.description)

		})
		
	})
	.catch((err) => {
		debugger;
		console.log(err)
	})


