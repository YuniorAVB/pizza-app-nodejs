const { server, app } = require('./app')

server.listen(app.get('port'), app.get('host'), () => 
console.log(`${app.get('host')}:${app.get('port')}`))
