const socket = io('http://localhost:8000') // Connect Server

const msgInput = document.getElementById('msgInput')
const btn = document.getElementById('submitBtn')
const msgContainer = document.querySelector('.main')
const consoleForm = document.querySelector('#consoleForm')
let username = prompt('What\' your nick?')

// Form Event Handler
consoleForm.addEventListener('submit', (e) => e.preventDefault())

// Submit Button
btn.addEventListener('click', () => {
    if (msgInput.value === '') return alert('Please type something!')

    let msgData = {
        username: username,
        msg: msgInput.value
    }
    socket.emit('chat', msgData)
    msgInput.value = ''
})

// Listen server
socket.on('chat', (data) => {
    const p = document.createElement('p')
    p.innerHTML = `<span style="font-weight: bold;">${data.username}</span>: ${data.msg}`

    msgContainer.appendChild(p)
})
