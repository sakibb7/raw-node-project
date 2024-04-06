//dependecies
const crypto = require('crypto')
const environment = require('./environments')


//module scaffholdings
const utilities = {}

utilities.parseJSON = (jsonString) => {
    let output

    try {
        output = JSON.parse(jsonString)
    } catch {
        output = {}
    }

    return output
}

//hash string
utilities.hash = (str) => {
    if(typeof(str) === 'string' && str.length > 0) {
        let hash = crypto.createHmac('sha256', environment.secretKey).update(str).digest('hex')

        return hash
    }else {
        return false
    }
}


//export module
module.exports = utilities