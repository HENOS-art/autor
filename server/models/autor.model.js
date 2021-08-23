const mongoose = require("mongoose");

const AutorSchema = new mongoose.Schema({
	name: { 
		type: String,
		required: [ true, "Name is required for pets" ],
		minlength: [ 3, "Name must be atleast 3 characters long" ],
	},
    

    
    
		
    
    

   
} ,
           { timestamps: true }
);

const Autor = mongoose.model("Autor", AutorSchema);

module.exports = Autor;