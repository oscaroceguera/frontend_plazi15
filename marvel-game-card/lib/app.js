var $ = window.jQuery;
var MarvelApi = window.MarvelApi;

var key = 'a971e828c065fdbdd0fa57b919638c38'
var api = new MarvelApi(key)

api.findSeries('avengers')
	.then((serie) => {
		
		var characters = serie.characters.items;
		var promises = []

		for(let character of characters){
			let promise = api.getResourceURI(character.resourceURI)
			promises.push(promise)
		}
		
		return Promise.all(promises)
	})
	.then((characters) => {
		debugger
		console.log(characters)
	})
	.catch((err) => {
		debugger;
		console.log(err)
	})


