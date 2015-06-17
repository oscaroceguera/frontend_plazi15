var $ = window.jQuery
var page = window.page

var singninTemplate = `<label>Ingresa tu nombre</label>
  <input type="text" id="firstName" name="firstName" tabindex="1" placeholder="oscar, david, etc" class="Signin-name-input"/>
  <button tabindex="2" class="Signin-button">Ingresar</button>`

var homeTemplate = `<section class="Layout">   	
    <section class="Layout-angonist"> 
      <div class="Card">
        <h2 class="Card-name">Wolverine</h2><img src="./public/image/wolverine.jpg" alt="Wolverine" class="Card-image">
        <div class="Card-description">Wolverine es muy poderoso</div>
        <div class="Card-attack">500 puntos de ataque</div>
      </div>
      <div class="Card">
        <h2 class="Card-name">Wolverine</h2><img src="./public/image/wolverine.jpg" alt="Wolverine" class="Card-image">
        <div class="Card-description">Wolverine es muy poderoso</div>
        <div class="Card-attack">500 puntos de ataque</div>
      </div>
      <div class="Card">
        <h2 class="Card-name">Wolverine</h2><img src="./public/image/wolverine.jpg" alt="Wolverine" class="Card-image">
        <div class="Card-description">Wolverine es muy poderoso</div>
        <div class="Card-attack">500 puntos de ataque</div>
      </div>
      <div class="Card">
        <h2 class="Card-name">Wolverine</h2><img src="./public/image/wolverine.jpg" alt="Wolverine" class="Card-image">
        <div class="Card-description">Wolverine es muy poderoso</div>
        <div class="Card-attack">500 puntos de ataque</div>
      </div>
      <div class="Card">
        <h2 class="Card-name">Wolverine</h2><img src="./public/image/wolverine.jpg" alt="Wolverine" class="Card-image">
        <div class="Card-description">Wolverine es muy poderoso</div>
        <div class="Card-attack">500 puntos de ataque</div>
      </div>
    </section>
    <section class="Layout-main">
      <div class="Layout-status">
        <div class="Status">
          <h3 class="Status-player">Jaun</h3>
          <p class="Status-points">10000</p>
        </div>
        <div class="Status">
          <h3 class="Status-player">oscar</h3>
          <p class="Status-points">10000</p>
        </div>
      </div>
      <div class="Layout-battle">
        <div class="Battle">
          <div class="Battle-antagonist">
            <div class="Card">
              <h2 class="Card-name">Wolverine</h2><img src="./public/image/wolverine.jpg" alt="Wolverine" class="Card-image">
              <div class="Card-description">Wolverine es muy poderoso</div>
              <div class="Card-attack">500 puntos de ataque</div>
            </div>
            <div class="Card">
              <h2 class="Card-name">Wolverine</h2><img src="./public/image/wolverine.jpg" alt="Wolverine" class="Card-image">
              <div class="Card-description">Wolverine es muy poderoso</div>
              <div class="Card-attack">500 puntos de ataque</div>
            </div>
            <div class="Card">
              <h2 class="Card-name">Wolverine</h2><img src="./public/image/wolverine.jpg" alt="Wolverine" class="Card-image">
              <div class="Card-description">Wolverine es muy poderoso</div>
              <div class="Card-attack">500 puntos de ataque</div>
            </div>
            <div class="Card">
              <h2 class="Card-name">Wolverine</h2><img src="./public/image/wolverine.jpg" alt="Wolverine" class="Card-image">
              <div class="Card-description">Wolverine es muy poderoso</div>
              <div class="Card-attack">500 puntos de ataque</div>
            </div>
            <div class="Card">
              <h2 class="Card-name">Wolverine</h2><img src="./public/image/wolverine.jpg" alt="Wolverine" class="Card-image">
              <div class="Card-description">Wolverine es muy poderoso</div>
              <div class="Card-attack">500 puntos de ataque</div>
            </div>
          </div>
          <div class="Battle-player">
            <div class="Card">
              <h2 class="Card-name">Wolverine</h2><img src="./public/image/wolverine.jpg" alt="Wolverine" class="Card-image">
              <div class="Card-description">Wolverine es muy poderoso</div>
              <div class="Card-attack">500 puntos de ataque</div>
            </div>
            <div class="Card">
              <h2 class="Card-name">Wolverine</h2><img src="./public/image/wolverine.jpg" alt="Wolverine" class="Card-image">
              <div class="Card-description">Wolverine es muy poderoso</div>
              <div class="Card-attack">500 puntos de ataque</div>
            </div>
            <div class="Card">
              <h2 class="Card-name">Wolverine</h2><img src="./public/image/wolverine.jpg" alt="Wolverine" class="Card-image">
              <div class="Card-description">Wolverine es muy poderoso</div>
              <div class="Card-attack">500 puntos de ataque</div>
            </div>
            <div class="Card">
              <h2 class="Card-name">Wolverine</h2><img src="./public/image/wolverine.jpg" alt="Wolverine" class="Card-image">
              <div class="Card-description">Wolverine es muy poderoso</div>
              <div class="Card-attack">500 puntos de ataque</div>
            </div>
            <div class="Card">
              <h2 class="Card-name">Wolverine</h2><img src="./public/image/wolverine.jpg" alt="Wolverine" class="Card-image">
              <div class="Card-description">Wolverine es muy poderoso</div>
              <div class="Card-attack">500 puntos de ataque</div>
            </div>
          </div>
        </div>
      </div>
      <div class="Layout-phases">
        <div class="Phases">
          <p>OMG ese ataque esuna mamada me quitaste muchos puntos</p>
        </div>
      </div>
    </section>
    <section class="Layout-player">
      <div class="Card">
        <h2 class="Card-name">Wolverine</h2><img src="./public/image/wolverine.jpg" alt="Wolverine" class="Card-image">
        <div class="Card-description">Wolverine es muy poderoso</div>
        <div class="Card-attack">500 puntos de ataque</div>
      </div>
      <div class="Card">
        <h2 class="Card-name">Wolverine</h2><img src="./public/image/wolverine.jpg" alt="Wolverine" class="Card-image">
        <div class="Card-description">Wolverine es muy poderoso</div>
        <div class="Card-attack">500 puntos de ataque</div>
      </div>
      <div class="Card">
        <h2 class="Card-name">Wolverine</h2><img src="./public/image/wolverine.jpg" alt="Wolverine" class="Card-image">
        <div class="Card-description">Wolverine es muy poderoso</div>
        <div class="Card-attack">500 puntos de ataque</div>
      </div>
      <div class="Card">
        <h2 class="Card-name">Wolverine</h2><img src="./public/image/wolverine.jpg" alt="Wolverine" class="Card-image">
        <div class="Card-description">Wolverine es muy poderoso</div>
        <div class="Card-attack">500 puntos de ataque</div>
      </div>
      <div class="Card">
        <h2 class="Card-name">Wolverine</h2><img src="./public/image/wolverine.jpg" alt="Wolverine" class="Card-image">
        <div class="Card-description">Wolverine es muy poderoso</div>
        <div class="Card-attack">500 puntos de ataque</div>
      </div>
    </section>
  </section>`

//page('ruta destino', que quiro que pase)
page('/', home)
page('/signin', signin)

function home() {
	console.log('Estoy navegando al home');
	$('.app-container').html(homeTemplate)
}

function signin(){
	console.log('Estouy navegando a signin')

	$('.app-container').html(singninTemplate)

	$('.Signin-button').on('click',function(event){
		event.preventDefault()
		// obtengo el contenido del input
		var username = $('Signin-name-input')[0].value
		
		if(!username) return alert('Ingrese un nombre válido')

		page('/')
	})
}


// Todo listo, ahora a trabajar, page!
page()