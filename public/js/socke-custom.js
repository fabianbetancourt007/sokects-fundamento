var socket = io();

socket.on('connect', function() {

    console.log('conectado al servidor');
});


socket.on('disconnect', function() {

    console.log('perdimos la coneccion con el servidor');

});

//enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'fabian',
    mensaje: 'hola mundo'

}, function(resp) {
    console.log(resp);
});

//escuchar info

socket.on('enviarMensaje', function(mensaje) {

    console.log('servidor:', mensaje);
});