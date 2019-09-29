const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
    const getHash = (password, callback) => {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, null, (err, hash) => {
                callback(hash)
            })
        })
    }

    const save = (request, response) => {
        const formData = request.body
        getHash(formData.password, hash => {
            formData.password = hash
            app.db('users').insert(formData)
                .then(id => response.status(201).json({ id: id[0] }))
                .catch(err => response.status(400).json(err))
        })
    }

    return { save }

}
