import Router from 'koa-router'
import pkg from 'koa-convert'

import orders from './orders.js'

const { compose } = pkg

const router = new Router({
  prefix: '/api',
})

router.use(orders())

export default () => compose([router.allowedMethods(), router.routes()])
