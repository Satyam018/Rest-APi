const moongoose=require('mongoose');

const alienschema=new moongoose.Schema({
    name:{
        type: String,
        require: true
    },
    tech:{
        type:String,
        require:true
    },
    sub:{
        type:Boolean,
        require:true,
        default:false
    }
})

module.exports=moongoose.model('Alien',alienschema)