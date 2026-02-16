import NocsyError from "./NocsyError.js";

class AbortError extends NocsyError
{
    public constructor (code?: string, message?: string)
    {
        super(
            code ?? "ABORT",
            message ?? "Mission aborted.",
        );
    }
}

export default AbortError;
