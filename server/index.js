const WebSocket = require('ws');

const PORT = 8081;

const server = new WebSocket.Server({ port: PORT });

server.on('connection', (socket) => {
    console.log('Nouvelle connexion');

    socket.on('message', (message) => {
        const parsedMessage = JSON.parse(message);

        switch (parsedMessage.action) {
            case 'test':
                console.log("Reçu un message du client");
                socket.send(JSON.stringify({ 'name': "test" }));
                break;

            default:
                console.log('Action inconnue');
        }
    });

    socket.on('close', () => {
        console.log('Nouvelle déconnexion');
    });
});

console.log(`Serveur WebSocket écoute le port ${PORT}`);
