import Koa from "koa";
import * as dotenv from 'dotenv'

import routes from "./routes/index.js";
import middlewares from "./middlewares/index.js";
import serve from "koa-static";

dotenv.config()

const PORT = 80

const app = new Koa();

app.use(middlewares())
app.use(serve('public'));
app.use(routes())

app.listen(PORT);

