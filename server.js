const express = require('express')
const socket = require('socket.io')
const http = require('http')

const app = express()
const server = http.createServer(app)
const PORT = process.env.PORT || 8000
const io = new socket.Server(server)

app.use(express.static('public'))

// Socket Connection
io.on('connection', (socket) => {
    // When any user connected
    console.log(`User connected: ${socket.id}`)
    
    socket.on('chat', (data) => {
        socket.emit('chat', data)
        socket.broadcast.emit('chat', data)
    })
})

server.listen(8000, () => console.log(`SERVER ONLINE : http://localhost:${PORT}`))