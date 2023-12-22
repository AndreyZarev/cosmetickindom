import * as authServices from '../services/auth.js'

export function authMidleware(ctx, next) {
ctx.authData = authServices.getAuthData()
    next()

}