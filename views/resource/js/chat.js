// Make connection
var socket = io.connect();

var message = document.getElementById('message'),
    handle = document.getElementById('handle'),
    send = document.getElementById('send'),
    output = document.getElementById('output'),
    feedback = document.getElementById('feedback');


send.addEventListener('click', function () {
    socket.emit('chat', {
        message: message.value,
        handle: handle.value
    });
});

message.addEventListener('textInput', function () {
    socket.emit('typing', handle.value);
});

socket.on('chat', function (data) {
    message.value = "";
    feedback.innerHTML = "";
    output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>';
});

socket.on('typing', function (data) {
    feedback.innerHTML = '<p class="mb-0"><em>' + data + ' is typing a message......</em></p>';
});

socket.on('online', function (data) {
    onlineusers.innerHTML += '<p><span><i class="fas fa-user-circle"></i> </span><strong>' + data + '</strong></p>';
});
