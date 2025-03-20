// Target interface: expected interface
class Logger {
    log(message) {
        throw new Error("This method should be implemented by the concrete class");
    }
}

// Adaptee: new logging system with different interface
class NewLogger {
    writeLog(message) {
        console.log("New Logger: ", message);
    }
}

// Adapter: this class adapts NewLogger to the Logger interface
class LoggerAdapter extends Logger {
    constructor(newLogger) {
        super();
        this.newLogger = newLogger;
    }

    log(message) {
        this.newLogger.writeLog(message);
    }
}

// Client code
const newLogger = new NewLogger();
const logger = new LoggerAdapter(newLogger);

logger.log("This is just to log something");