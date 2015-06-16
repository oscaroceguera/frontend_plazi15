Math.random() -> // REgresa una fraccion 0-1

Math.ceil(0.5) -> 1
Math.ceil(0.2) -> 1
Math.ceil(0.00000000000000000001) -> 1
Math.ceil(2.00000000000000000001) -> 3 // siempre regresa un entero

Math.floor(0.5) -> 0
Math.floor(0.2) -> 0
Math.floor(0.00000000000000000001) -> 0
Math.floor(2.00000000000000000001) -> 2 // siempre regresa un entrero


Math.round(0.5) -> 1
Math.round(0.2) -> 0
Math.round(0.00000000000000000001) -> 0
Math.round(2.00000000000000000001) -> 2 // siempre regresa un entero

Math.random() // me genere de 5000 a 1000


let rand = Math.random() * (1000 - 500)

rand = Math.ceil(rand)