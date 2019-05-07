import low from 'lowdb'
import LocalStorage from 'lowdb/adapters/LocalStorage'

const adapter = new LocalStorage(`d2admin-${process.env.VUE_APP_VERSION}`)
export const db = low(adapter)
db
  .defaults({
    sys: {},
    database: {}
  })
  .write()