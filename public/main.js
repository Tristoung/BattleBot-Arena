import Game from "./assets/scripts/Game.js";

function main() {
    let game;
    innitPage();
    
    function innitPage() {
        let btnConnect = document.getElementById('connexion');
        
        btnConnect.addEventListener("click", () => { const socket = createSocket(); });
    }


    function createSocket() {
        console.log("Tentative de connexion ...");
        const newSocket = new WebSocket('ws://localhost:8081');

        newSocket.addEventListener('open', () => {
            console.log('Connexion établie avec succès');
            initializeGame(newSocket);
        });

        newSocket.addEventListener('close', (event) => {
            console.log(`Connexion impossible (${event.code}): ${event.reason}`);
        });

        return newSocket;
    }

    function initializeGame(socket) {
        game = new Game(socket);
    }
}

main();
