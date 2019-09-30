module.exports = app => {
    app.post('/singnup', app.api.user.save)
    app.post('/singin', app.api.auth.singin)
}