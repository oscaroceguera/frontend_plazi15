'use strict';

var $ = window.jQuery;
var MarvelApi = window.MarvelApi;

var key = 'a971e828c065fdbdd0fa57b919638c38';
var api = new MarvelApi(key);

api.findSeries('avengers').then(function (serie) {
	var serieImage = 'url(' + serie.thumbnail.path + '.' + serie.thumbnail.extension + ')';
	$('.Layout').css('background-image', serieImage);

	var characters = serie.characters.items;
	var promises = [];
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = characters[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var character = _step.value;

			var promise = api.getResourceURI(character.resourceURI);
			promises.push(promise);
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator['return']) {
				_iterator['return']();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}

	return Promise.all(promises);
}).then(function (characters) {
	return characters.filter(function (character) {
		return !!character.thumbnail;
	});
}).then(function (characters) {
	for (var i = 0; i < 5; i++) {
		var character = characters[i];
		var template = renderCharacter(character);
		var $card = $(template);
		$('.Battle-player').append($card);
	}

	// // ir por las carta
	// $('.Card').each((i,item) =>{
	// 	let character = characters[i]
	// 	let $this = $(item)
	// 	// obtenemos las imagen
	// 	let $image = $this.find('.Card-image')
	// 	// obtenemos la descripcion
	// 	let $description = $this.find('.Card-description')
	// 	// obtenemos card name
	// 	let $name = $this.find('.Card-name')

	// 	$image.attr('src', `${character.thumbnail.path}.${character.thumbnail.extension}`)
	// 	$name.text(character.name)
	// 	$description.text(character.description)

	// })
})['catch'](function (err) {
	debugger;
	console.log(err);
});

function renderCharacter(character) {
	return '\n\t<div class="Card"> \n\t  <div class="Card-container">\n\t  <h2 class="Card-name">' + character.name + '</h2><img src="' + character.thumbnail.path + '.' + character.thumbnail.extension + '" alt="Wolverine" class="Card-image">\n\t  <div class="Card-description">' + character.description + '</div>\n\t  <div class="Card-attack">500 puntos de ataque</div>\n\t  </div>\n\t  <div class="Card-backface"></div>\n\t</div>';
}