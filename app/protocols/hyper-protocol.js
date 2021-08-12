const fetchToHandler = require('./fetch-to-handler')

module.exports = async function createHandler (options, session) {
  return fetchToHandler(async () => {
    const hyperFetch = require('hypercore-fetch')
    const SDK = require('hyper-sdk')

    const sdk = await SDK(options)
    const { Hyperdrive, resolveName } = sdk
    const fetch = hyperFetch({ Hyperdrive, resolveName, writable: true })

    return fetch
  }, session)
}
