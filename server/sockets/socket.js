const { io } = require('../server');


io.on('connection', (client) => {
    console.log('usuario conectado');

    client.emit('enviarMensaje', {

        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicacion'
    });



    client.on('disconnect', () => {

        console.log('usuario desconectado');
    });

    //escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {

        console.log(data);

        client.broadcast.emit('enviarMensaje', data);
        /*  if (mensaje.usuario) {

             callbck({
                 resp: 'todo salio bien'
             });
         } else {
             callbck({
                 resp: 'todo salio fatal!!!!!!!!'
             });
         } */

    })


});