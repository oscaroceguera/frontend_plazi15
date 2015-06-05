var $ = window.jQuery;

var key = 'apikey=a971e828c065fdbdd0fa57b919638c38'
var url = 'http://gateway.marvel.com:80/v1/public/series?title=avengers&apikey=a971e828c065fdbdd0fa57b919638c38';

Promise.resolve($.get(url))
.then(function(results){
	var characters = results.data.results[0].characters.items;
	var promises = []


	for(var i in characters){
		var character = characters[i]
		var characterUrl = character.resourceURI +  '?' + key
		promises.push(Promise.resolve($.get(characterUrl)))
	}
	
	return Promise.all(promises)
})
.then(function(characters){
	console.log(characters)
})
.catch(function(err){
	debugger;
	console.log(err)
})


