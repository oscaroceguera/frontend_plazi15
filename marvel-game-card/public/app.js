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
	// ir por las carta
	$('.Card').each(function (i, item) {
		var character = characters[i];
		var $this = $(item);
		// obtenemos las imagen
		var $image = $this.find('.Card-image');
		// obtenemos la descripcion
		var $description = $this.find('.Card-description');
		// obtenemos card name
		var $name = $this.find('.Card-name');

		$image.attr('src', '' + character.thumbnail.path + '.' + character.thumbnail.extension);
		$name.text(character.name);
		$description.text(character.description);
	});
})['catch'](function (err) {
	debugger;
	console.log(err);
});