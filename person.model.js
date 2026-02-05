const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  age: {
    type: Number,
    required: true,
    min: 0,
  },

  favoriteFoods: {
    type: [String],
    default: [pizza]
  },

  email:{
      type:String,
      required : true,
      unique:true
  },

  password:{
      type:String,
      required:true,
      minlength:4
  },
  phone:{
      type :String , 
      required:true
  },
  image:{
       type:String,
       default:"https://i.sstatic.net/l60Hf.png"  
  },
  role:{
    type:String,
    enum:['CUSTOMER','ADMIN'],
    default:'CUSTOMER'
  }
});

const Person = mongoose.model("Person", personSchema);
module.exports = Person;