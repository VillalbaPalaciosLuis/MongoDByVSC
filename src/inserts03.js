db.inventory03.deleteMany({})
db.inventory03.insertMany(
    [
        { _id: 1, nombre: "La historia interminable", editorial: "Alfaguara", autor: "Michael Ende", qty: 10, año: 1979 },
        { _id: 2, nombre: "El señor de los anillos: La comunidad del anillo", editorial: "Minotauro", autor: "J.R.R. Tolkien", qty: 2, año: 1954  },
        { _id: 3, nombre: "El guardián entre el centeno", editorial: "Alianza Editorial", autor: "J.D. Salinger", qty: 10, año: 1951  },
        { _id: 4, nombre: "El nombre del viento", editorial: "Debolsillo", autor: "Patrick Rothfuss", qty: 5, año: 2007 },
        { _id: 5, nombre: "El señor de los anillos: Las dos torres", editorial: "Minotauro", autor: "J.R.R. Tolkien", qty: 8, año: 1954  },
        { _id: 6, nombre: "El señor de los anillos: El retorno del rey", editorial: "Minotauro", autor: "J.R.R. Tolkien", qty: 3, año: 1955  }
        

]

)