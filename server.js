const express = require('express')
    , { json } = require('body-parser')
    , cors = require('cors')
    , PORT = 3000
    , massive = require('massive')
    , mainCtrl = require('./mainCtrl')
    , config = require('./config')
    , app = express();


app.use(json());
app.use(cors());

// You need to complete the information below to connect
// to the assessbox database on your postgres server.
massive(config.massiveConnectionString).then(dbInstance => {
  app.set("db", dbInstance);

  // Initialize user table and vehicle table.
  dbInstance.init_tables.user_create_seed().then(response => {
      console.log('User table init');
      dbInstance.init_tables.vehicle_create_seed().then(response => {
          console.log('Vehicle table init');
      })
  })

})

// ===== Build enpoints below ============
app.get('/api/users', mainCtrl.getAllUsers);
app.get('/api/vehicles', mainCtrl.getAllVehicles);
app.get('/api/user/:id/vehiclecount', mainCtrl.getCountCarsByID);
app.get('/api/user/:id/vehicle', mainCtrl.getCarsByUserID);
app.get('/api/newervehiclesbyyear', mainCtrl.getVehiclesByYear);
app.get('/api/vehicle', mainCtrl.getQuery);

app.put('/api/vehicle/:vid/user/:uid', mainCtrl.updateVehicleOwner);


app.post('/api/users', mainCtrl.addUser);
app.post('/api/vehicles', mainCtrl.addVehicle);

app.delete('/api/user/:uid/vehicle/:vid', mainCtrl.deleteOwnership);
app.delete('/api/vehicle/:id', mainCtrl.deleteVehicleByID);

// ===== Do not change port ===============
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})
