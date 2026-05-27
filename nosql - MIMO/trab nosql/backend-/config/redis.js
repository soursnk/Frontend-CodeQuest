import { createClient } from 'redis'

const redisClient = createClient({
  url: 'redis://127.0.0.1:6379'
})

redisClient.on('error', (err) => {
  console.log('Erro Redis:', err)
})

await redisClient.connect()

console.log('Redis conectado')

export default redisClient