
/*
Para estos enunciados vamos a utilizar nuestras 3 colecciones:
- inserts01 que son prendas de ropa
- inserts02 que son coches
- inserts03 que son libros
*/


/*
Queremos localizar todos los coches que sean de color blanco.
*/

db.inventory02.find({color: "Blanco"})

/*
{ "_id" : 1, "vehículo" : { "marca" : "Renault", "modelo" : "Megane" }, "color" : "Blanco", "kilometros" : 400000 }
{ "_id" : 5, "vehículo" : { "marca" : "BMW", "modelo" : "X6" }, "color" : "Blanco", "kilometros" : 2000 }
{ "_id" : 8, "vehículo" : { "marca" : "Ford", "modelo" : "Fiesta" }, "color" : "Blanco", "kilometros" : 25000 }
*/

/*
Queremos encontrar todos los artículos de la talla 41
*/
db.inventory01.find ({ "tipo.talla": {$eq: 41}})
/*
{ "_id" : ObjectId("616a8ed33b4b067b09947bec"), "prenda" : "Zapatillas", "qty" : 200, "tipo" : { "talla" : 41, "color" : "Negro", "marca" : "Nike" } }
{ "_id" : ObjectId("616a8ed33b4b067b09947bee"), "prenda" : "Calcetines", "qty" : 800, "tipo" : { "talla" : 41, "color" : "Blanco", "marca" : "Artengo" } }
{ "_id" : ObjectId("616a8ed33b4b067b09947bef"), "prenda" : "Pantalones", "qty" : 50, "tipo" : { "talla" : 41, "color" : "Azules", "marca" : "Bershka" } }
*/

/*
Necesitamos saber los libros que tenemos con más de 8 ejemplares
*/
db.inventory03.find (  {  qty:{$gt: 7}  } )
/*
{ "_id" : 1, "nombre" : "La historia interminable", "editorial" : "Alfaguara", "autor" : "Michael Ende", "qty" : 10, "año" : 1979 }
{ "_id" : 3, "nombre" : "El guardián entre el centeno", "editorial" : "Alianza Editorial", "autor" : "J.D. Salinger", "qty" : 10, "año" : 1951 }
*/

/*
Necesitamos saber los libros que tenemos con 8 o más ejemplares
*/
db.inventory03.find (  {  qty:{$gte: 8}  } )
/*
{ "_id" : 1, "nombre" : "La historia interminable", "editorial" : "Alfaguara", "autor" : "Michael Ende", "qty" : 10, "año" : 1979 }
{ "_id" : 3, "nombre" : "El guardián entre el centeno", "editorial" : "Alianza Editorial", "autor" : "J.D. Salinger", "qty" : 10, "año" : 1951 }
{ "_id" : 5, "nombre" : "El señor de los anillos: Las dos torres", "editorial" : "Minotauro", "autor" : "J.R.R. Tolkien", "qty" : 8, "año" : 1954 }
*/

/*
Necesitamos saber los cohes con menos de 20000 kilómetros
*/
db.inventory02.find (  {  kilometros:{$lt: 20000 }  } )
/*
{ "_id" : 4, "vehículo" : { "marca" : "Ford", "modelo" : "Puma" }, "color" : "Negro", "kilometros" : 5200 }
{ "_id" : 5, "vehículo" : { "marca" : "BMW", "modelo" : "X6" }, "color" : "Blanco", "kilometros" : 2000 }
*/

/*
Necesitamos saber los cohes con 35000 kilómetros o menos
*/
db.inventory02.find (  {  kilometros:{$lte: 35000 }  } )
/*
{ "_id" : 2, "vehículo" : { "marca" : "Seat", "modelo" : "Panda" }, "color" : "Negro", "kilometros" : 35000 }
{ "_id" : 4, "vehículo" : { "marca" : "Ford", "modelo" : "Puma" }, "color" : "Negro", "kilometros" : 5200 }
{ "_id" : 5, "vehículo" : { "marca" : "BMW", "modelo" : "X6" }, "color" : "Blanco", "kilometros" : 2000 }
{ "_id" : 8, "vehículo" : { "marca" : "Ford", "modelo" : "Fiesta" }, "color" : "Blanco", "kilometros" : 25000 }
*/

/*
Necesitamos saber que prendas tenemos que no sean de color blanco 
*/
db.inventory01.find (  {  "tipo.color":{$ne: "Blanco" }  } )
/*
{ "_id" : ObjectId("616a8ed33b4b067b09947bec"), "prenda" : "Zapatillas", "qty" : 200, "tipo" : { "talla" : 41, "color" : "Negro", "marca" : "Nike" } }
{ "_id" : ObjectId("616a8ed33b4b067b09947bef"), "prenda" : "Pantalones", "qty" : 50, "tipo" : { "talla" : 41, "color" : "Azules", "marca" : "Bershka" } }

*/

/*
Necesitamos conocer todos los coches que sean de la marca Ford y tengan menos de 35000 kilómetros
*/
db.inventory02.find (  { $and: [{ kilometros:{$lte: 35000 }, "vehículo.marca": {$eq: "Ford"}} ]  } )
/*
{ "_id" : 4, "vehículo" : { "marca" : "Ford", "modelo" : "Puma" }, "color" : "Negro", "kilometros" : 5200 }
{ "_id" : 8, "vehículo" : { "marca" : "Ford", "modelo" : "Fiesta" }, "color" : "Blanco", "kilometros" : 25000 }
*/
