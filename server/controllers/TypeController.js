const { Type } = require("../models/models")

class TypeController{
    async addType(req, res){
        try{
        let {type} = req.body
        await Type.create({name: type})
        return res.json(type)
        }
        catch(e){console.log(e)}
    }

    async getType(req, res){
        const types = await Type.findAll()
        return res.json(types)
    }
}

module.exports = new TypeController()