const bcrypt = require('bcrypt')
const { generateToken } = require('../helper/jwtToken.js')
const modelUser = require('../model/modelUser.js')
const { v4 } = require('uuid')
const { Op } = require('sequelize')





const login = async (req, res) => {
    try {
        let { email, password, user_name } = req.body
        const result = await modelUser.findAll({
            where: {
                [Op.or]: [
                    { email: email },
                    { user_name: user_name }
                ]
            }
        });
        // console.log(result[0]);
        if (!result[0]) return res.status(401).json({ "error": "username or email not found" })
        const match = await bcrypt.compare(password, result[0].password);
        if (!match) return res.status(401).json({ "error": "password wrong" })

        const token = generateToken(result[0].toJSON())
        res.json({"message":"succes","data":result[0],"token":token})

    } catch (err) {
        res.status(500)
        res.json({ "error": err.toString() })
    }

}

const register = async (req, res) => {
    try {
        let { user_name, email, password } = req.body
        const check_email = await modelUser.findAll({
            where: {
                email: email
            }
        });
        if(check_email[0]) return res.status(400).json({ "error": "username or email already exist" })
        console.log(check_email);
        // const chechk_user_name = await modelUser.findAll({
        //     where: {
        //         user_name: user_name
        //     }
        // });
        // console.log(chechk_user_name);
        const hash = await bcrypt.hashSync(password, 10);
        const id = v4()
        const hs = modelUser.create({ id, email, user_name, password: hash })
        res.status(200).json({ "message": "succes" })
        

    } catch (err) {
        res.status(500)
        res.json({ "error": err.toString() })
    }
}

const logout = async (req, res) => {

}
module.exports = { login, register, logout }