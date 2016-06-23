'use strict'

const subscribers = require('./subscribers')

module.exports = function handleSubscribe (query, req, res) {
  subscribers.add(query)
  res.writeHead(200)
  res.write('subscribed with ' + JSON.stringify(query))
  res.end()
}
