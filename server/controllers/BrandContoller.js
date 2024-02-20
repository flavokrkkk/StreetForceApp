const {Brand} = require('../models/models.js')
const ApiError = require('../error/ApiError.js')

class BrandController {
    async addBrand(req, res) {
        try{
            let {brand} = req.body
            await Brand.create({name: brand})
            return res.json(brand)

        } catch(e){
            console.log(e)
        }
    }
    
    async getAll(req, res) {
        try{
        const brands = await Brand.findAll()
        return res.json(brands)
        } catch(e){
            console.log(e)
        }

    }

}

module.exports = new BrandController()