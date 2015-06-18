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
        characters = shuffle(characters)

        for(let i = 0; i<5 ; i++){
           let character = characters[i]
           drawCharacter(character)
           //$('.Battle-player').append($card)
        }
    })
    .catch((err) => {
        console.log(err)
    })

$('.CharacterForm').on('submit', function(event){
	event.preventDefault();

	var name = $(this).find('.CharacterForm-name').val()
	api.searchCharacter(name)
	.then(function(character){
		drawCharacter(character)
	})
	.catch(function(reason){
		if(reason === 'Ese personaje no es de marvel pendejo'){
			$('.CharacterForm-message').text(reason)
		}
	})

	// Llamar a la api de marvel
	// Dibujar una carta con el personaje que regrese la api
	// - Si no regresa un personaje -> no hay personaje
	// - siregresa solu in personaje -> dbujar la carta
	// - si regresa mas de un personaje -> dibujar carta con e l primer persanej que rgrese
})

function renderCharacter (character) {
    let attackPoints = Math.ceil(Math.random() * 500) + 500
    return `
        <div class="Card"> 
          <div class="Card-container">
          <h2 class="Card-name">${character.name}</h2><img src="${character.thumbnail.path}.${character.thumbnail.extension}" alt="Wolverine" class="Card-image">
          <div class="Card-description">${character.description}</div>
          <div class="Card-attack" data-attack="${attackPoints}">${attackPoints}</div>
          </div>
          <div class="Card-backface"></div>
        </div>`
}


function shuffle (arr){
    for (var i = 0; i<arr.length; i++){
        let tmp = arr[i]
        let index = Math.floor(Math.random() * arr.length -1)
        arr[i] = arr[index]
        arr[index] = tmp 
    }

    return arr
}

function drawCharacter(character){
	let template = renderCharacter(character)
	let $card = $(template)
	$card.on('click', function(event){
		let $this = $(this)
		let attack = $this.find('.Card-attack')
		console.log(attack.data('attack'))
	})
	$('.Battle-player').append($card)
}






