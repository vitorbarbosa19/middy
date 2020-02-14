const middy = require('@middy/core')
const httpJsonBodyParser = require('@middy/http-json-body-parser')
const httpUrlencodeBodyParser = require('@middy/http-urlencode-body-parser')
const httpErrorHandler = require('@middy/http-error-handler')
const createError = require('http-errors')

const payment = async event => {
	try {
		console.log(event)
		const { number, expiry, cvc, name, amount } = event.body
		console.log(number)
		console.log(expiry)
		throw new createError(401, 'Unauthenticated')
		return {
			statusCode: 200,
			body: 'Ok'
		}
	} catch (error) { throw error }
}

const handler = middy(payment)
	.use(httpJsonBodyParser())
	.use(httpUrlencodeBodyParser())
	.use(httpErrorHandler())

module.exports = { handler }