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