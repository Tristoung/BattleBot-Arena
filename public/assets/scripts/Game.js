export default class Game {
    constructor(socket) {

        this.innitGame();

        this.socket = socket;
        this.innitSocket();

    }
    innitGame() {
        this.btnTest = document.getElementById('test');
        this.testClickHandler = () => this.test();
        this.btnTest.addEventListener("click", this.testClickHandler);

        this.btnDeconexion = document.getElementById('deconnexion');
        this.decoClickHandler = () => this.disconnectSocket();
        this.btnDeconexion.addEventListener("click", this.decoClickHandler);

        this.btnTest.style.display = "block";
        this.btnDeconexion.style.display = "block";

    }

    innitSocket() {
        this.socket.addEventListener("message", (event) => {
            this.handleSocketMessage(event);
        });
        
        this.socket.addEventListener('close', () => {
            this.nettoyage();
        });
    }
    disconnectSocket() {
        if (this.socket && this.socket.readyState === WebSocket.OPEN) {
            console.log('Déconnexion du socket');
            this.socket.close();
        }
    }

    handleSocketMessage(event) {
        const serverMessage = JSON.parse(event.data);
        switch (serverMessage.name) {
            case "test": {
                console.log("Reçu un message du serveur");
                break;
            }
        }
    }



    test() {
        this.socket.send(JSON.stringify({ action: 'test' }));
    }

    nettoyage() {
        this.btnTest.removeEventListener("click", this.testClickHandler);
        this.btnTest.style.display = "none";
        this.btnDeconexion.removeEventListener("click", this.decoClickHandler);
        this.btnDeconexion.style.display = "none";
    }
}