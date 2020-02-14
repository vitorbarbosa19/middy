const middy = require('@middy/core')

const payment = async event => {
	console.log('HERE')
	try {
		// const { creditCardNumber, expiryMonth, expiryYear, cvc, nameOnCard, amount } = event.body
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

module.exports = { handler }