class AccountResponse{
    constructor(token, message, status){
        this.token = token;
        this.message = message;
        this.status = status;
    }
}

module.exports = AccountResponse;