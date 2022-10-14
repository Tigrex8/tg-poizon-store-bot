import * as opts from '../config/options.js'
import logger from 'koa-logger'
import helmet from 'koa-helmet'
import bodyParser from 'koa-bodyparser'
import pkg from 'koa-convert'

const { compose } = pkg

const middlewares = [bodyParser(opts.bodyparser), logger(), helmet(opts.helmet)]
export default () => compose(middlewares)
