import Router from 'koa-router'

import { Orders } from '../controllers/index.js'

const router = new Router({ prefix: '/orders' })
  .post('/new', (ctx, next) => Orders.createOrder(ctx, next))

export default () => router.routes()
