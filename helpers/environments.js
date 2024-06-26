

//module scaffholdings
const environment = {}

environment.staging = {
    port:3000,
    envName: 'staging',
    secretKey: 'thiskey'
}

environment.production = {
    port:4000,
    envName: 'production',
    secretKey:"anotherKey"
}

//determine which environment was passed
const currentEnvironment = typeof(process.env.NODE_ENV) === 'string' ? process.env.NODE_ENV : "staging"

//export corresponding environment object
const environmentToExport = typeof environment[currentEnvironment] === 'object' ? environment[currentEnvironment] : environment.staging

//export module
module.exports = environmentToExport