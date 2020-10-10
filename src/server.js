import Fastify from 'fastify'

const app = Fastify({
    logger: true
})

app.get('/', async (request, reply) => {
    reply.type('application/json').code(200)
    return { hello: 'world' }
})

app.listen(3000, (err, address) => {
    if (err) throw err
    app.log.info(`server listening on ${address}`)
})