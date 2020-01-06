let got = require('got')

module.exports = (key) => {
  let root = 'https://jsonbin.org/me/'
  let module = {}
  module.get = async (path, callback) => {
    let url = root + path
    let opts = {
      headers: {
        Authorization: key
      },
      method: 'GET',
      json: true
    }
    try {
      let body = (await got(url, opts)).body
      if (!callback) return body
      callback(null, body)
    } catch (e) {
      if (!callback) return e.response ? e.response.body : { error: e }
      callback(e.response ? e.response.body : { error: e }, null)
    }
  }
  module.post = async (path, data, callback) => {
    let url = root + path
    let opts = {
      headers: {
        Authorization: key
      },
      method: 'POST',
      body: data,
      json: true
    }
    try {
      let body = (await got(url, opts)).body
      if (!callback) return body
      callback(null, body)
    } catch (e) {
      if (!callback) return e.response ? e.response.body : { error: e }
      callback(e.response ? e.response.body : { error: e }, null)
    }
  }
  module.patch = async (path, data, callback) => {
    let url = root + path
    let opts = {
      headers: {
        Authorization: key
      },
      method: 'PATCH',
      body: data,
      json: true
    }
    try {
      let body = (await got(url, opts)).body
      if (!callback) return body
      callback(null, body)
    } catch (e) {
      if (!callback) return e.response ? e.response.body : { error: e }
      callback(e.response ? e.response.body : { error: e }, null)
    }
  }
  module.delete = async (path, callback) => {
    let url = root + path
    let opts = {
      headers: {
        Authorization: key
      },
      method: 'DELETE',
      json: true
    }
    try {
      let body = (await got(url, opts)).body
      if (!callback) return body
      callback(null, body)
    } catch (e) {
      if (!callback) return e.response ? e.response.body : { error: e }
      callback(e.response ? e.response.body : { error: e }, null)
    }
  }
  return module
}
