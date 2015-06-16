"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var $ = window.jQuery;

var MarvelApi = (function () {
	function MarvelApi(key) {
		_classCallCheck(this, MarvelApi);

		// Constructor se llama cuando instanciamos nuestra clase con new MarvelApi()
		this.key = key;
		this.baseUrl = "http://gateway.marvel.com:80/v1/public/"
		// Asignar propiedades this
		;
	}

	_createClass(MarvelApi, [{
		key: "findSeries",
		value: function findSeries(title) {
			var url = "" + this.baseUrl + "series?title=" + title + "&apikey=" + this.key;
			// construimos l aurl que se necesita para obtener datos de los avengers

			// siempre pide dtos a la API de MarvelApi
			if (localStorage[url]) {
				var datos = localStorage[url];

				datos = JSON.parse(datos);
				console.log("hola desde el cache");
				return Promise.resolve(datos);
			} else {
				return Promise.resolve($.get(url))
				// hace que la peticion de jquery se vuelva una promesa
				.then(function (res) {
					var datos = res.data.results[0];
					datos = JSON.stringify(datos);

					localStorage[url] = datos;
					// regresamos un a nueva promesa en el
					// primer resultado alo que nos regresa marvel
					return Promise.resolve(datos);
				});
			}
		}
	}, {
		key: "getResourceURI",
		value: function getResourceURI(resourceURI) {
			// este metodo es muy similar al de arriba
			//  ¿Podrias crear un metodo interno al que llamen estos dos??
			var url = "" + resourceURI + "?apikey=" + this.key;
			if (localStorage[url]) {
				var datos = localStorage[url];

				datos = JSON.parse(datos);
				console.log("hola desde el cache");
				return Promise.resolve(datos);
			}

			return Promise.resolve($.get(url)).then(function (res) {
				var datos = res.data.results[0];
				datos = JSON.stringify(datos);
				localStorage[url] = datos;
				return Promise.resolve(datos);
			});
		}
	}, {
		key: "searchCharacter",
		value: function searchCharacter(name) {
			var url = "" + this.baseUrl + "/characters?name=" + name + "&apikey=" + this.key;
			return new Promise(function (done) {
				$.get(url).done(function (data) {
					done(data);
				});
			}).then(function (res) {
				// falsy -> 0 , '' , null, undefined, NaN
				// !0, !'', !null, !undefined, !NaN -> true
				if (!res.data.total) {
					return Promise.reject("Ese personaje no es de marvel pendejo");
				}
				return res.data.results[0];
			});
		}
	}]);

	return MarvelApi;
})();

window.MarvelApi = MarvelApi;