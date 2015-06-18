var $ = require('jquery')
var page = require('page')

var singninTemplate = require('./template.jade')

page('/signin', signin)

function signin(ctx, next){
  console.log('Estouy navegando a signin')

  $('.app-container').html(singninTemplate)

  $('.Signin-button').on('click',function(event){
    event.preventDefault()
    // obtengo el contenido del input
    var username = $('.Signin-name-input')[0].value
    
    if(!username) return alert('Ingrese un nombre válido')

    window.user = { username : username }
    
    page('/')

  })
}