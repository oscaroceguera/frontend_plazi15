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