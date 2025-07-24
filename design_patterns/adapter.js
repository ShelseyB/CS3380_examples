// Target interface: expected interface
class Logger {
    log(message) {
        console.log(message);
    }
}

// Adaptee: new logging system with different interface
class NewLogger {
    writeLog(message) {
        console.log("New Logger: ", message);
    }
}

// Adapter: this class adapts NewLogger to the Logger interface
class LoggerAdapter {
    constructor(newLogger) {
        this.newLogger = newLogger;
    }

    log(message) {
        this.newLogger.writeLog(message);
    }
}

// Client code

// const logger  = new Logger();

const newLogger = new NewLogger();
const logger = new LoggerAdapter(newLogger);

logger.log("This is just to log something");