const { authSecret } = require('../.env')
const jwt = require('jwt-simple')
const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
    const singin = async (request, response) => {
        const formData = request.body
        if (!formData.email || !formData.password) {
            return response.status(422).send('Dados incompletos')
        }

        const user = await app.db('users').where('email', formData.email).first()
        if (user) {
            bcrypt.compare(formData.password, user.password, (err, isMatch) => {
                if (err || !isMatch) {
                    return response.status(401).send('Usuário ou senha inválidos')
                }

                const payload = { id: user.id }
                return response.json({
                    name: user.name,
                    email: user.email,
                    token: jwt.encode(payload, authSecret)
                })
            })
        } else {
            return response.status(401).send('Usuário ou senha inválidos')
        }

    }

    return { singin }
}