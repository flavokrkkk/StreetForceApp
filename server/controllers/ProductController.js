const {Product} = require('../models/models')
const uuid = require('uuid')
const path = require('path')

class ProductController{
    async getAll(req,res){
        try{
            let {offset, typeId, brandId, gender} = req.query
            const newQuery = {}
            for (let i in Object.keys(req.query)){
                if (i != 0){
                    if (Object.values(req.query)[i]){
                        newQuery[Object.keys(req.query)[i]] = Object.values(req.query)[i] 
                    }  
                }
            }
            console.log(newQuery)
                const products = await Product.findAndCountAll({where: newQuery,offset: offset, limit: 8})
                return res.json(products)
        }
        catch(e){
            console.log(e)
        }

    }

    async getCurrentProduct(req ,res){
        try{
            let {id} = req.query
            const product = await Product.findByPk(id)
            return res.json(product)
        }
        catch(e){
            console.log(e)
        }
    }

    async createProduct(req, res){
        try{
            let {name, price, sizes, gender, typeId, brandId, description, features, compositions} = req.body
            let files = req.files.files
            let images = []
            for (let i = 0; i < 4; i++){
                let fileName = uuid.v4() + ".jpg"
                files[i].mv(path.resolve(__dirname, '..', 'static', fileName))
                images.push(fileName)
            }
        

            const product = await Product.create({name, price, sizes, gender, typeId, brandId, description, features: [features], compositions: [compositions], img: images})

            return res.json(product)
        }
        catch(e){
            console.log(e)
        }
    }

    async deleteProduct(req, res){
        try{
            let {id} = req.query

            const product = await Product.findByPk(id)
            await product.destroy()

            return res.json(product)
        }
        catch(e){console.log(e)}
    }
}




module.exports = new ProductController()