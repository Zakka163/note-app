const { compareToken } = require('../helper/jwtToken.js')

const auth = async (req, res, next) => {
    try {
        if (!req.headers.authorization) return res.status(401).json({ "message": "no token" })
        let match = compareToken(req.headers.authorization)
        // console.log(match);
        if (!match) return res.status(401).json({ "message": "auth failed" })
        req.params.id=match.id
        next()
    } catch (err) {
        res.status(500)
        res.json({ "error": err.toString() })
    }
}

module.exports = auth