## 1 - ComponentCss SuitCss

https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md

## 2 - Escribir .Card en html y css

## 3 - Stylus y Jade

### Stylus [Preprocesador de css]

> 1 - Instalar Nodejs
> 
> 2 - Instalar el paquete de Stylus de manera global

      $ sudo npm install stylus -g
> Ayuda de stylus
        
      $ stylus -h 
> Convertir a css

      $ stylus app.styl

> Comprimir para producción

      $ stylus app.styl -c
> Escuchando los cambios

      $ stylus app.styl -c -w

> comprimir el archivo en otra carpeta
     
      $ stylus -w -c -o ../public/css app.styl
 
> Compilar con nib
      
      $ stylus -u nib -c -w -o ../public/css app.styl


### Jade

> Instalar Jade
        
     $ sudo npm install -g jade
> Compilar jade y comprimir el archivo
        
      $ jade index.jade
> Compilar jade sin compresion

      $ jade index.jade -P
                
> Exportar el archivo a otra carpeta sin compresion
        
      $ jade -o ../ -w -P  index.jade

## 4 Creación del componente layout

## 5 Flex box con layout

> Instalar Nib para prefijos

      $ sudo npm install nib -g

## 6 ¿Qué es un API?

API - Application Programming Interface

## 7 Creando un entorno de desarrollo local

> Crear un servidor http server

      $ sudo npm install http-server -g

> Correr el server 
      
      $ http-server .

## 8 AJAX com jQuery

### package.json

~~~
{
      "scripts" : {
            "jade" : "jade --watch --pretty lib/*.jade --out .",
            "stylus" : "stylus --use nib --compress --watch lib/app.styl --out public/css",
            "server" : "http-server ."
      }
}
~~~

      $ npm run jade (compilara el jade)
      $ npm run stylus (compila el stylus)
      $ npm run server (compila el server)
 
## 9 Promises

### Funcion Promises 

> 
* estados
* pending
* resolved
* rejected

### Consultando todos las promesa

~~~
      Promise.all(promises)
~~~

## 10 ECMAScript6

### [Babeljs](https://babeljs.io)

> instalar babeljs
      
      $ sudo npm install -g babel
      $ babel --watch
      $ babel --watch lib --out-dir public
      ó
      $ npm run babel (Añadiendo el script a package.json)

## 11 Modificar elementos con API Data - Arrow functions - Elipsis CSS - Latencia y Local Storage

### Local Storage

* Base de datos en memoria del navegador
* Almacena llaves y valores
* Hasta 5megas
* Todo se convierte en cadena
      
      ~~~
            localStorage.avengers = ['thor', 'hulk', 'iron man']
            // 'thor,hulk,iron man'
            
            localStorage.actors = [ironman: 'Robert',captainAmerica:'Chris']
            // '[object object]'
            
            // PASAR A JSON
            localStorage.avenger = JSON.stringify(avenger)
            // "{"hulk":"hulk","ironman":"iron man"}"
            
            JSON.parse(localStorage.avenger)
            //Object {hulk: "hulk", ironman: "iron man"}
      ~~~

## 12 Templates ECMAScript 6 
## 13 Datos en plantilla usando Promises
## 14 Browserify & component Oriented Development

      $ sudo npm install page
      $ sudo npm install jquery
            
      // instalar browserify
      $ npm install -g browserify

      // instalr babelify
      $ sudo npm install babelify

      // instalar jade para browserify
      $ sudo npm install jadeify
      









