const Autor = require('../models/autor.model'); 

module.exports={
  getAll:(req,res) =>{
    Autor.find({})
    .then((autors )=>res.json(autors))
    .catch((err)=>res.json(err))
},
  
getOne:(req,res) =>{
    Autor.findById(req.params.id)
    .then((autor )=>res.json(autor))
    .catch((err)=>res.json(err))
},
create:(req,res) =>{
    console.log(req.body);
    Autor.create(req.body)
    .then((newAutor)=>res.json(newAutor))
    .catch((err)=>res.json(err));
},



update :(req, res) => {
    Autor.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updatedAutor => res.json({ updatedAutor }))
    .catch(err => res.json({  err }));
},
delete:(req,res) =>{
    Autor.findByIdAndRemove(req.params.id)
    .then((deleted)=>res.json(deleted))
    .catch((err)=>res.json(err));
},
};