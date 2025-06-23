class CustomError extends Error {
  constructor(message, statusCode = 500, type = "GENERAL") {
    super(message);
    this.statusCode = statusCode;
    this.type = type;
  }
}

module.exports = CustomError;
