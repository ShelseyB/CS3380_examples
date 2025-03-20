class TV {
    turnOn() {
        console.log("Turning on the TV");
    }

    turnOff() {
        console.log("Turning off the TV");
    }
}

class DVDPlayer {
    insertDisc() {
        console.log("Inserting a disc");
    }

    play() {
        console.log("Playing a movie on the DVD player");
    }

    stop() {
        console.log("Stopping the movie");
    }
}

class Lights {
    dim() {
        console.log("Dimming the lights");
    }
    brighten() {
        console.log("Brightening the lights");
    }
}

// Without facade
const tv = new TV();
const dvdPlayer = new DVDPlayer();
const lights = new Lights();

// Facade
class HomeTheaterFacade {
    constructor(tv, dvdPlayer, lights) {
        this.tv = tv;
        this.dvdPlayer = dvdPlayer;
        this.lights = lights;
    }

    watchMovie() {
        console.log("Preparing to watch a movie");
        this.lights.dim();
        this.tv.turnOn();
        this.dvdPlayer.insertDisc();
        this.dvdPlayer.play();
    }

    endMovie() {
        console.log("Shutting down the movie...");
        this.dvdPlayer.stop();
        this.tv.turnOff();
        this.lights.brighten();
    }
}

const homeTheater = new HomeTheaterFacade(tv, dvdPlayer, lights);
homeTheater.watchMovie();
homeTheater.endMovie();
