module.exports = app => {
    app.post('/singnup', app.api.user.save)
}