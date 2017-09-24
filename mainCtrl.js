module.exports = {

  addUser: (req,res,next) => {
      const dbInstance = req.app.get('db')
      const{name, email} = req.body;
      dbInstance.addUser([name, email])
      .then( (users) => res.status(200).send(users) )
      .catch(()=>res.status(500).send());
   },

  addVehicle: (req,res,next) => {
      const dbInstance = req.app.get('db')
      const{make, model, year, owner_id} = req.body;
      dbInstance.addVehicle([make, model, year, owner_id])
      .then( (vehicles) => res.status(200).send(vehicles) )
      .catch(()=>res.status(500).send());
   },

  getCountCarsByID:(req,res,next) => {
      const dbInstance = req.app.get('db')
      const {id} = req.params;
      dbInstance.getCountCarsByID([id])
      .then( (vehicle) => res.status(200).send(vehicle) )
      .catch(()=>res.status(500).send());
   },

  getCarsByUserID:(req,res,next) => {
      const dbInstance = req.app.get('db')
      const {id} = req.params;
      dbInstance.getVehiclesByUserID([id])
      .then( (vehicle) => res.status(200).send(vehicle) )
      .catch(()=>res.status(500).send());
   },

  getQuery:(req,res,next) => {
      const dbInstance = req.app.get('db')
      const {userEmail, userFirstStart} = req.query;
      if(userEmail) {
        dbInstance.vehicleEmail([userEmail])
        .then( (vehicle) =>res.status(200).send(vehicle) )
        .catch(()=>res.status(500).send());
        return;
      }
      if(userFirstStart) {
        dbInstance.vehicleLike([userFirstStart])
        .then( (vehicle) =>res.status(200).send(vehicle) )
        .catch(()=>res.status(500).send());
        return;
      }
   },

  getVehiclesByYear:(req,res,next) => {
      const dbInstance = req.app.get('db')
      dbInstance.getVehiclesByYear()
      .then( (vehicles) => res.status (200).send(vehicles) )
      .catch(()=>res.status(500).send());
   },

  getAllUsers:(req,res,next) => {
      const dbInstance = req.app.get('db')
      dbInstance.getAllUsers()
      .then( (users) =>res.status(200).send(users) )
      .catch(()=>res.status(500).send());
   },

   getAllVehicles: ( req, res, next ) => {
     const dbInstance = req.app.get('db');
     dbInstance.getAllVehicles()
       .then( (vehicles) => res.status(200).send(vehicles) )
       .catch( (err) => res.status(500).send(err) );
   },

  updateVehicleOwner:(req,res,next) => {
      const dbInstance = req.app.get('db')
      const {vid, uid} = req.params;
      dbInstance.updateVehicleOwner([vid, uid])
      .then( (vehicles) =>res.status(200).send(vehicles) )
      .catch(()=>res.status(500).send());
   },

  deleteVehicleByID:(req,res,next) => {
      const dbInstance = req.app.get('db')
      const {id} = req.params;
      dbInstance.deleteVehicleByID([id])
      .then( (vehicle) =>res.status(200).send(vehicle) )
      .catch(()=>res.status(500).send());
   },

  deleteOwnership:(req,res,next) => {
      console.log(req.params)
      const dbInstance = req.app.get('db')
      const {vid, uid} = req.params;
      dbInstance.deleteOwnership([vid, uid])
      .then( (vehicle) =>res.status(200).send(vehicle) )
      .catch(()=>res.status(500).send());
   }
};
