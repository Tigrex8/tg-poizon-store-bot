import axios from "axios";

export async function createOrder(ctx, next) {
  const text = ctx?.request?.body?.text
  
  if (!text) {
    ctx.body = 'body is empty'
    ctx.status = 500
    return next()
  }
  
  const response = await axios.post(`https://api.telegram.org/bot${process.env.TOKEN}/sendMessage`, {
    chat_id: process.env.CHAT_ID,
    parse_mode: 'html',
    text,
  }).catch(err => {
    console.log(err)
  })
  
  if(response?.data?.ok !== true){
    ctx.body = 'bad msg'
    ctx.status = 400
    return next()
  }
  
  ctx.status = 200
  ctx.body = 'ok'
  
  return next()
}
