class ExpressError extends Error {  // ✅ Use PascalCase (best practice)
    constructor(statusCode, message) {  
        super(message); 
        this.statusCode = statusCode;
    }
}

module.exports = ExpressError;
