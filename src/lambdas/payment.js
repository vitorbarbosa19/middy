const middy = require('@middy/core')
const httpJsonBodyParser = require('@middy/http-json-body-parser')
const httpUrlencodeBodyParser = require('@middy/http-urlencode-body-parser')

const payment = async event => {
	try {
		console.log(event)
		const { number, expiry, cvc, name, amount } = event.body
		console.log(number)
		console.log(expiry)
		return {
			statusCode: 200,
			body: 'Ok'
		}
	} catch (error) {
		return {
			statusCode: 500,
			body: 'error'
		}
	}
}

const handler = middy(payment)
	.use(httpJsonBodyParser())
	.use(httpUrlencodeBodyParser())

module.exports = { handler }