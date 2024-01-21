export default class Game {
    constructor(socket) {

        this.btnTest = document.getElementById('test');
        this.clickHandler = () => this.test();
        this.btnTest.addEventListener("click", this.clickHandler);

        this.socket = socket;
        this.initSocket();

    }

    initSocket() {
        this.btnTest.style.display = "block";
        this.socket.addEventListener("message", (event) => {
            this.handleSocketMessage(event);
        });
        
        this.socket.addEventListener('close', () => {
            this.nettoyage();
        });
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
        this.btnTest.removeEventListener("click", this.clickHandler);
        this.btnTest.style.display = "none";
    }
}