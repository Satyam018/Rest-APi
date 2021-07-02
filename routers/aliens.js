const express=require('express');
const router=express.Router();
const Alien=require('../model/aliens')

router.get('/',async(req,res)=>{
  try{
      const aliens= await Alien.find();
      res.json(aliens)

  }catch(err){
      res.send('Error'+err)
  }
})

router.post('/',async(req,res)=>{
    const alien=new Alien({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    })
    try{
        const a1= await alien.save()
        console.log(alien)
        res.json(a1)

    }catch(err){
        res.send(err)
    }
})


module.exports=router