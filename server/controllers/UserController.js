const ApiError = require('../error/ApiError')

class UserController{
    async helloWorld(req, res, next){
        try{
            const {id} = req.query
            if(!id){
                return next(ApiError.badRequest('Не задан ID'))
            }
            return res.json(id)
        }
        catch(e){
            console.log(e)
        }
    }
}

module.exports = new UserController()