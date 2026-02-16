import NocsyError from "./NocsyError.js";

class UserError extends NocsyError
{
    public constructor (code?: string, message?: string)
    {
        super(
            code ?? "USER",
            message ?? "PEBKAC detected.",
        );
    }
}

export default UserError;
