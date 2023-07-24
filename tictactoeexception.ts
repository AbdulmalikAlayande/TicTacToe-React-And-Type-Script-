class TicTacToeException extends Error{
    private _message: String;
    private _cause: String;
    private _errorIdentifier: {
        functionName: String,
        lineRange: String
    }
    constructor(message) {
        super(message);
    }

    setCause(cause: String){
        this._cause = cause;
    }

    getMessage(): String{
        return this._message
    }

    getCause(){
        return this._cause
    }

    setMessage(message){
        this._message = message
    }

    setErrorIdentifier(functionName: String, lineRange: String){
        this._errorIdentifier.functionName = functionName;
        this._errorIdentifier.lineRange = lineRange;
    }

    getErrorIdentifier(){
        return this._errorIdentifier
    }
}

export default TicTacToeException;