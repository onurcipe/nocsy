import NocsyError from "./NocsyError.js";

class FrameworkError extends NocsyError
{
    public constructor (code?: string, message?: string)
    {
        super(
            code ?? "FRAMEWORK",
            message ?? "It's not a bug, it's a feature.",
        );
    }
}

export default FrameworkError;
