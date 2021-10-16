db.inventory02.deleteMany({})
db.inventory02.insertMany(
    [
        { _id: 1, vehículo:{ marca:"Renault", modelo:"Megane"}, color:"Blanco", kilometros:400000 },
        { _id: 2, vehículo:{ marca:"Seat", modelo:"Panda"}, color:"Negro", kilometros:35000 },
        {  _id: 3, vehículo:{ marca:"Ford", modelo:"Mondeo"}, color:"Rojo", kilometros:120000 },
        {  _id: 4, vehículo:{ marca:"Ford", modelo:"Puma"}, color:"Negro", kilometros:5200 },
        {  _id: 5, vehículo:{ marca:"BMW", modelo:"X6"}, color:"Blanco", kilometros:2000 },
        {  _id: 6, vehículo:{ marca:"Renault", modelo:"Clio"}, color:"Negro", kilometros:390000 },
        {  _id: 7, vehículo:{ marca:"Fiat", modelo:"Panda"}, color:"Rojo", kilometros:420000 },
        {  _id: 8, vehículo:{ marca:"Ford", modelo:"Fiesta"}, color:"Blanco", kilometros:25000 }

]

)
