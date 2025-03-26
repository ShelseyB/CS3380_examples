// Subject
class WeatherStation {
    constructor() {
        this.temperature = null;
        this.observers = [];
    }

    // Add observer
    addObserver(observer) {
        this.observers.push(observer);
    }

    // Remove an observer
    removeObserver(observer) {
        this.observers = this.observers.filter(o => o !== observer);
    }

    // Notify all observers
    notifyObservers() {
        for (const obs of this.observers) {
            obs.update(this.temperature);
        }
    }

    setTemperature(temperature) {
        this.temperature = temperature;
        this.notifyObservers();
    }
}

// Observers
class PhoneDisplay {
    update(temperature) {
        console.log(`Phone display: the current temperature is ${temperature}`);
    }
}
class DesktopDisplay {
    update(temperature) {
        console.log(`Desktop display: the current temperature is ${temperature}`);
    }
}

// Usage
const weatherStation = new WeatherStation();

// Create observers
const phoneDisplay = new PhoneDisplay();
const desktopDisplay = new DesktopDisplay();

// Subscribe the observers
weatherStation.addObserver(phoneDisplay);
weatherStation.addObserver(desktopDisplay);

weatherStation.setTemperature(70);

weatherStation.setTemperature(71);

weatherStation.removeObserver(phoneDisplay);

weatherStation.setTemperature(72);