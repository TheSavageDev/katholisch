const httpStatus = require('http-status')
const tokenService = require('./token.service')
const userService = require('./user.service')
const ApiError = require('../utils/ApiError')
const { tokenTypes } = require('../config/tokens')

/**
 * Refresh auth tokens
 * @param {string} refreshToken
 * @returns {Promise<Object>}
 */
const refreshAuth = async refreshToken => {
  try {
    const refreshTokenDoc = await tokenService.verifyToken(refreshToken, tokenTypes.REFRESH)
    const user = await userService.getUserById(refreshTokenDoc.user)
    if (!user) {
      throw new Error()
    }
    await refreshTokenDoc.remove()
    return tokenService.generateAuthTokens(user)
  } catch (error) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Please authenticate')
  }
}

module.exports = {
  refreshAuth,
}
