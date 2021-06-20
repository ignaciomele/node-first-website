let isAuth = false

const auth = (req, res, next) => {
    if (isAuth) return next()
    return res.status(403).redirect('/signin')
}

const changeAuth = newValue => isAuth = newValue

exports.auth = auth
exports.changeAuth = changeAuth
