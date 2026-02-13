class apiError extends error {
    constructor(
        statusCode,
        message = "something went wrong",
        error = []
    ) {
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false;
        this.errors = errors


        if (stack) {
            this.stack = stack
        } else {
            error.CaptureStackTrace(this, this.constructor)
        }
    }
}

export { apiError }