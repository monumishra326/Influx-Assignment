const express=require("express")


const router=express.Router()



const Product=require("../models/itemmaster.model")


router.post("", async (req, res) => {
    try {
      let Productitem = await Product.create(req.body);
  
      return res.status(201).send({Productitem });
    } catch (e) {
      return res.status(500).json({ status: "Failed", message: e.message });
    }
  });


module.exports=router