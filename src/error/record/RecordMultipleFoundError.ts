import NocsyError from "../NocsyError.js";

class RecordMultipleFoundError extends NocsyError
{
    public constructor (code?: string, message?: string)
    {
        super(
            code ?? "RECORD-MULTIPLE_FOUND",
            message ?? "Multiple records were found when only one was expected.",
        );
    }
}

export default RecordMultipleFoundError;
