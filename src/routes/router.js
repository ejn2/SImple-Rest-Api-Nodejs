const express = require('express');

const Product = require('../models/migrations/products');

const router = express.Router();

require('../config/cors')(router);


//show all
router.get("/", async (req, res) => {

    try{
        const data = await Product.findAll({ attributes: ['id', 'name', 'price', 'description'] });

        if(data.length > 0){
           return res.status(200).json(data);
        }

        return res.status(204).json();

    }catch{
        res.status(500).json({ error: "internal server error" });
    }

});



//show one
router.get("/product/:id", async (req, res) => {
    const { id } = req.params;

    try{
        const data = await Product.findByPk(id, { attributes: ['id', 'name', 'price', 'description'] });
        
        if(data){
            return res.status(200).json(data);
        }

        return res.status(204).json();

    }catch{
        res.status(500).json({ error: "internal server error" });
    }

});



//new
router.post("/product/new", async (req, res) => {
    const { name, price, description } = req.body;

    if(name, price, description){

        try{
            const data = await Product.create({ name, price, description });
            return res.status(201).json(data);

        }catch{
            res.status(500).json({ error: "internal server error" });
        }

    }
    
    return res.status(400).json({ name: "", price: "", description: "" });

});



//update
router.put("/product/update/:id", async (req, res) => {
    const { id } = req.params;
    const dado = req.body;

    try{
        const data = await Product.findByPk(id);

        if(data){
            const dataUp = await data.update(dado);
            return res.status(200).json(dataUp);
        }

        return res.status(204).json();

    }catch{
        res.status(500).json({ error: "internal server error" });
    }

});


router.delete("/product/delete/:id", async (req, res) => {
    const { id } = req.params;

    try{
        const data = await Product.findByPk(id);

        if(data){
            data.destroy();
            return res.status(200).json();
        }

        return res.status(204).json();

    }catch{
        res.status(500).json({ error: "internal server error" });
    }

});


require('../config/err404')(router);

module.exports = (app) => {
    app.use("/", router);
}