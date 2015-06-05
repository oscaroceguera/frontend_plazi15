'use strict';

var $ = window.jQuery;
var MarvelApi = window.MarvelApi;

var key = 'a971e828c065fdbdd0fa57b919638c38';
var api = new MarvelApi(key);

api.findSeries('avengers').then(function (serie) {

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
	debugger;
	console.log(characters);
})['catch'](function (err) {
	debugger;
	console.log(err);
});