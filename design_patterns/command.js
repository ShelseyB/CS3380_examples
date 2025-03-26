// Command Interface
class Command {
    execute() {
        throw new Error("Must be implementedby concrete command");
    }
}

// Concrete Command
class LightOnCommand extends Command {
    constructor(light) {
        super();
        this.light = light;
    }

    execute() {
        this.light.turnOn();
    }
}

class FanOnCommand extends Command {
    constructor(fan) {
        super();
        this.fan = fan;
    }

    execute() {
        this.fan.turnOn();
    }
}
class LightOffCommand extends Command {
    constructor(light) {
        super();
        this.light = light;
    }

    execute() {
        this.light.turnOff();
    }
}
class FanOffCommand extends Command {
    constructor(fan) {
        super();
        this.fan = fan;
    }

    execute() {
        this.fan.turnOff();
    }
}

// Receiver
class Light {
    turnOn() {
        console.log("Light was turned on");
    }
    turnOff() {
        console.log("Light was turned off");
    }
}

class Fan {
    turnOn() {
        console.log("Fan was turned on");
    }
    turnOff() {
        console.log("Fan was turned off");
    }
}

// Invoker
class RemoteControl {
    constructor() {
        this.command = null;
    }

    setCommand(command) {
        this.command = command;
    }

    pressButton() {
        this.command.execute();
    }
}

// Client Code
const light = new Light();
const fan = new Fan();

// Create commands
const lightOn = new LightOnCommand(light);
const lightOff = new LightOffCommand(light);
const fanOn = new FanOnCommand(fan);
const fanOff = new FanOffCommand(fan);

// Create invoker
const remoteControl = new RemoteControl();

// Turn on light
remoteControl.setCommand(lightOn);
remoteControl.pressButton();

// Turn off light
remoteControl.setCommand(lightOff);
remoteControl.pressButton();


// Turn on fan
remoteControl.setCommand(fanOn);
remoteControl.pressButton();

// Turn off fan
remoteControl.setCommand(fanOff);
remoteControl.pressButton();
